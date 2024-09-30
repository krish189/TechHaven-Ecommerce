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
import './HeadphoneEarbudInfo.css';

function HeadphoneEarbudInfo() {
  const { hp_eb_name } = useParams();
  const [hpebdata, setHpEbdata] = useState([]);
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
    const fetchHpEbDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-hp-eb-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: hp_eb_name }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setHpEbdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchHpEbDatabyName();
  },[hp_eb_name]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (hp_eb) => {
    addToCart(hp_eb);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {hpebdata.map((hp_eb,hpebindex)=>(
          <div key={hpebindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {hp_eb.images && hp_eb.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='hpebpointerzoom'>
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
        {hpebdata && hpebdata.map((hp_eb,index)=>(
          <div key={index}>
          <p className='name'>{hp_eb.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(hp_eb.rating)}</span> 
                  <StarRatings
                      rating={Number(hp_eb.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{hp_eb.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((hp_eb.price-hp_eb.discount_price)/hp_eb.price*100)}% </span><span className='newprice'>{formatCurrency(hp_eb.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(hp_eb.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(hp_eb.price-hp_eb.discount_price)}</Badge></p>
          <p className='sku'>SKU: {hp_eb.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(hp_eb)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{hp_eb.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{hp_eb.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{hp_eb.color}</span></p>
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{hp_eb.dimensions}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{hp_eb.weight} kg</span></p>
          <p><span className='spechead'>Type</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{hp_eb.design_type}</span></p>
          <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{hp_eb.connectivity}</span></p>
          <p><span className='spechead'>Microphone</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{hp_eb.microphone ? 'Yes' : 'No' }</span></p>
          {hp_eb.noise_cancelling && <p><span className='spechead'>Noise Cancelling</span><span className='specvalue' style={{position: 'relative', left: '4.8rem'}}>{hp_eb.noise_cancelling ? 'Yes' : 'No'}</span></p>}
          {hp_eb.bluetooth_version && <p><span className='spechead'>Bluetooth Version</span><span className='specvalue' style={{position: 'relative', left: '4.2rem'}}>{hp_eb.bluetooth_version}</span></p>}
          {hp_eb.battery_life && <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>{hp_eb.battery_life}</span></p>}
          {hp_eb.sound_isolation && <p><span className='spechead'>Sound Isolation</span><span className='specvalue' style={{position: 'relative', left: '5.1rem'}}>{hp_eb.sound_isolation}</span></p>}
          {hp_eb.adjustable_headband && <p><span className='spechead'>Adjustable Headband</span><span className='specvalue' style={{position: 'relative', left: '2.5rem'}}>{hp_eb.adjustable_headband ? 'Yes' : 'No'}</span></p>}
          {hp_eb.foldable && <p><span className='spechead'>Foldable</span><span className='specvalue' style={{position: 'relative', left: '8.7rem'}}>{hp_eb.foldable ? 'Yes' : 'No'}</span></p>}
          {hp_eb.driver_size && <p><span className='spechead'>Driver Size</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{hp_eb.driver_size}</span></p>}
          {hp_eb.impedance && <p><span className='spechead'>Impedance</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{hp_eb.impedance}</span></p>}
          {hp_eb.frequency_response && <p><span className='spechead'>Frequency Response</span><span className='specvalue' style={{position: 'relative', left: '2.9rem'}}>{hp_eb.frequency_response}</span></p>}
          {hp_eb.water_resistance && <p><span className='spechead'>Water Resistance</span><span className='specvalue' style={{position: 'relative', left: '4.5rem'}}>{hp_eb.water_resistance ? 'Yes' : 'No'}</span></p>}
          {hp_eb.charging_case && <p><span className='spechead'>Charging Case</span><span className='specvalue' style={{position: 'relative', left: '5.8rem'}}>{hp_eb.charging_case ? 'Yes' : 'No'}</span></p>}
          {hp_eb.charging_case_dimensions && <p><span className='spechead'>Case Dimensions</span><span className='specvalue' style={{position: 'relative', left: '4.5rem'}}>{hp_eb.charging_case_dimensions}</span></p>}
          {hp_eb.charging_case_weight && <p><span className='spechead'>Case Weight</span><span className='specvalue' style={{position: 'relative', left: '6.6rem'}}>{hp_eb.charging_case_weight}kg</span></p>}
          {hp_eb.touch_controls && <p><span className='spechead'>Touch Controls</span><span className='specvalue' style={{position: 'relative', left: '5.4rem'}}>{hp_eb.touch_controls ? 'Yes' : 'No'}</span></p>}
          {hp_eb.ear_tip_sizes && <p><span className='spechead'>Ear Tip Size</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{hp_eb.ear_tip_sizes}</span></p>}
          {hp_eb.microphone_sensitivity && <p><span className='spechead'>Microphone Sensitivity</span><span className='specvalue' style={{position: 'relative', left: '1.5rem'}}>{hp_eb.microphone_sensitivity}</span></p>}
          {hp_eb.ambient_sound_mode && <p><span className='spechead'>Ambient Sound Mode</span><span className='specvalue' style={{position: 'relative', left: '2.1rem'}}>{hp_eb.ambient_sound_mode ? 'Yes' : 'No'}</span></p>}
          {hp_eb.anc_levels && <p><span className='spechead'>ANC Levels</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>{hp_eb.anc_levels}</span></p>}
          {hp_eb.comfort_features && <p><span className='spechead'>Features</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{hp_eb.comfort_features}</span></p>}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{hp_eb.description_para}</p>
          <ul className='descpoints'>
                {hp_eb.description_points.split('\n').map((point, pointindex) => (
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

export default HeadphoneEarbudInfo