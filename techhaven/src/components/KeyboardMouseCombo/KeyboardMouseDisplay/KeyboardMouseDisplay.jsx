import React from 'react';
import './KeyboardMouseDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';

function KeyboardMouseDisplay() {
  const [combosData, setCombosData] = useState([]);
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
    const fetchCombos = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/product/filter-combos/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCombosData(data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
  
    fetchCombos();
  },[]);

  return (
    <>
    <div className='combospage'>
      <div className='combospagetitle'>
        <h1 className='combospagehead'>Keyboard Mouse Combos</h1>
        <p className='combospagetitlecontent'>Effortless Precision, Built for Endurance. The Perfect Pair for Every Task.</p>
      </div>
      <Filter/>
      <Container className='comboscontainer'>
        <Row>
          {combosData
            .filter(combos => combos.stock > 0 && combos.is_available > 0 && combos.discount_price>=value[0] && combos.discount_price<=value[1])
            .map((combos, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/peripherals/combos/${encodeURIComponent(combos.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${combos.images[0]}`} alt="Keyboard Mouse Combo" className='productimg'/>
                <p className='combosname'>{combos.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(combos.rating)}</span> 
                 <StarRatings
                    rating={Number(combos.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{combos.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(combos.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(combos.price)}</span></p>
                <p>({Math.round((combos.price-combos.discount_price)/combos.price*100)}% off)</p>
                {combos.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {combos.stock>1 && combos.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {combos.stock>3 && combos.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {combos.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default KeyboardMouseDisplay