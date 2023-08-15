//import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../styles/SignIn.css"
import Burger from '../images/Burger.jpeg'
import React, { useState } from 'react'

import {useDispatch} from "react-redux"


function SignIn() {

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerification, setPasswordVerification] = useState("")

    //const dispatch = useDispatch()
  
    const handleSubmit = (e) => {
        e.preventDefault()

        // if(! name || ! userName) return false
  
        // const names = name.split(",")
        // dispatch(addContact({ id: nanoid(), name, phone_number: number}))     // id'i vermeyi unutma
        // setName("")
        // setNumber("")
    }

  return (
    <div className='SingIn'>
        <Header/>
      <h1 >Kayıt Ol</h1>

      
      <form  onSubmit={handleSubmit}>      
        
        <div className='image' style={{width:"50%"}}>
            <img src={Burger} alt="Burger" style={{width: '50%'}}/>
        </div>

        <div class="row g-3" >

        <div class="col-md-6">
        <label className="Item" htmlFor="name">Ad Soyad</label> <br></br>
        <input placeholder="Ad Soyad" value={name} onChange={(e) => setName(e.target.value)}/>
        <br></br><br></br>
        </div>

        <div class="col-md-6">
        <label className="Item" htmlFor="userName">Kullanıcı Adı</label> <br></br>
        <input placeholder="Kullanıcı Adı" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br></br><br></br>
        </div>

        <div class="col-md-6">
        <label className="Item" htmlFor="email">Email</label>  <br></br>
        <input placeholder="email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            {/* {errors.email && touched.email && <div className='error'>{errors.email}</div>} */}
            <br></br>
        </div>

        <div class="col-md-6">
        <label className="Item" htmlFor="Telefon">Telefon</label> <br></br>
        <input placeholder="Telefon" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <br></br><br></br>
        </div>


        <div class="col-md-6">    
        <label className="Item">Şifre</label>  <br></br>
        <input name="password" value = {password} onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <br></br>
        </div>

        <div class="col-md-6">
        <label className="Item" htmlFor="address">Adres</label> <br></br>
        <textarea  placeholder="Adres" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <br></br><br></br>
        </div>

        <div class="col-md-6">
        <label className="Item">Şifre Doğrulama</label>  <br></br>
        <input name="passwordVerification" value = {passwordVerification} onChange={(e) => setPasswordVerification(e.target.value)}/>
        <br></br>
            {/* {touched.passwordConfirm &&  <div className='error'>{errors.passwordConfirm}</div>} */}
            <br></br>
        </div>

        <div class="col-md-3">
            <div className='btn'>
                <button type='submit'>KAYIT OL</button>
                <br></br><br/>
                <button>İPTAL</button>
                <br></br> <br/>
            </div>
        </div>
        
       </div>
      </form>


        <Footer/>
    </div>
  )
}

export default SignIn

