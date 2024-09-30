import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const {cartItems,food_list,removeFromCart, getTotalCartAmount, url,token, setCartItems} = useContext(StoreContext)

  const navigate = useNavigate();

  return (

    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Ételek</p>
          <p>Név</p>
          <p>Ár</p>
          <p>Mennyiség</p>
          <p>Végösszeg</p>
          <p>Kivesz</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return (
              <div key={index}>
                  <div className='cart-items-title cart-items-item'>
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price} Ft</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price*cartItems[item._id]} Ft</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                  </div>
                  <hr />
              </div>
              
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Kosár végösszege</h2>
          <div>
            <div className="cart-total-details">
              <p>Részösszeg</p>
              <p>{getTotalCartAmount()} Ft</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Szállítási díj</p>
              <p>{getTotalCartAmount()===0?0:1500} Ft</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Végösszeg</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+1500} Ft</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Tovább a vásárláshoz</button>
        </div>
        <div className="cart-promocode">
        {/*<div>
            <p>Ha van kuponkódja, Írja be ide</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='kuponkód'/>
              <button>Felhasznál</button>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  )
}

export default Cart
