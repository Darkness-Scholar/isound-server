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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSignup = void 0;
const bcrypt_1 = require("bcrypt");
const User_model_1 = require("../../models/User.model");
function handleSignup({ name, password, email }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let createdUser = yield User_model_1.default.create({
                user_name: name,
                user_email: email,
                user_password: (0, bcrypt_1.hashSync)(password, 10)
            });
            return createdUser;
        }
        catch (error) {
            return null;
        }
    });
}
exports.handleSignup = handleSignup;
