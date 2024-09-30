import React from 'react';
import './SmartLightingInfo.css';
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

function SmartLightingInfo() {
  const { sl_name } = useParams();
  const [sldata, setSldata] = useState([]);
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
    const fetchSlDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-smart-lighting-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: sl_name }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSldata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchSlDatabyName();
  },[sl_name]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (sl) => {
    addToCart(sl);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {sldata.map((sl,slindex)=>(
          <div key={slindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {sl.images && sl.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='slpointerzoom'>
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
        {sldata && sldata.map((sl,index)=>(
          <div key={index}>
          <p className='name'>{sl.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(sl.rating)}</span> 
                  <StarRatings
                      rating={Number(sl.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{sl.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((sl.price-sl.discount_price)/sl.price*100)}% </span><span className='newprice'>{formatCurrency(sl.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(sl.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(sl.price-sl.discount_price)}</Badge></p>
          <p className='sku'>SKU: {sl.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(sl)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{sl.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{sl.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{sl.color}</span></p>
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{sl.dimensions}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{sl.weight} kg</span></p>
          {sl.power_consumption && <p><span className='spechead'>Power Consumption</span><span className='specvalue' style={{position: 'relative', left: '3.2rem'}}>{sl.power_consumption}</span></p>}
          {sl.luminous_flux && <p><span className='spechead'>Luminous Flux</span><span className='specvalue' style={{position: 'relative', left: '5.9rem'}}>{sl.luminous_flux}</span></p>}
          {sl.bulb_type && <p><span className='spechead'>Bulb Type</span><span className='specvalue' style={{position: 'relative', left: '8.1rem'}}>{sl.bulb_type}</span></p>}
          {sl.connectivity && <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{sl.connectivity}</span></p>}
          {sl.dimmable && <p><span className='spechead'>Dimmable</span><span className='specvalue' style={{position: 'relative', left: '8rem'}}>Yes</span></p>}
          {sl.color_changing && <p><span className='spechead'>Color Changeable</span><span className='specvalue' style={{position: 'relative', left: '4.6rem'}}>Yes</span></p>}
          {sl.total_colors && <p><span className='spechead'>Total Colors</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{sl.total_colors}</span></p>}
          {sl.voltage && <p><span className='spechead'>Voltage</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{sl.voltage}</span></p>}
          {sl.lifespan && <p><span className='spechead'>Lifespan</span><span className='specvalue' style={{position: 'relative', left: '9rem'}}>{sl.lifespan}</span></p>}
          {sl.base_type && <p><span className='spechead'>Base Type</span><span className='specvalue' style={{position: 'relative', left: '8.3rem'}}>{sl.base_type}</span></p>}
          {sl.color_temperature && <p><span className='spechead'>Color Temperature</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{sl.color_temperature}</span></p>}
          {sl.compatibility && <p><span className='spechead'>Compatibility</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{sl.compatibility}</span></p>}
          {sl.smart_features && <p><span className='spechead'>Smart Features</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{sl.smart_features}</span></p>}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{sl.description_para}</p>
          <ul className='descpoints'>
                {sl.description_points.split('\n').map((point, pointindex) => (
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

export default SmartLightingInfo