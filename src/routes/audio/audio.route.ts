import { Router } from "express"
import AudioController from "./audio.controller"

const audio = Router()

audio.get("/stream", AudioController.stream)
audio.get("/toprate", AudioController.toprate)
audio.get("/popular", AudioController.popular)
audio.get("/info", AudioController.info)
audio.get("/search", AudioController.search)

export default audio 
