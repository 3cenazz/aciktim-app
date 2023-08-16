import React, {useState} from 'react'

import {Link} from 'react-router-dom' 
import '../styles/Navbar.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LunchDiningIcon from '@mui/icons-material/LunchDining';


function Navbar() {

  return (
    <div className='navbar'>
      <div className="row">
          <div className="col">
            <text>ACIKTIM!</text>
            <text> <LunchDiningIcon /> </text>   
          </div>
      </div>
              
          <div className="col"> 
              <Link to="/menü"> MENÜ </Link>
              <Link to="/giriş"> GİRİŞ </Link>
              <Link to="/sepetim"> <ShoppingBasketIcon /> </Link>
           
          </div>
       
    </div>
  
  )
}

export default Navbar
