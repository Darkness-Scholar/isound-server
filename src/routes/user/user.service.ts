import User from "../../models/User.model"
import { generateTokens } from "../../services/token.service"
interface iSignup {
    username: string,
    password: string,
    email: string
}

export async function handleSignup ({ username, password, email }:iSignup): Promise<User|null> {
    try {
        let createdUser = await User.create({
            user_name: username,
            user_email: email,
            user_password: password
        })
        return createdUser
    } catch (error) {
        return null
    }
}