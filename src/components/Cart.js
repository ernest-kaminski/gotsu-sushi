import React from 'react'
import './Cart.css';
import SingleCart from './SingleCart';

function Cart(props) {

  const {cartItems, onAdd, onRemove, countTotalCost} = props;

  return (
    <div className='cart-container'>    
      {cartItems.length === 0 ? "Koszyk jest pusty" : "Masz "+ cartItems.length + " produktów w koszyku"}
      <table className='table-container'>
        {cartItems.length === 0 ? "" : cartItems.map((product) => (
              <SingleCart key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} onAdd={onAdd} onRemove={onRemove} itemQty={product.qty}/>
            ))}
      </table>
      <div>Łączna cena koszyka: {countTotalCost(cartItems)}</div>
    </div>
  )
}

export default Cart