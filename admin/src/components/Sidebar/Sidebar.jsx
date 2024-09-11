import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Étel hozzáadás</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Ételek listázása</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Rendelsék</p>
        </NavLink>
        <NavLink to='/reservations' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Asztalfoglalások</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
