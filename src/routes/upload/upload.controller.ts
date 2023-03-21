import { Request, Response } from "express"
import { handleUploadMedia } from "./upload.service"

export default class UploadController {
    static media = async (req: Request, res: Response) => {
        try {
            const user_id = req.user
            const { media_name, media_description, media_cover, media_author, media_src } = req.body
            if(!media_name || !media_cover || !media_author || !media_src) return res.status(400).json({msg: 'Pls check required !'})

            const result = await handleUploadMedia({
                name: media_name,
                description: media_description,
                cover: media_cover,
                author: media_author,
                src: media_src,
                createdBy: user_id,
            })

            if (result === null) return res.status(400).json({msg: 'Upload failed !'})

            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            return res.status(500).json({msg: 'Internal server error !'})
        }
    }
}