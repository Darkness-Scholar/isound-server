import { Request, Response } from "express"
import { handleCreatePlaylistDetail } from "./playlist_detail.service"
import { PlayListDetail } from "../../models/PlayListDetail.model"

export default class PlaylistDetailController {
    static createPlaylistDetail = async (req: Request, res: Response) => {
        try {
            let { playlist_id, media_id } = req.body
            if(!playlist_id || !media_id) return res.status(400).json({msg:'Playlist_id or Media_id is Required !'})

            const checkDup = await PlayListDetail.count({where:{media_id:media_id,playlist_id:playlist_id}})
            if(checkDup > 0) return res.status(400).json({msg: 'Media already existed !'})

            let { dataValues }:any = await handleCreatePlaylistDetail({media_id,playlist_id})
            if(!dataValues) return res.status(400).json({msg: 'Create faild'})

            res.status(200).json(dataValues)
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' })
        }
        
    }
}