import React from 'react'
import {
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
  Tab,
  Tabs,
} from 'react-bootstrap'
import Header from '../components/Header'
import Rating from '../components/Rating'
import products from '../products'
import '../style/index.css'
const SingleProduct = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <div>
      <Header />

      <Row>
        <Col md={6}>
          <Image
            style={{ marginTop: '30px', padding: '5%' }}
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>

        <Col style={{ padding: '4rem', marginRight: '3rem' }}>
          <ListGroup>
            <ListGroup.Item style={{ border: 'none' }}>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: 'none' }}>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroup.Item>
            <ListGroupItem style={{ border: 'none' }}>
              <h4>Price: ${product.price}</h4>
            </ListGroupItem>
            <ListGroupItem style={{ border: 'none' }}>
              Description :{product.description}
            </ListGroupItem>
            <ListGroupItem
              style={{ display: 'flex', flexDirection: 'row', border: 'none' }}>
              <div>Status:</div>
              <div
                style={{
                  color: product.countInStock > 0 ? 'green' : 'red',
                  marginLeft: '1rem',
                  fontWeight: 'bold',
                }}>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </div>
            </ListGroupItem>
            <ListGroupItem style={{ border: 'none' }}>
              <button
                className='addToCartButton'
                type='button'
                disabled={product.countInStock === 0}>
                Add to Cart
              </button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row style={{ padding: '30px' }}>
        <Tabs defaultActiveKey='description' id='uncontrolled-tab-example'>
          <Tab
            style={{ color: 'black' }}
            eventKey='description'
            title='Detail Description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aperiam odio placeat soluta sunt saepe eius deserunt, aliquam nulla
            asperiores, assumenda fugit, maiores quasi. Quidem pariatur ipsum
            animi cum odio.
          </Tab>
          <Tab eventKey='reviews' title='Reviews'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tenetur
            temporibus non pariatur beatae ullam a eum cumque amet repudiandae
            voluptatum, ad sit voluptate, eaque at neque nobis deleniti sunt!
          </Tab>
        </Tabs>
      </Row>
      <Row>
        <h1>Related Prodcts</h1>
      </Row>
    </div>
  )
}

export default SingleProduct
