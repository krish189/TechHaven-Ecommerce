import React from 'react';
import Header from '../Header/Header';
import Footer from '../../Home/Footer/Footer';
import Category from '../Category/Category';
import Shopcarousel from '../ShopCarousel/Shopcarousel';

function Shop() {
  return (
    <>
     <Header/>
     <Category/>
     <Shopcarousel/>
     <Footer />
    </>
  )
}

export default Shop