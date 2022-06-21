import React from 'react'
import './HeroSection.css';

function Cart(props) {

  const {cartItems} = props;

  return (
    <div className='main-container'>{cartItems.length === 0 ? "Koszyk jest pusty" : "Masz "+ cartItems.length + " produktów w koszyku"}</div>
  )
}

export default Cart