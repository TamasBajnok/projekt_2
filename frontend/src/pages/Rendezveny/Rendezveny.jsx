import React, {useContext, useEffect} from 'react'
import './Rendezveny.css'
import { StoreContext } from '../../context/StoreContext'
import {Link} from 'react-router-dom'

const Rendezveny = () => {

  const {setMenu} = useContext(StoreContext);

  useEffect(() => {
    setMenu("events");
  },[]);

  return (
    <div className='event'>
      <div className='title-event'>
        <div className="title-event-contents">
          <h2>Rendezvények</h2>
          <p>Éttermünk tökéletes helyszín esküvők és vacsorák szervezésére, ahol egy kellemes környezetben van lehetőség a különleges alkalmat eltölteni szeretteivel.</p>
        </div>
      </div>

      <div className='details-event'>
        <div className='details-event-contents'>        
          <h1>Részletek</h1>
          <p>Az étterem épületében több terem is kérés esetén rendelkezésre áll, amelyeknek
             köszönhetően akár több száz vendég is ellátásra kerülhet. A helyszín nincs messze
             a belvárostól, így egyszerre könnyen elérhető és mégsem zavar a belváros zaja.
              A gyönyörű környezet és kíváló ételeknek köszönhetően nincs jobb helyszín rendezvényének leszervezésére.</p>
          <h2>Szolgáltatások</h2>
            <ul>
              <li>3 terem melyek összesen 150 fő befogadására képesek</li>
              <li>A vendégek kiszolgálása</li>
              <li>A vendégek fogadása</li>
              <li>Rendezvényhez szükséges technika szolgáltatása</li>
              <li>Rendezvény teljes lebonyolítása</li>
              <li>Kért dekoráció elkészítése</li>
            </ul>
          <h2>Vállalt rendezvények</h2>
          <ul>
            <li>céges események</li>
            <li>esküvők</li>
            <li>legény és leánybúcsúk</li>
            <li>egyéb rendezvények</li>
          </ul>
        </div>
        <img src = "/eventdetails.jpg" alt = 'Details Picture' />
      </div>

      <div className='room-event'>
        <div className='room-event-contents'>
          <h1>Nagy rendezvény terem</h1>
          <ul>
            <li>Rendelkezésre álló helyek száma: 100</li>
            <li>Fűtött és légkondicionált</li>
            <li>Mozgássérült barát</li>
          </ul>
        </div>
        <div className='event-gallery'>
          <img src='/first_room_2.jpg' alt='First Room Pic 1'/>
          <img src='/first_room_1.jpg' alt='First Room Pic 2'/>
          <Link to='/gallery' onClick={()=>{window.scrollTo(0,0).then()}}>Galéria</Link>
          <img src='/first_room_3.jpg' alt='First Room Pic 3'/>
        </div>
      </div>

      <div className='room-event'>
        <div className='room-event-contents'>
          <h1>Kis rendezvény terem</h1>
          <ul>
            <li>Rendelkezésre álló helyek száma: 50</li>
            <li>Fűtött és légkondicionált</li>
            <li>Kíváló panorámával rendelkezik</li>
          </ul>
        </div>
        <div className='event-gallery'> 
            <img src='/second_room_3.jpg' alt='Second Room Pic 1' />
            <img src='/second_room_1.jpg' alt='Second Room Pic 2' />
            <Link to='/gallery' onClick={()=>{window.scrollTo(0,0).then();setMenu("gallery")}}>Galéria</Link>
            <img src='/second_room_2.jpg' alt='Second Room Pic 3' />
        </div>
      </div>

      <div className='food-event'>
        <div className='food-event-contents'>
          <h1>Étel ajánlatok</h1>
          <p>Az étterem menüje hatalmas kínálattal rendelkezik,
             melyek mindegyikét kívánságra elkészítjük az ön rendezvényére.
              Ha nem tud választani forduljon a kapcsolat felvevő kollégánkhoz
              , akihez saját kívánságaival is fordulhat.</p>
        </div>
        <div className='event-gallery'> 
            <img src='/food_1.png' alt='Food Event Pic 1' />
            <img src='/food_18.png' alt='Food Event Pic 2' />
            <Link to='/menu' onClick={() =>{window.scrollTo(0,0).then(); setMenu("menu")}}>Menü</Link>
            <img src='/food_25.png' alt='Food Event Pic 3' />
        </div>
      </div>

      <div className='contact-event'>
        <h1>Kérjen ajánlatot!</h1>
        <ol>
          <li>+36 70 3378679</li>
          <li>contact@tomato.com</li>
        </ol>
      </div>
    </div>
  )
}

export default Rendezveny
