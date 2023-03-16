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
const audio_service_1 = require("../../services/audio.service");
const ytpl = require("ytpl");
const cache_service_1 = require("../../services/cache.service");
const TOPRATE = "PLUadgMpPaifXLKV26KIqpFp6mpZiyF2l9";
const POPULAR = "PLUadgMpPaifVmhXn4xz-jRO934EAORUnX";
class AudioController {
}
exports.default = AudioController;
_a = AudioController;
AudioController.stream = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { mediaId } = req.query;
        if (!mediaId)
            return res.status(400).json('media id is required');
        let streamUrl = yield (0, audio_service_1.getStreamUrl)(mediaId);
        res.status(200).json(streamUrl);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
AudioController.toprate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (cache_service_1.default.get("toprate")) {
            console.log(`Get toprate data from cache`);
            return res.status(200).json(cache_service_1.default.get("toprate"));
        }
        else {
            let { items } = yield ytpl(TOPRATE);
            console.log(`Save to cache`);
            cache_service_1.default.set("toprate", items, 3600 * 24);
            return res.status(200).json(items);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
AudioController.popular = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (cache_service_1.default.get("popular")) {
        console.log(`Get popular data from cache`);
        return res.status(200).json(cache_service_1.default.get("popular"));
    }
    else {
        let { items } = yield ytpl(POPULAR);
        console.log(`Save to cache`);
        cache_service_1.default.set("popular", items, 3600 * 24);
        return res.status(200).json(items);
    }
});
AudioController.info = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { mediaId } = req.query;
        if (!mediaId)
            return res.status(400).json('media id is required');
        let { related, details } = yield (0, audio_service_1.getAudioInfo)(mediaId);
        res.status(200).json({ related, details });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
AudioController.search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { keyword } = req.query;
        let data = yield (0, audio_service_1.searchByKeyword)(String(keyword));
        if (!data)
            return res.status(404).json({ msg: "Data is not found" });
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
