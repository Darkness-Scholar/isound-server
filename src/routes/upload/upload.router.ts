import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import UploadController from "./upload.controller";

const upload = Router()

upload.use(AuthMiddleware)

upload.post('media', UploadController.media)

export default upload