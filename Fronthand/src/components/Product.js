import React from 'react'
import "../styles/Product.css"

function Product({product}) {

  return (
    <div className='Product'>
      <h2>{product.name}</h2>
      <div>
      <img src={product.image} alt="product" style={{ width: '100%' }} />
      </div>
      <h3>{product.price}</h3>

    </div>
  )
}

export default Product
