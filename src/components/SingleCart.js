import React, { Component, state } from 'react'
import Counter from './Counter'
import './SingleCart.css'


class SingleCart extends Component{
    constructor(props){
      super(props);

    }

  render(){
      return (   
        <tr>
         <td><img src={this.props.image} alt="" margin="auto"></img></td>
         <td>{this.props.description}</td>
         <td>{this.props.price + " zł"}</td>
         <td>
            <div className='add-to-cart-container'>
                 <Counter price={ this.props.price }/>
            </div>
         </td>
       </tr>
   )
  }
}

export default SingleCart