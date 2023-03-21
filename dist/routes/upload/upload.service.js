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
exports.handleUploadMedia = void 0;
const Media_model_1 = require("../../models/Media.model");
function handleUploadMedia({ name, description, cover, author, src, createdBy }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield Media_model_1.default.create({
                name: name,
                description: description,
                cover: cover,
                author: author,
                src: src,
                createdBy: createdBy
            });
            if (result instanceof Media_model_1.default)
                return result;
            return null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.handleUploadMedia = handleUploadMedia;
