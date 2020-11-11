import React from 'react'
import '../style/cart.css'
import '../style/index.css'
const CartTableHeader = () => {
  return (
    <div>
      <div className='cartHeader'>
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <hr />
    </div>
  )
}

export default CartTableHeader
