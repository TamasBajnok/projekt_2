import React from 'react'
import './Orders.css'
import { useState } from 'react'
import axios from 'axios'
import {toast} from "react-toastify"
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

  const [orders,setOrders] = useState([])
  const [change, setChange] = useState("")

  const fetchAllOrders = async ()=>{
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data)
    }else{
      toast.error("Error")
    }
      
  }

  const statusHandler = async(event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  const onChangeHandler= async (event)=>{
   
    const response = await axios.post(url+"/api/order/listbystatus",{status:event.target.value});
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data)
    }else{
      toast.error("Error")
    }
  }

  

  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className='order add'>
      <h3>Rendelések oldal</h3>
      <select name="process" onChange={onChangeHandler} >
      <option value="All">Összes</option>
        <option value="Folyamatban">Folyamatban</option>
        <option value="Szállítás alatt">Szállítás alatt</option>
        <option value="Kiszállítva">Kiszállítva</option>
      </select>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>{order.items.map((item,index)=>{
                if (index===order.items.length-1) {
                  return item.name + " x " + item.quantity
                }
                else{
                  return item.name + " x " + item.quantity + ", "
                }
              })}
              </p>
              <p className="order-item-name">{order.address.lastName+" "+order.address.firstName}</p>
              <div className="order-item-address">
                <p>{order.address.zipcode+", "+order.address.city+","}</p>
                <p>{order.address.street}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Ételek : {order.items.length}</p>
            <p>{order.amount} Ft</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Folyamatban">Folyamatban</option>
              <option value="Szállítás alatt">Szállítás alatt</option>
              <option value="Kiszállítva">Kiszállítva</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
