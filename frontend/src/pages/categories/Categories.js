import React from 'react'
import Product from '../../components/Product'
import products from '../../products'
const Categories = (props) => {
  var categoryProduct = products.filter((product) => {
    if (product.category === props.match.params.category) {
      return product
    }
  })
  //console.log(categoryProduct)
  return (
    <div>
      <div class='rowCard'>
        {categoryProduct.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Categories
