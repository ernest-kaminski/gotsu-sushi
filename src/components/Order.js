import React from 'react'
import SingleCart from './SingleCart'
import './Order.css'


function Order(props){   

    const {products, onAdd} = props;
    const handleClick = (SingleCartId, SingleCartQuantity) => {
      props.onAdd(products[SingleCartId-1]);
    }

    return (
      <div className='order-container'>
        <table className='table-container'>
          {products.map((product) => (
            <SingleCart key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} handleClick={handleClick} />
          ))}
          <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div className='add-to-cart-button'>
              <button>Dodaj do koszyka</button>
            </div>
          </td>
          </tr>
        </table>

      </div>  
      )
}

export default Order