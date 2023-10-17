import logo from './logo.svg';
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

