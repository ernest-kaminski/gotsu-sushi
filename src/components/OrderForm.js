import React, { useState } from 'react'
import "./OrderForm.css"
import './Button.css'
import SingleCartDetails from './SingleCartDetails'

const OrderForm = (props) => {
    const {finalCartItems, countTotalCost} = props;
    const totalCost = countTotalCost(finalCartItems)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')

    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("form submited")
        console.log("/n")
        console.log(name)
        console.log(surname)
        console.log(address)
        console.log(email)
        console.log(contact)

        console.log("zamówione: ")
        console.log(finalCartItems)
    }

  return (
    <div className='order-form-container'>
        <form className='form-container' onSubmit={handleSubmit}>
            <label for="fname">imię:</label>
            <input type="text" id="fname" name="fname" required onChange={(e) => setName(e.target.value)}/>
            <label for="lname">Nazwisko:</label>
            <input type="text" id="lname" name="lname" required onChange={(e) => setSurname(e.target.value)}/>
            <label for="address">adres dostawy:</label>
            <input type="text" id="address" name="fname" required onChange={(e) => setAddress(e.target.value)}/>
            <label for="email">email:</label>
            <input type="text" id="email" name="lname" required onChange={(e) => setEmail(e.target.value)}/>
            <label for="telephone">nr telefonu kontaktowego:</label>
            <input type="text" id="contact" name="lname" required onChange={(e) => setContact(e.target.value)}/>
            <button className='btn--order' type='submit'>Zamów</button>
        </form> 

        <div className='order-summary'>
          <div className='order-summary-container'>
          {finalCartItems.map((product) => (
                <SingleCartDetails 
                  key={product.id} 
                  id={product.id} 
                  image={product.image} 
                  description={product.description} 
                  price={product.price} 
                  itemQty={product.qty}
                  />
              ))}
          </div>
              <div>total cost: {totalCost}</div>
        </div>
    </div>
  )
}

export default OrderForm