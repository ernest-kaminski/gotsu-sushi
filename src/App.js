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

var test;

const onAdd = (product) => {
  const exist = cartItems.find(x => x.id === product.id);
  if(exist){
    setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1, totalCost: (exist.qty+1)*product.price} : x));
  } else {
    setCartItems([...cartItems, {...product, qty: 1, totalCost: product.price}]);
  }

}

const onRemove = (product) => {
  const exist = cartItems.find(x => x.id === product.id);
  if(exist.qty === 1 ){
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  }else{
    setCartItems(
      cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty-1, totalCost: (exist.qty-1)*product.price} : x)
    )
  }

}

const handleClickAdd = (SingleCartId, SingleCartQuantity) => {
  onAdd(products[SingleCartId-1]);
}

const handleClickRemove = (SingleCartId, SingleCartQuantity) => {
  onRemove(products[SingleCartId-1]);
}


const onSubmit = () => {
  setFinalCartItems(cartItems);
}

const countTotalCost = (cartItems) => {
  var x = 0;
  for(var i=0; i < cartItems.length; i++){
    x = Number(x) + Number(cartItems[i].totalCost); 
  }
  return x;
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
          <Route path='/cart' exact element={<Cart cartItems = {finalCartItems} onAdd={handleClickAdd} onRemove={handleClickRemove} countTotalCost={countTotalCost}/>} />
          <Route path='/order' exact element={<Order onAdd={handleClickAdd} onRemove={handleClickRemove} products={products} onSubmit={onSubmit} cartItems={finalCartItems}/>}  />

      </Routes>
    </Router>
    </>
  );
}

