import PlayList from "../../models/PlayList.model";

interface iCreatePlayList {
    playlist_name: string
    playlist_status: Boolean
    playlist_image: string
    playlist_description: string
    user_id: string
    playlist_media: Array<string>
}

export async function handleCreatePlayList({
    playlist_name, 
    playlist_status, 
    playlist_image, 
    playlist_description, 
    user_id, 
    playlist_media} : iCreatePlayList) : Promise<PlayList|null> {
    try {
        let createPlayList = await PlayList.create({
            playlist_name: playlist_name,
            playlist_status: playlist_status,
            playlist_image: playlist_image,
            playlist_description:playlist_description,
            user_id: user_id,
            playlist_media:playlist_media
        })
        // Example playlist_media : [{"media_id":"4095zvSr4PI","media_name":"Lofi chill"},{"media_id":"r5YZY2N6UWg","media_name":"Kiep Ma Hong"}]
        return createPlayList
    } catch (error) {
        console.log(error)
        return null
    }
}

interface iGetPlayList {
    user_id: string
}

export async function handleGetPlayList({user_id}:iGetPlayList) : Promise<PlayList[]|null> {
    try {
        let data = await PlayList.findAll({where:{user_id:user_id}})

        data.forEach(element => {
               if(element.dataValues.playlist_media){
                let tmp = JSON.parse((element.dataValues.playlist_media as unknown as string).replace("'",""))
                element.dataValues.playlist_media = tmp
               }
        });

        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

interface iEditPlayList {
    playlist_id: string
    playlist_name: string
    playlist_status: boolean
    playlist_image: string
    playlist_description: string
    user_id: string
    playlist_media: Array<string>
}

export async function handleEditPlayList({
    playlist_id,
    playlist_name, 
    playlist_status, 
    playlist_image, 
    playlist_description, 
    user_id, 
    playlist_media} : iEditPlayList) {
        try {
            let result = await PlayList.update({
                playlist_name: playlist_name,
                playlist_status: playlist_status,
                playlist_image: playlist_image,
                playlist_description: playlist_description,
                playlist_media: playlist_media
            },{
                where:{ user_id : user_id, playlist_id: playlist_id}
            })

            return result
        } catch (error) {
            console.log(error)
            return null
        }
}

interface iDestroyPlayList {
    playlist_id: string,
    user_id: string
}

export async function handleDestroyPlayList({playlist_id,user_id}:iDestroyPlayList) {
    try {
        let result = PlayList.destroy({
            where:{
                user_id: user_id,
                playlist_id: playlist_id
            }
        })

        return result
    } catch (error) {
        console.log(error)
        return null
    }
}
