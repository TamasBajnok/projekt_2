import React, { useContext } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const {getTotalCartAmount,token, setToken,menu,setMenu} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout= ()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
      setMenu('home')

    }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>Kezdőlap</Link>
            <Link to='/menu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menü</Link>
            <Link to='/gallery' onClick={()=>setMenu("gallery")} className={menu==="gallery" ? "active" : ""}>Galéria</Link>
            <Link to='/events' onClick={()=>setMenu("events")} className={menu==="events" ? "active" : ""}>Események</Link>
            {token?<Link to='/reservation' onClick={()=>setMenu("reservation")} className={menu==="reservation" ? "active" : ""}>Asztalfoglalás</Link>:<Link to='/login' onClick={()=>{setShowLogin(true);setMenu("reservation")}} className={menu==="reservation" ? "active" : ""}>Asztalfoglalás</Link>}
        </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          {!token?<></>:<div><Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div></div>}
            
        </div>
        {!token? <Link to='/login'><button onClick={()=>setShowLogin(true)}>Bejelentkezés</button></Link>:<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myreservations')}><img src={assets.bag_icon} alt="" /><p>Foglalások</p></li>
              <hr/>
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Rendelések</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Kijelentkezés</p></li>
            </ul>
          </div>}
       
      </div>
    </div>
  )
}

export default Navbar

