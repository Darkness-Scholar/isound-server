import { PlayListDetail } from "../../models/PlayListDetail.model"

interface iCreatePlaylistDetail {
    media_id: string,
    playlist_id: string
}

export async function handleCreatePlaylistDetail({media_id, playlist_id}:iCreatePlaylistDetail) : Promise<PlayListDetail|null> {
    try
    {
        let createPlaylistDetail = await PlayListDetail.create({
            media_id:media_id,
            playlist_id:playlist_id
        })

        return createPlaylistDetail
    }
    catch (error)
    {
        return null
    }
}