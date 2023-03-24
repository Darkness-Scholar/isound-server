import { Request, Response } from "express"
import { handleCreatePlayList, handleDestroyPlayList, handleEditPlayList, handleGetPlayList } from "./playlist.service"
export default class PlayListController {
    static createPlayList = async (req: Request, res: Response) => {
        try {
            const user_id = req.user
            const { playlist_description, playlist_image, playlist_status } = req.body
            const { playlist_name, playlist_media } = req.body
            if(!playlist_name) return res.status(400).json({msg: 'Required value'})

            console.log(`Create Playlist Payload:`, playlist_name, playlist_description, playlist_image, playlist_status)

            const result = await handleCreatePlayList({
                playlist_name: playlist_name,
                playlist_status: playlist_status,
                playlist_image: playlist_image,
                playlist_description: playlist_description,
                user_id: user_id,
                playlist_media: playlist_media
            })

            if(result == null) return res.status(400).json({msg: 'Create faild'})

            res.status(200).json(result.dataValues)
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'Interval server error'})
        }
    }

    static getPlayList = async (req: Request, res: Response) => {
        try {
            const user_id = req.user

            const data = await handleGetPlayList({user_id})

            if(data == null) return res.status(400).json({msg: 'Get faild'})

            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'Interval server error'})
        }
    }

    static editPlayList = async (req: Request, res: Response) => {
        try {
            const user_id = req.user
            // const { playlist_id, playlist_name, playlist_status, playlist_image, playlist_description, playlist_media } = req.body
            
            const rowModified = await handleEditPlayList({ ...req.body, user_id })

            if (rowModified == null) return res.status(400).json({msg: 'Edit faild'})

            res.status(200).json({msg: 'Edit successfully'})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'Interval server error'})
        }
     }

    static destroyPlayList = async (req: Request, res: Response) => {
        try {
            const user_id = req.user
            const { playlist_id } = req.query

            const rowModified = await handleDestroyPlayList({
                user_id: user_id,
                playlist_id: playlist_id as string
            })

            if (rowModified == null) return res.status(400).json({msg: 'Destroy faild'})

            res.status(200).json({msg: 'Destroy successfully'})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'Interval server error'})
        }
    }
}