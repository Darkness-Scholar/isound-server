import { Request, Response } from "express"
import PlayList from "../../models/PlayList.model"
import { handleCreatePlayList, handleDestroyPlayList, handleEditPlayList } from "./playlist.service"
import { PlayListDetail } from "../../models/PlayListDetail.model"
import PlayListTest from "../../models/PlayListTest.model"
export default class PlayListController {
    static getPlayListByUser = async (req: Request, res: Response) => {
        try {
            let user = req.user
            const data = await PlayList.findAll({
                attributes:['playlist_id','playlist_name'],
                where:{user_id:user}, 
                include:{
                    model:PlayListDetail,
                    attributes:['media_id']
                }
            })

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

    static createTest = async (req: Request, res: Response) => {
        try {
            let user_id = req.user
            let { playlist_name,playlist_media } = req.body
            if(!playlist_media || !playlist_name) return res.status(400).json({msg: 'Required value'})
            // Example playlist_media : [{"media_id":"4095zvSr4PI","media_name":"Lofi chill"},{"media_id":"r5YZY2N6UWg","media_name":"Kiep Ma Hong"}]
            let result = await PlayListTest.create({
                playlist_name: playlist_name,
                playlist_media: playlist_media,
                user_id: user_id
            })

            if(!(result instanceof PlayListTest)) return res.status(400).json({msg: 'Create faild'})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'Interval server error'})
        }
    }

    static getTest = async (req: Request, res: Response) => {
        try {
            let user_id = req.user

            const {dataValues}:any = await PlayListTest.findOne({where:{user_id:user_id}})

            let tmp = JSON.parse((dataValues.playlist_media as string).replace("'",""))

            console.log(tmp)

            res.status(200).json({
                playlist_id:dataValues.playlist_id,
                playlist_name:dataValues.playlist_name,
                playlist_status:dataValues.playlist_status,
                playlist_image:dataValues.playlist_image,
                playlist_description:dataValues.playlist_description,
                playlist_media:tmp
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'Interval server error'})
        }
    }
}