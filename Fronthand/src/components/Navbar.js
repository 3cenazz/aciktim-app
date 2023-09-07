import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useDispatch, useSelector } from "react-redux"
import woman from "../images/Woman.png"
import { getCurrentUser } from '../redux/userSlice';
import alertify from 'alertifyjs';

function Navbar() {

  const dispatch = useDispatch()
  const currentUserIndex = useSelector((state) => state.user.currentUserIndex);
  
  const handleClick = () => {
    if (currentUserIndex === -1) {
      alertify.error("Önce giriş yapınız!");
    }
  };

  return (
    <div className='navbar'>
      <div className="row">
        <div className="col-9">
          <div className='aciktim'>
            <Link to="/" className='aciktim'> <LunchDiningIcon className='burger' /> ACIKTIM! </Link>
            {/* <LunchDiningIcon className='burger'/> ACIKTIM! */}
          </div>
        </div>
      </div>


      <div className="col-3">
        <div className='links'>
          <Link to="/menü" className='link'> <FastfoodIcon className='logo' /> MENÜ </Link>
          {currentUserIndex !== -1
            ? <Link to="/profil" className='link'>  <img src={woman} alt="Profile" className='logo' /> PROFİL </Link>
            : <Link to="/giriş" className='link'>  <AccountCircleIcon className='logo' /> GİRİŞ </Link>}

          <Link to="/sepetim" onClick={handleClick} className='link'> <ShoppingBasketIcon className='logo' /> SEPET </Link>
        </div>
      </div>

    </div>


  )
}

export default Navbar