import React from 'react';
import './SpeakerDisplay.css';
import Filter from '../../Laptops/Filter/Filter';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useFilter } from '../../Laptops/Context/FilterContext';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';

function SpeakerDisplay() {
  const { speakertype } = useParams(); 
  const [selectedCategories, setSelectedCategories] = useState(speakertype ? speakertype.split(', ') : []);
  const [speakerData, setSpeakerData] = useState([]);
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
      navigate(`/shop/speakers/${encodeURIComponent(selectedCategories.join(', '))}`);
    }
    else
    {
      navigate('/shop/speakers');
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
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/product/filter-speakers/', {
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
        setSpeakerData(data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
  
    fetchSpeakers();
  }, [selectedCategories]);
  
  return (
    <>
     <div className='speakerpage'>
      <div className='speakerpagetitle'>
        <h1 className='speakerpagehead'>Speaker</h1>
        <p className='speakerpagetitlecontent'>Designed for Power, Crafted for Clarity. Perfect for Every Occasion, Built to Last.</p>
      </div>
      <Filter/>
      <div className='flexcontainer'>
        <div>
            <h5 className='filtercategorytitle'>Product Category</h5>
            <Form.Check label='Soundbars' value='Soundbars' className='categorycheckbox' onChange={handleCheckboxChange}/>
            <Form.Check label='Wireless Speakers' value='Wireless Speakers' className='categorycheckbox' onChange={handleCheckboxChange}/>
            <Form.Check label='Party Speakers' value='Party Speakers' className='categorycheckbox' onChange={handleCheckboxChange}/>
        </div>
        <Container className='container'>
        <Row>
          {speakerData
            .filter(speaker => speaker.stock > 0 && speaker.is_available > 0 && speaker.discount_price>=value[0] && speaker.discount_price<=value[1])
            .map((speaker, index) => (
            <Col key={index} md={3} style={{ margin: '42px'}}>
              <Card  onClick={()=>{navigate(`/shop/speakers/${encodeURIComponent(speaker.speaker_type)}/${encodeURIComponent(speaker.name)}`)}}
                 style={{ width: '22rem', height: '32rem' , border: '1px solid lightgray'}}>
                <Card.Img variant='top' src={`http://localhost:8000${speaker.images[0]}`} alt="Speaker" className='speakerproductimg'/>
                <p className='speakername'>{speaker.name}</p>
                <div className='rating'><span className='ratingvalue'>{Math.abs(speaker.rating)}</span> 
                 <StarRatings
                    rating={Number(speaker.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <span className='numreviews'>{speaker.num_reviews} reviews</span>
                </div>
                <p className='price'><span className='actual_price'>{formatCurrency(speaker.discount_price)}</span> MRP: <span className='mrpprice'>{formatCurrency(speaker.price)}</span></p>
                <p>({Math.round((speaker.price-speaker.discount_price)/speaker.price*100)}% off)</p>
                {speaker.stock===1 && <p style={{color:'red'}}>Only 1 Left—Buy Now!</p>}
                {speaker.stock>1 && speaker.stock<=3 && <p style={{color:'red'}}>Only a Few Left—Get Yours Fast!</p>}
                {speaker.stock>3 && speaker.stock<=10 && <p style={{color:'orange'}}>Limited Stock Available—Order Soon!</p>}
                {speaker.stock>10 && <p style={{color:'green'}}>In Stock—Available Now!</p>}
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

export default SpeakerDisplay;