import React from 'react'
import { Link } from 'react-router-dom';
import "./Popup.css"

function Popup(props) {

    const {onClosePopup, cartItems} = props;

  return (props.trigger) ? (
    <div className="popup-container">
        <div className="popup-inner">
            <h2>{cartItems.length !== 0 && cartItems !== undefined ? "Dodano " + cartItems.length + " produktów do koszyka" : "Uwaga! Żaden produkt nie został wybrany"}</h2>
            <Link to='/cart'><button className="close-btn">Przejdź do Koszyka</button></Link>
            <button className="close-btn" onClick={() => onClosePopup()}>Kontynuuj zamówienie</button>
        </div>
    </div>
  ) : "";
}

export default Popup