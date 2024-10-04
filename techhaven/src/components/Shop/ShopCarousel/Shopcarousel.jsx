import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import headphone from '../../../assets/headphone_carousel.png';
import hometheater from '../../../assets/hometheater_carousel.png';
import '../ShopCarousel/Shopcarousel.css';

function Shopcarousel() {
  const navigate = useNavigate();
  return (
    <div>
        <Carousel>
           <Carousel.Item>
             <img src={headphone} className="d-block w-100" alt='headphone'/>
             <Carousel.Caption>
                <h1 style={{color:'#FFFFFF' ,position:'relative',bottom:'14rem'}}>BEST DEALS ON HEADPHONES AND EARBUDS</h1>
                <Button variant="light" size="lg" style={{position:'relative',bottom:'12rem'}} onClick={()=>navigate('/shop/headphones-earbuds')}>UP TO 50% OFF</Button>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img src={hometheater} className="d-block w-100" alt='hometheater'/>
             <Carousel.Caption>
                <h1 style={{color:'white',position:'relative',bottom:'14rem'}} >A DREAM HOME THEATER FOR YOUR HOME</h1>
                <Button variant="light" size="lg" style={{position:'relative',bottom:'12rem'}} onClick={()=>navigate('/shop/home-theaters')}>SHOP NOW</Button>
             </Carousel.Caption>
           </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Shopcarousel