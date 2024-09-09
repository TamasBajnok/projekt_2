import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://TotesBajnok:Szeva1222@cluster0.bt9sy.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}