import jwt = require("jsonwebtoken")
import { Request, Response, NextFunction } from "express";
const { v4: uuidv4 } = require('uuid')

export function generateTokens(user:{ user_id:string }) {
    const accessToken = jwt.sign({ user_id:user.user_id }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '60m' });
    const refreshToken = uuidv4();
    // global.__cache__.refreshToken = { ...global.__cache__.refreshToken, [user.username]: {refreshToken, expiresIn: null} }
    return { accessToken, refreshToken };
}

export function checkRefreshToken(req:Request, res:Response, next:NextFunction) {
    const refreshToken = req.headers.refreshToken;
    let isIncluded = false
    for (let item in global.__cache__.refreshToken) {
        // @ts-ignore
        if (global.__cache__.refreshToken[item].refreshToken === refreshToken) {
            isIncluded = true
        }
    }; if (!isIncluded) return res.status(401).json("Refresh token is not valid")
    // const newTokens = generateTokens(user);
    // res.status(200).json(newTokens);
}

export function decoder (input:string) {
    try {
        let output = jwt.verify(input, 'ISOUND_ACCESS_TOKEN')
        return output
    } catch (error) {
        console.log(error)
        return null
    }
}