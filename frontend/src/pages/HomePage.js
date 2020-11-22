import React from 'react'
import { Container } from '@material-ui/core'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Product from '../components/Product'
import Products from '../products'
import '../style/header.css'
import '../style/index.css'
import '../components/Homepage.css'
import '../components/HeroSection'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { BorderRight } from '@material-ui/icons'


const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
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
            <div className='h1-container'>
            <h1>Why use Medicom?</h1>
            </div>
            <div className='p'>
            <p>"Since its inception in 2020, online Medicom has earned the reputation of being a reliable and trusted online pharmacy in Pakistan by thousands of common people and doctors in the country. You can order genuine and authentic medicines & other healthcare products.Through the website or mobile application 24 hours a day.
We know the importance of a life and your precious time. That’s why at Medical Store, we are always committed to delivering health at consumer’s doorstep. A team of experts is always working to deliver, monitor and maintain quality. Our mission is to give access to a premium healthcare services to every Pakistani, every day without discrimination."</p>
            </div>
            <div className='h1-container'>
            <h1>Hassle-Free service​​</h1>
            </div>
            <div className='p'>
            <p>The best online pharmacy in Pakistan Medicom provides affordable medications at your doorstep. Buying prescriptions from us is extremely easy and convenient, you can order drugs online and general healthcare products from anywhere in Pakistan at any time of the day and have them delivered right to your home (We offers free delivery in Lahore on orders above Rs. 1500 and free delivery in Pakistan on orders above Rs. 3000). Apart from easily available general medicines, we’re trusted and recognized for finding and dispensing medicines that are rarely available in the market.
We also offer order privacy for products that are not socially acceptable and considered taboo.</p>
            </div>
            <div className='h1-container'>
            <h1>Buy high-quality drugs at discounted prices.​</h1>
            </div>
            <div className='p'>
            <p>We love to welcome you again and again and maintain a healthy relationship. That’s why we always strive to provide you with a 100% satisfaction Guarantee. You can enjoy drugs and healthcare products online at retailed and discounted price and pay when the product is handed over to you (COD)./After receiving the product.</p>
            </div>
            <Footer />

        </>
    )
}

export default HomePage
