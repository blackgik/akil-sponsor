import jwt from "jsonwebtoken";
import * as argon from 'argon2';
import { Account } from '../schemas/account.schema';
import { JwtPayload, Tokens } from '../types';
import { UnAuthorizedError, ForbiddenError, InternalServerError, DuplicateError } from '../utils/app.errors';
import { IAccountCreateDto } from '../dto/IAccountCreateDto';
import { IAuthDto } from '../dto/IAuthDto';
import { Types } from 'mongoose'
import {
    buildOtpHash,
    codeGenerator,
    generateEnterpriseCredentials,
    verifyOTP
} from "../utils/code.generator";
import { messageBird } from "../utils/mail.sender";
import { onboardinMail, verifyOnbordingMail } from "../utils/mail.data";
import customConfig from "../config/default";
import { formattMailInfo } from "../utils/mail.formatter";
import { IAccount, IAccountDocument } from "../models/account.model";

class AccountService {

    hashData(data: string) {
        return argon.hash(data);
    }

    async signJwt(accountId: string, username: string): Promise<Tokens> {
        const jwtPayload: JwtPayload = {
            sub: accountId,
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

    async updateRtHash(accountId: string, rt: string) {
        const hash = await argon.hash(rt);
        await Account.updateOne({
            where: {
                _id: accountId,
            },
            data: {
                hashedRt: hash,
            }
        });
    }

    async signupLocal(dto: IAccountCreateDto): Promise<IAccountDocument> {
        const checkIfExist = await Account.findOne({ email: dto.email });
            if (checkIfExist) throw new DuplicateError('Account already exists', 406);
        const generatePassword = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');
        
        const hash = await argon.hash(dto.password);
        const newAccount = await Account.buildAccount({
            firstname: dto.firstname,
            lastname: dto.lastname,
            avatar: dto.avatar,
            email: dto.email,
            phone: dto.phone,
            state: dto.state,
            country: dto.country,
            address: dto.address,
            dob: dto.dob,
            email_verified: false,
            acctstatus: 'pending',
            hash: hash,
            hashedRt: '',
            otpHash: '',
            otp: '',
            ownerId: '',
            roleId: dto.roleId
        })
        
        const tokens = await this.signJwt(newAccount._id, newAccount.email);
        await this.updateRtHash(newAccount._id, tokens.refresh_token);

        const otp = await codeGenerator(6, '1234567890');

        const otpHash = buildOtpHash(newAccount.email, otp, customConfig.otpKey, 15);

        newAccount.otpHash = otpHash;
        //create email profile here
        const onboardingData = {
            name: newAccount.firstname+' '+newAccount.lastname,
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
    }
    async signinLocal(dto: IAuthDto): Promise<Tokens> {
        //console.log(dto);
        const account = await Account.findOne({
            where: {
                email: dto.email,
            },
        });
        if (!account) {
            throw new ForbiddenError('Acces non authorisé!');
        }

        const passwordMatches = await argon.verify(account.hash, dto.password);
        if (!passwordMatches) throw new ForbiddenError('Acces non autorisé!');

        const tokens = await this.signJwt(account._id, account.email);
        await this.updateRtHash(account._id, tokens.refresh_token);

        return tokens;
    }
    async logout(accountId: string) {
        await Account.updateMany({
            where: {
                _id: accountId,
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
    async refreshTokens(accountId: string, rt: string) {
        const account = await Account.findOne({
            where: {
                _id: accountId,
            },
        });
        if (!account || !account.hashedRt) throw new ForbiddenError('Access Denied');
        console.log(account.hashedRt);

        const rtMatches = await argon.verify(account.hashedRt, rt);
        if (!rtMatches) throw new ForbiddenError('Acces non autorisé!');

        const tokens = await this.signJwt(account._id, account.email);
        await this.updateRtHash(account._id, tokens.refresh_token);

        return tokens;
    }

}

export default AccountService

