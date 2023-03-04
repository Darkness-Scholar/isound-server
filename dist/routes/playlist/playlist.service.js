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
exports.handleDestroyPlayList = exports.handleEditPlayList = exports.handleGetPlayList = exports.handleCreatePlayList = void 0;
const PlayList_model_1 = require("../../models/PlayList.model");
function handleCreatePlayList({ playlist_name, playlist_status, playlist_image, playlist_description, user_id, playlist_media }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let createPlayList = yield PlayList_model_1.default.create({
                playlist_name: playlist_name,
                playlist_status: playlist_status,
                playlist_image: playlist_image,
                playlist_description: playlist_description,
                user_id: user_id,
                playlist_media: playlist_media
            });
            // Example playlist_media : [{"media_id":"4095zvSr4PI","media_name":"Lofi chill"},{"media_id":"r5YZY2N6UWg","media_name":"Kiep Ma Hong"}]
            return createPlayList;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.handleCreatePlayList = handleCreatePlayList;
function handleGetPlayList({ user_id }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield PlayList_model_1.default.findAll({ where: { user_id: user_id } });
            data.forEach(element => {
                if (element.dataValues.playlist_media) {
                    let tmp = JSON.parse(element.dataValues.playlist_media.replace("'", ""));
                    element.dataValues.playlist_media = tmp;
                }
            });
            return data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.handleGetPlayList = handleGetPlayList;
function handleEditPlayList({ playlist_id, playlist_name, playlist_status, playlist_image, playlist_description, user_id, playlist_media }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result = yield PlayList_model_1.default.update({
                playlist_name: playlist_name,
                playlist_status: playlist_status,
                playlist_image: playlist_image,
                playlist_description: playlist_description,
                playlist_media: playlist_media
            }, {
                where: { user_id: user_id, playlist_id: playlist_id }
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.handleEditPlayList = handleEditPlayList;
function handleDestroyPlayList({ playlist_id, user_id }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result = PlayList_model_1.default.destroy({
                where: {
                    user_id: user_id,
                    playlist_id: playlist_id
                }
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.handleDestroyPlayList = handleDestroyPlayList;
