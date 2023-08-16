import Burger from '../images/Burger.jpeg'
import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/SignUp.css"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function SignUp() {
  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState ("");

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isVisible, setIsVisible] = useState(false)
  const [isVerificationVisible, setIsVerificationVisible] = useState(false)


  
  const addContact = {
   
    email: username,
    password: password,
 
}

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
   
    console.log('E-posta', username);
    console.log('Şifre', password);
  }
  return (
   
    <div>
      <Navbar />
      <h1>Üye Girişi</h1>
      <form onSubmit={handleSubmit}>

        <div className='image' style={{ width: "50%" }}>
          <img src={Burger} alt="Burger" style={{ width: '50%' }} />
        </div>
        <div className="row g-3" >
          <div className="col-md-6">
            <label>E-mail</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
            <br></br>
            {errors.email && touched.email && <label className='error'>{errors.email}</label>}
            <br></br>
          </div>
        </div>


        <div className="col-md-6">
          <label className="Item">Şifre</label>  <br></br>
          <input type={isVisible ? "" : "password"} name="password" value={password} onChange={handleChange} />
          <button className="eyeBtn" type="button" onClick={() => setIsVisible(! isVisible)}>
            { isVisible ? <VisibilityOffIcon className='eye'/> : <VisibilityIcon className='eye'/>}
          </button>
          <br></br>
           {errors.password && touched.password && <label className='error'>{errors.password}</label>}
          <br></br>
        </div>


        <div className="col-md-3">
          <div className='btn'>
           <button type='submit'>giriş</button>
           <br></br><br />
           <button>şifremi unuttum</button>
           <br></br> <br />
          </div>
        </div>
      </form>






      <button onClick={handleLogin}>şifremi unuttum</button>
      <button onClick={handleLogin}>Giriş</button>
      <Footer/>
    </div>
  )
}

export default SignUp

