import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import PlayListController from "./playlist.controller";

const playlist = Router()

playlist.use(AuthMiddleware)

playlist.get('/get', PlayListController.getPlayListByUser)
playlist.post('/create', PlayListController.createPlayList)
playlist.post('/destroy', PlayListController.destroyPlaylist)
playlist.post('/edit', PlayListController.editPlayList)

export default playlist