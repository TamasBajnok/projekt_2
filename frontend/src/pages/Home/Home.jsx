import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import FoodItem from '../../components/FoodItem/FoodItem'
import ScrollToTop from 'react-scroll-to-top'


const Home = ({setShowLogin}) => {

    const {token,setMenu,food_list} = useContext(StoreContext)
    const navigate= useNavigate();
    
    
        
 
    return(

    <div>
        
    <div className='header-home'>
        <div className="header-home-contents">
        <h2>Üdvözöljük nálunk!</h2>
        
        </div>
    </div>
        <div className="hero-text">
            <Link  onClick={()=>{window.scrollTo(0,0).then() }} to='/menu'  className="btn">Étlap megtekintése</Link>
            {token?<Link to='/reservation' onClick={()=>{window.scrollTo(0,0).then() }} className="btn">Asztalfoglalás</Link>:<Link to='/login' onClick={()=>{window.scrollTo(0,0);setShowLogin(true);setMenu("reservation"); }} className="btn">Asztalfoglalás</Link>}
        </div>
   


    <section className="about">
        <h2>Tisztelt Látogató!</h2>
        <p>Köszöntöm a győri Tomato étterem honlapján, ami egy új, modern, színes és barátságos vendéglő.</p>
        <p>Az étteremben 150 főt tudunk leültetni, de ha a vendégeink úgy kívánják kisebb létszámban zártkörű eseményeket is le tudunk bonyolítani.</p>
        <p>Minden héten színes és ízletes menüvel várjuk kedves vendégeinket, van lehetőség asztalfoglalásra, viszont ha nem szeretnének kimozdulni az otthonukból, akkor házhoz rendelést is vállalunk.</p>
        <p>Reméljük hamarosan Önt és családját is kedves vendégeink között üdvözölhetjük és a nálunk eltöltött idő után, szívesen visszatér még hozzánk.</p>
    </section>


    <section className="menu">
        <h2>Kiemelt Ételeink</h2>
        <div className="menu-items">
            <div className="menu-item">
                {food_list.map((food, index)=>{
                    if(food.status==1){
                        return <FoodItem key={index} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image} />
                    }
                    
                })}
            </div>
            <div className="menu-item">
            {food_list.map((food, index)=>{
                    if(food.status==2){
                        return <FoodItem key={index} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image} />
                    }
                    return <></>
                })}
            </div>
            <div className="menu-item">
            {food_list.map((food, index)=>{
                    if(food.status==3){
                        return <FoodItem key={index} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image} />
                    }
                    return <></>
                })}
            </div>
        </div>
        <Link to="/menu"  onClick={()=>{window.scrollTo(0,0).then() }} className="btn">Teljes étlap megtekintése</Link>
    </section>


    <section className="hours">
        <h2>Nyitvatartás</h2>
        <ul>
            <li>Hétfő - Péntek: 10:00 - 20:00</li>
            <li>Szombat: 10:00 - 21:00</li>
            <li>Vasárnap: 10:00 - 20:00</li>
        </ul>
    </section>
    <div className='place'>
        <h2>Helyszín</h2>
        <p>9021, Győr Baross Gábor utca</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.1529207270214!2d17.63493207592977!3d47.68145008280634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbff1ddd1ce2d%3A0xf34735370fd51d48!2zR3nFkXIsIEJhcm9zcyBHw6Fib3Igw7p0!5e0!3m2!1shu!2shu!4v1726484479140!5m2!1shu!2shu" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


    
  </div>
    )
}

export default Home
