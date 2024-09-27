import React from 'react';
import './MonitorInfo.css';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import {useState, useEffect, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';

function MonitorInfo() {
    const { monitorname } = useParams();
    const [monitordata, setMonitordata] = useState([]);
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
     const fetchMonitorDatabyName = async () => {
         try {
           const response = await fetch('http://localhost:8000/api/product/filter-monitor-by-name/', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({ name: monitorname }),
           });
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
           const data = await response.json();
           setMonitordata([data]);
           if (data.images && data.images.length > 0) {
             setImage(`http://localhost:8000${data.images[0]}`); 
           }
         } catch (error) {
           console.error('There was an error fetching the data!', error);
         }
       };
     
       fetchMonitorDatabyName();
   },[monitorname]);
   
   const handleImageLoad = () => {
     if (imageRef.current) {
       setImageDimensions({
         width: imageRef.current.width,
         height: imageRef.current.height,
       });
     }
   };
  
   const handleAddToCart = (monitor) => {
     addToCart(monitor);
   };
  
  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
    <div>
       {monitordata.map((monitor,monitorindex)=>(
        <div key={monitorindex}>
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {monitor.images && monitor.images.map((image, imageindex) => (
              <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
        </div>
       ))
       }
    </div>
     <div className='monitorpointerzoom'>
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
      {monitordata && monitordata.map((monitor,index)=>(
        <div key={index}>
        <p className='name'>{monitor.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(monitor.rating)}</span> 
                 <StarRatings
                    rating={Number(monitor.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{monitor.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((monitor.price-monitor.discount_price)/monitor.price*100)}% </span><span className='newprice'>{formatCurrency(monitor.discount_price)}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(monitor.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(monitor.price-monitor.discount_price)}</Badge></p>
        <p className='sku'>SKU: {monitor.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(monitor)}>Add to Cart</Button><br></br>
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
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{monitor.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue'>{monitor.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.8rem'}}>{monitor.color}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{monitor.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{monitor.weight}kg</span></p>
        <p><span className='spechead'>Category</span><span className='specvalue' style={{position: 'relative', left: '8.5rem'}}>{monitor.peripherals_category}</span></p>
        <p><span className='spechead'>Monitor Type</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>{monitor.monitor_type}</span></p>
        <p><span className='spechead'>Screen Size</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{monitor.screen_size}</span></p>
        {monitor.resolution && <p><span className='spechead'>Resolution</span><span className='specvalue' style={{position: 'relative', left: '7.7rem'}}>{monitor.resolution}</span></p>}
        {monitor.refresh_rate && <p><span className='spechead'>Refresh Rate</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{monitor.refresh_rate}</span></p>}
        {monitor.panel_type && <p><span className='spechead'>Panel Type</span><span className='specvalue' style={{position: 'relative', left: '7.6rem'}}>{monitor.panel_type}</span></p>}
        {monitor.brightness && <p><span className='spechead'>Brightness</span><span className='specvalue' style={{position: 'relative', left: '7.8rem'}}>{monitor.brightness}</span></p>}
        {monitor.contrast_ratio && <p><span className='spechead'>Contrast Ratio</span><span className='specvalue' style={{position: 'relative', left: '6rem'}}>{monitor.contrast_ratio}</span></p>}
        {monitor.response_time && <p><span className='spechead'>Response Time</span><span className='specvalue' style={{position: 'relative', left: '6rem'}}>{monitor.response_time}</span></p>}
        {monitor.aspect_ratio && <p><span className='spechead'>Aspect Ratio</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>{monitor.aspect_ratio}</span></p>}
        {monitor.color_gamut && <p><span className='spechead'>Color Gamut</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{monitor.color_gamut}</span></p>}
        {monitor.curved_radius && <p><span className='spechead'>Curved Radius</span><span className='specvalue' style={{position: 'relative', left: '6.1rem'}}>{monitor.curved_radius}</span></p>}
        {monitor.touch_support && <p><span className='spechead'>Touchscreen</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>Yes</span></p>}
        {monitor.vesa_mount_compatible && <p><span className='spechead'>Vesa Mount Compatible</span><span className='specvalue' style={{position: 'relative', left: '1.9rem'}}>Yes</span></p>}
        {monitor.portability_features && <p><span className='spechead'>Portability Features</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{monitor.portability_features}</span></p>}
        {monitor.connectivity_options && <p><span className='spechead'>Connectivity Options</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{monitor.connectivity_options}</span></p>}
        {monitor.included_items && <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{monitor.included_items}</span></p>}
        <p className='spechead'>About this item</p>
        <p className='descpara'>{monitor.description_para}</p>
        <ul className='descpoints'>
              {monitor.description_points.split('\n').map((point, pointindex) => (
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

export default MonitorInfo