import { hashSync } from "bcrypt"
import User from "../../models/User.model"
import { generateTokens } from "../../services/token.service"
interface iSignup {
    name: string,
    password: string,
    email: string
}

export async function handleSignup ({ name, password, email }:iSignup): Promise<User|null> {
    try {
        let createdUser = await User.create({
            user_name: name,
            user_email: email,
            user_password: hashSync(password,10)
        })

        return createdUser
    } catch (error) {
        return null
    }
}