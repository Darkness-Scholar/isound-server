import { Router } from "express"
import UserController from "./user.controller"

const user = Router()

user.post("/signin", UserController.signin)
user.post("/signup", UserController.signup)
user.get("/profile", UserController.profile)

export default user 
