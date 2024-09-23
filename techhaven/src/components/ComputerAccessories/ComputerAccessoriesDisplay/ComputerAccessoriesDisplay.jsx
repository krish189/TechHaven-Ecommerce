import React from 'react';
import './ComputerAccessoriesDisplay.css';
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


function ComputerAccessoriesDisplay() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [computerAccessoriesData, setComputerAccessoriesData] = useState([]);
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
          'Solid State Drives',
          'Hard Disk Drives',
          'CPU Fans',
          'Graphics Cards',
          'Sound Cards',
          'USB Expansion Cards',
          'Motherboards'
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
      navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent(name)}`);
    } 
    else 
    {
      navigate('/shop/Accessories/ComputerAccessories');
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
  const fetchComputerAccessories = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/product/filter-computer-accessories/', {
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
      setComputerAccessoriesData(data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  fetchComputerAccessories();
}, [selectedCategories]);


  return (
    <>
    <div className='computeraccessoriespage'>
    <div className='computeraccessoriespagetitle'>
        <h1 className='computeraccessoriespagehead'>Computer Accessories</h1>
        <p className='computeraccessoriespagetitlecontent'>Unleash Potential, Embrace Versatility. Reliable Gear for Every Task and Challenge.</p>
    </div>
    <Filter/>
    <div className='flexcontainer'>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='All' name='All' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Solid State Drives' name='Solid State Drives' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Hard Disk Drives' name='Hard Disk Drives' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='CPU Fans' name='CPU Fans' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Graphics Cards' name='Graphics Cards' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Sound Cards' name='Sound Cards' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='USB Expansion Cards' name='USB Expansion Cards' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Motherboards' name='Motherboards' className='categorycheckbox' onChange={handleCheckboxChange}/>
    </div>
    <Container className='container'>
        <Row>
          {computerAccessoriesData
            .filter(computeraccessories => computeraccessories.stock > 0 && computeraccessories.is_available > 0 && computeraccessories.discount_price>=value[0] && computeraccessories.discount_price<=value[1])
            .map((computeraccessories, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent(computeraccessories.accessory_category)}/${encodeURIComponent(computeraccessories.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${computeraccessories.images[0]}`} alt="ComputerAccessories" className='computeraccessoriesproductimg'/>
                <p className='computeraccessoriesname'>{computeraccessories.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(computeraccessories.rating)}</span> 
                 <StarRatings
                    rating={Number(computeraccessories.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{computeraccessories.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(computeraccessories.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(computeraccessories.price)}</span></p>
                <p>({Math.round((computeraccessories.price-computeraccessories.discount_price)/computeraccessories.price*100)}% off)</p>
                {computeraccessories.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {computeraccessories.stock>1 && computeraccessories.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {computeraccessories.stock>3 && computeraccessories.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {computeraccessories.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default ComputerAccessoriesDisplay