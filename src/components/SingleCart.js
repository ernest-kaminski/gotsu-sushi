import React from 'react'
import Counter from './Counter'
import './SingleCart.css'

import set_katana_360px from "../images/set_katana_360px.png"

const SingleCart = props => {
  return (   
       <tr>
        <td><img src={set_katana_360px} alt="" margin="auto"></img></td>
        <td>{props.description}</td>
        <td>{props.price}</td>
        <td>
           <div className='add-to-cart-container'>
                <Counter />
                <div className='add-to-cart'><button>Dodaj do koszyka</button></div>
            </div>
        </td>
      </tr>
  )
}

export default SingleCart