import React from 'react';

function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="Images/B1.jpg" alt="" className="" />
          <div className="content">
            <div className="icons">
              <a href="#">
                <i className="fa-solid fa-user"></i> by user
              </a>
              <a href="#">
                <i className="fa-solid fa-calendar"></i> 2nd september, 2023
              </a>
            </div>
            <h3>fresh and organic fruits</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptas.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="Images/B2.jpg" alt="" className="" />
          <div className="content">
            <div className="icons">
              <a href="#">
                <i className="fa-solid fa-user"></i> by user
              </a>
              <a href="#">
                <i className="fa-solid fa-calendar"></i> 2nd september, 2023
              </a>
            </div>
            <h3>fresh and organic fruits</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptas.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="Images/B3.jpg" alt="" className="" />
          <div className="content">
            <div className="icons">
              <a href="#">
                <i className="fa-solid fa-user"></i> by user
              </a>
              <a href="#">
                <i className="fa-solid fa-calendar"></i> 2nd september, 2023
              </a>
            </div>
            <h3>fresh and organic fruits</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptas.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
