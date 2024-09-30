import React from 'react';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import {useState, useEffect, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './KeyboardInfo.css';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';

function KeyboardInfo() {
   const { keyboardname } = useParams();
   const [keyboarddata, setKeyboarddata] = useState([]);
   const [image, setImage] = useState('');
   const [imageDimensions, setImageDimensions] = useState({ width: 660, height: 679 });
    
   const imageRef = useRef(null);
   const { addToCart } = useContext(CartContext);

   function formatCurrency(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  }
 
  useEffect(() => {
    const fetchKeyboardDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-keyboard-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: keyboardname }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setKeyboarddata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchKeyboardDatabyName();
  },[keyboardname]);
  
  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };
 
  const handleAddToCart = (keyboard) => {
    addToCart(keyboard);
  };
  
  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
    <div>
       {keyboarddata.map((keyboard,keyboardindex)=>(
        <div key={keyboardindex}>
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {keyboard.images && keyboard.images.map((image, imageindex) => (
              <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
        </div>
       ))
       }
    </div>
     <div className='keyboardpointerzoom'>
     <PointerZoom
      image={{
        src: image,
        width: 660,
        height: 679
      }}
      zoomImage={{
        src: image,
        width: imageDimensions.width,
        height: imageDimensions.height
      }}
    />
    {image && (
            <img
              src={image}
              alt="Zoom"
              style={{ display: 'none' }}
              ref={imageRef}
              onLoad={handleImageLoad}
            />
          )}
     </div>
     <div className='info'>
      {keyboarddata && keyboarddata.map((keyboard,index)=>(
        <div key={index}>
        <p className='name'>{keyboard.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(keyboard.rating)}</span> 
                 <StarRatings
                    rating={Number(keyboard.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{keyboard.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((keyboard.price-keyboard.discount_price)/keyboard.price*100)}% </span><span className='newprice'>{formatCurrency(keyboard.discount_price)}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(keyboard.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(keyboard.price-keyboard.discount_price)}</Badge></p>
        <p className='sku'>SKU: {keyboard.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(keyboard)}>Add to Cart</Button><br></br>
        <Button className='buynow'>Buy Now</Button>
        <div>
        <img src={productreturn} alt='productreturn' className='productreturn'/>
        <img src={warranty} alt='warranty' className='warrantyicon'/>
        <img src={delivery} alt="deliverytruck" className='deliverytruckicon' />
        </div>
        <div className='icondefn'>
          <p style={{width: '5rem', textAlign: 'center', paddingTop: '24px'}}>Free 30-days returns</p>
          <p style={{width: '5rem', textAlign: 'center', position: 'relative', left: '1.3rem', paddingTop: '24px'}}>1 Year Warranty</p>
          <p style={{width: '5rem', textAlign: 'justify', position: 'relative', left: '3.1rem', paddingTop: '24px'}}>Free Delivery</p>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{keyboard.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue'>{keyboard.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.8rem'}}>{keyboard.color}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{keyboard.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{keyboard.weight} kg</span></p>
        <p><span className='spechead'>Category</span><span className='specvalue' style={{position: 'relative', left: '8.5rem'}}>{keyboard.peripherals_category}</span></p>
        {keyboard.keyboard_category && <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{keyboard.keyboard_category}</span></p>}
        {keyboard.keyboard_type && <p><span className='spechead'>Type</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{keyboard.keyboard_type}</span></p>}
        {keyboard.no_of_keys && <p><span className='spechead'>Total Keys</span><span className='specvalue' style={{position: 'relative', left: '7.9rem'}}>{keyboard.no_of_keys}</span></p>}
        {keyboard.layout && <p><span className='spechead'>Layout</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{keyboard.layout}</span></p>}
        {keyboard.key_switch_type && <p><span className='spechead'>Key Switch Type</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>{keyboard.key_switch_type}</span></p>}
        {keyboard.cable_length && <p><span className='spechead'>Cable Length</span><span className='specvalue' style={{position: 'relative', left: '6.6rem'}}>{keyboard.cable_length}</span></p>}
        {keyboard.connection_type && <p><span className='spechead'>Connection Type</span><span className='specvalue' style={{position: 'relative', left: '4.9rem'}}>{keyboard.connection_type}</span></p>}
        {keyboard.backlighting && <p><span className='spechead'>Backlighting</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>Yes</span></p>}
        {keyboard.wireless_connectivity && <p><span className='spechead'>Wireless Connectivity</span><span className='specvalue' style={{position: 'relative', left: '2.5rem'}}>{keyboard.wireless_connectivity}</span></p>}
        {keyboard.wireless_range && <p><span className='spechead'>Wireless Range</span><span className='specvalue' style={{position: 'relative', left: '5.5rem'}}>{keyboard.wireless_range}</span></p>}
        {keyboard.noise_level && <p><span className='spechead'>Noise Level Category</span><span className='specvalue' style={{position: 'relative', left: '2.7rem'}}>{keyboard.noise_level}</span></p>}
        {keyboard.noise_reduction_percent && <p><span className='spechead'>Noise Reduction</span><span className='specvalue' style={{position: 'relative', left: '5.1rem'}}>{keyboard.noise_reduction_percent}</span></p>}
        {keyboard.media_controls && <p><span className='spechead'>Media Controls</span><span className='specvalue' style={{position: 'relative', left: '5.6rem'}}>Yes</span></p>}
        {keyboard.ergonomics && <p><span className='spechead'>Ergonomic Design</span><span className='specvalue' style={{position: 'relative', left: '4.3rem'}}>Yes</span></p>}
        {keyboard.phone_holder && <p><span className='spechead'>Phone Holder</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>Yes</span></p>}
        {keyboard.battery_type && <p><span className='spechead'>Battery Type</span><span className='specvalue' style={{position: 'relative', left: '6.3rem'}}>{keyboard.battery_type}</span></p>}
        {keyboard.recharge_time && <p><span className='spechead'>Recharge Time</span><span className='specvalue' style={{position: 'relative', left: '5.5rem'}}>{keyboard.recharge_time}</span></p>}
        {keyboard.battery_life && <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{keyboard.battery_life}</span></p>}
        {keyboard.included_items && <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{keyboard.included_items}</span></p>}
        <hr style={{color:'gray'}}></hr>
        <p className='spechead'>About this item</p>
        <p className='descpara'>{keyboard.description_para}</p>
        <ul className='descpoints'>
              {keyboard.description_points.split('\n').map((point, pointindex) => (
                <li key={pointindex}>&#8226; {point}</li>
              ))}
        </ul>
        </div>
      ))}
     </div>
     </div>
    <Footer/>
    </>
  )
}

export default KeyboardInfo