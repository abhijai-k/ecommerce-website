import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'
import x from '../Assets/x.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPEE</p>
        </div>
        <ul className="footer-links">
            <li>Comapy</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={x} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer