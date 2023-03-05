import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import PlayListController from "./playlist.controller";

const playlist = Router()

playlist.use(AuthMiddleware)

playlist.get('/', PlayListController.getPlayList)
playlist.post('/', PlayListController.createPlayList)
playlist.put('/', PlayListController.editPlayList)
playlist.delete('/', PlayListController.destroyPlayList)


export default playlist