import React from 'react';
import './MobileAccessoriesDisplay.css';
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

function MobileAccessoriesDisplay() {
  const { accessory_category } = useParams(); 
  const [selectedCategories, setSelectedCategories] = useState(accessory_category ? accessory_category.split(', ') : []);
  const [mobileAccessoriesData, setMobileAccessoriesData] = useState([]);
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
      navigate(`/shop/accessories/mobile-accessories/${encodeURIComponent(selectedCategories.join(', '))}`);
    }
    else
    {
      navigate('/shop/accessories/mobile-accessories');
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
      const fetchMobileAccessories = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-mobile-accessories/', {
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
          setMobileAccessoriesData(data);
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchMobileAccessories();
    }, [selectedCategories]);

  return (
    <>
    <div className='mobileaccessoriespage'>
    <div className='mobileaccessoriespagetitle'>
        <h1 className='mobileaccessoriespagehead'>Mobile Accessories</h1>
        <p className='mobileaccessoriespagetitlecontent'>Optimize Connectivity, Elevate Convenience. Reliable Accessories for Every Mobile and Momentum.</p>
    </div>
    <Filter/>
    <div className='flexcontainer'>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='Mobile Holders' value='Mobile Holders' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Charging Cables' value='Charging Cables' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Wallet Cases' value='Wallet Cases' className='categorycheckbox' onChange={handleCheckboxChange} />
      <Form.Check label='Memory Cards' value='Memory Cards' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Stylus Pens' value='Stylus Pens' className='categorycheckbox' onChange={handleCheckboxChange} />
    </div>
    <Container className='container'>
        <Row>
          {mobileAccessoriesData
            .filter(mobileaccessories => mobileaccessories.stock > 0 && mobileaccessories.is_available > 0 && mobileaccessories.discount_price>=value[0] && mobileaccessories.discount_price<=value[1])
            .map((mobileaccessories, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/accessories/mobile-accessories/${encodeURIComponent(mobileaccessories.accessory_category)}/${encodeURIComponent(mobileaccessories.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${mobileaccessories.images[0]}`} alt="MobileAccessories" className='mobileaccessoriesproductimg'/>
                <p className='mobileaccessoriesname'>{mobileaccessories.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(mobileaccessories.rating)}</span> 
                 <StarRatings
                    rating={Number(mobileaccessories.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{mobileaccessories.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(mobileaccessories.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(mobileaccessories.price)}</span></p>
                <p>({Math.round((mobileaccessories.price-mobileaccessories.discount_price)/mobileaccessories.price*100)}% off)</p>
                {mobileaccessories.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {mobileaccessories.stock>1 && mobileaccessories.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {mobileaccessories.stock>3 && mobileaccessories.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {mobileaccessories.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default MobileAccessoriesDisplay