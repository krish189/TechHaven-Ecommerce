import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import headphone from '../../../assets/headphones.jpg';
import hometheater from '../../../assets/shop_hometheater.png';
import '../ShopCarousel/Shopcarousel.css';

function Shopcarousel() {
  return (
    <div>
        <Carousel>
           <Carousel.Item>
             <img src={headphone} className="d-block w-100" alt='headphone'/>
             <Carousel.Caption>
                <h1 style={{color:'#FFFFFF' ,position:'relative',bottom:'18rem'}}>BEST DEALS ON HEADPHONES</h1>
                <Button variant="light" size="lg" style={{position:'relative',bottom:'16rem'}}>UP TO 50% OFF</Button>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img src={hometheater} className="d-block w-100" alt='headphone'/>
             <Carousel.Caption>
                <h1 style={{color:'#194569',position:'relative',bottom:'18rem'}} >A DREAM HOME THEATER FOR YOUR HOME</h1>
                <Button variant="info" size="lg" style={{position:'relative',bottom:'16rem'}}>SHOP NOW</Button>
             </Carousel.Caption>
           </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Shopcarousel