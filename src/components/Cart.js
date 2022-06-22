import React from 'react'
import './Cart.css';
import SingleCart from './SingleCart';

function Cart(props) {

  const {cartItems, handleClick} = props;

  return (
    <div className='cart-container'>    
      {cartItems.length === 0 ? "Koszyk jest pusty" : "Masz "+ cartItems.length + " produktów w koszyku"}
      <table className='table-container'>
        {cartItems.length === 0 ? "" : cartItems.map((product) => (
              <SingleCart key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} handleClick={handleClick} itemQty={product.qty}/>
            ))}
      </table>
    </div>
  )
}

export default Cart