import { Request, Response } from "express"
import { getAudioInfo, getStreamUrl, searchByKeyword } from "../../services/audio.service"
import ytpl = require("ytpl")
import __cache__ from "../../services/cache.service"
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

    static toprate = async (req: Request, res: Response) => {
        try {
            if (__cache__.get("toprate")) {
                console.log(`Get toprate data from cache`)
                return res.status(200).json(__cache__.get("toprate"))
            } else {
                let { items } = await ytpl(TOPRATE)
                console.log(`Save to cache`)
                __cache__.set("toprate", items, 3600 * 24)
                return res.status(200).json(items)
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
    
    static popular = async (req: Request, res: Response) => {
        if (__cache__.get("popular")) {
            console.log(`Get popular data from cache`)
            return res.status(200).json(__cache__.get("popular"))
        } else {
            let { items } = await ytpl(POPULAR)
            console.log(`Save to cache`)
            __cache__.set("popular", items, 3600 * 24)
            return res.status(200).json(items)
        }
    }

    static info = async (req: Request, res: Response) => {
        try {
            let { mediaId }:any = req.query
            if (!mediaId) return res.status(400).json('media id is required')
            let { related, details } = await getAudioInfo(mediaId)
            res.status(200).json({ related, details })
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal server error' })
        }
    }

    static search = async (req: Request, res: Response) => {
        try {
            let { keyword } = req.query
            let data = await searchByKeyword(String(keyword))
            if (!data) return res.status(404).json({ msg: "Data is not found"})
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
}