import React, { useContext, useState } from 'react'
import './LoginAndRegister.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const LoginAndRegister = ({setShowLogin}) => {

  const {url, token, setToken,setCartItems,setMenu} = useContext(StoreContext)
  const navigate = useNavigate()

    const [currState,setCurrState] = useState("Login")
    const [data, setData] = useState({
      name:"",
      email:"",
      password:"",
      password_second:""
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]: value}))
    }

    const onLogin = async (event) =>{
        if(data.password===data.password_second || currState==="Login"){
        event.preventDefault()
        let newUrl = url;
        if(currState==="Login"){
          newUrl += "/api/user/login"
        }
        else{
          newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token)
          setShowLogin(false)
          navigate('/')
          setCartItems({})
          setMenu('home')
        }
        else {
          alert(response.data.message)
        }
        }
        else{
            event.preventDefault()
            alert("The passwords are not matching.")
        }

    }

  return (
    <div className='login-popup'>
       <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            {currState==="Login"?<h2>Bejelentkezés</h2>:<h2>Regisztráció</h2>}
            
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:  <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Név' required />}
           
            <input name='email' onChange={onChangeHandler} value={data.email} type="email"  placeholder='Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Jelszó' required/>
            {currState==="Sign Up"&&<input name='password_second' onChange={onChangeHandler} value={data.password_second} type='password' placeholder='Jeszó megerősítő' required/>}
        </div>
        <button type='submit'>{currState==="Sign Up" ? "Fiók létrehozása" : "Bejelentkezés"}</button>
        <div className="login-popup-condition">
            {currState==="Sign Up"&&<input type="checkbox" required/>}
            {currState==="Sign Up"&&<p>A folytatáshoz elfogadom az adatvédelmi és adatkezelési szabályzatokat</p>}
        </div>
        {currState==="Login"
        ?<p>Készítene egy új fiókot? <span onClick={()=>setCurrState("Sign Up")}>Kattintson ide</span></p>
        :<p>Már van fiókja? <span onClick={()=>setCurrState("Login")}>Bejelentkezés</span></p>}
        
       
       </form>
    </div>
  )
}

export default LoginAndRegister
