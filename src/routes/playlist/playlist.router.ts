import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import PlayListController from "./playlist.controller";

const playlist = Router()

playlist.use(AuthMiddleware)

playlist.get('/get', PlayListController.getPlayList)
playlist.post('/create', PlayListController.createPlayList)
playlist.post('/edit', PlayListController.editPlayList)
playlist.post('/destroy', PlayListController.destroyPlayList)


export default playlist