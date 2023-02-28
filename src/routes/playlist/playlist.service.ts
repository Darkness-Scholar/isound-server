import PlayList from "../../models/PlayList.model";

interface iCreatePlayList {
    playlist_name: string,
    playlist_status: Boolean,
    playlist_image: string,
    playlist_description: string,
    user_id: string
}

export async function handleCreatePlayList({playlist_name, playlist_status, playlist_image, playlist_description, user_id} : iCreatePlayList) : Promise<PlayList|null> {
    try {
        let createPlayList = await PlayList.create({
            playlist_name: playlist_name,
            playlist_status: playlist_status,
            playlist_image: playlist_image,
            playlist_description:playlist_description,
            user_id: user_id
        })
        return createPlayList
    } catch (error) {
        return null
    }
}

interface iDestroyPlayList {
    playlist_id: string,
    user_id: string
}

export async function handleDestroyPlayList({playlist_id, user_id}:iDestroyPlayList) {
    try {
        let destroyPlaylist = await PlayList.destroy({
            where:{
                playlist_id:playlist_id,
                user_id:user_id
            }
        })
        return destroyPlaylist
    } catch (error) {
        return null
    }
}

interface iHandleInfoPlayList {
    playlist_id: string,
    user_id: string,
    playlist_name: string,
    playlist_status: Boolean,
    playlist_description: string,
    playlist_image: string
}

export async function handleEditPlayList({playlist_id, user_id, playlist_name, playlist_description,playlist_image,playlist_status}:iHandleInfoPlayList) {
    try {
        let handleInfo = await PlayList.update({
            playlist_name: playlist_name,
            playlist_image: playlist_image,
            playlist_status: playlist_status,
            playlist_description:playlist_description
        },{
            where:{
                user_id:user_id,
                playlist_id:playlist_id
            }
        })

        return handleInfo
    } catch (error) {
        return null
    }
}
