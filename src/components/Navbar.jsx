import React from 'react';
import '../components/Navbar.scss';
import search from '../images/search.png';
import menu from '../images/menu.png';
import cart from '../images/cart.png';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <section className='navbar'>
      
        <div className="logo">
            <img src={logo}/>
        </div>

        <div className="icons">
            <img src={search}/>
            <img src={cart}/>
            <img src={menu}/>
        </div>

    </section>
  );
}

export default Navbar;
