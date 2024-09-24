import React from 'react';
import './MicrophoneDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';

function MicrophoneDisplay() {
    const [microphoneData, setMicrophoneData] = useState([]);
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
      const fetchMicrophones = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-microphone/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMicrophoneData(data);
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchMicrophones();
    },[]);

  return (
    <>
    <div className='microphonepage'>
      <div className='microphonepagetitle'>
        <h1 className='microphonepagehead'>Microphones</h1>
        <p className='microphonepagetitlecontent'>Engineered for Clarity, Crafted for Performance. Perfect for Every Voice, Built for Durability.</p>
      </div>
      <Filter/>
      <Container className='microphonecontainer'>
        <Row>
          {microphoneData
            .filter(microphone => microphone.stock > 0 && microphone.is_available > 0 && microphone.discount_price>=value[0] && microphone.discount_price<=value[1])
            .map((microphone, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/microphones/${encodeURIComponent(microphone.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${microphone.images[0]}`} alt="Microphone" className='microphoneproductimg'/>
                <p className='microphonename'>{microphone.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(microphone.rating)}</span> 
                 <StarRatings
                    rating={Number(microphone.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{microphone.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(microphone.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(microphone.price)}</span></p>
                <p>({Math.round((microphone.price-microphone.discount_price)/microphone.price*100)}% off)</p>
                {microphone.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {microphone.stock>1 && microphone.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {microphone.stock>3 && microphone.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {microphone.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default MicrophoneDisplay