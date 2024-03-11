import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import All from './components/All/All';
import Details from './components/CartDetails/Details';
import Address from './components/Address/Address';
import Preview from './components/preview/preview';

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
        <Route path='/address' element={<Address/>}/>
        <Route path='/order' element={<Preview/>}/>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
