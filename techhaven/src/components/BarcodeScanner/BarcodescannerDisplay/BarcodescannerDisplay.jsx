import React from 'react';
import './BarcodescannerDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';

function BarcodescannerDisplay() {
  const [bsData, setBsData] = useState([]);
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
    const fetchBarcodeScanners = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/product/filter-bs/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBsData(data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
  
    fetchBarcodeScanners();
  },[]);

  return (
    <>
    <div className='bspage'>
      <div className='bspagetitle'>
        <h1 className='bspagehead'>Barcode Scanners</h1>
        <p className='bspagetitlecontent'>Scan with Confidence, Built for Endurance. Perfect for Every Environment.</p>
      </div>
      <Filter/>
      <Container className='bscontainer'>
        <Row>
          {bsData
            .filter(bs => bs.stock > 0 && bs.is_available > 0 && bs.discount_price>=value[0] && bs.discount_price<=value[1])
            .map((bs, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/barcode-scanners/${encodeURIComponent(bs.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${bs.images[0]}`} alt="BarcodeScanner" className='bsproductimg'/>
                <p className='bsname'>{bs.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(bs.rating)}</span> 
                 <StarRatings
                    rating={Number(bs.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{bs.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(bs.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(bs.price)}</span></p>
                <p>({Math.round((bs.price-bs.discount_price)/bs.price*100)}% off)</p>
                {bs.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {bs.stock>1 && bs.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {bs.stock>3 && bs.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {bs.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default BarcodescannerDisplay