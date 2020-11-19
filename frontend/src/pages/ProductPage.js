import { Container } from '@material-ui/core'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Product from '../components/Product'
import Products from '../products'
import '../style/header.css'
import '../style/index.css'
const ProductPage = () => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: '10%' }}>
        <Container fluid='true'>
          <Row>
            {Products.map((product) => (
              <Col key={product._id} sm={6} md={4} lg={3}>
                <div className='productPage'>
                  <Product product={product} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default ProductPage
