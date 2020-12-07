import React from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import Products from '../products'
import '../style/productCard.css'

const ProductPage = () => {
  return (
    <div>
      <Header />
      <div className='rowCard'>
        {Products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
