import React from 'react';
import menuItems from "../components/Products";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { useCartActions } from "../components/addActions";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Row from "react-bootstrap/Row";
import Typography from "@mui/material/Typography";
import "../styles/MainPage.css"


import "bootstrap/dist/css/bootstrap.min.css";

import halalmeat from '../images/halalmeat.png'

import one from '../images/one.jpeg';
import two from '../images/two.jpeg';
import three from '../images/three.jpeg';
import four from '../images/four.jpeg';
import five from '../images/five.jpeg';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import Button from "@mui/material/Button";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function MainPage() {
  const cart = useSelector((state) => state.cart.products);
  const { handleAddToCart, handleRemoveFromCart } = useCartActions();


  return (
    <div>
      <Navbar />
    <div className="home">
        <img src={halalmeat} className='halalmeat' />
      <div className="full">
        <div className='red'>
           <h1 className='h'>
                ÇOK SATANLAR!
            </h1>  
        </div>
       
        <div style={{ display: 'flex' }} className="numbers">
          <img src={one} className="n" style={{ width: '14%', height: 'auto' }} /> 
          <img src={two} style={{ width: '14%', height: 'auto' }} />
          <img src={three} style={{ width: '14%', height: 'auto' }} />
          <img src={four} style={{ width: '14%', height: 'auto' }} />
          <img src={five} style={{ width: '14%', height: 'auto' }} />
         
          
        </div>
    
      <Row className="justify-content-center text-center  ">
        {menuItems.slice(0,5).map((item, index) => (
       
            <Card
            key={index}
            sx={{ maxWidth: '15%', backgroundColor: "#FCCB4C",margin: "0 auto" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              color="red"
              component="div"
              className="fw-bold"
            >
              {item.name}
            </Typography>
         
           <Typography 
           color="red" 
           class="fw-bold">
            
              Fiyat:
            </Typography>
            <Typography 
            color="red" 
            class="fw-bold" >
              ₺ {item.price.toFixed(2)}
            </Typography>
             
                
        

              <CardActions sx={{ justifyContent: "flex-end" }}>
                {cart.some((cartItem) => cartItem.id === item.id) ? (
                  <Button
               
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Sepetten Çıkar
                  </Button>
                ) : (
                  <Button onClick={() => handleAddToCart(item)}>
                    Sepete Ekle
                  </Button>
                )}
                <ToastContainer autoClose={1000} />
              </CardActions>
            </Card>
        
        ))}
      </Row>
          
     
                
          
      
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default MainPage;