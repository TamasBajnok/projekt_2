import React from 'react'
import './Reservation.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {toast} from "react-toastify"



const Reservations = ({url}) => {

    const [reservations,setReservations] = useState([])
    const [mod,setMod] = useState(false)
    const [id,setId] = useState("")

    const [data,setData] = useState({
      person:"",
      date:"",
      arriveDateAsNumber:""
    })

    

    const fetchAllReservations = async ()=>{
        const response = await axios.get(url+"/api/reservation/list");
        if (response.data.success) {
            setReservations(response.data.data);
          console.log(response.data.data)
        }else{
          toast.error("Error")
        }
      }

      const deleteReservation = async (_id) => {
        const response = await axios.post(url+"/api/reservation/delete",{_id:_id});
        await fetchAllReservations()
        if (response.data.success) {
            toast.success(response.data.message)
        }else{
          toast.error("Error")
        }
      }

      const onChangeHandler=(event)=>{
        const name= event.target.name
        const value= event.target.value
        setData(data=>({...data,[name]:value}))
        if(data.arriveDate!=""){
          data.arriveDateAsNumber=data.date[0]+data.date[1]+data.date[2]+data.date[3]+data.date[5]+data.date[6]+data.date[8]+data.date[9]}
          console.log(data.arriveDateAsNumber)
  
      }

      const changeData = async(id,person,date,time)=>{
        if(data.person>=0){
          if(data.person==0){
            data.person=person
          }
          if(data.date==""){
            data.date=date

          }
            data.arriveDateAsNumber=data.date[0]+data.date[1]+data.date[2]+data.date[3]+data.date[5]+data.date[6]+data.date[8]+data.date[9]
            if(data.time==""){
            data.time=time
            }
        
            const response = await axios.post(url+"/api/reservation/changeData",{_id:id,person:data.person,date:data.date,time:data.time, arriveDateAsNumber:data.arriveDateAsNumber});
            if (response.data.success) {
            toast.success(response.data.message)
          }else{
            toast.error("Error")
          }
          setMod(false)
          fetchAllReservations()
          data.person="";
          data.date=""
        }
        else{
          alert("Hiba")
        }
      }
        
      
      const changeStatus= async(id, bool)=>{
        const response = await axios.post(url+"/api/reservation/statusChange",{id:id,status:bool});
        if (response.data.success) {
          toast.success(response.data.message)
        }else{
          toast.error("Error")
        }
        fetchAllReservations()

      }
      
        
    

      useEffect(()=>{
        fetchAllReservations()
      },[])

  return (
    <div className='my-reservations'>
      <h3>Asztalfoglalások oldal</h3>
      <div className="container">
        {reservations.map((reservation,index)=>(
            <div key={index} className="my-reservation-order">
            <p>Név: {reservation.name}</p>
           {mod && id==reservation._id? <p>Létszám: <input type="number" min="2" max="24" value={data.person} name="person" onChange={onChangeHandler} placeholder={reservation.person}></input></p> : <p>Létszám: {reservation.person}</p>}
           {mod && id==reservation._id?<p>Dátum: <input type="date"  value={data.date} name="date" onChange={onChangeHandler} placeholder={reservation.arriveDate[0]+reservation.arriveDate[1]+reservation.arriveDate[2]+reservation.arriveDate[3]+reservation.arriveDate[4]+reservation.arriveDate[5]+reservation.arriveDate[6]+reservation.arriveDate[7]+reservation.arriveDate[8]+reservation.arriveDate[9]}></input></p>:<p>Dátum: {reservation.arriveDate[0]}{reservation.arriveDate[1]}{reservation.arriveDate[2]}{reservation.arriveDate[3]}{reservation.arriveDate[4]}{reservation.arriveDate[5]}{reservation.arriveDate[6]}{reservation.arriveDate[7]}{reservation.arriveDate[8]}{reservation.arriveDate[9]}</p>}
           {mod && id==reservation._id? <p> Időpont: 
           <select name="time" onChange={onChangeHandler} value={data.time} placeholder={reservation.time}>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
         </select></p>

           :<p>Időpont: {reservation.time}</p>}

            <p>Telefonszám: {reservation.phone}</p>
            <p>Email: {reservation.email}</p>
            <div className='food'>
            {reservation.items.length!==0?<p className='reservation-item-food'>Ételek: {reservation.items.map((item,index)=>{
                if (index === reservation.items.length-1) {
                    return item.name+" x "+item.quantity
                }
                else{
                    return item.name+" x "+item.quantity+", "
                }
            })}</p>
          :<p>Ételek: nincs</p>}
          </div>
          
          {reservation.status==null && <div><button className='accept_button' onClick={()=>changeStatus(reservation._id,true)}>Foglalás elfogadása</button><button className='accept_button' onClick={()=>changeStatus(reservation._id, false)}>Foglalás elutsaítása</button></div>}
          {reservation.status ? <div><button className='choosen_button_good'>Elfogadva</button><button className='accept_button' onClick={()=>changeStatus(reservation._id, false)}>Foglalás elutsaítása</button></div>: reservation.status==false && <div><button className='accept_button' onClick={()=>changeStatus(reservation._id,true)}>Foglalás elfogadása</button><button className='choosen_button_bad'>Elutasítva</button></div>}
          
          {(mod && id==reservation._id)?<button onClick={()=>changeData(reservation._id,reservation.person,reservation.arriveDate, reservation.time)}>Mentés</button>:<button onClick={()=>{setMod(true),setId(reservation._id)}}>Változtatás</button>}
          {(mod && id==reservation._id)?<button onClick={()=>setMod(false)}>Vissza</button>:<button onClick={()=>deleteReservation(reservation._id)}>Törlés</button>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reservations
