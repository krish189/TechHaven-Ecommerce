import React from 'react';
import './SmartWatchDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';

function SmartWatchDisplay() {
  const [swData, setSwData] = useState([]);
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
        const fetchSmartWatches = async () => {
          try {
            const response = await fetch('http://localhost:8000/api/product/filter-smart-watch/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSwData(data);
          } catch (error) {
            console.error('There was an error fetching the data!', error);
          }
        };
      
        fetchSmartWatches();
      },[]);
    
  
  return (
    <>
    <div className='swpage'>
      <div className='swpagetitle'>
        <h1 className='swpagehead'>Smart Watches</h1>
        <p className='swpagetitlecontent'>Empower Your Fitness, Elevate Your Style. Built for Every Moment.</p>
      </div>
      <Filter/>
      <Container className='swcontainer'>
        <Row>
          {swData
            .filter(sw => sw.stock > 0 && sw.is_available > 0 && sw.discount_price>=value[0] && sw.discount_price<=value[1])
            .map((sw, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/smart-watch/${encodeURIComponent(sw.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${sw.images[0]}`} alt="Smart Watch" className='swproductimg'/>
                <p className='swname'>{sw.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(sw.rating)}</span> 
                 <StarRatings
                    rating={Number(sw.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{sw.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(sw.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(sw.price)}</span></p>
                <p>({Math.round((sw.price-sw.discount_price)/sw.price*100)}% off)</p>
                {sw.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {sw.stock>1 && sw.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {sw.stock>3 && sw.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {sw.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default SmartWatchDisplay