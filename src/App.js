
import './App.css';
import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Features from './component/Features';
import Products from './component/Products';
import Categories from './component/Categories';
import Review from './component/Review';
import Blogs from './component/Blogs';
import Footer from './component/Footer';
import './styles/Header.css';
import './styles/Home.css';
import './styles/Features.css';
import './styles/Products.css';
import './styles/Categories.css';
import './styles/Review.css';
import './styles/Blogs.css';
import './styles/Footer.css';







 
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Products />
      <Categories />
      <Review />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;

