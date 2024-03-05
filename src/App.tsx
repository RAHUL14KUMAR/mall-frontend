import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Electrical from './components/ElectricalCartComponent/Cart'
import ToyCart from './components/ToyCart/ToyCart';
import FashionCart from './components/FashionCart/Fashion';

function App() {
  return (
    <div>
      <Header/>
      <Electrical/>
      <ToyCart/>/
      <FashionCart/>
    </div>   
  );
}

export default App;
