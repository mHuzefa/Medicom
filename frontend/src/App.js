import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartProducts from './components/CartProducts'
import Checkout from './components/Checkout'
import AdminLoginPage from './pages/AdminLoginPage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import SignUp from './pages/RegistrationPage'

const App = () => {
  return (
    <Router>
      <div className='root'>
        <Route path='/login' component={LoginPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/signup' component={SignUp} />
        <Route path='/adminlogin' component={AdminLoginPage} />
        <Route path='/productpage' component={ProductPage} />
        <Route path='/cart' component={CartProducts} />
      </div>
    </Router>
  )
}

export default App
