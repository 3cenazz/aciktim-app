//import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/SignIn.css"
import Burger from '../images/Burger.jpeg'
import React, { useState } from 'react'

import alertify from "alertifyjs"
import validation from '../validation/index';
import { useDispatch } from "react-redux"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function SignIn() {

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerification, setPasswordVerification] = useState("")

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isVisible, setIsVisible] = useState(false)
    const [isVerificationVisible, setIsVerificationVisible] = useState(false)

    //const dispatch = useDispatch()

    const addContact = {
        name: name,
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        password: password,
        passwordVerification: passwordVerification,
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Gerekli alanlara uygun şekilde set işlemlerini yapın
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        } else if (name === "address") {
            setAddress(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "passwordVerification") {
            setPasswordVerification(value);
        }

        setTouched({
            ...touched,
            [name]: true,
        });

        console.log("ksdkasmnd", validation)

        // İlgili alanın doğrulama şemasını al
        const fieldSchema = validation.fields[name];

        // Alanın değerini doğrula
        fieldSchema.validate(value)
            .then(() => {
                // Doğrulama başarılıysa burada yapılacak işlemler
                // Örneğin, hata durumunu temizle
                setErrors({
                  ...errors,
                  [name]: '',
                });
              })
            .catch(validationErrors => {
                setErrors({
                    ...errors,
                    [name]: validationErrors.message,
                });
            });


    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    return (
        <div>
            <Navbar />

            <div className='SingIn'>

                <h1 >Kayıt Ol</h1>

                <form onSubmit={handleSubmit}>

                    <div className='image' style={{ width: "50%" }}>
                        <img src={Burger} alt="Burger" style={{ width: '50%' }} />
                    </div>

                    <div className="row g-3" >

                        <div className="col-md-6">
                            <label className="Item" htmlFor="name">Ad Soyad</label> <br></br>
                            <input name="name" placeholder="Ad Soyad" value={name} onChange={handleChange} />
                            <br></br>
                            {errors.name && touched.name && <label className='error'>{errors.name}</label>}
                            <br></br>
                        </div>

                        {/* <div className="col-md-6">
        <label className="Item" htmlFor="userName">Kullanıcı Adı</label> <br></br>
        <input name="userName" placeholder="Kullanıcı Adı" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br></br><br></br>
        </div> */}

                        <div className="col-md-6">
                            <label className="Item" htmlFor="email">E-posta</label>  <br></br>
                            <input name="email" placeholder="E-posta" value={email} onChange={handleChange} onBlur={handleBlur} />
                            <br></br>
                            {errors.email && touched.email && <label className='error'>{errors.email}</label>}
                            <br></br>
                        </div>

                        <div className="col-md-6">
                            <label className="Item" htmlFor="phoneNumber">Telefon</label> <br></br>
                            <input name="phoneNumber" placeholder="Telefon" value={phoneNumber} onChange={handleChange} />
                            <br></br>
                            {errors.phoneNumber && touched.phoneNumber && <label className='error'>{errors.phoneNumber}</label>}
                            <br></br>
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

                        <div className="col-md-6">
                            <label className="Item" htmlFor="address">Adres</label> <br></br>
                            <textarea name="address" placeholder="Adres" value={address} onChange={handleChange} />
                            <br></br>
                            {errors.address && touched.address && <label className='error'>{errors.address}</label>}
                            <br></br>
                        </div>

                        <div className="col-md-6">
                            <label className="Item">Şifre Doğrulama</label>  <br></br>
                            <input type={isVerificationVisible ? "" : "password"} name="passwordVerification" value={passwordVerification} onChange={handleChange} />
                            <button className="eyeBtn" type="button" onClick={() => setIsVerificationVisible(! isVerificationVisible)}>
                                { isVerificationVisible ? <VisibilityOffIcon className='eye'/> : <VisibilityIcon className='eye'/>}
                            </button>
                            <br></br>
                            {touched.passwordVerification && touched.passwordVerification && <label className='error'>{errors.passwordVerification}</label>}
                            <br></br>
                        </div>

                        <div className="col-md-3">
                            <div className='btn'>
                                <button type='submit'>KAYIT OL</button>
                                <br></br><br />
                                <button>İPTAL</button>
                                <br></br> <br />
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default SignIn

