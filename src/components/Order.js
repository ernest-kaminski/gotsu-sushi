import React, {useEffect, useState} from 'react'
import SingleCart from './SingleCart'
import './Order.css'
import './Button.css'
import Popup from './Popup'

function Order(props){   
    const {products, onSubmit, onAdd, onRemove, finalCartItems, resetCartItems, prepareCartItemsFromCart} = props;
    const [popupOpened, setPopupOpened] = useState(false);
    
    const onAddtoCart = () => {
      setPopupOpened(true);
      onSubmit();
    }

    const onClosePopup = () => {
      setPopupOpened(false);  
    }

    useEffect(() => {
      prepareCartItemsFromCart();
    }, [])

    useEffect(() => {
      finalCartItems.map((x) => products[x.id - 1].qty = x.qty)
    }, [() => onClosePopup])

    return (
      <div className='order-container'>
        <Popup trigger={popupOpened} onClosePopup={onClosePopup} cartItems={finalCartItems} resetCartItems={resetCartItems}>
          <h3>Dodano produkty do koszyka</h3>
        </Popup>
        <table className='table-container'>
        {products.map((product) => (
          <SingleCart key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} onAdd={onAdd} onRemove={onRemove} itemQty={product.qty}/>
          ))}
          <tr>
          <td></td>
          <td></td>
          <td></td>
          </tr>
        </table>
        <div className='buttons-container'>
            <div>
              <button className='btn--order'>Zamów teraz</button>
            </div>
            <div>
              <button className='btn--order' onClick={() => onAddtoCart()}>{finalCartItems.length == 0 ? "Dodaj do koszyka" : "Zaktualizuj koszyk"} </button>
            </div>
          </div>
      </div>  
      )
}


export default Order