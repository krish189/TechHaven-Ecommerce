import React from 'react';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import {useState, useEffect, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './MobileAccessoriesInfo.css';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';

function MobileAccessoriesInfo() {
  const { mobileaccessoriesname } = useParams();
  const [mobileaccessoriesdata, setMobileAccessoriesdata] = useState([]);
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
    const fetchMobileAccessoriesDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-mobile-accessories-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: mobileaccessoriesname }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMobileAccessoriesdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchMobileAccessoriesDatabyName();
  },[mobileaccessoriesname]);
  
  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (mobileaccessories) => {
    addToCart(mobileaccessories);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
    <div>
       {mobileaccessoriesdata.map((mobileaccessories,mobileaccessoriesindex)=>(
        <div key={mobileaccessoriesindex}>
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {mobileaccessories.images && mobileaccessories.images.map((image, imageindex) => (
              <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
        </div>
       ))
       }
    </div>
     <div className='mobileaccessoriespointerzoom'>
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
      {mobileaccessoriesdata && mobileaccessoriesdata.map((mobileaccessories,index)=>(
        <div key={index}>
        <p className='name'>{mobileaccessories.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(mobileaccessories.rating)}</span> 
                 <StarRatings
                    rating={Number(mobileaccessories.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{mobileaccessories.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((mobileaccessories.price-mobileaccessories.discount_price)/mobileaccessories.price*100)}% </span><span className='newprice'>{formatCurrency(mobileaccessories.discount_price)}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(mobileaccessories.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(mobileaccessories.price-mobileaccessories.discount_price)}</Badge></p>
        <p className='sku'>SKU: {mobileaccessories.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(mobileaccessories)}>Add to Cart</Button><br></br>
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
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{mobileaccessories.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue'>{mobileaccessories.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.8rem'}}>{mobileaccessories.color}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{mobileaccessories.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{mobileaccessories.weight}kg</span></p>
        <p><span className='spechead'>Category</span><span className='specvalue' style={{position: 'relative', left: '8.4rem'}}>{mobileaccessories.accessory_category}</span></p>
        {mobileaccessories.holder_type && <p><span className='spechead'>Holder Type</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{mobileaccessories.holder_type}</span></p>}
        {mobileaccessories.mounting_mechanism && <p><span className='spechead'>Mounting Mechanism</span><span className='specvalue' style={{position: 'relative', left: '2.4rem'}}>{mobileaccessories.mounting_mechanism}</span></p>}
        {mobileaccessories.rotation && <p><span className='spechead'>Rotation</span><span className='specvalue' style={{position: 'relative', left: '8.6rem'}}>{mobileaccessories.rotation}</span></p>}
        {mobileaccessories.material && <p><span className='spechead'>Material</span><span className='specvalue' style={{position: 'relative', left: '8.7rem'}}>{mobileaccessories.material}</span></p>}
        {mobileaccessories.cable_type && <p><span className='spechead'>Cable Type</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{mobileaccessories.cable_type}</span></p>}
        {mobileaccessories.length && <p><span className='spechead'>Length</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{mobileaccessories.length===1 ? '1 meter' : `${mobileaccessories.length} meters`}</span></p>}
        {mobileaccessories.max_output && <p><span className='spechead'>Max Output</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{mobileaccessories.max_output}</span></p>}
        {mobileaccessories.data_transfer_speed && <p><span className='spechead'>Data Transfer Speed</span><span className='specvalue' style={{position: 'relative', left: '3.2rem'}}>{mobileaccessories.data_transfer_speed}</span></p>}
        {mobileaccessories.connector_type && <p><span className='spechead'>Connector Type</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>{mobileaccessories.connector_type}</span></p>}
        {mobileaccessories.fast_charging && <p><span className='spechead'>Fast Charging</span><span className='specvalue' style={{position: 'relative', left: '6.2rem'}}>Yes</span></p>}
        {mobileaccessories.durability_rating && <p><span className='spechead'>Durability Rating</span><span className='specvalue' style={{position: 'relative', left: '4.4rem'}}>{mobileaccessories.durability_rating}</span></p>}
        {mobileaccessories.usb_version && <p><span className='spechead'>USB Version</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{mobileaccessories.usb_version}</span></p>}
        {mobileaccessories.port_type && <p><span className='spechead'>Port Type</span><span className='specvalue' style={{position: 'relative', left: '7.8rem'}}>{mobileaccessories.port_type}</span></p>}
        {mobileaccessories.form_factor && <p><span className='spechead'>Form Factor</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{mobileaccessories.form_factor}</span></p>}
        {mobileaccessories.clamp_size && <p><span className='spechead'>Clamp Size</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{mobileaccessories.clamp_size} inches</span></p>}
        {mobileaccessories.foldable && <p><span className='spechead'>Foldable</span><span className='specvalue' style={{position: 'relative', left: '8.8rem'}}>Yes</span></p>}
        {mobileaccessories.card_slots && <p><span className='spechead'>Card Slots</span><span className='specvalue' style={{position: 'relative', left: '7.9rem'}}>{mobileaccessories.card_slots}</span></p>}
        {mobileaccessories.kickstand_feature && <p><span className='spechead'>Kickstand Feature</span><span className='specvalue' style={{position: 'relative', left: '4.4rem'}}>Yes</span></p>}
        {mobileaccessories.magnetic_closure && <p><span className='spechead'>Magnetic Closure</span><span className='specvalue' style={{position: 'relative', left: '4.5rem'}}>Yes</span></p>}
        {mobileaccessories.rfid_protection && <p><span className='spechead'>RFID Protection</span><span className='specvalue' style={{position: 'relative', left: '5.3rem'}}>Yes</span></p>}
        {mobileaccessories.capacity && <p><span className='spechead'>Capacity</span><span className='specvalue' style={{position: 'relative', left: '8.6rem'}}>{mobileaccessories.capacity}</span></p>}
        {mobileaccessories.read_speed && <p><span className='spechead'>Read Speed</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{mobileaccessories.read_speed}</span></p>}
        {mobileaccessories.write_speed && <p><span className='spechead'>Write Speed</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{mobileaccessories.write_speed}</span></p>}
        {mobileaccessories.water_proof && <p><span className='spechead'>Water Proof</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>Yes</span></p>}
        {mobileaccessories.shock_proof && <p><span className='spechead'>Shock Proof</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>Yes</span></p>}
        {mobileaccessories.xray_proof && <p><span className='spechead'>Xray Proof</span><span className='specvalue' style={{position: 'relative', left: '7.8rem'}}>Yes</span></p>}
        {mobileaccessories.tip_type && <p><span className='spechead'>Tip Type</span><span className='specvalue' style={{position: 'relative', left: '8.6rem'}}>{mobileaccessories.tip_type}</span></p>}
        {mobileaccessories.pressure_sensitivity && <p><span className='spechead'>Pressure Sensitivity</span><span className='specvalue' style={{position: 'relative', left: '3.6rem'}}>{mobileaccessories.pressure_sensitivity}</span></p>}
        {mobileaccessories.palm_rejection_support && <p><span className='spechead'>Palm Rejection Support</span><span className='specvalue' style={{position: 'relative', left: '2rem'}}>Yes</span></p>}
        {mobileaccessories.tilt_sensitivity && <p><span className='spechead'>Tilt Sensitivity</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>Yes</span></p>}
        {mobileaccessories.replaceable_tips && <p><span className='spechead'>Replaceable Tips</span><span className='specvalue' style={{position: 'relative', left: '5.3rem'}}>Yes</span></p>}
        {mobileaccessories.battery_life && <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{mobileaccessories.battery_life}</span></p>}
        {mobileaccessories.speed_class && <p><span className='spechead'>Speed Class</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{mobileaccessories.speed_class}</span></p>}
        {mobileaccessories.compatible_devices && <p><span className='spechead'>Compatible Devices</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{mobileaccessories.compatible_devices}</span></p>}
        {mobileaccessories.charging_method && <p><span className='spechead'>Charging Methods</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{mobileaccessories.charging_method}</span></p>}
        {mobileaccessories.included_items && <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{mobileaccessories.included_items}</span></p>}
        <hr style={{color:'gray'}}></hr>
        <p className='spechead'>About this item</p>
        <p className='descpara'>{mobileaccessories.description_para}</p>
        <ul className='descpoints'>
              {mobileaccessories.description_points.split('\n').map((point, pointindex) => (
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

export default MobileAccessoriesInfo