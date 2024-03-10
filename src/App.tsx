import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Electrical from './components/ElectricalCartComponent/Cart'
import ToyCart from './components/ToyCart/ToyCart';
import FashionCart from './components/FashionCart/Fashion';

import { ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import All from './components/All/All';
import Details from './components/CartDetails/Details';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
