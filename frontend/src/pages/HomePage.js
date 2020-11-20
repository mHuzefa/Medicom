import React from 'react'
import { Container } from '@material-ui/core'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Product from '../components/Product'
import Products from '../products'
import '../style/header.css'
import '../style/index.css'
import '../components/HeroSection'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
    return (
        <div>
            <Header />
            <main style={{ marginTop: '10%' }}>
              
            </main>
            <HeroSection />
        </div>
    )
}

export default HomePage
