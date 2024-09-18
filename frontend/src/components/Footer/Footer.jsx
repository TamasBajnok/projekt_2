import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Köszönjük mindenkinek, aki támogatta ezt projektet!</p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com" target='_blank'><img src={assets.facebook_icon} alt="" /></a>
                <a href="https://x.com" target='_blank'><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://www.linkedin.com" target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Cég</h2>
            <ul>
                <li>Kezdőlap</li>
                <li>Szállítás</li>
                <li>Adatvédelem</li>
            </ul>   
        </div>
        <div className="footer-content-right">
           <h2>Keressen minket</h2>
           <ul>
            <li>+36 70 3378679</li>
            <li>contact@tomato.com</li>
           </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
