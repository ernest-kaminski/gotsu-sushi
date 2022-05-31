import React, { useState, useEffect } from 'react';
import { Button } from './Button'
import  katana  from '../images/ULOTKA_SET_KATANA.jpg'
import './HeroSection.css'
import set_katana_480px from "../images/set_katana_480px.png"
import set_katana_cena_480px from "../images/set_katana_cena_480px_d.png"
import set_party_480px from "../images/set_party_480px.png"
import set_party_cena_480px from "../images/set_party_cena_480px_a.png"
import set_katana_360px from "../images/set_katana_360px.png"
import set_katana_cena_360px from "../images/set_katana_cena_360px_b.png"
import set_party_360px from "../images/set_party_360px.png"
import set_party_cena_360px from "../images/set_party_cena_360px.png"


function HeroSection() {

  const [mobile, setMobile] = useState(false);

  const showMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    showMobile();
  }, []);

  window.addEventListener('resize', showMobile);

  return (
    <div className="hero-container">
      <div className="img-container">
        <div className="self-img-container-right">
          <img src={mobile ? set_katana_360px : set_katana_480px} alt="" margin="auto"></img>
        </div>
        <div className="self-img-container-left">
        <img src={mobile ? set_katana_cena_360px : set_katana_cena_480px} alt="" margin="auto"></img>
        </div>
      </div>
      <div className="img-container">
      <div className="self-img-container-right">
        <img src={mobile ? set_party_cena_360px : set_party_cena_480px} alt="" margin="auto"></img>
        </div>
      <div className="self-img-container-left">
          <img src={mobile ? set_party_360px : set_party_480px} alt="" margin="auto"></img>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
