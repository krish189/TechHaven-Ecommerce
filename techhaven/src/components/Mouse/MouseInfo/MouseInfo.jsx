import React from 'react';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import {useState, useEffect, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './MouseInfo.css';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';

function MouseInfo() {
  const { mousename } = useParams();
  const [mousedata, setMousedata] = useState([]);
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
   const fetchMouseDatabyName = async () => {
       try {
         const response = await fetch('http://localhost:8000/api/product/filter-mouse-by-name/', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ name: mousename }),
         });
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setMousedata([data]);
         if (data.images && data.images.length > 0) {
           setImage(`http://localhost:8000${data.images[0]}`); 
         }
       } catch (error) {
         console.error('There was an error fetching the data!', error);
       }
     };
   
     fetchMouseDatabyName();
 },[mousename]);
 
 const handleImageLoad = () => {
   if (imageRef.current) {
     setImageDimensions({
       width: imageRef.current.width,
       height: imageRef.current.height,
     });
   }
 };

 const handleAddToCart = (mouse) => {
   addToCart(mouse);
 };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
    <div>
       {mousedata.map((mouse,mouseindex)=>(
        <div key={mouseindex}>
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {mouse.images && mouse.images.map((image, imageindex) => (
              <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
        </div>
       ))
       }
    </div>
     <div className='mousepointerzoom'>
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
      {mousedata && mousedata.map((mouse,index)=>(
        <div key={index}>
        <p className='name'>{mouse.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(mouse.rating)}</span> 
                 <StarRatings
                    rating={Number(mouse.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{mouse.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((mouse.price-mouse.discount_price)/mouse.price*100)}% </span><span className='newprice'>{formatCurrency(mouse.discount_price)}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(mouse.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(mouse.price-mouse.discount_price)}</Badge></p>
        <p className='sku'>SKU: {mouse.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(mouse)}>Add to Cart</Button><br></br>
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
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{mouse.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue'>{mouse.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.8rem'}}>{mouse.color}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{mouse.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{mouse.weight}kg</span></p>
        <p><span className='spechead'>Category</span><span className='specvalue' style={{position: 'relative', left: '8.5rem'}}>{mouse.peripherals_category}</span></p>
        <p><span className='spechead'>Mouse Type</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>{mouse.mouse_type}</span></p>
        {mouse.cable_length && <p><span className='spechead'>Cable Length</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{mouse.cable_length}</span></p>}
        {mouse.connectivity_type && <p><span className='spechead'>Connectivity Type</span><span className='specvalue' style={{position: 'relative', left: '4.4rem'}}>{mouse.connectivity_type}</span></p>}
        {mouse.dpi && <p><span className='spechead'>DPI</span><span className='specvalue' style={{position: 'relative', left: '11.1rem'}}>{mouse.dpi}</span></p>}
        {mouse.ergonomics && <p><span className='spechead'>Ergonomic Design</span><span className='specvalue' style={{position: 'relative', left: '4.4rem'}}>Yes</span></p>}
        {mouse.led_lighting && <p><span className='spechead'>LED Lighting</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>Yes</span></p>}
        {mouse.no_of_buttons && <p><span className='spechead'>Total Buttons</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{mouse.no_of_buttons}</span></p>}
        {mouse.motion_detection && <p><span className='spechead'>Motion Detection</span><span className='specvalue' style={{position: 'relative', left: '4.5rem'}}>{mouse.motion_detection}</span></p>}
        {mouse.wireless_range && <p><span className='spechead'>Wireless Range</span><span className='specvalue' style={{position: 'relative', left: '5.6rem'}}>{mouse.wireless_range}</span></p>}
        {mouse.battery_type && <p><span className='spechead'>Battery Type</span><span className='specvalue' style={{position: 'relative', left: '6.6rem'}}>{mouse.battery_type}</span></p>}
        {mouse.battery_life && <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '7.2rem'}}>{mouse.battery_life}</span></p>}
        {mouse.recharge_time && <p><span className='spechead'>Recharge Time</span><span className='specvalue' style={{position: 'relative', left: '5.8rem'}}>{mouse.recharge_time}</span></p>}
        {mouse.connectivity && <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{mouse.connectivity}</span></p>}
        {mouse.included_items && <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{mouse.included_items}</span></p>}
        <hr style={{color:'gray'}}></hr>
        <p className='spechead'>About this item</p>
        <p className='descpara'>{mouse.description_para}</p>
        <ul className='descpoints'>
              {mouse.description_points.split('\n').map((point, pointindex) => (
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

export default MouseInfo