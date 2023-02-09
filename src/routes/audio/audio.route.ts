import { Router } from "express"
import AudioController from "./audio.controller"

const audio = Router()

audio.get("/stream", AudioController.stream)
audio.get("/trending", AudioController.trending)
audio.get("/info", AudioController.info)

export default audio 
