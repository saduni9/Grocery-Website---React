import React from 'react';

function Review() {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        customer's <span>review</span>
      </h1>
      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <img src="Images/R1.png" alt="" />
            <p>
              i highly ensure that all the products are fresh and quality with
              the best price
            </p>
            <h3>emy fernanz</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="swiper-slide box">
            <img src="Images/R2.jpg" alt="" />
            <p>
              i highly ensure that all the products are fresh and quality with
              the best price
            </p>
            <h3>Joe fernanz</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="swiper-slide box">
            <img src="Images/R3.jpg" alt="" />
            <p>
              i highly ensure that all the products are fresh and quality with
              the best price
            </p>
            <h3>sara kert</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="swiper-slide box">
            <img src="Images/R4.jpg" alt="" />
            <p>
              i highly ensure that all the products are fresh and quality with
              the best price
            </p>
            <h3>ann perera</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
