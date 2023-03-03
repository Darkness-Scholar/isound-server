import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import PlaylistDetailController from "./playlist_detail.controller";

const playlist_detail = Router()

playlist_detail.use(AuthMiddleware)

playlist_detail.post('/create', PlaylistDetailController.createPlaylistDetail )

export default playlist_detail