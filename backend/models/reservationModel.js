import mongoose from "mongoose"

const reservationSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
    person:{type:Number, required:true},
    arriveDate:{type:Date, required: true},

    arriveDateAsNumber:{type:String, required: true},

    time:{type:String,required:true},
    phone:{type:String,required:true},
    reservationDate:{type:Date,default:Date.now()},
    items:{type:Array,default:[]},

    
})

const reservationModel = mongoose.models.reservation || mongoose.model("reservation",reservationSchema)

export default reservationModel;