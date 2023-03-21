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
const upload_service_1 = require("./upload.service");
class UploadController {
}
exports.default = UploadController;
_a = UploadController;
UploadController.media = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.user;
        const { media_name, media_description, media_cover, media_author, media_src } = req.body;
        if (!media_name || !media_cover || !media_author || !media_src)
            return res.status(400).json({ msg: 'Pls check required !' });
        const result = yield (0, upload_service_1.handleUploadMedia)({
            name: media_name,
            description: media_description,
            cover: media_cover,
            author: media_author,
            src: media_src,
            createdBy: user_id,
        });
        if (result === null)
            return res.status(400).json({ msg: 'Upload failed !' });
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Internal server error !' });
    }
});
