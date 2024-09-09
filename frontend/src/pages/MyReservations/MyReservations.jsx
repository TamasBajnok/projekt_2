import React, { useContext, useEffect, useState } from 'react'
import './MyReservations.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';


const MyReservations = () => {
    
    const {url,token,food_list,cartItems, setCartItems} = useContext(StoreContext);
    const [data,setData] = useState([]);
    const navigate = useNavigate()

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/reservation/reservations",{},{headers:{token}})
        setData(response.data.data);
        
      
    }

    useEffect(()=>{
        if(token){
            fetchOrders();

        }
    },[token])
    

    const placeOrder = async (id) =>{
      //event.preventDefault();
      let orderItems = [];
      food_list.map((item)=>{
        if (cartItems[item._id]>0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo)
        }
      })
        let orderData = {
          _id:id,
          items: orderItems,
        }
      
      
      let response = await axios.post(url+"/api/reservation/save",orderData,{headers:{token}})
      if(response.data.success) {
        console.log("success")
      }
      else{
        alert("Error");
      }
      fetchOrders();
      setCartItems({})
    }


    const changeOrder= async(id,piece)=>{
      const data = {
        _id:id,
        piece:piece
      }
      let response = await axios.post(url+"/api/reservation/change",data,{headers:{token}})
      const foods = response.data.cartData
       let cart = {}
      for(let i=0; i<foods.length;i++)
        {
          let id=foods[i]._id
          let quantity=foods[i].quantity
          
          cart[id]= quantity
          
          
        }
      setCartItems(cart)
      navigate("/cart")
      
      

      
    }
    let dt = new Date()
    let today = String(dt.getFullYear())
    if(String((dt.getMonth()+1)).length==1){
      today=today+"0"+String(dt.getMonth()+1)
    }
    else{
      today= today+String(dt.getMonth()+1)
    }
    if(String(dt.getDate()).length==1){
      today+="0"+String(dt.getDate())
    }
    else{
      today+=String(dt.getDate())
    }

  return (
    <div className='my-reservations'>
      <h2>My Reservations</h2>
      <div className="container">
        {data.map((reservation,index)=>{
            return(
              
                
                   <div key={index} className="my-reservation-order">
                    <p>Name: {reservation.name}</p>
                    <p>Person: {reservation.person}</p>
                    <p>Date: {reservation.arriveDate[0]}{reservation.arriveDate[1]}{reservation.arriveDate[2]}{reservation.arriveDate[3]}{reservation.arriveDate[4]}{reservation.arriveDate[5]}{reservation.arriveDate[6]}{reservation.arriveDate[7]}{reservation.arriveDate[8]}{reservation.arriveDate[9]}</p>
                    <p>Time: {reservation.time}</p>
                    {reservation.items.length!==0?<p>Food: {reservation.items.map((item,index)=>{
                        if (index === reservation.items.length-1) {
                            return item.name+" x "+item.quantity
                        }
                        else{
                            return item.name+" x "+item.quantity+", "
                        }
                    })}</p>
                  :<p>Food: none</p>}
                  
                    {reservation.arriveDateAsNumber<=today?<button>You can't change now anything</button>:reservation.items.length==0?<button onClick={()=>placeOrder(reservation._id)}>Add foods from cart</button>:<button onClick={()=>changeOrder(reservation._id,reservation.items.length-1)}>Change</button>}
                    
                    
                    
                    </div>
                
            )
        })}
      </div>
    </div>
  )
}

export default MyReservations
