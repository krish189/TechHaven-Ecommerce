import React from 'react';
import './KeyboardDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFilter } from '../../Laptops/Context/FilterContext';
import StarRatings from 'react-star-ratings';
import { useNavigate, useParams } from 'react-router-dom';

function KeyboardDisplay() {
  const { keyboard_type } = useParams(); 
  const [selectedCategories, setSelectedCategories] = useState(keyboard_type ? keyboard_type.split(', ') : []);
  const [keyboardData, setKeyboardData] = useState([]);
  const { value } = useFilter();
  const navigate = useNavigate();
   
  const handleCheckboxChange = (e) =>{
    if (e.target.checked)
    {
      setSelectedCategories([...selectedCategories, e.target.value]);
    }
    else
    {
      setSelectedCategories(selectedCategories.filter((item)=> item !== e.target.value));
    }
   };
   
   useEffect(()=>{
    //Navigation
    if (selectedCategories.length !== 0)
    {
      navigate(`/shop/peripherals/keyboard/${encodeURIComponent(selectedCategories.join(', '))}`);
    }
    else
    {
      navigate('/shop/peripherals/keyboard');
    }
   }, [selectedCategories, navigate]);
  
    function formatCurrency(price) {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
      }).format(price);
    }
  
    useEffect(() => {
      const fetchKeyboard = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-keyboard/', {
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
          setKeyboardData(data);
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchKeyboard();
    }, [selectedCategories]);

  return (
    <>
    <div className='keyboardpage'>
    <div className='keyboardpagetitle'>
        <h1 className='keyboardpagehead'>Keyboards</h1>
        <p className='keyboardpagetitlecontent'>Effortless Typing, Enhanced Productivity. Keyboards Crafted for Precision, Comfort, and Durability.</p>
    </div>
    <Filter/>
    <div className='flexcontainer'>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='Wired Keyboard' value='Wired Keyboard' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Wireless Keyboard' value='Wireless Keyboard' className='categorycheckbox' onChange={handleCheckboxChange}/>
    </div>
    <Container className='container'>
        <Row>
          {keyboardData
            .filter(keyboard => keyboard.stock > 0 && keyboard.is_available > 0 && keyboard.discount_price>=value[0] && keyboard.discount_price<=value[1])
            .map((keyboard, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/peripherals/keyboard/${encodeURIComponent(keyboard.keyboard_type)}/${encodeURIComponent(keyboard.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${keyboard.images[0]}`} alt="Keyboard" className='keyboardproductimg'/>
                <p className='keyboardname'>{keyboard.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(keyboard.rating)}</span> 
                 <StarRatings
                    rating={Number(keyboard.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{keyboard.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(keyboard.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(keyboard.price)}</span></p>
                <p>({Math.round((keyboard.price-keyboard.discount_price)/keyboard.price*100)}% off)</p>
                {keyboard.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {keyboard.stock>1 && keyboard.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {keyboard.stock>3 && keyboard.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {keyboard.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default KeyboardDisplay