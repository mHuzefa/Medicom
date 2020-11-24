import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import '../style/index.css'


const Product = ({ product }) => {
  const formulation = product.formulation;
  return (
    <Card id='productPage' className='my-3 py-3'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'></Card.Img>
      </Link>
      <Card.Body>
        <Link style={{ textDecoration: 'none' }} to={`/product/${product._id}`}>
          <Card.Text as='div' className='text-center'>
            <strong className='linkText'>{product.name}</strong>
          </Card.Text>
        </Link>
        
      <Card.Text as='div'>
      {formulation.map(reptile => (
        <li key={reptile}>{reptile}</li>
      ))}
      </Card.Text>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3' className='text-center'>
          ${product.price}
        </Card.Text>
      </Card.Body>
      <Card.Link className='addtoCartCenter'>
        <button className='addToCartButton'>Add to Cart</button>
      </Card.Link>
    </Card>
  )
}

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default Product


