import React, {useState} from 'react'
import SingleCart from './SingleCart'
import './Order.css'
import './Button.css'
import Popup from './Popup'


function Order(props){   

    const {products, onSubmit, onAdd, onRemove, cartItems} = props;
    const checkCartQty = (product) => {
      var itemQty = cartItems.find(x => x.id === product.id);
      if(itemQty === undefined) return 0;
      else return itemQty.qty
    }

    const [popupOpened, setPopupOpened] = useState(false);

    const onAddtoCart = () => {
      setPopupOpened(true);
      onSubmit();
    }

    const onClosePopup = () => {
      setPopupOpened(false);
    }

    return (
      <div className='order-container'>
        <Popup trigger={popupOpened} onClosePopup={onClosePopup} cartItems={cartItems}>
          <h3>Dodano produkty do koszyka</h3>
        </Popup>
        <table className='table-container'>
        {products.map((product) => (
          <SingleCart key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} onAdd={onAdd} onRemove={onRemove}
          itemQty={() => checkCartQty(product)}/>
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
              <button className='btn--order' onClick={() => onAddtoCart()}>Dodaj do koszyka</button>
            </div>
          </div>
      </div>  
      )
}

export default Order