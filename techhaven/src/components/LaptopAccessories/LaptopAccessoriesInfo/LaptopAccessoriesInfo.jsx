import React from 'react';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import {useState, useEffect, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './LaptopAccessoriesInfo.css';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';

function LaptopAccessoriesInfo() { 
  const { laptopaccessoriesname } = useParams();
  const [laptopaccessoriesdata, setLaptopAccessoriesdata] = useState([]);
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
    const fetchLaptopAccessoriesDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-laptop-accessories-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: laptopaccessoriesname }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setLaptopAccessoriesdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchLaptopAccessoriesDatabyName();
  },[laptopaccessoriesname]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (laptopaccessories) => {
    addToCart(laptopaccessories);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
    <div>
       {laptopaccessoriesdata.map((laptopaccessories,laptopaccessoriesindex)=>(
        <div key={laptopaccessoriesindex}>
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {laptopaccessories.images && laptopaccessories.images.map((image, imageindex) => (
              <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
        </div>
       ))
       }
    </div>
     <div className='laptopaccessoriespointerzoom'>
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
      {laptopaccessoriesdata && laptopaccessoriesdata.map((laptopaccessories,index)=>(
        <div key={index}>
        <p className='name'>{laptopaccessories.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(laptopaccessories.rating)}</span> 
                 <StarRatings
                    rating={Number(laptopaccessories.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{laptopaccessories.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((laptopaccessories.price-laptopaccessories.discount_price)/laptopaccessories.price*100)}% </span><span className='newprice'>{formatCurrency(laptopaccessories.discount_price)}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(laptopaccessories.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(laptopaccessories.price-laptopaccessories.discount_price)}</Badge></p>
        <p className='sku'>SKU: {laptopaccessories.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(laptopaccessories)}>Add to Cart</Button><br></br>
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
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{laptopaccessories.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue'>{laptopaccessories.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.8rem'}}>{laptopaccessories.color}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{laptopaccessories.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{laptopaccessories.weight} kg</span></p>
        <p><span className='spechead'>Category</span><span className='specvalue' style={{position: 'relative', left: '8.4rem'}}>{laptopaccessories.accessory_category}</span></p>
        <p><span className='spechead'>Material</span><span className='specvalue' style={{position: 'relative', left: '8.6rem'}}>{laptopaccessories.material}</span></p>
        {laptopaccessories.adjustable_height && <p><span className='spechead'>Height Adjustable</span><span className='specvalue' style={{position: 'relative', left: '4.2rem'}}>Yes</span></p>}
        {laptopaccessories.max_adjustable_height && <p><span className='spechead'>Max Adjustable Height</span><span className='specvalue' style={{position: 'relative', left: '1.8rem'}}>{laptopaccessories.max_adjustable_height} cm</span></p>}
        {laptopaccessories.cooling_feature && <p><span className='spechead'>Cooling Feature</span><span className='specvalue' style={{position: 'relative', left: '5.4rem'}}>Yes</span></p>}
        {laptopaccessories.weight_capacity && <p><span className='spechead'>Weight Capacity</span><span className='specvalue' style={{position: 'relative', left: '5.1rem'}}>{laptopaccessories.weight_capacity} kg</span></p>}
        {laptopaccessories.number_of_fans && <p><span className='spechead'>Total Fans</span><span className='specvalue' style={{position: 'relative', left: '8.1rem'}}>{laptopaccessories.number_of_fans===1 ? '1 fan' : `${laptopaccessories.number_of_fans} fans`}</span></p>}
        {laptopaccessories.fan_speed && <p><span className='spechead'>Fan Speed</span><span className='specvalue' style={{position: 'relative', left: '7.9rem'}}>{laptopaccessories.fan_speed}</span></p>}
        {laptopaccessories.led_lighting && <p><span className='spechead'>LED Lighting</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>Yes</span></p>}
        {laptopaccessories.noise_level && <p><span className='spechead'>Noise Level</span><span className='specvalue' style={{position: 'relative', left: '7.2rem'}}>{laptopaccessories.noise_level}</span></p>}
        {laptopaccessories.power_delivery && <p><span className='spechead'>Power Delivery</span><span className='specvalue' style={{position: 'relative', left: '5.7rem'}}>Yes</span></p>}
        {laptopaccessories.fast_charging && <p><span className='spechead'>Fast Charging</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>Yes</span></p>}
        {laptopaccessories.number_of_ports && <p><span className='spechead'>Total Ports</span><span className='specvalue' style={{position: 'relative', left: '7.6rem'}}>{laptopaccessories.number_of_ports===1 ? '1 port' : `${laptopaccessories.number_of_ports} ports`}</span></p>}
        {laptopaccessories.usb_version && <p><span className='spechead'>USB Version</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{laptopaccessories.usb_version}</span></p>}
        {laptopaccessories.ports && <p><span className='spechead'>Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{laptopaccessories.ports} </span></p>}
        {laptopaccessories.input_ports && <p><span className='spechead'>Input Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{laptopaccessories.input_ports}</span></p>}
        {laptopaccessories.output_ports && <p><span className='spechead'>Output Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{laptopaccessories.output_ports}</span></p>}
        {laptopaccessories.compatible_devices && <p><span className='spechead'>Compatible Devices</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{laptopaccessories.compatible_devices}</span></p>}
        {laptopaccessories.included_items && <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{laptopaccessories.included_items}</span></p>}
        <hr style={{color:'gray'}}></hr>
        <p className='spechead'>About this item</p>
        <p className='descpara'>{laptopaccessories.description_para}</p>
        <ul className='descpoints'>
              {laptopaccessories.description_points.split('\n').map((point, pointindex) => (
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

export default LaptopAccessoriesInfo