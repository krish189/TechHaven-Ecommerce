import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../Carousel/Carousel.css';
import laptopcarousel from '../../../assets/Laptop_carousel.png';
import peripheralcarousel from '../../../assets/Peripherals_carousel.jpg';
import speakercarousel from '../../../assets/Speaker_carousel.jpg';
import hometheater from '../../../assets/hometheater_carousel.png';
import { useNavigate } from 'react-router-dom';

function CarouselComponent() {
  const navigate = useNavigate();
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={laptopcarousel}
          alt="Laptops"
        />
        <Carousel.Caption>
          <h1 style={{color:'#FFFFFF'}}>Discover Your Perfect Laptop at Unbeatable Prices</h1>
          <Button variant="light" size="lg" onClick={()=>navigate('/shop/laptops')}>Explore Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={peripheralcarousel}
          alt="Peripherals"
        />
        <Carousel.Caption>
          <h1 style={{color:'white'}}>Ultimate Peripherals for Gaming and Streaming Bliss</h1>
          <Button variant="light" size="lg">View More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={speakercarousel}
          alt="Speakers"
        />
        <Carousel.Caption>
          <h1>Speakers for Every Occasion: From Parties to Relaxation</h1>
          <Button variant="light" size="lg">Shop Collection</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hometheater}
          alt="HomeTheater"
        />
        <Carousel.Caption>
          <h1 className='headcolor'>A Dream Theater for your Home</h1>
          <Button variant="light" size="lg">Explore Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselComponent