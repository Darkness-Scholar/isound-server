"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRefreshToken = exports.generateTokens = void 0;
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
function generateTokens(user) {
    const accessToken = jwt.sign({ username: user.username }, 'ISOUND_ACCESS_TOKEN', { expiresIn: '60m' });
    const refreshToken = uuidv4();
    global.__cache__.refreshToken = Object.assign(Object.assign({}, global.__cache__.refreshToken), { [user.username]: { refreshToken, expiresIn: null } });
    return { accessToken, refreshToken };
}
exports.generateTokens = generateTokens;
function checkRefreshToken(req, res, next) {
    const refreshToken = req.headers.refreshToken;
    let isIncluded = false;
    for (let item in global.__cache__.refreshToken) {
        // @ts-ignore
        if (global.__cache__.refreshToken[item].refreshToken === refreshToken) {
            isIncluded = true;
        }
    }
    ;
    if (!isIncluded)
        return res.status(401).json("Refresh token is not valid");
    // const newTokens = generateTokens(user);
    // res.status(200).json(newTokens);
}
exports.checkRefreshToken = checkRefreshToken;
