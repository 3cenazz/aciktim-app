import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

//import SignUp from './pages/SignUp';

import { useSelector } from "react-redux";

import {useNavigate } from 'react-router-dom';
import alertify from 'alertifyjs';
import MainPage from './pages/MainPage';
import LogIn from './pages/LogIn';

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
          {/* <Route exact path="/" element={<Home/>} /> */}
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/kayıt" exact element={<SignIn />} />
          <Route path="/giriş" exact element={<LogIn/>} />
          <Route path="/profil"  element={redirectToSignInIfNotAllowed(<Profile />)} />
          <Route path="/sepetim" element={redirectToSignInIfNotAllowed(<Cart/>)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
