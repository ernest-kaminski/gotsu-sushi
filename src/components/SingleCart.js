import React, { useState } from 'react'
import './SingleCart.css'


function SingleCart(props){

  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    setCount(count + 1);
    props.handleClick(props.id, count + 1);
    }

  const decreaseCounter = () => {
      if(count > 0){
          setCount(count - 1) ;
          props.handleClick(props.id, count - 1);
      }        
    }


      return (   
        <tr>
         <td><img src={props.image} alt="" margin="auto"></img></td>
         <td>{props.description}</td>
         <td>{props.price + " zł"}</td>
         <td>
            <div className='add-to-cart-container'>
              <div className='counter-container'>
                <button className='increase-and-decrease-button' onClick={increaseCounter}>Plus</button>
                {count}
                <button className='increase-and-decrease-button' onClick={decreaseCounter}>minus</button>
                <div className='total-cost'>{props.price*count}</div>
              </div>
            </div>
         </td>
       </tr>
   )

}

export default SingleCart