"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const playlist_detail_controller_1 = require("./playlist_detail.controller");
const playlist_detail = (0, express_1.Router)();
playlist_detail.use(auth_middleware_1.AuthMiddleware);
playlist_detail.post('/create', playlist_detail_controller_1.default.createPlaylistDetail);
exports.default = playlist_detail;
