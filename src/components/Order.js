import React from 'react'
import SingleCart from './SingleCart'
import './Order.css'


function Order(props){   

    const {products, onSubmit, handleClick, cartItems} = props;

    return (
      <div className='order-container'>
        <table className='table-container'>
          {products.map((product) => (
            <SingleCart key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} handleClick={handleClick}  itemQty={cartItems.itemQty}/>
          ))}
          <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div className='add-to-cart-button'>
              <button onClick={() => onSubmit()}>Dodaj do koszyka</button>
            </div>
          </td>
          </tr>
        </table>

      </div>  
      )
}

export default Order