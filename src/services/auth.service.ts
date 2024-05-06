import jwt from "jsonwebtoken";
import * as crypto from "crypto";
import * as argon from 'argon2';
import { Account } from '../schemas/account.schema';
import { JwtPayload, Tokens } from '../types';
import HttpException, { ForbiddenError, InternalServerError, NotFoundError, InvalidError, BadRequestError, DuplicateError } from '../utils/exceptions/http.exception';
import { IAuthDto } from '../dto/IAuthDto';
import {
    buildOtpHash,
    codeGenerator,
    verifyOTP
} from "../utils/code.generator";
import { messageBird } from "../utils/mail.sender";
import { forgotPasswordMail, onboardinMail, verifyOnbordingMail } from "../utils/mail.data";
import customConfig from "../config/default";
import { formattMailInfo } from "../utils/mail.formatter";
import { IAccountDocument } from "../models/account.model";
import { Sponsor } from "../schemas/sponsor.schema";
import { ISponsor, ISponsorDocument } from "../models/sponsor.model";
import { Role } from "../schemas/role.schema";
import logger from "../utils/logger.util";
import { signJwt, verifyJwt } from "../utils/jwt.util";
import { ILoggedInDto } from "../dto/ILoggedInDto";
import { IResendOtpDto } from "../dto/IResendOtpDto";
import { Occupation } from "../schemas/occupation.schema";
import { ProductCategory } from "../schemas/product.schema";

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


    async signupLocal(dto: ISponsor): Promise<IAccountDocument | BadRequestError> {

        const hash = await argon.hash(dto.password);
        // const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        //     modulusLength: 2048,
        //     publicKeyEncoding: { type: "spki", format: "pem" },
        //     privateKeyEncoding: { type: "pkcs8", format: "pem" },
        // });
        // console.log("Public Key:\n", publicKey);
        // console.log("Private Key:\n", privateKey);
        const checkIfOnboarded = await Account.findOne({ $or: [{ email: dto.email }, { phone: dto.phone }] });
        if (checkIfOnboarded) throw new HttpException(406, 'Sponsor already exists', 'Sponsor already exists',);

        const newSponsor: ISponsorDocument = await Sponsor.create(dto);
        const userRole = await Role.findOne({role_code: 'SPONSOR'});
        const newAccount = await Account.create({
            firstname: newSponsor.firstname,
            lastname: newSponsor.lastname,
            avatar: newSponsor.avatar,
            email: newSponsor.email,
            phone: newSponsor.phone,
            state: newSponsor.state,
            country: newSponsor.country,
            address: newSponsor.address,
            dob: new Date(),
            email_verified: false,
            acctstatus: 'pending',
            hash: dto.password,
            hashedRt: '',
            ownerId: newSponsor._id,
            otpHash: '',
            roleId: userRole?._id
        })
        const user = {
            userId: newAccount._id,
            userEmail: newAccount.email,
            role: userRole?.role_code
        };
        const at = signJwt(user, "accessTokenPrivateKey", {});
        const rt = signJwt(user, "refreshTokenPrivateKey", {});
        await this.updateRtHash(newAccount._id, rt);

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
            throw new InternalServerError(500,
                'server slip. Organization was created without mail being sent',
                ''
            );
        return newAccount;

    }

    async signinLocal(dto: IAuthDto): Promise<Tokens> {
        //console.log(dto);
        const user = await Account.findOne({
            email: dto.email,
            email_verified: true
        });
        if (!user) {
            throw new ForbiddenError(403, 'Acces non authorisé!', '');
        }

        const passwordMatches = await argon.verify(user.hash, dto.password);
        if (!passwordMatches) throw new ForbiddenError(403, 'Acces non authorisé!', '');

        const userRole = await Role.findById(user.roleId)!;
        if (userRole === undefined || userRole === null) throw new ForbiddenError(403, 'Acces non authorisé!', '');
        const payload: ILoggedInDto = {
            firstname: user.firstname,
            lastname: user.lastname,
            avatar: user.avatar,
            email: user.email,
            phone: user.phone,
            state: user.state,
            country: user.country,
            address: user.address,
            email_verified: user.email_verified,
            acctstatus: user.acctstatus,
            ownerId: user.ownerId,
            role: userRole!.role_code
        };
        const at = signJwt(payload, "accessTokenPrivateKey", {});
        const rt = signJwt(payload, "refreshTokenPrivateKey", {});
        await this.updateRtHash(user._id, rt);

        return {
            access_token: at,
            refresh_token: rt
        };
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
    async refreshTokens(rt: string) {

        const rtMatches = await verifyJwt(rt, "refreshTokenPublicKey");
        if (!rtMatches || rtMatches.userId == '') throw new ForbiddenError(403, 'Acces non authorisé!', '');

        const user = await Account.findOne({ _id: rtMatches.userId });
        if (!user || !user.hashedRt) throw new ForbiddenError(403, 'Acces non authorisé!', '');
        console.log(user.hashedRt);

        const userRole = await Role.findById(user.roleId);
        const payload = {
            userId: user._id,
            userEmail: user.email,
            role: userRole?.role_code
        };
        const at = signJwt(payload, "accessTokenPrivateKey", {});
        const rrt = signJwt(payload, "refreshTokenPrivateKey", {});
        await this.updateRtHash(user._id, rrt);

        return {
            access_token: at,
            refresh_token: rrt
        };
    }

    verifyOtp = async (body: any): Promise<Tokens> => {
        const { code, hash } = body;

        const checkAcct = await Account.findOne({ otp: code });

        if (!checkAcct) throw new NotFoundError(200, 'Account not found', '');

        const verifyOtp = verifyOTP(checkAcct.email, code, hash, customConfig.otpKey);
        if (!verifyOtp) throw new InvalidError(422, 'Invalid Input', '');

        const generatePassword = checkAcct.hash;;

        const hashedPwd = await argon.hash(checkAcct.hash);
        checkAcct.email_verified = true;
        checkAcct.otpHash = '';
        checkAcct.hash = hashedPwd;
        checkAcct.acctstatus = 'active';

        let toVerifySponsor = await Sponsor.findById(checkAcct.ownerId);
        if (toVerifySponsor) {
            toVerifySponsor.email_verified = true;
            toVerifySponsor.otpHash = '';
            toVerifySponsor.password = hashedPwd;
            toVerifySponsor.acctstatus = 'active';
            checkAcct.ownerId = toVerifySponsor._id;
            await Sponsor.updateSponsor(toVerifySponsor._id, toVerifySponsor);
        }
        await Account.updateAccount(checkAcct._id, checkAcct);
        //create email profile here
        const onboardingData = {
            email: checkAcct.email,
            password: generatePassword
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
            throw new InternalServerError(500,
                'server slip. Organization was created without mail being sent', ''
            );
        const tokens = await this.signJwt(checkAcct._id, checkAcct.email);
        return tokens;
    };

    forgotPassword = async (body: any) => {
        const checkOrg = await Account.findOne({ email: body.email });
        if (!checkOrg) throw new NotFoundError(200, 'Data not found', '');

        const otp = await codeGenerator(6, '1234567890');

        const hash = buildOtpHash(body.email, otp, customConfig.otpKey, 15);

        checkOrg.otpHash = hash;
        checkOrg.otp = otp;

        checkOrg.save();

        const onboardingData = {
            name: checkOrg.firstname,
            code: otp
        };

        const mailData = {
            email: checkOrg.email,
            subject: 'PASSWORD RESET REQUEST',
            type: 'html',
            html: forgotPasswordMail(onboardingData).html,
            text: forgotPasswordMail(onboardingData).text
        };

        const msg = await formattMailInfo(mailData, customConfig);

        const msgDelivered = await messageBird(msg);

        if (!msgDelivered) throw new InternalServerError(500,'server slip. Reset Password code not sent','');

        // return { email: checkMember.contact.email };
        return { hash: hash, email: checkOrg.email };
    };

    resetPassword = async (body: any) => {
        const { code, hash } = body;

        const checkOrg = await Account.findOne({ otp: code });
        if (!checkOrg) throw new NotFoundError(200,'User not found','');

        const verifyOtp = verifyOTP(checkOrg.email, code, hash, customConfig.otpKey);
        if (!verifyOtp) throw new InvalidError(422,'Wrong otp code','');

        const newPwd = await codeGenerator(6, '1234567890');
        const hashPassword = await await argon.hash(newPwd);

        checkOrg.hash = hashPassword;

        await checkOrg.save();

        //create email profile here
        const onboardingData = {
            email: checkOrg.email,
            password: newPwd
        };
        const mailData = {
            email: checkOrg.email,
            subject: 'MAJFINTECH ONBOARDING',
            type: 'html',
            html: onboardinMail(onboardingData).html,
            text: onboardinMail(onboardingData).text
        };
        const msg = await formattMailInfo(mailData, customConfig);

        const msgDelivered = await messageBird(msg);
        if (!msgDelivered)
            throw new InternalServerError(500,
                'server slip. Organization was created without mail being sent', ''
            );

        return true;
    };

    async resendOtp(dto: IResendOtpDto): Promise<IAccountDocument | BadRequestError> {

        //const hash = await argon.hash(dto.password);
        const checkIfOnboarded = await Account.findOne({ email: dto.email });
        if (!checkIfOnboarded) throw new HttpException(406,'User do not exist','');

        const otp = await codeGenerator(6, '1234567890');

        const otpHash = buildOtpHash(checkIfOnboarded.email, otp, customConfig.otpKey, 15);

        checkIfOnboarded.otpHash = otpHash;
        checkIfOnboarded.otp = otp;
        checkIfOnboarded.otpHash = otpHash;
        await Account.updateAccount(checkIfOnboarded._id, checkIfOnboarded);
        //create email profile here
        const onboardingData = {
            name: checkIfOnboarded.firstname + ' ' + checkIfOnboarded.lastname,
            code: otp
        };
        const mailData = {
            email: checkIfOnboarded.email,
            subject: 'MAJFINTECH ONBOARDING',
            type: 'html',
            html: verifyOnbordingMail(onboardingData).html,
            text: verifyOnbordingMail(onboardingData).text
        };
        const msg = await formattMailInfo(mailData, customConfig);

        const msgDelivered = await messageBird(msg);
        if (!msgDelivered)
            throw new InternalServerError(500,
                'server slip. Organization was created without mail being sent',
                ''
            );
        return checkIfOnboarded;

    }

     getPreferences = async () => {

        //const hash = await argon.hash(dto.password);
        const occupations = await Occupation.find({ is_active: true });
        const product_categories = await ProductCategory.find({is_active: true});
        
        return {occupations: occupations, categories: product_categories};

    }

}

export default AuthService

