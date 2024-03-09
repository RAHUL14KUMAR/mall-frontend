import React from 'react'

import Electrical from '../ElectricalCartComponent/Cart'
import ToyCart from '../ToyCart/ToyCart';
import FashionCart from '../FashionCart/Fashion';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Electrical/>
            <ToyCart/>
            <FashionCart/>   
            <Footer/>
        </div>
    )
}

export default Home
