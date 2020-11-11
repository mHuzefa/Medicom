import React, { useState } from 'react'
import '../style/cart.css'
import '../style/index.css'
import CartTableHeader from './CartTableHeader'
const CartProducts = () => {
  let price = 1789
  const [qtyIncrease, setQtyIncrease] = useState({
    counter: '1',
    subtotal: function () {
      return (parseInt(this.counter) * price).toString()
    },
  })
  const qtyHandlerPlus = () => {
    let numberCnvrt = parseInt(qtyIncrease.counter)
    numberCnvrt = numberCnvrt + 1
    setQtyIncrease({
      counter: numberCnvrt.toString(),
      subtotal: function () {
        return (parseInt(this.counter) * price).toString()
      },
    })

    console.log(qtyIncrease.subtotal())
  }
  const qtyHandlerMinus = () => {
    let numberCnvrt = parseInt(qtyIncrease.counter)
    numberCnvrt = numberCnvrt - 1
    if (numberCnvrt > 0) {
      setQtyIncrease({
        counter: numberCnvrt.toString(),
        subtotal: function () {
          return (parseInt(this.counter) * price).toString()
        },
      })
    }
  }
  const qtyHandler = () => {
    qtyHandlerPlus()
    qtyHandlerMinus()
  }

  return (
    <div>
      <CartTableHeader />
      <div className='cartContent'>
        <div className='itemDetails'>
          <img
            className='productImg'
            src='https://image.shutterstock.com/image-photo/thermometer-pharmaceutical-drug-cure-colorful-600w-616505312.jpg'
            alt='product-img'
          />

          <div className='productDetails'>
            <p className='productName'>Product Name This is the Product</p>
            <div className='productCartSize'>
              <p>Company: Pfizer</p>
              <p>
                Per Tablet <p style={{ fontWeight: 'bold' }}>1gm</p>
              </p>
              <p>
                Tablets <p style={{ fontWeight: 'bold' }}>10</p>
              </p>
            </div>
          </div>
        </div>
        <div className='productPrice'>
          <p>PKR 1789.0</p>
        </div>
        <div className='productQty'>
          <button onClick={qtyHandlerMinus} className='qtyMinus'>
            <i className='fa fa-minus' aria-hidden='true'></i>
          </button>
          <input
            onChange={qtyHandler}
            className='qtyBox'
            value={qtyIncrease.counter}></input>
          <button onClick={qtyHandlerPlus} className='qtyPlus'>
            <i className='fa fa-plus' aria-hidden='true'></i>
          </button>
        </div>
        <div className='productSubtotal'>
          <p>{qtyIncrease.subtotal()}</p>
        </div>
      </div>
      <div className='cartIcons'>
        <button className='cartEditBtn'>
          <i
            title='Update Quantity'
            className='fa fa-pencil'
            aria-hidden='true'></i>
        </button>
        <button className='cartDeleteBtn'>
          <i title='Delete' className='fa fa-trash' aria-hidden='true'></i>
        </button>
      </div>
      <hr />
    </div>
  )
}

export default CartProducts
