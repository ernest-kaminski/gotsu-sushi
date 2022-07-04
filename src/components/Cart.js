import React, {useEffect, useState} from 'react'
import './Cart.css';
import SingleCart from './SingleCart';

function Cart(props) {

  const {finalCartItems, onAdd, onRemove, countTotalCost} = props;
  const [totalCost, setTotalCost] = useState(countTotalCost(finalCartItems));
  useEffect(() => {
    setTotalCost(countTotalCost(finalCartItems));
  })

  return (
    <div className='cart-container'>    
      {finalCartItems.length === 0 ? "Koszyk jest pusty" : "Masz "+ finalCartItems.length + " produktów w koszyku"}
      <table className='table-container'>
        {finalCartItems.length === 0 ? "" : finalCartItems.map((product) => (
              <SingleCart 
                key={product.id} 
                id={product.id} 
                image={product.image} 
                description={product.description} 
                price={product.price} 
                onAdd={onAdd} 
                onRemove={onRemove}
                itemQty={product.qty}
                />
            ))}
      </table>
      <div>Łączna cena koszyka: {totalCost}</div>
    </div>
  )
}

export default Cart