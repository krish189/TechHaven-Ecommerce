import React from 'react';
import './MonitorDisplay.css';
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

function MonitorDisplay() {
  const { monitor_type } = useParams(); 
  const [selectedCategories, setSelectedCategories] = useState(monitor_type ? monitor_type.split(', ') : []);
  const [monitorData, setMonitorData] = useState([]);
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
      navigate(`/shop/peripherals/monitor/${encodeURIComponent(selectedCategories.join(', '))}`);
    }
    else
    {
      navigate('/shop/peripherals/monitor');
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
      const fetchMonitor = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-monitor/', {
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
          setMonitorData(data);
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchMonitor();
    }, [selectedCategories]);

  return (
    <>
    <div className='monitorpage'>
    <div className='monitorpagetitle'>
        <h1 className='monitorpagehead'>Monitors</h1>
        <p className='monitorpagetitlecontent'>Experience Unmatched Clarity in Every Pixel. Monitors Crafted for Optimal Performance and Ultimate Comfort, Elevating Your Visual Experience.</p>
    </div>
    <Filter/>
    <div className='flexcontainer'>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='Curved Monitor' value='Curved Monitor' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Touchscreen Monitor' value='Touchscreen Monitor' className='categorycheckbox' onChange={handleCheckboxChange}/>
      <Form.Check label='Portable Monitor' value='Portable Monitor' className='categorycheckbox' onChange={handleCheckboxChange}/>
    </div>
    <Container className='container'>
        <Row>
          {monitorData
            .filter(monitor => monitor.stock > 0 && monitor.is_available > 0 && monitor.discount_price>=value[0] && monitor.discount_price<=value[1])
            .map((monitor, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/peripherals/monitor/${encodeURIComponent(monitor.monitor_type)}/${encodeURIComponent(monitor.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${monitor.images[0]}`} alt="Monitor" className='monitorproductimg'/>
                <p className='monitorname'>{monitor.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(monitor.rating)}</span> 
                 <StarRatings
                    rating={Number(monitor.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{monitor.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(monitor.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(monitor.price)}</span></p>
                <p>({Math.round((monitor.price-monitor.discount_price)/monitor.price*100)}% off)</p>
                {monitor.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {monitor.stock>1 && monitor.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {monitor.stock>3 && monitor.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {monitor.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default MonitorDisplay