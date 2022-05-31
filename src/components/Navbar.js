import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import gatsuLogo from "../images/gatsu-logo-80px.png"
import gatsuLogoMobile from "../images/gatsu-logo-43px.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={button ? gatsuLogo : gatsuLogoMobile} alt=""></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                O nas
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Oferta
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                ZŁÓŻ ZAMÓWIENIE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>ZŁÓŻ ZAMÓWIENIE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;