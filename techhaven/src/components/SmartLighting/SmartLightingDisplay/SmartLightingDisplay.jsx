import React from 'react';
import './SmartLightingDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';

function SmartLightingDisplay() {
  const [slData, setSlData] = useState([]);
  const { value } = useFilter();
  const navigate = useNavigate();

  function formatCurrency(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
 }

 useEffect(() => {
  const fetchSmartLights = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/product/filter-smart-lighting/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSlData(data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  fetchSmartLights();
},[]);

  
  return (
    <>
    <div className='slpage'>
      <div className='slpagetitle'>
        <h1 className='slpagehead'>Smart Lighting</h1>
        <p className='slpagetitlecontent'>Illuminate Your World, Designed for Durability. Ideal for Every Setting.</p>
      </div>
      <Filter/>
      <Container className='slcontainer'>
        <Row>
          {slData
            .filter(sl => sl.stock > 0 && sl.is_available > 0 && sl.discount_price>=value[0] && sl.discount_price<=value[1])
            .map((sl, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/smart-lighting/${encodeURIComponent(sl.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${sl.images[0]}`} alt="Smart Lighting" className='slproductimg'/>
                <p className='slname'>{sl.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(sl.rating)}</span> 
                 <StarRatings
                    rating={Number(sl.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{sl.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(sl.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(sl.price)}</span></p>
                <p>({Math.round((sl.price-sl.discount_price)/sl.price*100)}% off)</p>
                {sl.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {sl.stock>1 && sl.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {sl.stock>3 && sl.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {sl.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
                <p>FREE Delivery, At Your Doorstep in No Time!</p>
              </Card>
            </Col>
          ))}
        </Row>
       </Container>
     </div>
    </>
  )
}

export default SmartLightingDisplay