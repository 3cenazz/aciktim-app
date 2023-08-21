import React from 'react'
import "../styles/CartProduct.css"

import DeleteIcon from '@mui/icons-material/Delete';

import {useDispatch} from "react-redux"
import { increment, decrement, removeProduct } from '../redux/cartSlice'

function CartProduct({ product }) {
  const dispatch = useDispatch()

  return (
    <div className='CartProduct'>


      <div className='rowItems'>
        <div className="row g-3" >

          <div className="col-md-6">
            <img src={product.image} alt="product" style={{ width: '100%' }} />
          </div>

          <div className="col-md-6">

            {/* <div className='row'>
              <div className='col-10'>
                <h2 className='title'>{product.name}</h2>
              </div>
              <div className='col-2'>
                <div className='button'>
                  <button> <DeleteIcon /> </button>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-8'>
                <button>Adet</button>
              </div>
              <div className='col-4'>
                <h4 className='price'>{product.price} TL</h4>
              </div>
            </div> */}

            <div className="frame">
              <div className="top-left">
                <h2 className='title'>{product.name}</h2>
              </div>

              <div className="top-right">
                <div className='button'>
                  <button className='trashBtn' onClick={() => dispatch(removeProduct({id: product.id}))}> 
                    <DeleteIcon className='trash'/> 
                  </button>
                </div>
              </div>

              <div className="productDetail">{product.description}</div>

              <div className="bottom-left">
                <button onClick={() => dispatch(decrement({id: product.id}))}>-</button> | {product.number} | <button onClick={() => dispatch(increment({id: product.id}))}>+</button>
              </div>
              
              <div className="bottom-right">
                <h4 className='price'>{(product.price * product.number)} TL</h4>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default CartProduct
