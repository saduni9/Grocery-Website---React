import React from 'react';

function Header() {
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

      <div className="shopping-cart">
        <div className="box">
          <i className="fa-solid fa-trash"></i>
          <img src="Images/img01.jfif" alt="" />
          <div className="content">
            <h3>watermelon</h3>
            <span className="price">100Rs</span>
            <span className="quantity">qty : 1</span>
          </div>
        </div>
        {/* Add other shopping cart items here */}
      </div>

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
