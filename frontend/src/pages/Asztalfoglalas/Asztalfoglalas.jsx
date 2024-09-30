import React, { useContext, useState } from 'react'
import './Asztalfoglalas.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Asztalfoglalas = () => {

  const {url,token,setMenu} = useContext(StoreContext)
  setMenu("reservation")
  const navigate = useNavigate()

  const [data,setData] = useState({
    name:"",
    email:"",
    person:"",
    arriveDate:"",
    arriveDateAsNumber: "",
    time:"",
    phone:"",

  })

  

  const onChangeHandler=(event)=>{
    console.log(data.time)
    const name= event.target.name
    const value= event.target.value
    setData(data=>({...data,[name]:value}))
    if(data.arriveDate!=""){
    data.arriveDateAsNumber=data.arriveDate[0]+data.arriveDate[1]+data.arriveDate[2]+data.arriveDate[3]+data.arriveDate[5]+data.arriveDate[6]+data.arriveDate[8]+data.arriveDate[9]}
    console.log(data.arriveDateAsNumber)
  }

  const sendData = async (event) =>{
    event.preventDefault();
    const response = await axios.post(url+'/api/reservation/send',data,{headers:{token}})
    if (response.data.success) {
      
      navigate('/myreservations')
    }
    else {
      alert(response.data.message)
    }
  
  }
 
  return (
      
    <div className='reservation'>
    <form onSubmit={sendData} className="reservation-container">
     <div className="reservation-title">
         <h2>Foglalás</h2>
     </div>
     <div className="reservation-inputs">
         <input name='name' type="text" placeholder='Név' required onChange={onChangeHandler} value={data.name}/>
        
         <input name='email' type="email"  placeholder='Email' required onChange={onChangeHandler} value={data.email}/>
         <input name="person"  type="number" min="2" max="24" placeholder='Létszám' required onChange={onChangeHandler} value={data.person}/>
         <input name='arriveDate' type="date" placeholder='Dátum' min={{Date}}required onChange={onChangeHandler} value={data.arriveDate}/>
         <select name="time" required onChange={onChangeHandler} value={data.time} >
          <option value="">Időpont</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
         </select>
         <input onChange={onChangeHandler} value={data.phone} name='phone' type="text" placeholder='Telefonszám' required/>
     </div>
     <button type='submit'>Küldés</button>
    
    </form>
 </div>
  )
}

export default Asztalfoglalas
