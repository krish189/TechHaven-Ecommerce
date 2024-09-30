import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useRef, useContext, useEffect } from 'react';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../../Home/Footer/Footer';
import './SmartWatchInfo.css';

function SmartWatchInfo() {
  const { sw_name } = useParams();
  const [swdata, setSwdata] = useState([]);
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
        const fetchSwDatabyName = async () => {
            try {
              const response = await fetch('http://localhost:8000/api/product/filter-smart-watch-by-name/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: sw_name }),
              });
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setSwdata([data]);
              if (data.images && data.images.length > 0) {
                setImage(`http://localhost:8000${data.images[0]}`); 
              }
            } catch (error) {
              console.error('There was an error fetching the data!', error);
            }
          };
        
          fetchSwDatabyName();
      },[sw_name]);
    
    const handleImageLoad = () => {
        if (imageRef.current) {
          setImageDimensions({
            width: imageRef.current.width,
            height: imageRef.current.height,
          });
        }
    };
    
    const handleAddToCart = (sw) => {
        addToCart(sw);
    };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {swdata.map((sw,swindex)=>(
          <div key={swindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {sw.images && sw.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='swpointerzoom'>
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
        {swdata && swdata.map((sw,index)=>(
          <div key={index}>
          <p className='name'>{sw.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(sw.rating)}</span> 
                  <StarRatings
                      rating={Number(sw.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{sw.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((sw.price-sw.discount_price)/sw.price*100)}% </span><span className='newprice'>{formatCurrency(sw.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(sw.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(sw.price-sw.discount_price)}</Badge></p>
          <p className='sku'>SKU: {sw.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(sw)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{sw.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{sw.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{sw.color}</span></p>
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{sw.dimensions}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{sw.weight}</span></p>
          {sw.display_type && <p><span className='spechead'>Display Type</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{sw.display_type}</span></p>}
          {sw.screen_size && <p><span className='spechead'>Screen Size</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{sw.screen_size}</span></p>}
          {sw.battery_life && <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{sw.battery_life}</span></p>}
          {sw.charging_time && <p><span className='spechead'>Charging Time</span><span className='specvalue' style={{position: 'relative', left: '6rem'}}>{sw.charging_time}</span></p>}
          {sw.water_resistance && <p><span className='spechead'>Water Resistance</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>{sw.water_resistance}</span></p>}
          {sw.connectivity && <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{sw.connectivity}</span></p>}
          {sw.compatibility && <p><span className='spechead'>Compatibility</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>{sw.compatibility}</span></p>}
          {sw.strap_material && <p><span className='spechead'>Strap Material</span><span className='specvalue' style={{position: 'relative', left: '6.1rem'}}>{sw.strap_material}</span></p>}
          {sw.processor && <p><span className='spechead'>Processor</span><span className='specvalue' style={{position: 'relative', left: '8.3rem'}}>{sw.processor}</span></p>}
          {sw.storage_capacity && <p><span className='spechead'>Storage Capacity</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>{sw.storage_capacity}</span></p>}
          {sw.ram && <p><span className='spechead'>RAM</span><span className='specvalue' style={{position: 'relative', left: '10.6rem'}}>{sw.ram}</span></p>}
          {sw.heart_rate_monitor && <p><span className='spechead'>Heart Rate Monitor</span><span className='specvalue' style={{position: 'relative', left: '3.9rem'}}>Yes</span></p>}
          {sw.gps && <p><span className='spechead'>GPS</span><span className='specvalue' style={{position: 'relative', left: '11.2rem'}}>Yes</span></p>}
          {sw.nfc && <p><span className='spechead'>NFC</span><span className='specvalue' style={{position: 'relative', left: '11.1rem'}}>Yes</span></p>}
          {sw.camera && <p><span className='spechead'>Camera</span><span className='specvalue' style={{position: 'relative', left: '9.6rem'}}>Yes</span></p>}
          {sw.sensors && <p><span className='spechead'>Sensors</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{sw.sensors}</span></p>}
          {sw.voice_assistant && <p><span className='spechead'>Voice Assistant</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{sw.voice_assistant}</span></p>}
          {sw.features && <p><span className='spechead'>Features</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{sw.features}</span></p>}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{sw.description_para}</p>
          <ul className='descpoints'>
                {sw.description_points.split('\n').map((point, pointindex) => (
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

export default SmartWatchInfo