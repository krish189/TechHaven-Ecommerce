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
  const { accessory_category } = useParams(); 
  const [selectedCategories, setSelectedCategories] = useState(accessory_category ? accessory_category.split(', ') : []);
  const [computerAccessoriesData, setComputerAccessoriesData] = useState([]);
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
      navigate(`/shop/accessories/computer-accessories/${encodeURIComponent(selectedCategories.join(', '))}`);
    }
    else
    {
      navigate('/shop/accessories/computer-accessories');
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
      <Form.Check label='Solid State Drives' value='Solid State Drives' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Hard Disk Drives' value='Hard Disk Drives' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='CPU Fans' value='CPU Fans' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Graphics Cards' value='Graphics Cards' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Sound Cards' value='Sound Cards' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='USB Expansion Cards' value='USB Expansion Cards' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Motherboards' value='Motherboards' className='categorycheckbox' onChange={handleCheckboxChange}/>
    </div>
    <Container className='container'>
        <Row>
          {computerAccessoriesData
            .filter(computeraccessories => computeraccessories.stock > 0 && computeraccessories.is_available > 0 && computeraccessories.discount_price>=value[0] && computeraccessories.discount_price<=value[1])
            .map((computeraccessories, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/accessories/computer-accessories/${encodeURIComponent(computeraccessories.accessory_category)}/${encodeURIComponent(computeraccessories.name)}`)}}
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