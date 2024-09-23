import React from 'react';
import '../LaptopDisplay/Laptopdisplay.css';
import Filter from '../Filter/Filter';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFilter } from '../Context/FilterContext'; 
import StarRatings from 'react-star-ratings';
import { useNavigate, useParams } from 'react-router-dom';

function Laptopdisplay() {
  const { laptoptype } = useParams(); 
  const [selectedCategories, setSelectedCategories] = useState([laptoptype]);
  const [laptopData, setLaptopData] = useState([]);
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
    navigate(`/shop/laptops/${encodeURIComponent(selectedCategories.join(', '))}`);
  }
  else
  {
    navigate('/shop/laptops');
  }
 }, [selectedCategories]);
      
  function formatCurrency(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  }

useEffect(() => {
  const fetchLaptops = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/product/filter-laptops/', {
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
      setLaptopData(data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  fetchLaptops();
}, [selectedCategories]);


  return (
    <>
    <div className='laptoppage'>
    <div className='laptoppagetitle'>
        <h1 className='laptoppagehead'>LAPTOP</h1>
        <p className='laptoppagetitlecontent'>For Work, Play, Versatility and Reliability. Engineered for Performance, Built to Endure.</p>
    </div>
    <Filter/>
    <div className='flexcontainer'>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='Ultrabooks' value='Ultrabooks' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Gaming Laptops' value='Gaming Laptops' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='2-in-1 Laptops' value='2-in-1 Laptops' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Business Laptops' value='Business Laptops' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Workstation Laptops' value='Workstation Laptops' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Everyday Laptops' value='Everyday Laptops' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Rugged Laptops' value='Rugged Laptops' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Chromebooks' value='Chromebooks' className='categorycheckbox' onChange={handleCheckboxChange}/>
    </div>
    <Container className='container'>
        <Row>
          {laptopData
            .filter(laptop => laptop.stock > 0 && laptop.is_available > 0 && laptop.discount_price>=value[0] && laptop.discount_price<=value[1])
            .map((laptop, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent(laptop.laptop_type)}/${encodeURIComponent(laptop.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${laptop.images[0]}`} alt="Laptop" className='productimg'/>
                <p className='laptopname'>{laptop.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(laptop.rating)}</span> 
                 <StarRatings
                    rating={Number(laptop.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{laptop.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(laptop.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(laptop.price)}</span></p>
                <p>({Math.round((laptop.price-laptop.discount_price)/laptop.price*100)}% off)</p>
                {laptop.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {laptop.stock>1 && laptop.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {laptop.stock>3 && laptop.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {laptop.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default Laptopdisplay