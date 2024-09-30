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
import './SpeakerInfoShop.css';

function SpeakerInfoShop() {
  const { speakername } = useParams();
  const [speakerdata, setSpeakerdata] = useState([]);
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
    const fetchSpeakerDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-speaker-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: speakername }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSpeakerdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchSpeakerDatabyName();
  },[speakername]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (speaker) => {
    addToCart(speaker);
  };


  return (
   <>
   <Header/>
   <Category/>
   <div className='image-wrapper'>
    <div>
       {speakerdata.map((speaker,speakerindex)=>(
        <div key={speakerindex}>
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {speaker.images && speaker.images.map((image, imageindex) => (
              <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
        </div>
       ))
       }
    </div>
     <div className='speakerpointerzoom'>
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
      {speakerdata && speakerdata.map((speaker,index)=>(
        <div key={index}>
        <p className='name'>{speaker.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(speaker.rating)}</span> 
                 <StarRatings
                    rating={Number(speaker.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{speaker.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((speaker.price-speaker.discount_price)/speaker.price*100)}% </span><span className='newprice'>{formatCurrency(speaker.discount_price)}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(speaker.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(speaker.price-speaker.discount_price)}</Badge></p>
        <p className='sku'>SKU: {speaker.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(speaker)}>Add to Cart</Button><br></br>
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
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{speaker.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{speaker.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{speaker.color}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{speaker.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{speaker.weight} kg</span></p>
        {speaker.power_output && <p><span className='spechead'>Power Output</span><span className='specvalue' style={{position: 'relative', left: '6rem'}}>{speaker.power_output}</span></p>}
        <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>{speaker.connectivity}</span></p>
        {speaker.audio_inputs && <p><span className='spechead'>Audio Inputs</span><span className='specvalue' style={{position: 'relative', left: '6.2rem'}}>{speaker.audio_inputs}</span></p>}
        <p><span className='spechead'>Waterproof</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{speaker.waterproof ? 'Yes' : 'No'}</span></p>
        {speaker.driver_size && <p><span className='spechead'>Driver Size</span><span className='specvalue' style={{position: 'relative', left: '7.2rem'}}>{speaker.driver_size}</span></p>}
        <p><span className='spechead'>Frequency Response</span><span className='specvalue' style={{position: 'relative', left: '2.6rem'}}>{speaker.frequency_response}</span></p>
        {speaker.battery_life && 
        <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{speaker.battery_life}</span></p>
        }
        {speaker.smart_assistant && 
        <p><span className='spechead'>Smart Assistant</span><span className='specvalue' style={{position: 'relative', left: '4.7rem'}}>{speaker.smart_assistant}</span></p>
        }
        {speaker.microphone && 
        <p><span className='spechead'>Microphone</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>Yes</span></p>
        }
        {speaker.bass_boost && 
        <p><span className='spechead'>Bass Boost</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>Yes</span></p>
        }
        {speaker.led_lighting && 
        <p><span className='spechead'>LED Lighting</span><span className='specvalue' style={{position: 'relative', left: '6.2rem'}}>Yes</span></p>
        }
        {speaker.led_lighting_color && 
        <p><span className='spechead'>LED Lighting Color</span><span className='specvalue' style={{position: 'relative', left: '3.3rem'}}>{speaker.led_lighting_color}</span></p>
        }
        {speaker.multi_device_pairing && 
        <p><span className='spechead'>Multi Device Pairing</span><span className='specvalue' style={{position: 'relative', left: '2.7rem'}}>Yes</span></p>
        }
        <hr style={{color:'gray'}}></hr>
        <p className='spechead'>About this item</p>
        <p className='descpara'>{speaker.description_para}</p>
        <ul className='descpoints'>
              {speaker.description_points.split('\n').map((point, pointindex) => (
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

export default SpeakerInfoShop