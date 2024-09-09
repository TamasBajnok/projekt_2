import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
//import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import Menu from './pages/Menu/Menu'
import Galeria from './pages/Galeria/Galeria'
import Rendezveny from './pages/Rendezveny/Rendezveny'
import Asztalfoglalas from './pages/Asztalfoglalas/Asztalfoglalas'
import MyReservations from './pages/MyReservations/MyReservations'
import ScrollToTop from "react-scroll-to-top";
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
//<Route path='/login' element={showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}/>
  return (
    <>
    
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/login' element={showLogin?<LoginAndRegister setShowLogin={setShowLogin} />:<></>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify />}/>
        <Route path='/myreservations' element={<MyReservations />}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/gallery' element={<Galeria/>}/>
        <Route path='/events' element={<Rendezveny/>}/>
        <Route path='/reservation' element={<Asztalfoglalas/>}/>

      </Routes>
    </div>
    
      <ScrollToTop smooth />
      <Footer/>
    </>
  )
}

export default App
