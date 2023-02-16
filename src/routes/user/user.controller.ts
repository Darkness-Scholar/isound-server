import { Request, Response } from "express"

export default class UserController {
    static signin = async (req: Request, res: Response) => {
        try {
            let { username, password } = req.body
            if (!username || !password) return res.status(400).json("username or password is required")
            res.status(200).json({ username: 'test', token: 'test_token' })
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
    static signup = async (req: Request, res: Response) => {
        try {
            let { username, password, email } = req.body
            if (!username || !password || !email) return res.status(400).json("username or password is required")
            res.status(200).json({ username: 'test', token: 'test_token' })
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
    static profile = async (req: Request, res: Response) => {
        let { token } = req.headers
        console.log(token)
        // send user profile
        res.status(200).json({
            username: 'test',
            email: 'test@email.com'
        })
    }
}