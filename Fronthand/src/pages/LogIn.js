import Burger from '../images/Burger.jpeg'
import React, { useState } from 'react';



import "../styles/LogIn.css"
import { useDispatch } from 'react-redux';

import { logIn } from '../redux/userSlice'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import alertify from 'alertifyjs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LogIn() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const index = useSelector((state) => state.user.currentUserIndex);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
        logIn({
        email:email,
        password:password,
    }))
    
    if(index !== -1){
        console.log("index ", index)
        navigate("/")
    }
  }

  const handleNavigate = () => {
    navigate("/kayıt")
  }

  const handleMessage = () => {
    alertify.success("Şifre yenilemek için mail gönderildi, lütfen mail kutunuzu kontrol ediniz.")
  }

  
      
  return (
    <div>
      <Navbar />
    <br></br><br></br>
    <div className='LogIn'>
        <h1 >Üye Girişi</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            
            <div className='image'>
                <img className='burger' src={Burger} alt="Burger" />
            </div>

            <div className="row g-3" >

                <div className="col-md-6">
                    <label className="Item">E-Posta</label>  
                    <br></br>
                    <input type="email" name="email" placeholder="E-posta" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br></br>
                </div>
                
                <div className="col-md-6">
                    <label className="Item">Şifre</label> 
                     <br></br>
                    <input input type="password" class="password" name="password" id="password"placeholder='Şifre' value={password} onChange={(e)=>setPassword(e.target.value)}/>             
                    <br></br>
                  
                </div>


                <div className="col-md-3 mx-auto">
                    <div className='btn'>
                        <button type='submit'className='giris' onClick={handleSubmit}> Giriş </button>
                        <br></br><br />
                        <button type="button" className='d-flex' onClick={handleMessage}>şifremi unuttum</button>
                        <br></br>
                        <button type="button" className='d-flex' onClick={handleNavigate}>Hesabım yok</button>
                     
                    </div>
                </div>

            </div>

        
        </form>
    </div>
    <Footer />
</div>
  );
}

export default LogIn;