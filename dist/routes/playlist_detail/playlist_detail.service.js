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
exports.handleCreatePlaylistDetail = void 0;
const PlayListDetail_model_1 = require("../../models/PlayListDetail.model");
function handleCreatePlaylistDetail({ media_id, playlist_id }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let createPlaylistDetail = yield PlayListDetail_model_1.PlayListDetail.create({
                media_id: media_id,
                playlist_id: playlist_id
            });
            return createPlaylistDetail;
        }
        catch (error) {
            return null;
        }
    });
}
exports.handleCreatePlaylistDetail = handleCreatePlaylistDetail;
