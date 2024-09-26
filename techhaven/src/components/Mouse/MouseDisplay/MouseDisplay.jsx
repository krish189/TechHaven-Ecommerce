import React from 'react';
import './MouseDisplay.css';
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

function MouseDisplay() {
   const { mouse_type } = useParams(); 
   const [selectedCategories, setSelectedCategories] = useState(mouse_type ? [mouse_type] : []);
   const [mouseData, setMouseData] = useState([]);
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
      navigate(`/shop/peripherals/mouse/${encodeURIComponent(selectedCategories.join(', '))}`);
    }
    else
    {
      navigate('/shop/peripherals/mouse');
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
      const fetchMouse = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-mouse/', {
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
          setMouseData(data);
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchMouse();
    }, [selectedCategories]);

  return (
    <>
    <div className='mousepage'>
    <div className='mousepagetitle'>
        <h1 className='mousepagehead'>Mouses</h1>
        <p className='mousepagetitlecontent'>Precision in Every Click. Mouses Designed for Performance and Comfort.</p>
    </div>
    <Filter/>
    <div className='flexcontainer'>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='Wired Mouse' value='Wired Mouse' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Wireless Mouse' value='Wireless Mouse' className='categorycheckbox' onChange={handleCheckboxChange}/>
    </div>
    <Container className='container'>
        <Row>
          {mouseData
            .filter(mouse => mouse.stock > 0 && mouse.is_available > 0 && mouse.discount_price>=value[0] && mouse.discount_price<=value[1])
            .map((mouse, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/peripherals/mouse/${encodeURIComponent(mouse.mouse_type)}/${encodeURIComponent(mouse.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${mouse.images[0]}`} alt="Mouse" className='mouseproductimg'/>
                <p className='mousename'>{mouse.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(mouse.rating)}</span> 
                 <StarRatings
                    rating={Number(mouse.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{mouse.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(mouse.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(mouse.price)}</span></p>
                <p>({Math.round((mouse.price-mouse.discount_price)/mouse.price*100)}% off)</p>
                {mouse.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {mouse.stock>1 && mouse.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {mouse.stock>3 && mouse.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {mouse.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default MouseDisplay