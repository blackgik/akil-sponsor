import jwt from "jsonwebtoken";
import * as argon from 'argon2';
import { Account } from '../schemas/account.schema';
import { JwtPayload, Tokens } from '../types';
import { ForbiddenError, InternalServerError, NotFoundError, InvalidError, BadRequestError } from '../utils/app.errors';
import { IAuthDto } from '../dto/IAuthDto';
import {
    buildOtpHash,
    codeGenerator,
    verifyOTP
} from "../utils/code.generator";
import { messageBird } from "../utils/mail.sender";
import { onboardinMail, verifyOnbordingMail } from "../utils/mail.data";
import customConfig from "../config/default";
import { formattMailInfo } from "../utils/mail.formatter";
import { IAccountDocument } from "models/account.model";
import { Sponsor } from "../schemas/sponsor.schema";
import { ISponsor, ISponsorDocument } from "../models/sponsor.model";
import { Role } from "../schemas/role.schema";

class AuthService {

    hashData(data: string) {
        return argon.hash(data);
    }

    async signJwt(userId: string, username: string): Promise<Tokens> {
        const jwtPayload: JwtPayload = {
            sub: userId,
            username: username,
        };

        const [at, rt] = await Promise.all([
            await jwt.sign(jwtPayload, 'at-secret', { expiresIn: '15m' }),
            await jwt.sign(jwtPayload, 'rt-secret', { expiresIn: '7d' })
        ]);
        return {
            access_token: at,
            refresh_token: rt,
        };
    }

    async updateRtHash(userId: string, rt: string) {
        const hash = await argon.hash(rt);
        await Account.updateOne({
            where: {
                _id: userId,
            },
            data: {
                hashedRt: hash,
            }
        });
    }

    async signupLocal(dto: ISponsor): Promise<IAccountDocument|BadRequestError> {
        try {
            console.log('====================================');
        console.log(dto);
        console.log('====================================');
        const hash = await argon.hash(dto.password);       

        const newSponsor: ISponsorDocument = await Sponsor.create(dto);
        const userRole = await Role.getRoleByCode('SPONSOR');
        const newAccount =  await Account.create({
            firstname: newSponsor.firstname,
            lastname: newSponsor.lastname,
            avatar: newSponsor.avatar,
            email: newSponsor.email,
            phone: newSponsor.phone,
            gender: newSponsor.gender,
            state: newSponsor.state,
            country: newSponsor.country,
            city: newSponsor.city,
            address: newSponsor.address,
            dob: new Date(),
            email_verified: false,
            acctstatus: 'pending',
            hash: hash,
            hashedRt: '',
            ownerId: newSponsor._id,
            otpHash: '',
            roleId: userRole?._id
        })
        const tokens = await this.signJwt(newAccount._id, newAccount.email);
        await this.updateRtHash(newAccount._id, tokens.refresh_token);

        const otp = await codeGenerator(6, '1234567890');

        const otpHash = buildOtpHash(newAccount.email, otp, customConfig.otpKey, 15);

        newAccount.otpHash = otpHash;
        newAccount.otp = otp;
        newSponsor.otpHash = otpHash;
        await Sponsor.updateSponsor(newSponsor._id, newSponsor);
        await Account.updateAccount(newAccount._id, newAccount);
        //create email profile here
        const onboardingData = {
            name: newAccount.firstname + ' ' + newAccount.lastname,
            code: otp
        };
        const mailData = {
            email: newAccount.email,
            subject: 'MAJFINTECH ONBOARDING',
            type: 'html',
            html: verifyOnbordingMail(onboardingData).html,
            text: verifyOnbordingMail(onboardingData).text
        };
        const msg = await formattMailInfo(mailData, customConfig);

        const msgDelivered = await messageBird(msg);
        if (!msgDelivered)
            throw new InternalServerError(
                'server slip. Organization was created without mail being sent'
            );
        return newAccount;
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            throw new BadRequestError('Please review your data');
        }
    }
    async signinLocal(dto: IAuthDto): Promise<Tokens> {
        console.log(dto);
        const user = await Account.findOne({
                email: dto.email,
                email_verified: true
            });
        if (!user) {
            throw new ForbiddenError('Acces non authorisé!');
        }

        const passwordMatches = await argon.verify(user.hash, dto.password);
        if (!passwordMatches) throw new ForbiddenError('Acces non autorisé!');

        const tokens = await this.signJwt(user._id, user.email);
        await this.updateRtHash(user._id, tokens.refresh_token);

        return tokens;
    }
    async logout(userId: string) {
        await Account.updateMany({
            where: {
                _id: userId,
                hashedRt: {
                    not: null,
                },
            },
            data: {
                hashedRt: null,
            },
        });
        return true;
    }
    async refreshTokens(userId: string, rt: string) {
        const user = await Account.findOne({_id: userId});
        if (!user || !user.hashedRt) throw new ForbiddenError('Access Denied');
        console.log(user.hashedRt);

        const rtMatches = await argon.verify(user.hashedRt, rt);
        if (!rtMatches) throw new ForbiddenError('Acces non autorisé!');

        const tokens = await this.signJwt(user._id, user.email);
        await this.updateRtHash(user._id, tokens.refresh_token);

        return tokens;
    }

    verifyOtp = async (body: any): Promise<Tokens> => {
        const { code, hash } = body;
        
        const checkAcct = await Account.findOne({otp: code});

        if (!checkAcct) throw new NotFoundError('Account not found');

        const verifyOtp = verifyOTP(checkAcct.email, code, hash, customConfig.otpKey);
        if (!verifyOtp) throw new InvalidError('Wrong otp code');

        const generatePassword = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');

        const hashedPwd = await argon.hash(generatePassword);
        checkAcct.email_verified = true;
        checkAcct.otpHash = '';
        checkAcct.acctstatus = 'active';
        
        let toVerifySponsor = await Sponsor.findById(checkAcct.ownerId);
        if (toVerifySponsor) {
            toVerifySponsor.email_verified = true;
            toVerifySponsor.otpHash = '';
            toVerifySponsor.acctstatus = 'active';
            checkAcct.ownerId = toVerifySponsor._id;
            await Sponsor.updateSponsor(toVerifySponsor._id, toVerifySponsor);
        }
        await Account.updateAccount(checkAcct._id, checkAcct);
        //create email profile here
        const onboardingData = {
            email: checkAcct.email,
            password: checkAcct.hash
        };
        const mailData = {
            email: checkAcct.email,
            subject: 'MAJFINTECH ONBOARDING',
            type: 'html',
            html: onboardinMail(onboardingData).html,
            text: onboardinMail(onboardingData).text
        };
        const msg = await formattMailInfo(mailData, customConfig);

        const msgDelivered = await messageBird(msg);
        if (!msgDelivered)
            throw new InternalServerError(
                'server slip. Organization was created without mail being sent'
            );
            const tokens = await this.signJwt(checkAcct._id, checkAcct.email);
        return tokens;
    };

}

export default AuthService

