import React from 'react';
import './HeadphoneEarbudDisplay.css';
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

function HeadphoneEarbudDisplay() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [hpebData, setHpEbData] = useState([]);
  const { value } = useFilter();
  const navigate = useNavigate();
  const { hp_eb_type } = useParams(); 

  useEffect(() => {
    if (hp_eb_type) {
      setSelectedCategories([hp_eb_type]);
    } else {
      setSelectedCategories([]);
    }
  }, [hp_eb_type]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'All') {
      if (checked) {
        setSelectedCategories([
          'Wired Headphones',
          'Wireless Headphones',
          'Wired Earbuds',
          'Wireless Earbuds'
        ]);
      } 
      else 
      {
        setSelectedCategories([]); 
      }
    } 
    else 
    {
      setSelectedCategories(prev =>
        checked ? [...prev, name] : prev.filter(category => category !== name)
      );
    }
    
    if (name !== 'All') 
    {
      navigate(`/shop/HpEb/${encodeURIComponent(name)}`);
    } 
    else 
    {
      navigate('/shop/HpEb');
    }
  };
  
  function formatCurrency(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  }
  
  useEffect(() => {
    const fetchHpEb = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/product/filter-hp-eb/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ categories: selectedCategories }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHpEbData(data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
  
    fetchHpEb();
  }, [selectedCategories]);

  return (
    <>
    <div className='headphone-earbud-page'>
      <div className='headphone-earbud-page-title'>
        <h1 className='headphone-earbud-page-head'>Headphones & Earbuds</h1>
        <p className='headphone-earbud-page-titlecontent'>Crafted for Every Listening Preference: Enjoy Rich, Clear Sound and Ultimate Comfort with Our Headphones and Earbuds.</p>
      </div>
      <Filter/>
      <div className='flexcontainer'>
        <div>
            <h5 className='filtercategorytitle'>Product Category</h5>
            <Form.Check label='All' name='All' className='categorycheckbox' onChange={handleCheckboxChange}/>
            <Form.Check label='Wired Headphones' name='Wired Headphones' className='categorycheckbox' onChange={handleCheckboxChange}/>
            <Form.Check label='Wireless Headphones' name='Wireless Headphones' className='categorycheckbox' onChange={handleCheckboxChange}/>
            <Form.Check label='Wired Earbuds' name='Wired Earbuds' className='categorycheckbox' onChange={handleCheckboxChange}/>
            <Form.Check label='Wireless Earbuds' name='Wireless Earbuds' className='categorycheckbox' onChange={handleCheckboxChange}/>
        </div>
        <Container className='container'>
        <Row>
          {hpebData
            .filter(hp_eb => hp_eb.stock > 0 && hp_eb.is_available > 0 && hp_eb.discount_price>=value[0] && hp_eb.discount_price<=value[1])
            .map((hp_eb, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/HpEb/${encodeURIComponent(hp_eb.headphone_earbud_type)}/${encodeURIComponent(hp_eb.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${hp_eb.images[0]}`} alt="Headphone/Earbud" className='productimg'/>
                <p className='headphone-earbud-name'>{hp_eb.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(hp_eb.rating)}</span> 
                 <StarRatings
                    rating={Number(hp_eb.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{hp_eb.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(hp_eb.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(hp_eb.price)}</span></p>
                <p>({Math.round((hp_eb.price-hp_eb.discount_price)/hp_eb.price*100)}% off)</p>
                {hp_eb.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {hp_eb.stock>1 && hp_eb.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {hp_eb.stock>3 && hp_eb.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {hp_eb.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
                <p>FREE Delivery, At Your Doorstep in No Time!</p>
              </Card>
            </Col>
          ))}
        </Row>
       </Container>
      </div>
     </div>
    </>
  )
}

export default HeadphoneEarbudDisplay