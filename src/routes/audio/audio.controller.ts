import { Request, Response } from "express"
import { getAudioInfo, getStreamUrl } from "./audio.service"

const TOPRATE = "PLUadgMpPaifXLKV26KIqpFp6mpZiyF2l9"
const POPULAR = "PLUadgMpPaifVmhXn4xz-jRO934EAORUnX"

export default class AudioController {
    static stream = async (req: Request, res:Response) => {
        try {
            let { mediaId }:any = req.query
            if (!mediaId) return res.status(400).json('media id is required')
            let streamUrl = await getStreamUrl(mediaId)
            res.status(200).json(streamUrl)
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal server error' })
        }
    }

    static trending = async (req: Request, res: Response) => {
        try {
            res.status(200).json('comming soon')
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal server error' })
        }
    }

    static info = async (req: Request, res: Response) => {
        try {
            let { mediaId }:any = req.query
            if (!mediaId) return res.status(400).json('media id is required')
            let { related_videos, videoDetails } = await getAudioInfo(mediaId)
            res.status(200).json({ related_videos, video_details: videoDetails })
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
}