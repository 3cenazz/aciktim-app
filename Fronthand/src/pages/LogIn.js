import Burger from '../images/Burger.jpeg'
import React, { useState } from 'react';



import "../styles/LogIn.css"
import { useDispatch } from 'react-redux';



function LogIn() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
        LogIn({
        email:email,
        password:password,
        loggedIn:true,
    }))
  }
  

  
      
  return (
    <div>
      
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
                        <button type='submit'className='giris'> Giriş </button>
                        <br></br><br />
                        <button className='d-flex' >şifremi unuttum</button>
                     
                    </div>
                </div>

            </div>

        
        </form>
    </div>
 
</div>
  );
}

export default LogIn;