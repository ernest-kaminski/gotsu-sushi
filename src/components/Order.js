import React from 'react'
import SingleCart from './SingleCart'
import './Order.css'


function Order(props){   

    const {products, onSubmit, onAdd, onRemove, cartItems} = props;
    const checkCartQty = (product) => {
      var itemQty = cartItems.find(x => x.id === product.id);
      if(itemQty === undefined) return 0;
      else return itemQty.qty
    }

    return (
      <div className='order-container'>
        <table className='table-container'>
        {products.map((product) => (
          <SingleCart key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} onAdd={onAdd} onRemove={onRemove} 
          itemQty={() => checkCartQty(product)}/>
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