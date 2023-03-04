import { Request, Response } from "express"
import { handleSignup } from "./user.service"
import { JwtPayload } from "jsonwebtoken"
import User from "../../models/User.model"
import { generateTokens, decoder } from "../../services/token.service"

import {compareSync } from 'bcrypt'

export default class UserController {
    static signin = async (req: Request, res: Response) => {
        try {
            let { email, password } = req.body
            if (!email || !password) return res.status(400).json({msg : 'Email or Password is required'})
            const { dataValues }:any = await User.findOne({where:{user_email:email}})
            if (!dataValues) return res.status(400).json({msg: 'Invalid email or password'})
            if(!compareSync(password,dataValues.user_password)) return res.status(400).json({msg: 'Invalid email or password'})

            let token = generateTokens({user_id: String(dataValues.user_id)})

            res.status(200).json(token)
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
    static signup = async (req: Request, res: Response) => {
        try {
            let { name, password, email } = req.body
            if (!name || !password || !email) return res.status(400).json({msg: 'Email, Password or Name is required'})
            let { dataValues }:any = await handleSignup({email,password,name})
            if (!dataValues) return res.status(400).json({msg: 'Cannot sign up, this email is existed'})
            let token = generateTokens({user_id: String(dataValues.user_id)})
            res.status(200).json(token)

        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
    static profile = async (req: Request, res: Response) => {
        // let { access_token } = req.headers
        // let { user_id }:JwtPayload|any = decoder(String(access_token))
        let user = req.user

        let { dataValues }:any = await User.findByPk(user)
        // send user profile
        res.status(200).json(dataValues)
    }
}