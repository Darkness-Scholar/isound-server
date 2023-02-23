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
        const result = yield User_model_1.default.findOne({ where: { user_email: email } });
        if (result === null)
            return res.status(400).json({ msg: 'Invalid email or password' });
        const user = result === null || result === void 0 ? void 0 : result.dataValues;
        if (!(0, bcrypt_1.compareSync)(password, user.user_password))
            return res.status(400).json({ msg: 'Invalid email or password' });
        const token = (0, token_service_1.generateTokens)({ username: String(user === null || user === void 0 ? void 0 : user.user_email) });
        res.status(200).json({ data: { user_id: user.user_id, user_email: user.user_email, user_name: user.user_name }, token: token });
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
});
UserController.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, password, email } = req.body;
        if (!name || !password || !email)
            return res.status(400).json({ msg: 'Email, Password or Name is required' });
        let user = yield (0, user_service_1.handleSignup)({ email, password, name });
        if (!user)
            return res.status(400).json({ msg: 'Cannot sign up, this email is existed' });
        let result_user = user === null || user === void 0 ? void 0 : user.dataValues;
        let token = (0, token_service_1.generateTokens)({ username: String(result_user === null || result_user === void 0 ? void 0 : result_user.user_email) });
        res.status(200).json(token);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
UserController.profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { token } = req.headers;
    console.log(token);
    // send user profile
    res.status(200).json({
        username: 'test',
        email: 'test@email.com'
    });
});
