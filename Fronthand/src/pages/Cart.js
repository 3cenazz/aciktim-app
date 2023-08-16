import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Product from '../components/Product'

import "../styles/Cart.css"

function Cart() {

    const products = [{
        name : "Havyar",
        image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
        price : 80.5, 
    },
    {
        name : "Havyar",
        image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
        price : 80.5, 
    },
    {
        name : "Havyar",
        image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
        price : 80.5, 
    }
]
    const total = 0

  return (
    <div className='Cart'>
        {/* <Navbar /> */}

        {products.map((product) => (
            total += product.price,
             <Product product={product}/>
        ))}



        <h2>Toplam : </h2>

      <Footer />
    </div>
  )
}

export default Cart
