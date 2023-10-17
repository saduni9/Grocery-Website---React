import React from 'react';

function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        product <span>categories</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="Images/c1.jpg" alt="" />
          <h3>Local Fruits</h3>
          <p>upto 45% off</p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>

        <div className="box">
          <img src="Images/c2.jpg" alt="" />
          <h3>imported Fruits</h3>
          <p>upto 45% off</p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>

        <div className="box">
          <img src="Images/c3.jpg" alt="" />
          <h3>dry Fruits</h3>
          <p>upto 45% off</p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>

        <div className="box">
          <img src="Images/c4.jpg" alt="" />
          <h3>fruits products</h3>
          <p>upto 45% off</p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Categories;
