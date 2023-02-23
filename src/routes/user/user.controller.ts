import { Request, Response } from "express"
import { handleSignup } from "./user.service"
import User from "../../models/User.model"
import { generateTokens } from "../../services/token.service"

import {compareSync } from 'bcrypt'

export default class UserController {
    static signin = async (req: Request, res: Response) => {
        try {
            let { email, password } = req.body

            if (!email || !password) return res.status(400).json({msg : 'Email or Password is required'})

            const result = await User.findOne({where:{user_email:email}})

            if (result === null) return res.status(400).json({msg: 'Invalid email or password'})

            const user = result?.dataValues

            if(!compareSync(password,user.user_password)) return res.status(400).json({msg: 'Invalid email or password'})

            const token = generateTokens({username: String(user?.user_email)})

            res.status(200).json({data:{id:user.user_id,user_email:user.user_email,user_name:user.user_name},token:token})
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
    static signup = async (req: Request, res: Response) => {
        try {
            let { name, password, email } = req.body
            
            if (!name || !password || !email) return res.status(400).json({msg: 'Email, Password or Name is required'})

            let user = await handleSignup({email,password,name})

            if(!(user instanceof User)) return res.status(400).json({msg: 'Email already exist !'})

            const result_user = user?.dataValues

            const token = generateTokens({username: String(result_user?.user_email)})

            res.status(200).json({user:{user_id:result_user.user_id,user_email:result_user.user_email,user_name:result_user.user_name},token:token,msg:'Account successfully created !'})

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