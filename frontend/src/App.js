import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import ProductSubtotal from './components/ProductSubtotal'
import AdminLoginPage from './pages/AdminLoginPage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import SignUp from './pages/RegistrationPage'
import SingleProduct from './pages/SingleProduct'
import UserProfilePage from './pages/UserProfilePage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      <div className='root'>
        <Route path='/login' component={LoginPage} exact />
        <Route path='/checkout' component={Checkout} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/adminlogin' component={AdminLoginPage} exact />
        <Route path='/productpage' component={ProductPage} exact />
        <Route path='/cart' component={ProductSubtotal} exact />
        <Route path='/product' component={ProductPage} exact />
        <Route path='/product/:id' component={SingleProduct} exact />
        <Route path='/UserProfile' component={UserProfilePage} exact />
        <Route path='/HomePage' component={HomePage} exact />
      </div>
    </Router>
  )
}

export default App
