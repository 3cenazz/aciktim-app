import halalmeat from '../images/halalmeat.png'
import one from '../images/one.jpeg'
import two from '../images/two.jpeg'
import three from '../images/three.jpeg'
import four from '../images/four.jpeg'
import five from '../images/five.jpeg'
import React from 'react'
import "../styles/MainPage.css"
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const product = [
  {
    id: 1,
    name: "menü1",
    price: 100,
    image:one},

  
  
   { id: 2,
    name: "menü2",
    price: 100,
    image:two},

  
  
   { id: 3,
    name: "menü3",
    price: 100,
    image:three},

  
  
    {id: 4,
    name: "menü4",
    price: 100,
    image:four},

  
  
    {id: 5,
    name: "menü5",
    price: 100,
    image:five}
  ]



function MainPage() {
   
  const [cartItems, setCartItems] = useState([]);

  const handleOrder = () => {
  
    const newCartItems = [...cartItems, product];
    

    setCartItems(newCartItems);
    
  
    alert("Ürün sepete eklendi!");
  };
  
  
  return (
    <div>
      <Navbar/>
    <div className="home">
     
        <div className="halalmeat" >
          <img src={halalmeat} className='halalmeat' />
        
        </div>

        <div className='red'>
            <h1 className='h'>EN ÇOK SATANLAR!</h1>
         </div> 

         <div className="product-list">
            {product.map(product => (
            <div key={product.id} className='btn'>
                <img src={product.image} alt={product.name} />
                <button type='button' className='order-button' onClick={() => handleOrder(product)}>SİPARİŞ VER</button>
            </div>
            ))}
          </div>


      

        <div className='full'>
            <div style={{ display: 'flex' }} className='numbers'>
            
                <img src={one} className='n' style={{ width: '15%', height: 'auto' }}/>
          
                <img src={two} style={{ width: '15%', height: 'auto' }}/>
      
                <img src={three} style={{ width: '15%', height: 'auto' }}/>
       
                <img src={four} style={{ width: '15%', height: 'auto' }}/>
            
                <img src={five}style={{ width: '10%', height: 'auto' }}/>
       
            </div> 

            <div className='menü-names' style={{ display: 'flex', flexDirection: 'row'}}>
            {product.map(product => (
            <p key={product.id} id={product.id}>{product.name} - {product.price}tl</p>
            ))}
            </div>

             

            
        </div>
           
     
    </div>
    <Footer/>
    </div>
  ) 
}

export default MainPage