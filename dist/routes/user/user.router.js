"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const user = (0, express_1.Router)();
user.post("/signin", user_controller_1.default.signin);
user.post("/signup", user_controller_1.default.signup);
user.get("/profile", user_controller_1.default.profile);
exports.default = user;
