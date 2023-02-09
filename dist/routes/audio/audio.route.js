"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audio_controller_1 = require("./audio.controller");
const audio = (0, express_1.Router)();
audio.get("/stream", audio_controller_1.default.stream);
audio.get("/trending", audio_controller_1.default.trending);
audio.get("/info", audio_controller_1.default.info);
exports.default = audio;
