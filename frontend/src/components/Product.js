import React from 'react'
import { Link } from 'react-router-dom'
import '../style/index.css'
import '../style/productCard.css'
const Product = ({ product }) => {
  return (
    <div className='card'>
      <img src={product.image} alt='Dummy' className='card__photo' />
      <div className='card__description'>
        <Link
          to={'/product/category/' + product.category}
          className='card__category'>
          {product.category}
        </Link>
        <p className='card__name'>{product.name}</p>

        <div className='card__rating'>
          <div className='icons'>
            <span>
              <i
                className='fas fa-star'
                id='card__stars>'
                aria-hidden='true'></i>
            </span>
            <span>
              <i
                className='fas fa-star'
                id='card__stars>'
                aria-hidden='true'></i>
            </span>
            <span>
              <i
                className='fas fa-star'
                id='card__stars>'
                aria-hidden='true'></i>
            </span>
            <span>
              <i
                className='fas fa-star'
                id='card__stars>'
                aria-hidden='true'></i>
            </span>
            <span>
              <i
                className='fas fa-star'
                id='card__stars>'
                aria-hidden='true'></i>
            </span>
          </div>
          <p className='avg-rating'>{product.numReviews}</p>
        </div>

        <div className='cta'>
          <p className='card__price'>{product.price}</p>
          <div className='btn'>
            <a href='/cart' className='btn__cart'>
              <i className='fa fa-shopping-cart' aria-hidden='true'></i>
            </a>
            <a href='/cart' className='btn__wishlist'>
              <i className='fa fa-heart' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>
} */

/* function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ))
  return <ul>{listItems}</ul>
} */

export default Product
