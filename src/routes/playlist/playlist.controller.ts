import { Request, Response } from "express"
import PlayList from "../../models/PlayList.model"
import { handleCreatePlayList, handleDestroyPlayList, handleEditPlayList } from "./playlist.service"
import { PlayListDetail } from "../../models/PlayListDetail.model"
export default class PlayListController {
    static getPlayListByUser = async (req: Request, res: Response) => {
        try {
            let user = req.user
            const data = await PlayList.findAll({attributes:['playlist_id','playlist_name'],where:{user_id:user}, include:{model:PlayListDetail,attributes:['media_id']}})

            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' })
            console.log(error)
        }
    }

    static createPlayList = async (req: Request, res: Response) => {
        try {
            let { playlist_name } = req.body
            let { playlist_description, playlist_image, playlist_status }:any = req.body
            let user_id = req.user
            if (!playlist_name) return res.status(400).json({msg: 'Playlist Name is required !'})
            
            let { dataValues }:any = await handleCreatePlayList({ playlist_name, playlist_status, playlist_image, playlist_description, user_id})

            res.status(200).json(dataValues)
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' })
        }
    }

    static destroyPlaylist = async (req: Request, res: Response) => {
        try {
            let user_id = req.user
            let { playlist_id } = req.body
            if (!playlist_id) return res.status(400).json({msg: 'Playlist ID is required !'})

            const destroy = await handleDestroyPlayList({ user_id, playlist_id })
            if(!destroy) return res.status(400).json({msg: 'Destroy faild !'})
            
            res.status(200).json({msg: 'Destroy successfully !'})
        } catch (error) {
            res.status(500).json({msg: 'Interval server error'})
        }
    }

    static editPlayList = async (req: Request, res: Response) => {
        try {
            let user_id = req.user
            let { playlist_id } = req.body
            if (!playlist_id) return res.status(400).json({msg: 'Playlist ID is required !'})
            let { playlist_name, playlist_status, playlist_description, playlist_image }:any = req.body

            const handle = await handleEditPlayList({ playlist_id, user_id, playlist_name, playlist_description, playlist_image, playlist_status})
            
            if(!handle?.[0]) return res.status(400).json({msg: 'Edit faild'})

            res.status(200).json({msg: 'Edit playlist successfully !'})
        } catch (error) {
            res.status(500).json({msg: 'Interval server error'})
        }
    }
}