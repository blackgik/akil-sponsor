import path  from "path";
require('dotenv').config({path: path.join(__dirname, '../../.env')});

const customConfig: {
    port: number;
    accessTokenExpiresIn: number;
    refreshTokenExpiresIn: number;
    origin: string;
    dbUri: string;
    accessTokenPrivateKey: string;
    accessTokenPublicKey: string;
    refreshTokenPrivateKey: string;
    refreshTokenPublicKey: string;
    redisCacheExpiresIn: number;
    baseProdUrl: string;
    baseLocalUrl: string;
} = {
    port: 8000,
    accessTokenExpiresIn: 15,
    refreshTokenExpiresIn: 60,
    redisCacheExpiresIn: 60,
    origin: 'http://localhost:3030',

    dbUri: process.env.DATABASE_URL as string,
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string,
    refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
    refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY as string,
    baseProdUrl: process.env.BASE_PROD_URL as string,
    baseLocalUrl: process.env.BASE_LOCAL_URL as string,
};

export default customConfig;