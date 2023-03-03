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
const PlayList_model_1 = require("../../models/PlayList.model");
const playlist_service_1 = require("./playlist.service");
const PlayListDetail_model_1 = require("../../models/PlayListDetail.model");
class PlayListController {
}
exports.default = PlayListController;
_a = PlayListController;
PlayListController.getPlayListByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = req.user;
        const data = yield PlayList_model_1.default.findAll({ attributes: ['playlist_id', 'playlist_name'], where: { user_id: user }, include: { model: PlayListDetail_model_1.PlayListDetail, attributes: ['media_id'] } });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
        console.log(error);
    }
});
PlayListController.createPlayList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { playlist_name } = req.body;
        let { playlist_description, playlist_image, playlist_status } = req.body;
        let user_id = req.user;
        if (!playlist_name)
            return res.status(400).json({ msg: 'Playlist Name is required !' });
        let { dataValues } = yield (0, playlist_service_1.handleCreatePlayList)({ playlist_name, playlist_status, playlist_image, playlist_description, user_id });
        res.status(200).json(dataValues);
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
});
PlayListController.destroyPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.user;
        let { playlist_id } = req.body;
        if (!playlist_id)
            return res.status(400).json({ msg: 'Playlist ID is required !' });
        const destroy = yield (0, playlist_service_1.handleDestroyPlayList)({ user_id, playlist_id });
        if (!destroy)
            return res.status(400).json({ msg: 'Destroy faild !' });
        res.status(200).json({ msg: 'Destroy successfully !' });
    }
    catch (error) {
        res.status(500).json({ msg: 'Interval server error' });
    }
});
PlayListController.editPlayList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.user;
        let { playlist_id } = req.body;
        if (!playlist_id)
            return res.status(400).json({ msg: 'Playlist ID is required !' });
        let { playlist_name, playlist_status, playlist_description, playlist_image } = req.body;
        const handle = yield (0, playlist_service_1.handleEditPlayList)({ playlist_id, user_id, playlist_name, playlist_description, playlist_image, playlist_status });
        if (!(handle === null || handle === void 0 ? void 0 : handle[0]))
            return res.status(400).json({ msg: 'Edit faild' });
        res.status(200).json({ msg: 'Edit playlist successfully !' });
    }
    catch (error) {
        res.status(500).json({ msg: 'Interval server error' });
    }
});
