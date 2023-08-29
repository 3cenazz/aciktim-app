import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Home from './pages/Home';
//import SignUp from './pages/SignUp';

import { useSelector } from "react-redux";

import {useNavigate } from 'react-router-dom';
import alertify from 'alertifyjs';

function App() {
  
  const index = useSelector((state) => state.user.currentUserIndex);

  // Sepete girişi engellendiğinde kullanıcıyı başka bir sayfaya yönlendir
  const redirectToSignInIfNotAllowed = (page) => {
    if (index === -1) {
      //alertify.error("Önce giriş yapınız.")
      return <SignIn />;
    }
    return page;
  };


  return (
    <div>
      <BrowserRouter>
        {/* <SignIn/> */}
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/giriş" exact element={<SignIn />} />
          <Route path="/profil"  element={redirectToSignInIfNotAllowed(<Profile />)} />
          <Route path="/sepetim" element={redirectToSignInIfNotAllowed(<Cart/>)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
