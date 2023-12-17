import React from 'react'
import rateImg from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header' >
        <img src={rateImg} alt="img" />
        <h1>Investment Calculator App</h1>
    </header>
  )
}

export default Header