export interface iThumbnail {
    url: string,
    width: number | string,
    height: number | string,
}

export interface iAuthor {
    id: string,
    name: string,
    user: string,
    channel_url: string,
    user_url: string,
    thumbnails: Array<iThumbnail>,
    verified: boolean,
}

export interface iRelatedVideos {
    id: string,
    title: string,
    punlished: string,
    author: iAuthor,
    short_view_count_text: string,
    view_count: string,
    length_seconds: number,
    thumbnails: Array<iThumbnail>,
    richThumbnails: any,
    isLive: boolean
}