import React, {useEffect, useState} from 'react'
import SingleCart from './SingleCart'
import './Order.css'
import './Button.css'
import Popup from './Popup'
import { Link } from 'react-router-dom';

function Order(props){   
    const {products, onSubmit, onAdd, onRemove, finalCartItems, resetCartItems, prepareCartItemsFromCart} = props;
    const [popupOpened, setPopupOpened] = useState(false);
    
    const onAddtoCart = () => {
      setPopupOpened(true);
      onSubmit();
    }

    const onOrderNow = () => {
      onSubmit();
    }

    const onClosePopup = () => {
      setPopupOpened(false);  
    }

    useEffect(() => {
      prepareCartItemsFromCart();
    }, [])

    function mappedSingleCarts() {
      finalCartItems.map((x) => products[x.id - 1].qty = x.qty)
      return(products.map((product) => ( 
        <SingleCart key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} onAdd={onAdd} onRemove={onRemove} itemQty={product.qty} name={product.name}/>
        )))
      }
    
    return (
      <div className='order-container'>
        <Popup trigger={popupOpened} onClosePopup={onClosePopup} cartItems={finalCartItems} resetCartItems={resetCartItems}>
          <h3>Dodano produkty do koszyka</h3>
        </Popup>
        <table className='table-container'>
          {mappedSingleCarts()}
        </table>
        <div className='buttons-container'>
            <div>
              <button className='btn--order' onClick={() => onOrderNow()}>
                <Link to='/make-order' className='clean-link'>
                  Zamów teraz
                </Link>
              </button>
            </div>
            <div>
              <button className='btn--order' onClick={() => onAddtoCart()}>{finalCartItems.length === 0 ? "Dodaj do koszyka" : "Zaktualizuj koszyk"} </button>
            </div>
          </div>
      </div>  
      )
}


export default Order