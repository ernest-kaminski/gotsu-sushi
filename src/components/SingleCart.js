import React, { useState, useEffect } from 'react'
import './SingleCart.css'

function SingleCart(props){

  var {itemQty} = props;

  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    setCount(count + 1);
    props.onAdd(props.id);
    }

  const decreaseCounter = () => {
      if(count > 0){
          setCount(count - 1) ;
          props.onRemove(props.id);
      }        
    }

  useEffect(() => {
    window.scrollTo(0, 0)
    if(itemQty !== undefined && itemQty !== 0){
      setCount(itemQty)
    }
  }, []);


      return (   
        <div className='single-cart-container'>
          <div className='image-container'><img src={props.image} alt="" margin="auto"></img></div>
          <div className='name-and-description-container'>
            <div className='name-container'>
              {props.name}
            </div>
            <div className='description-container'>
              {props.description}
            </div>
          </div>
          <div className='counter-container'>{props.price + " zł"}</div>
         <td>
            <div className='add-to-cart-container'>
              <div className='counter-container'>
                <button className='increase-and-decrease-button' onClick={increaseCounter}>+</button>
                <div className='count-value-container'>{count}</div>
                <button className='increase-and-decrease-button' onClick={decreaseCounter}>-</button>
                <div className='total-cost'>{props.price*count}</div>
              </div>
            </div>
         </td>
       </div>
   )

}

export default SingleCart