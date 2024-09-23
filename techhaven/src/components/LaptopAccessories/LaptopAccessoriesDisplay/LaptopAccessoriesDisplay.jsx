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
 const { accessory_category } = useParams(); 
 const [selectedCategories, setSelectedCategories] = useState(accessory_category ? [accessory_category] : []);
 const [laptopAccessoriesData, setLaptopAccessoriesData] = useState([]);
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
    navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent(selectedCategories.join(', '))}`);
  }
  else
  {
    navigate('/shop/accessories/laptop-accessories');
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
      <Form.Check label='Laptop Stands' value='Laptop Stands' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Cooling Pads' value='Cooling Pads' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Sleeve Cases' value='Sleeve Cases' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Docking Stations' value='Docking Stations' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='USB Hubs' value='USB Hubs' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Power Banks' value='Power Banks' className='categorycheckbox' onChange={handleCheckboxChange} />
    </div>
    <Container className='container'>
        <Row>
          {laptopAccessoriesData
            .filter(laptopaccessories => laptopaccessories.stock > 0 && laptopaccessories.is_available > 0 && laptopaccessories.discount_price>=value[0] && laptopaccessories.discount_price<=value[1])
            .map((laptopaccessories, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent(laptopaccessories.accessory_category)}/${encodeURIComponent(laptopaccessories.name)}`)}}
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