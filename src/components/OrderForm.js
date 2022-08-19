import React, { useState } from 'react'
import "./OrderForm.css"
import './Button.css'
import CardIcons from './CardIcons'

const OrderForm = (props) => {
    const {finalCartItems, countTotalCost} = props;
    const totalCost = countTotalCost(finalCartItems)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')

    const totalCostString = "Do zapłaty: "

    const orderDetails = "Szczegóły zamówienia"
    const orderContact = "Dane kontaktowe"
    const paymentMethods = "Wybierz formę płatności"
    const payAndOrder = "Zamawiam i płacę"
    
    const handleSubmit = () => {
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

      <div className='order-summary'>
      <div className='order-details-header'>
              {orderContact}
        </div>
        <form className='form-container'>
          <div className='form-row with-space'>
            <div className='input-to-right'>
              <label for="fname">imię:</label>
              <input type="text" id="fname" name="fname" required onChange={(e) => setName(e.target.value)}/>
            </div>
          </div>
          <div className='form-row with-space'>
            <div className='input-to-right'>
              <label for="lname">Nazwisko:</label>
              <input type="text" id="lname" name="lname" required onChange={(e) => setSurname(e.target.value)}/>
              </div> 
          </div>
          <div className='form-row with-space'>
            <div className='input-to-right'>
              <label for="address">adres dostawy:</label>
              <input type="text" id="address" name="fname" required onChange={(e) => setAddress(e.target.value)}/>
              </div> 
          </div>
          <div className='form-row with-space'>
            <div className='input-to-right'>
              <label for="email">email:</label>
              <input type="text" id="email" name="lname" required onChange={(e) => setEmail(e.target.value)}/>
              </div> 
          </div>          
          <div className='form-row with-space'>
            <div className='input-to-right'>
              <label for="telephone">nr telefonu kontaktowego:</label>
              <input type="text" id="contact" name="lname" required onChange={(e) => setContact(e.target.value)}/>
              </div> 
          </div>
              <div className='with-space'></div>
        </form> 

        <div className='order-details-header'>
              {paymentMethods}
        </div>
        <div className='form-container'>
          <CardIcons />
        </div>
        <button className='submit-button' type='submit' onClick={() => handleSubmit()}>{payAndOrder}</button>
      </div>


      
        <div className='order-summary'>
        <div className='order-details-header'>
              {orderDetails}
            </div>
          <div className='order-summary-container'>
          {finalCartItems.map((product) => (
            <div className='single-order-container'>
              <div className='single-order-left'>
                <div>{product.name}</div>
                <br></br>
                <img src={product.image240px} alt="" margin="auto"></img>
              </div>
              <div className='single-order-right'>
              <div className='with-space'>{product.description}</div>
              <div className='with-space'>Zamówiona ilość: {product.qty}</div>
              <div className='with-space'>Łączna cena: {product.price}</div>
              </div>
            </div>
              ))}
          </div>
              <div className='order-details-footer'>{totalCostString} {totalCost} zł</div>
        </div>
    </div>
  )
}

export default OrderForm

