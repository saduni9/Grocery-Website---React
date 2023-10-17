import React from 'react';

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>
            foodX <i className="fa-solid fa-basket-shopping"></i>
          </h3>
          <p>
            We highly ensure that all the products are fresh and of high
            quality with the best price.
          </p>
          <div className="share">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#" className="links">
            <i className="fa-solid fa-phone"></i>+94-78795624
          </a>
          <a href="#" className="links">
            <i className="fa-solid fa-phone"></i>+94-78795624
          </a>
          <a href="#" className="links">
            <i className="fa-solid fa-envelope"></i>foodx@gmail.com
          </a>
          <a href="#" className="links">
            <i className="fa-solid fa-map-marker-alt"></i>colombo , sri lanka
          </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#" className="links">
            <i className="fa-solid fa-arrow-right"></i>home
          </a>
          <a href="#" className="links">
            <i className="fa-solid fa-arrow-right"></i>features
          </a>
          <a href="#" className="links">
            <i className="fa-solid fa-arrow-right"></i>product
          </a>
          <a href="#" className="links">
            <i className="fa-solid fa-arrow-right"></i>categories
          </a>
          <a href="#" className="links">
            <i className="fa-solid fa-arrow-right"></i>review
          </a>
          <a href="#" className="links">
            <i className="fa-solid fa-arrow-right"></i>blogs
          </a>
        </div>

        <div className="box">
          <h3>news letter</h3>
          <p>Subscribe to get our newsletter</p>
          <input type="text" placeholder="your email" className="email" />
          <input type="submit" className="btn" value="subscribe" />
          <img src="Images/Pa1.jpg" alt="" className="payments-img" />
        </div>
      </div>
      <div className="credit">
        created by <span>sanduni rasikala</span> all rights reserved
      </div>
    </section>
  );
}

export default Footer;
