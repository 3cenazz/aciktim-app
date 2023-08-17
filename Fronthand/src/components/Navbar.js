import React, {useState} from 'react'
import {Link} from 'react-router-dom' 
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {

  return (
    <div className='navbar'>
      <div className="row">
          <div className="col-9">
              <div className='aciktim'>  <LunchDiningIcon className='burger'/> ACIKTIM!</div>
          </div>
      </div>
      
        
          <div className="col-3"> 
            <div className='links'>
              <Link to="/menü" className='link'> <FastfoodIcon className='logo'/> MENÜ </Link>
              <Link to="/giriş" className='link'>  <AccountCircleIcon className='logo'/> GİRİŞ </Link>
              <Link to="/sepetim" className='link'> <ShoppingBasketIcon className='logo'/> SEPET </Link>
            </div>
          </div>
       
    </div>
  
  
  )
}

export default Navbar