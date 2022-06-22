import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu'
import Order from './components/Order'
import data from './components/Data'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Cart from './components/Cart';

 
export default function App() {

const {products} = data;
const[cartItems, setCartItems] = useState([]);
const[finalCartItems, setFinalCartItems] = useState([]);
const onAdd = (product) => {
  const exist = cartItems.find(x => x.id === product.id);
  if(exist){
    setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x));
  } else {
    setCartItems([...cartItems, {...product, qty: 1}]);
  }
  console.log(cartItems);
}

const handleClick = (SingleCartId, SingleCartQuantity) => {
  onAdd(products[SingleCartId-1]);
}

const onSubmit = () => {
  setFinalCartItems(cartItems);
}

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/menu' exact element={<Menu />} />
          <Route path='/about-us' exact element={<AboutUs />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/cart' exact element={<Cart cartItems = {finalCartItems} handleClick={handleClick} />} />
          <Route path='/order' exact element={<Order onAdd={onAdd} products={products} onSubmit={onSubmit} handleClick={handleClick} cartItems={cartItems}/>}  />

      </Routes>
    </Router>
    </>
  );
}

