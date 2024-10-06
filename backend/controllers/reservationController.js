import reservationModel from "../models/reservationModel.js";
import userModel from "../models/userModel.js";


const sendReservation = async(req,res)=>{
    const frontend_url = "http://localhost:5174"
    
    

    try {
        const newReservation = new reservationModel({
            userId:req.body.userId,
            name:req.body.name,
            email:req.body.email,
            person:req.body.person,
            arriveDate:req.body.arriveDate,
            arriveDateAsNumber:req.body.arriveDateAsNumber,
            time:req.body.time,
            phone:req.body.phone

        })
        await newReservation.save();
        
    
         res.json({success:true,message:"Success"})
    }catch (error) {
        console.log("Error")
         res.json({success:false,message:"Error"})
        }
}


const userReservations = async (req,res) =>{
    try {
        const reservations = await reservationModel.find({userId:req.body.userId})
        res.json({success:true,data:reservations})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
    }
}

const placeOrder = async(req,res) =>{
    const frontend_url = "http://localhost:5174"

    try {


        await reservationModel.findOneAndUpdate({_id:req.body._id},{items:req.body.items});
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        res.json({success:true,message:"Success"})
    } catch (error) {
        console.log("Error")
        res.json({success:false,message:"Error"})
    }
}

const changeOrder = async(req,res) =>{

    try {
        let reservationData = await reservationModel.findById(req.body._id);
        let cartData = reservationData.items
        await reservationModel.findByIdAndUpdate(req.body._id,{items:[]});
        
        
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})   
    }

}


const showReservations = async (req,res) =>{
    try {
        const reservations = await reservationModel.find({})
        res.json({success:true,data:reservations})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
    }
}

const deleteReservation = async (req,res) =>{
    try {
        await reservationModel.findByIdAndDelete(req.body._id)
        res.json({success:true,message:"Reservation Deleted"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
    }

}

const changeData = async (req,res) =>{
    try {
        await reservationModel.findOneAndUpdate({_id:req.body._id},{person:req.body.person,arriveDate:req.body.date, time:req.body.time, arriveDateAsNumber: req.body.arriveDateAsNumber});
        res.json({success:true,message:"Successfully updated"})
    } catch (error) {
        console.log("Error")
        res.json({success:false,message:"Error"})
    }
}

const statusChange= async(req,res)=>{
    try{
        await  reservationModel.findOneAndUpdate({_id:req.body.id},{status:req.body.status})
        res.json({success:true,message:"Successfully updated"})
    }
    catch (error) {
        console.log("Error")
        res.json({success:false,message:"Error"})
    }
}



export {sendReservation,userReservations, placeOrder, changeOrder, showReservations,deleteReservation, changeData,statusChange}