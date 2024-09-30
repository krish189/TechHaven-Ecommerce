import React from 'react';
import './CCTVDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';

function CCTVDisplay() {
    const [cctvData, setCCTVData] = useState([]);
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
        const fetchCCTVCameras = async () => {
          try {
            const response = await fetch('http://localhost:8000/api/product/filter-cctv/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCCTVData(data);
          } catch (error) {
            console.error('There was an error fetching the data!', error);
          }
        };
      
        fetchCCTVCameras();
      },[]);
    
  return (
    <>
    <div className='cctvpage'>
      <div className='cctvpagetitle'>
        <h1 className='cctvpagehead'>CCTV Cameras</h1>
        <p className='cctvpagetitlecontent'>Secure Your Space, Day or Night. Built to Last, Designed for Every Environment.</p>
      </div>
      <Filter/>
      <Container className='cctvcontainer'>
        <Row>
          {cctvData
            .filter(cctv => cctv.stock > 0 && cctv.is_available > 0 && cctv.discount_price>=value[0] && cctv.discount_price<=value[1])
            .map((cctv, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/cctv/${encodeURIComponent(cctv.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${cctv.images[0]}`} alt="CCTV Camera" className='cctvproductimg'/>
                <p className='cctvname'>{cctv.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(cctv.rating)}</span> 
                 <StarRatings
                    rating={Number(cctv.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{cctv.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(cctv.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(cctv.price)}</span></p>
                <p>({Math.round((cctv.price-cctv.discount_price)/cctv.price*100)}% off)</p>
                {cctv.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {cctv.stock>1 && cctv.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {cctv.stock>3 && cctv.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {cctv.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default CCTVDisplay