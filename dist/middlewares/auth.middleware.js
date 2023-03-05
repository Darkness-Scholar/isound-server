"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jwt = require('jsonwebtoken');
const AuthMiddleware = (req, res, next) => {
    // For easy testing
    let access_token = req.headers.access_token || req.body.access_token;
    console.log(access_token);
    if (!access_token)
        return res.status(400).json({ msg: 'No Token provide' });
    jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, log) => {
        if (err)
            return res.status(400).json({ msg: 'Unauthorized access' });
        req.user = log.user_id;
        next();
    });
};
exports.AuthMiddleware = AuthMiddleware;
