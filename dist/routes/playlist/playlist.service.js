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
exports.handleEditPlayList = exports.handleDestroyPlayList = exports.handleCreatePlayList = void 0;
const PlayList_model_1 = require("../../models/PlayList.model");
function handleCreatePlayList({ playlist_name, playlist_status, playlist_image, playlist_description, user_id }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let createPlayList = yield PlayList_model_1.default.create({
                playlist_name: playlist_name,
                playlist_status: playlist_status,
                playlist_image: playlist_image,
                playlist_description: playlist_description,
                user_id: user_id
            });
            return createPlayList;
        }
        catch (error) {
            return null;
        }
    });
}
exports.handleCreatePlayList = handleCreatePlayList;
function handleDestroyPlayList({ playlist_id, user_id }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let destroyPlaylist = yield PlayList_model_1.default.destroy({
                where: {
                    playlist_id: playlist_id,
                    user_id: user_id
                }
            });
            return destroyPlaylist;
        }
        catch (error) {
            return null;
        }
    });
}
exports.handleDestroyPlayList = handleDestroyPlayList;
function handleEditPlayList({ playlist_id, user_id, playlist_name, playlist_description, playlist_image, playlist_status }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let handleInfo = yield PlayList_model_1.default.update({
                playlist_name: playlist_name,
                playlist_image: playlist_image,
                playlist_status: playlist_status,
                playlist_description: playlist_description
            }, {
                where: {
                    user_id: user_id,
                    playlist_id: playlist_id
                }
            });
            return handleInfo;
        }
        catch (error) {
            return null;
        }
    });
}
exports.handleEditPlayList = handleEditPlayList;
