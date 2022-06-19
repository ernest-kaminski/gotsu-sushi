import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu'
import Order from './components/Order'
import data from './components/Data'

function App() {

const {products} = data;

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/menu' exact element={<Menu />} />
          <Route path='/order' exact element={<Order products={products}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
