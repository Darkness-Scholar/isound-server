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
const playlist_service_1 = require("./playlist.service");
class PlayListController {
}
exports.default = PlayListController;
_a = PlayListController;
PlayListController.createPlayList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.user;
        const { playlist_description, playlist_image, playlist_status } = req.body;
        const { playlist_name, playlist_media } = req.body;
        if (!playlist_name)
            return res.status(400).json({ msg: 'Required value' });
        console.log(`Create Playlist Payload:`, playlist_name, playlist_description, playlist_image, playlist_status);
        const result = yield (0, playlist_service_1.handleCreatePlayList)({
            playlist_name: playlist_name,
            playlist_status: playlist_status,
            playlist_image: playlist_image,
            playlist_description: playlist_description,
            user_id: user_id,
            playlist_media: playlist_media
        });
        if (result == null)
            return res.status(400).json({ msg: 'Create faild' });
        res.status(200).json(result.dataValues);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Interval server error' });
    }
});
PlayListController.getPlayList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.user;
        const data = yield (0, playlist_service_1.handleGetPlayList)({ user_id });
        if (data == null)
            return res.status(400).json({ msg: 'Get faild' });
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Interval server error' });
    }
});
PlayListController.editPlayList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.user;
        // const { playlist_id, playlist_name, playlist_status, playlist_image, playlist_description, playlist_media } = req.body
        const rowModified = yield (0, playlist_service_1.handleEditPlayList)(Object.assign(Object.assign({}, req.body), { user_id }));
        if (rowModified == null)
            return res.status(400).json({ msg: 'Edit faild' });
        res.status(200).json({ msg: 'Edit successfully' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Interval server error' });
    }
});
PlayListController.destroyPlayList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.user;
        const { playlist_id } = req.query;
        const rowModified = yield (0, playlist_service_1.handleDestroyPlayList)({
            user_id: user_id,
            playlist_id: playlist_id
        });
        if (rowModified == null)
            return res.status(400).json({ msg: 'Destroy faild' });
        res.status(200).json({ msg: 'Destroy successfully' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Interval server error' });
    }
});
