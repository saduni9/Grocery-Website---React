
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {
  
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [shoppingCartActive, setShoppingCartActive] = useState(false);
  const [loginFormActive, setLoginFormActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);

  const handleSearchButtonClick = () => {
    setSearchFormActive(!searchFormActive);
    setNavbarActive(false);
    setShoppingCartActive(false);
    setLoginFormActive(false);
  };

  const handleCartButtonClick = () => {
    setShoppingCartActive(!shoppingCartActive);
    setSearchFormActive(false);
    setNavbarActive(false);
    setLoginFormActive(false);
  };

  const handleLoginButtonClick = () => {
    setLoginFormActive(!loginFormActive);
    setSearchFormActive(false);
    setNavbarActive(false);
    setShoppingCartActive(false);
  };

  const handleMenuButtonClick = () => {
    setNavbarActive(!navbarActive);
    setSearchFormActive(false);
    setShoppingCartActive(false);
    setLoginFormActive(false);
  };




  return (
    
    <header className="header">
      <a href="#" className="logo"><i className="fa-solid fa-basket-shopping"></i>foodX</a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#products">products</a>
        <a href="#categories">categories</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
      </nav>
      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-user" id="login-btn"></div>
      </div>

      <form action="" className="search-form">
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>

      

      <form action="" className="login-form">
        <h3>login now</h3>
        <input type="email" placeholder="your email" className="box" />
        <input type="password" placeholder="your password" className="box" />
        <p>forget your password <a href="#">click here</a></p>
        <p>don't have an account <a href="#">create now</a></p>
        <input type="submit" value="login now" className="btn" />
      </form>
    </header>
  );
}

export default Header;
