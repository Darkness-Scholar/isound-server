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
class UserController {
}
exports.default = UserController;
_a = UserController;
UserController.signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password } = req.body;
        if (!username || !password)
            return res.status(400).json("username or password is required");
        res.status(200).json({ username: 'test', token: 'test_token' });
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
});
UserController.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password, email } = req.body;
        if (!username || !password || !email)
            return res.status(400).json("username or password is required");
        res.status(200).json({ username: 'test', token: 'test_token' });
    }
    catch (error) {
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
