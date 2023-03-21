import Media from "../../models/Media.model"

interface iUploadMedia {
    name: string
    description?: string
    cover: string
    author: string
    src: string
    createdBy: string
}

export async function handleUploadMedia({name,description,cover,author,src,createdBy}:iUploadMedia): Promise<Media|null> {
    try {
        const result = await Media.create({
            name: name,
            description: description,
            cover: cover,
            author: author,
            src: src,
            createdBy: createdBy
        })
        if (result instanceof Media) return result

        return null
    } catch (error) {
        console.log(error)
        return null
    }
}