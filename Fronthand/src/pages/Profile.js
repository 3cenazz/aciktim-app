import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


import "../styles/Profile.css"
import woman2 from "../images/Woman2.png"


import alertify from "alertifyjs"
import validations from '../validation/index';

import { useDispatch } from "react-redux"
import { update, logOut, getCurrentUser } from '../redux/userSlice'
import { useSelector } from "react-redux"

import { useNavigate } from 'react-router-dom';

function Profile() {
    const dispatch = useDispatch()

    const index = useSelector((state) => state.user.currentUserIndex);
    const users = useSelector((state) => state.user.users);
    const currentUser = users[index]
    console.log("andöa", currentUser, "lwdçleawm", users)


    const [name, setName] = useState(currentUser.name)
    // const [userName, setUserName] = useState("")
    const [email, setEmail] = useState(currentUser.email)
    const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber)
    const [address, setAddress] = useState(currentUser.address)

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        // Calculate the number of valid fields based on the absence of errors
        const validFieldsCount = Object.keys(errors).filter(fieldName => errors[fieldName]).length;
        { console.log("şlsdlas", validFieldsCount) }

        const hasChanged =
            name.trim() !== currentUser.name ||
            email.trim() !== currentUser.email ||
            phoneNumber.trim() !== currentUser.phoneNumber ||
            address.trim() !== currentUser.address;

        // Tüm alanlar geçerliyse
        if (validFieldsCount === 0) {

            if (!hasChanged) {
                // Hiçbir değişiklik yapılmadı, tüm input alanlarını beyaz yap
                alertify.success("Kullanıcı bilgileri zaten güncel.");
            } else {
                // Değişiklik yapıldı, güncelleme işlemini yap
                dispatch(update({
                    name: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    address: address,
                }))

                // Başarılı mesajını göster
                alertify.success("Kullanıcı bilgileri başarıyla güncellendi.");
            }

            navigate("/");
        } else {
            alertify.error("csdcsdmcsöçm");
        }
    }

    const handleLogOut = (e) => {
        dispatch(logOut())
        navigate("/");
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
        }

        setTouched({
            ...touched,
            [name]: true,
        });

        // İlgili alanın doğrulama şemasını al
        const fieldSchema = validations.fields[name];

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
            <div className='Profile'>

                <form onSubmit={handleSubmit}>
                    <h1 >Profil</h1>
                    <div className='row justify-content-start'>

                        <div className='col-md-4'>
                            <div className='image' style={{ width: "100%" }}>
                                <img src={woman2} alt="woman2" style={{ width: '80%' }} />
                            </div>
                        </div>

                        <div className="col-md-8" >

                            <div className='item-group'>
                                <label className="Item" htmlFor="name">Ad Soyad : </label>
                                <input name="name" placeholder={name} value={name} onChange={handleChange} onBlur={handleBlur} style={{
                                    backgroundColor: name.trim() !== currentUser.name ? 'white' : 'rgba(224, 203, 203, 1)'
                                }} />
                                {errors.name && touched.name && <label className='error'>{errors.name}</label>}
                            </div>


                            {/* <div className="col-md-6">
                            <label className="Item" htmlFor="userName">Kullanıcı Adı</label> <br></br>
                            <input name="userName" placeholder="Kullanıcı Adı" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            {errors.userName && touched.userName && <label className='error'>{errors.userName}</label>}
                        </div> */}

                            <div className='item-group'>
                                <label className="Item" htmlFor="email">E-posta : </label>
                                <input name="email" placeholder={email} value={email} onChange={handleChange} onBlur={handleBlur} style={{
                                    backgroundColor: email.trim() !== currentUser.email ? 'white' : 'rgba(224, 203, 203, 1)'
                                }} />
                                {errors.email && touched.email && <label className='error'>{errors.email}</label>}
                            </div>
                            <div className='item-group'>
                                <label className="Item" htmlFor="phoneNumber">Telefon : </label>
                                <input name="phoneNumber" placeholder={phoneNumber} value={phoneNumber} onChange={handleChange} style={{
                                    backgroundColor: phoneNumber.trim() !== currentUser.phoneNumber ? 'white' : 'rgba(224, 203, 203, 1)'
                                }} />
                                {errors.phoneNumber && touched.phoneNumber && <label className='error'>{errors.phoneNumber}</label>}
                            </div>
                            <div className='item-group'>
                                <label className="Item" htmlFor="address">Adres : </label>
                                <textarea name="address" placeholder={address} value={address} onChange={handleChange} style={{
                                    backgroundColor: address.trim() !== currentUser.address ? 'white' : 'rgba(224, 203, 203, 1)'
                                }} />
                                {errors.address && touched.address && <label className='error'>{errors.address}</label>}
                            </div>
                            <div className='btn'>
                                <button type='submit' onClick={handleSubmit}>GÜNCELLE</button>
                                <button type="button" onClick={handleLogOut}>ÇIKIŞ</button>
                            </div>


                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
