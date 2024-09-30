import React from 'react';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import {useState, useEffect, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './HdmiAccessoriesInfo.css';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';

function HdmiAccessoriesInfo() {
   const { hdmiaccessoriesname } = useParams();
   const [hdmiaccessoriesdata, setHdmiAccessoriesdata] = useState([]);
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
    const fetchHdmiAccessoriesDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-hdmi-accessories-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: hdmiaccessoriesname }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setHdmiAccessoriesdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchHdmiAccessoriesDatabyName();
  },[hdmiaccessoriesname]);
  
  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (hdmiaccessories) => {
    addToCart(hdmiaccessories);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
    <div>
       {hdmiaccessoriesdata.map((hdmiaccessories,hdmiaccessoriesindex)=>(
        <div key={hdmiaccessoriesindex}>
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {hdmiaccessories.images && hdmiaccessories.images.map((image, imageindex) => (
              <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
        </div>
       ))
       }
    </div>
     <div className='hdmiaccessoriespointerzoom'>
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
      {hdmiaccessoriesdata && hdmiaccessoriesdata.map((hdmiaccessories,index)=>(
        <div key={index}>
        <p className='name'>{hdmiaccessories.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(hdmiaccessories.rating)}</span> 
                 <StarRatings
                    rating={Number(hdmiaccessories.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{hdmiaccessories.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((hdmiaccessories.price-hdmiaccessories.discount_price)/hdmiaccessories.price*100)}% </span><span className='newprice'>{formatCurrency(hdmiaccessories.discount_price)}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(hdmiaccessories.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(hdmiaccessories.price-hdmiaccessories.discount_price)}</Badge></p>
        <p className='sku'>SKU: {hdmiaccessories.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(hdmiaccessories)}>Add to Cart</Button><br></br>
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
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{hdmiaccessories.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue'>{hdmiaccessories.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.8rem'}}>{hdmiaccessories.color}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{hdmiaccessories.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{hdmiaccessories.weight} kg</span></p>
        <p><span className='spechead'>Category</span><span className='specvalue' style={{position: 'relative', left: '8.4rem'}}>{hdmiaccessories.accessory_category}</span></p>
        {hdmiaccessories.cable_length && <p><span className='spechead'>Cable Length</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>{hdmiaccessories.cable_length}</span></p>}
        {hdmiaccessories.cable_type && <p><span className='spechead'>Cable Type</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{hdmiaccessories.cable_type}</span></p>}
        {hdmiaccessories.connector_type && <p><span className='spechead'>Connector Type</span><span className='specvalue' style={{position: 'relative', left: '5.2rem'}}>{hdmiaccessories.connector_type}</span></p>}
        {hdmiaccessories.shielding && <p><span className='spechead'>Shielding</span><span className='specvalue' style={{position: 'relative', left: '8.2rem'}}>{hdmiaccessories.shielding}</span></p>}
        {hdmiaccessories.gold_plated_connectors && <p><span className='spechead'>Gold Plated Connectors</span><span className='specvalue' style={{position: 'relative', left: '2rem'}}>Yes</span></p>}
        {hdmiaccessories.ethernet_support && <p><span className='spechead'>Ethernet Support</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>Yes</span></p>}
        {hdmiaccessories.adapter_type && <p><span className='spechead'>Adapter Type</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>{hdmiaccessories.adapter_type}</span></p>}
        {hdmiaccessories.connector_type_input && <p><span className='spechead'>Connector Type Input</span><span className='specvalue' style={{position: 'relative', left: '2.6rem'}}>{hdmiaccessories.connector_type_input}</span></p>}
        {hdmiaccessories.connector_type_output && <p><span className='spechead'>Connector Type Output</span><span className='specvalue' style={{position: 'relative', left: '2rem'}}>{hdmiaccessories.connector_type_output}</span></p>}
        {hdmiaccessories.resolution_support && <p><span className='spechead'>Resolution Support</span><span className='specvalue' style={{position: 'relative', left: '3.9rem'}}>{hdmiaccessories.resolution_support}</span></p>}
        {hdmiaccessories.audio_support && <p><span className='spechead'>Audio Support</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>Yes</span></p>}
        {hdmiaccessories.power_required && <p><span className='spechead'>Power Required</span><span className='specvalue' style={{position: 'relative', left: '6rem'}}>Yes</span></p>}
        {hdmiaccessories.active_passive && <p><span className='spechead'>Mode</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{hdmiaccessories.active_passive}</span></p>}
        <hr style={{color:'gray'}}></hr>
        <p className='spechead'>About this item</p>
        <p className='descpara'>{hdmiaccessories.description_para}</p>
        <ul className='descpoints'>
              {hdmiaccessories.description_points.split('\n').map((point, pointindex) => (
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

export default HdmiAccessoriesInfo