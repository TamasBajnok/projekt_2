import express from "express"
import { loginUser, registerUser, /*forgottenPassword, resetPassword*/ } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
/*userRouter.post("/forgot-password",forgottenPassword)
userRouter.get("/reset-password",resetPassword)*/

export default userRouter;