import React from 'react';
import './LedProjectorDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';


function LedProjectorDisplay() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [ledprojectorData, setLedProjectorData] = useState([]);
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
    const fetchLedProjectors = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/product/filter-ledprojector/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLedProjectorData(data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
  
    fetchLedProjectors();
  },[]);
  
  return (
    <>
    <div className='ledprojectorpage'>
      <div className='ledprojectorpagetitle'>
        <h1 className='ledprojectorpagehead'>LED Projectors</h1>
        <p className='ledprojectorpagetitlecontent'>Engineered for Brilliance, Crafted for Precision. Perfect for Every Space, Built for Endurance.</p>
      </div>
      <Filter/>
      <Container className='ledprojectorcontainer'>
        <Row>
          {ledprojectorData
            .filter(ledprojector => ledprojector.stock > 0 && ledprojector.is_available > 0 && ledprojector.discount_price>=value[0] && ledprojector.discount_price<=value[1])
            .map((ledprojector, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/LedProjectors/${encodeURIComponent(ledprojector.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${ledprojector.images[0]}`} alt="LedProjector" className='ledprojectorproductimg'/>
                <p className='ledprojectorname'>{ledprojector.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(ledprojector.rating)}</span> 
                 <StarRatings
                    rating={Number(ledprojector.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{ledprojector.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(ledprojector.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(ledprojector.price)}</span></p>
                <p>({Math.round((ledprojector.price-ledprojector.discount_price)/ledprojector.price*100)}% off)</p>
                {ledprojector.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {ledprojector.stock>1 && ledprojector.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {ledprojector.stock>3 && ledprojector.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {ledprojector.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default LedProjectorDisplay