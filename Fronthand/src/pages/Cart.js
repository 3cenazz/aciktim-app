import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Product from '../components/CartProduct'

import "../styles/Cart.css"
import { useState } from 'react'
import CartSummary from '../components/CartSummary'

import {useSelector} from "react-redux"


function Cart() {

  const products = useSelector((state) => state.cart.products)

  let total = 0


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='Cart'>
      <Navbar />

      {products.map((product) => (
        total += (product.price * product.number),
        <Product key={product.id} product={product}/>
      ))}

    <div className='parts'>
      <div className='rowItems'>
        <div className="row g-3" >
            <div className="col-md-10">
              <h2>Toplam : {total} TL </h2>
            </div>
            <div className="col-md-2">
                <button>İPTAL</button>             
            </div>
        </div>
      </div>               

        <button onClick={handleOpenModal} >Satın Al</button>

        <CartSummary isOpen={modalIsOpen} closeModal={handleCloseModal} products = {products} />
    </div>

      <Footer />
    </div>
  )
}

export default Cart
