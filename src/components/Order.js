import React, {Component, state} from 'react'
import SingleCart from './SingleCart'
import './Order.css'



class Order extends Component {

  state = {
    singleCarts: [
      {image: "set_katana_480px", price: "200 zł", description: "8x sushi z łososia i 4x sushi z gówna xd" },
      {image: "set_katana_480px", price: "240 zł", description: "Najlepsze w mieście sushi z parówki" }
    ]
  }

  render(){
    return (
      <div className='order-container'>
        <table className='table-container'>
          <tr>
            <th>SET</th>
            <th>Opis</th>
            <th>Cena za zestaw</th>
            <th>Zamów</th>
          </tr>
          <SingleCart 
              description={this.state.singleCarts[0].description} 
              price={this.state.singleCarts[0].price}
            />
          <SingleCart 
              description={this.state.singleCarts[1].description} 
              price={this.state.singleCarts[1].price}
            />
        </table>
      </div>  
      )
  }
}

export default Order