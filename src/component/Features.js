import React from 'react';

function Features() {
  return (
    <section className="features" id="features">
      <h1 className="heading">
        our <span>features</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="Images/img07.png" alt="" />
          <h3>fresh and organic</h3>
          <p>
            all the fruits product you can take from us. we ensure that all the
            product provide you with high quality
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>

        <div className="box">
          <img src="Images/img08.png" alt="" />
          <h3>free delivery</h3>
          <p>
            all the fruits product you can take from us. we ensure that all the
            product provide you with high quality
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>

        <div className="box">
          <img src="Images/img09.png" alt="" />
          <h3>easy payments</h3>
          <p>
            all the fruits product you can take from us. we ensure that all the
            product provide you with high quality
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;
