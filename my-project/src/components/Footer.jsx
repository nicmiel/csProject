import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src=''/>
            <p>SITE NAME</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src="" alt="" />
            </div>
            <div className="footer-icons-container">
                <img src="" alt="" />
            </div>
            <div className="footer-icons-container">
                <img src="" alt="" />
            </div>
        </div>
        <div className="footer-copyriht">
            <hr />
            <p>Copyriht @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer