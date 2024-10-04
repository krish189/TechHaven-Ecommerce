import React from 'react';
import './HdmiAccessoriesDisplay.css';
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

function HdmiAccessoriesDisplay() {
  const { accessory_category } = useParams(); 
  const [selectedCategories, setSelectedCategories] = useState(accessory_category ? accessory_category.split(', ') : []);
  const [hdmiAccessoriesData, setHdmiAccessoriesData] = useState([]);
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
      navigate(`/shop/accessories/hdmi-accessories/${encodeURIComponent(selectedCategories.join(', '))}`);
    }
    else
    {
      navigate('/shop/accessories/hdmi-accessories');
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
      const fetchHdmiAccessories = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-hdmi-accessories/', {
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
          setHdmiAccessoriesData(data);
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchHdmiAccessories();
    }, [selectedCategories]);

  return (
    <>
    <div className='hdmiaccessoriespage'>
    <div className='hdmiaccessoriespagetitle'>
        <h1 className='hdmiaccessoriespagehead'>HDMI Accessories</h1>
        <p className='hdmiaccessoriespagetitlecontent'>Connect Seamlessly, Experience Brilliance. HDMI Accessories for Every Display.</p>
    </div>
    <Filter/>
    <div className='flexcontainer'>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='HDMI Cables' value='HDMI Cables' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='HDMI Adapters' value='HDMI Adapters' className='categorycheckbox' onChange={handleCheckboxChange}/>
    </div>
    <Container className='container'>
        <Row>
          {hdmiAccessoriesData
            .filter(hdmiaccessories => hdmiaccessories.stock > 0 && hdmiaccessories.is_available > 0 && hdmiaccessories.discount_price>=value[0] && hdmiaccessories.discount_price<=value[1])
            .map((hdmiaccessories, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/accessories/hdmi-accessories/${encodeURIComponent(hdmiaccessories.accessory_category)}/${encodeURIComponent(hdmiaccessories.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${hdmiaccessories.images[0]}`} alt="HdmiAccessories" className='hdmiaccessoriesproductimg'/>
                <p className='hdmiaccessoriesname'>{hdmiaccessories.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(hdmiaccessories.rating)}</span> 
                 <StarRatings
                    rating={Number(hdmiaccessories.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{hdmiaccessories.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(hdmiaccessories.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(hdmiaccessories.price)}</span></p>
                <p>({Math.round((hdmiaccessories.price-hdmiaccessories.discount_price)/hdmiaccessories.price*100)}% off)</p>
                {hdmiaccessories.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {hdmiaccessories.stock>1 && hdmiaccessories.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {hdmiaccessories.stock>3 && hdmiaccessories.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {hdmiaccessories.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default HdmiAccessoriesDisplay