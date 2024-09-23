import React from 'react';
import './LaptopAccessoriesDisplay.css';
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


function LaptopAccessoriesDisplay() {
 const [selectedCategories, setSelectedCategories] = useState([]);
 const [laptopAccessoriesData, setLaptopAccessoriesData] = useState([]);
 const { value } = useFilter();
 const navigate = useNavigate();
 const { accessory_category } = useParams(); 

 useEffect(() => {
    // Update the selected categories based on the URL
    if (accessory_category) {
      setSelectedCategories([accessory_category]);
    } else {
      setSelectedCategories([]);
    }
  }, [accessory_category]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'All') {
      if (checked) {
        setSelectedCategories([
          'Laptop Stands',
          'Cooling Pads',
          'Sleeve Cases',
          'Docking Stations',
          'USB Hubs',
          'Power Banks'
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
      navigate(`/shop/Accessories/LaptopAccessories/${encodeURIComponent(name)}`);
    } 
    else 
    {
      navigate('/shop/Accessories/LaptopAccessories');
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
    const fetchLaptopAccessories = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/product/filter-laptop-accessories/', {
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
        setLaptopAccessoriesData(data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
  
    fetchLaptopAccessories();
  }, [selectedCategories]);
  
  return (
    <>
    <div className='laptopaccessoriespage'>
    <div className='laptopaccessoriespagetitle'>
        <h1 className='laptopaccessoriespagehead'>Laptop Accessories</h1>
        <p className='laptopaccessoriespagetitlecontent'>Empower Performance, Enhance Productivity. Trusted Tools for Every Laptop and Lifestyle.</p>
    </div>
    <Filter/>
    <div className='flexcontainer'>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='All' name='All' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Laptop Stands' name='Laptop Stands' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Cooling Pads' name='Cooling Pads' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Sleeve Cases' name='Sleeve Cases' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Docking Stations' name='Docking Stations' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='USB Hubs' name='USB Hubs' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Power Banks' name='Power Banks' className='categorycheckbox' onChange={handleCheckboxChange} />
    </div>
    <Container className='container'>
        <Row>
          {laptopAccessoriesData
            .filter(laptopaccessories => laptopaccessories.stock > 0 && laptopaccessories.is_available > 0 && laptopaccessories.discount_price>=value[0] && laptopaccessories.discount_price<=value[1])
            .map((laptopaccessories, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/Accessories/LaptopAccessories/${encodeURIComponent(laptopaccessories.accessory_category)}/${encodeURIComponent(laptopaccessories.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${laptopaccessories.images[0]}`} alt="LaptopAccessories" className='laptopaccessoriesproductimg'/>
                <p className='laptopaccessoriesname'>{laptopaccessories.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(laptopaccessories.rating)}</span> 
                 <StarRatings
                    rating={Number(laptopaccessories.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{laptopaccessories.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(laptopaccessories.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(laptopaccessories.price)}</span></p>
                <p>({Math.round((laptopaccessories.price-laptopaccessories.discount_price)/laptopaccessories.price*100)}% off)</p>
                {laptopaccessories.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {laptopaccessories.stock>1 && laptopaccessories.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {laptopaccessories.stock>3 && laptopaccessories.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {laptopaccessories.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default LaptopAccessoriesDisplay