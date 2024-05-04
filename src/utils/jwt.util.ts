
import jwt, { SignOptions } from "jsonwebtoken";
import customConfig from "../config/default";
import { IDecodedDto } from "../dto/IDecodedDto";
import path from "path";
import fs from "fs";

const accessTokenPrivateKey = fs.readFileSync(path.join(__dirname, '../keys', 'accessTokenPrivateKey.key'), 'utf8')
const accessTokenPublicKey = fs.readFileSync(path.join(__dirname, '../keys', 'accessTokenPublicKey.key.pub'), 'utf8')

const refreshTokenPrivateKey = fs.readFileSync(path.join(__dirname, '../keys', 'refreshTokenPrivateKey.key'), 'utf8')
const refreshTokenPublicKey = fs.readFileSync(path.join(__dirname, '../keys', 'refreshTokenPublicKey.key.pub'), 'utf8')

export const signJwt = (
    payload: Object,
    key: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey',
    options: SignOptions = {}
)=>{
    const privateKey = key == 'accessTokenPrivateKey' ? accessTokenPrivateKey : refreshTokenPrivateKey;
    return jwt.sign(payload, privateKey, {
        ...(options && options),
        algorithm: 'RS256',
    });
};

export const verifyJwt = (
    token: string,
    key: 'accessTokenPublicKey' | 'refreshTokenPublicKey'
): IDecodedDto => {
    try {
        const publicKey = key == 'accessTokenPublicKey' ? accessTokenPublicKey:refreshTokenPublicKey;
        return jwt.verify(token, publicKey) as IDecodedDto
    } catch (error) {
        let decoded: IDecodedDto = {userId: '', UserEmail: '', role: ''};
        return decoded;
    }
}