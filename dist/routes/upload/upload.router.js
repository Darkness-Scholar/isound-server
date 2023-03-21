"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const upload_controller_1 = require("./upload.controller");
const upload = (0, express_1.Router)();
upload.use(auth_middleware_1.AuthMiddleware);
upload.post('media', upload_controller_1.default.media);
exports.default = upload;
