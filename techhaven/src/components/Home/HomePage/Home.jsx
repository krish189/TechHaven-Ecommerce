import React from 'react';
import Marquee from '../Marquee/Marquee';
import Header from '../Header/Header';
import CarouselComponent from '../Carousel/CarouselComponent';
import Explore from '../Explore/Explore';
import Subscribe from '../Subscribe/Subscribe';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
    <Marquee/>
    <Header/>
    <CarouselComponent/>
    <Explore/>
    <Subscribe/>
    <Product/>
    <Footer/>
    </>
  )
}

export default Home