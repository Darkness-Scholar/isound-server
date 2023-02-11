import ytdl = require("ytdl-core")
import fs = require("fs")
import { iRelatedVideos } from "../../interface/audio.interface"

export async function getStreamUrl(sourceId:string):Promise<string|any> {
    try {
        let { formats } = await ytdl.getInfo(sourceId)
        const audioFormats = ytdl.filterFormats(formats, "audioonly")
        return audioFormats[0].url
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getAudioInfo(sourceId:string):Promise<any> {
    try {
        let { related_videos, videoDetails }:any = await ytdl.getInfo(sourceId)
        return { related:related_videos, details:videoDetails }
    } catch (error) {
        console.log(error)
        return null
    }
}