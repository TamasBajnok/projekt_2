import express from "express"
import authMiddleware from "../middleware/auth.js"
import { sendReservation, userReservations,placeOrder, changeOrder, showReservations, deleteReservation, changeData, statusChange } from "../controllers/reservationController.js"

const reservationRouter = express.Router()

reservationRouter.post("/send",authMiddleware,sendReservation)
reservationRouter.post("/reservations",authMiddleware,userReservations)
reservationRouter.post("/save",authMiddleware,placeOrder)
reservationRouter.post("/change",authMiddleware,changeOrder)
reservationRouter.get("/list",showReservations)
reservationRouter.post("/delete",deleteReservation)
reservationRouter.post("/changedata",changeData)
reservationRouter.post("/statuschange",statusChange)


export default reservationRouter;