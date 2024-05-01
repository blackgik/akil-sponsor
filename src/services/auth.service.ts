import jwt from "jsonwebtoken";
import * as argon from 'argon2';
import { User } from '../schemas/user.schema';
import { JwtPayload, Tokens } from '../types';
import { UnAuthorizedError, ForbiddenError, InternalServerError } from '../utils/app.errors';
import { IUserCreateDto } from '../dto/IUserCreateDto';
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
import { IUser, IUserDocument } from "models/user.model";

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
        await User.updateOne({
            where: {
                _id: userId,
            },
            data: {
                hashedRt: hash,
            }
        });
    }

    async signupLocal(dto: IUserCreateDto): Promise<IUserDocument> {
        const generatePassword = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');
        console.log('====================================');
        console.log(generatePassword);
        console.log('====================================');
        const hash = await argon.hash(generatePassword);
        const newUser = await User.buildUser({
            firstname: dto.firstname,
            lastname: dto.lastname,
            avatar: dto.avatar,
            email: dto.email,
            phone: dto.phone,
            gender: dto.gender,
            password: hash,
            state: dto.state,
            country: dto.country,
            city: dto.city,
            address: dto.address,
            dob: dto.dob,
            email_verified: false,
            acctstatus: 'pending',
            hash: hash,
            hashedRt: '',
            otpHash: '',
            roleId: dto.roleId
        })
        const tokens = await this.signJwt(newUser._id, newUser.email);
        await this.updateRtHash(newUser._id, tokens.refresh_token);

        const otp = await codeGenerator(6, '1234567890');

        const otpHash = buildOtpHash(newUser.email, otp, customConfig.otpKey, 15);

        newUser.otpHash = otpHash;
        //create email profile here
        const onboardingData = {
            name: newUser.firstname+' '+newUser.lastname,
            code: otp
        };
        const mailData = {
            email: newUser.email,
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
        return newUser;
    }
    async signinLocal(dto: IAuthDto): Promise<Tokens> {
        //console.log(dto);
        const user = await User.findOne({
            where: {
                email: dto.email,
            },
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
        await User.updateMany({
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
        const user = await User.findOne({
            where: {
                _id: userId,
            },
        });
        if (!user || !user.hashedRt) throw new ForbiddenError('Access Denied');
        console.log(user.hashedRt);

        const rtMatches = await argon.verify(user.hashedRt, rt);
        if (!rtMatches) throw new ForbiddenError('Acces non autorisé!');

        const tokens = await this.signJwt(user._id, user.email);
        await this.updateRtHash(user._id, tokens.refresh_token);

        return tokens;
    }

}

export default AuthService

