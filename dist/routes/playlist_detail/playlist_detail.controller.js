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
const playlist_detail_service_1 = require("./playlist_detail.service");
const PlayListDetail_model_1 = require("../../models/PlayListDetail.model");
class PlaylistDetailController {
}
exports.default = PlaylistDetailController;
_a = PlaylistDetailController;
PlaylistDetailController.createPlaylistDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { playlist_id, media_id } = req.body;
        if (!playlist_id || !media_id)
            return res.status(400).json({ msg: 'Playlist_id or Media_id is Required !' });
        const checkDup = yield PlayListDetail_model_1.PlayListDetail.count({ where: { media_id: media_id, playlist_id: playlist_id } });
        if (checkDup > 0)
            return res.status(400).json({ msg: 'Media already existed !' });
        let { dataValues } = yield (0, playlist_detail_service_1.handleCreatePlaylistDetail)({ media_id, playlist_id });
        if (!dataValues)
            return res.status(400).json({ msg: 'Create faild' });
        res.status(200).json(dataValues);
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
});
