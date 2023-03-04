"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
const User_model_1 = require("../../models/User.model");
const token_service_1 = require("../../services/token.service");
const bcrypt_1 = require("bcrypt");
class UserController {
}
exports.default = UserController;
_a = UserController;
UserController.signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ msg: 'Email or Password is required' });
        const { dataValues } = yield User_model_1.default.findOne({ where: { user_email: email } });
        if (!dataValues)
            return res.status(400).json({ msg: 'Invalid email or password' });
        if (!(0, bcrypt_1.compareSync)(password, dataValues.user_password))
            return res.status(400).json({ msg: 'Invalid email or password' });
        let token = (0, token_service_1.generateTokens)({ user_id: String(dataValues.user_id) });
        res.status(200).json(token);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
UserController.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, password, email } = req.body;
        if (!name || !password || !email)
            return res.status(400).json({ msg: 'Email, Password or Name is required' });
        let { dataValues } = yield (0, user_service_1.handleSignup)({ email, password, name });
        if (!dataValues)
            return res.status(400).json({ msg: 'Cannot sign up, this email is existed' });
        let token = (0, token_service_1.generateTokens)({ user_id: String(dataValues.user_id) });
        res.status(200).json(token);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
UserController.profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // let { access_token } = req.headers
    // let { user_id }:JwtPayload|any = decoder(String(access_token))
    let user = req.user;
    let { dataValues } = yield User_model_1.default.findByPk(user);
    // send user profile
    res.status(200).json(dataValues);
});
