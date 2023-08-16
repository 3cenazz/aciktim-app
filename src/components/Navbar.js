import React, {useState} from 'react'
import Logo from '../img/icon.png'
import {Link} from 'react-router-dom' 
import '../styles/Navbar.css'


function Navbar() {

  return (
    <div className='navbar'>
        <p>ACIKTIM!</p>
        <div className='leftSide'>          
            <img src={Logo} />        
        </div>
     
        <div className='rightSide'>
            <Link to="/menü"> MENÜ </Link>
            <Link to="/giriş"> GİRİŞ </Link>
            <Link to="/sepetim"> SEPETİM </Link>
           
        </div>
    </div>
  
  )
}

export default Navbar
