import { Router } from "express"
import UserController from "./user.controller"
import { AuthMiddleware } from "../../middlewares/auth.middleware"

const user = Router()

user.post("/signin", UserController.signin)
user.post("/signup", UserController.signup)
user.get("/profile", AuthMiddleware , UserController.profile)

export default user 
