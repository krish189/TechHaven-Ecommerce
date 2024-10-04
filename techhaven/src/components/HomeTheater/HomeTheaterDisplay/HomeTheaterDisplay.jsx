import React from 'react';
import './HomeTheaterDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';

function HomeTheaterDisplay() {
  const [htData, setHtData] = useState([]);
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
  const fetchHomeTheaters = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/product/filter-home-theater/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHtData(data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  fetchHomeTheaters();
},[]);

  return (
    <>
     <div className='htpage'>
      <div className='htpagetitle'>
        <h1 className='htpagehead'>Home Theaters</h1>
        <p className='htpagetitlecontent'>Immerse Yourself in Rich Audio, Built for Performance. Ideal for Every Home Setup.</p>
      </div>
      <Filter/>
      <Container className='htcontainer'>
        <Row>
          {htData
            .filter(ht => ht.stock > 0 && ht.is_available > 0 && ht.discount_price>=value[0] && ht.discount_price<=value[1])
            .map((ht, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/home-theaters/${encodeURIComponent(ht.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${ht.images[0]}`} alt="Home Theater" className='productimg'/><br></br>
                <p className='htname'>{ht.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(ht.rating)}</span> 
                 <StarRatings
                    rating={Number(ht.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{ht.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(ht.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(ht.price)}</span></p>
                <p>({Math.round((ht.price-ht.discount_price)/ht.price*100)}% off)</p>
                {ht.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {ht.stock>1 && ht.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {ht.stock>3 && ht.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {ht.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default HomeTheaterDisplay