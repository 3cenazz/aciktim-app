import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Product from '../components/CartProduct'

import "../styles/Cart.css"
import { useState } from 'react'
import CartSummary from '../components/CartSummary'

function Cart() {

  const products = [{
    name: "Havyar",
    number: 1,
    image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
    price: 80.5,
    id:1,
    description: "öçasmdçöas.dçasömd",
  },
  {
    name: "Havyar",
    number: 5,
    image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
    price: 80.5,
    id:2,
    description: ".,.,.,,.,.,",
  },
  {
    name: "Havyar",
    number: 3,
    image: "https://cdn.yemek.com/mncrop/620/388/uploads/2018/08/semizotlu-fellah-koftesi-yemekcom.jpg",
    price: 80.5,
    id:3,
    description: "39820*8490385934asndlkans",
  }
  ]
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
        total += product.price,
        <Product key={product.id} product={product} />
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
