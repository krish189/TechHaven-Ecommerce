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
import './MicrophoneInfo.css';

function MicrophoneInfo() {
    const { microphone_name } = useParams();
    const [microphonedata, setMicrophonedata] = useState([]);
    const [image, setImage] = useState('');
    const [expand, setExpand] = useState('');
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
      const fetchMicrophoneDatabyName = async () => {
          try {
            const response = await fetch('http://localhost:8000/api/product/filter-microphone-by-name/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: microphone_name }),
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMicrophonedata([data]);
            if (data.images && data.images.length > 0) {
              setImage(`http://localhost:8000${data.images[0]}`); 
            }
          } catch (error) {
            console.error('There was an error fetching the data!', error);
          }
        };
      
        fetchMicrophoneDatabyName();
    },[microphone_name]);
  
    const handleImageLoad = () => {
      if (imageRef.current) {
        setImageDimensions({
          width: imageRef.current.width,
          height: imageRef.current.height,
        });
      }
    };
  
    const handleAddToCart = (microphone) => {
      addToCart(microphone);
    };
  
  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {microphonedata.map((microphone,microphoneindex)=>(
          <div key={microphoneindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {microphone.images && microphone.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='microphonepointerzoom'>
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
        {microphonedata && microphonedata.map((microphone,index)=>(
          <div key={index}>
          <p className='name'>{microphone.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(microphone.rating)}</span> 
                  <StarRatings
                      rating={Number(microphone.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{microphone.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((microphone.price-microphone.discount_price)/microphone.price*100)}% </span><span className='newprice'>{formatCurrency(microphone.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(microphone.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(microphone.price-microphone.discount_price)}</Badge></p>
          <p className='sku'>SKU: {microphone.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(microphone)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{microphone.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{microphone.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{microphone.color}</span></p>
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{microphone.dimensions}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{microphone.weight} kg</span></p>
          {microphone.microphone_type && <p><span className='spechead'>Type</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{microphone.microphone_type}</span></p>}
          {microphone.connectivity && <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{microphone.connectivity}</span></p>}
          {microphone.polar_pattern && <p><span className='spechead'>Polar Pattern</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>{microphone.polar_pattern}</span></p>}
          {!expand && (
              <button onClick={() => setExpand(!expand)} style={{position: 'relative', left: '0.5rem', color: 'rgb(0, 113, 133)', fontSize: '16px', backgroundColor: 'white', fontWeight: '600'}}>See More</button>
            )}
          {expand && (
            <>
            {microphone.frequency_response && <p><span className='spechead'>Frequency Response</span><span className='specvalue' style={{position: 'relative', left: '3.1rem'}}>{microphone.frequency_response}</span></p>}
            {microphone.sensitivity && <p><span className='spechead'>Sensitivity</span><span className='specvalue' style={{position: 'relative', left: '7.8rem'}}>{microphone.sensitivity}</span></p>}
            {microphone.impedance && <p><span className='spechead'>Impedance</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{microphone.impedance}</span></p>}
            {microphone.diaphragm_size && <p><span className='spechead'>Diaphragm Size</span><span className='specvalue' style={{position: 'relative', left: '5.4rem'}}>{microphone.diaphragm_size}</span></p>}
            {microphone.signal_to_noise_ratio && <p><span className='spechead'>Signal_to_Noise_ratio</span><span className='specvalue' style={{position: 'relative', left: '2.8rem'}}>{microphone.signal_to_noise_ratio}</span></p>}
            {microphone.max_spl && <p><span className='spechead'>Max SPL</span><span className='specvalue' style={{position: 'relative', left: '8.8rem'}}>{microphone.max_spl}</span></p>}
            {microphone.pad_switch && <p><span className='spechead'>Pad Switch</span><span className='specvalue' style={{position: 'relative', left: '7.7rem'}}>Yes</span></p>}
            {microphone.low_cut_filter && <p><span className='spechead'>Low Cut Filter</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>Yes</span></p>}
            {microphone.shock_mount_included && <p><span className='spechead'>Shock Mount</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>Yes</span></p>}
            {microphone.pop_filter_included && <p><span className='spechead'>Pop Filter</span><span className='specvalue' style={{position: 'relative', left: '8.4rem'}}>Yes</span></p>}
            {microphone.phantom_power_required && <p><span className='spechead'>Phantom Power</span><span className='specvalue' style={{position: 'relative', left: '5.3rem'}}>Required</span></p>}
            {microphone.wireless_connectivity && <p><span className='spechead'>Wireless Connectivity</span><span className='specvalue' style={{position: 'relative', left: '2.9rem'}}>Yes</span></p>}
            {microphone.audio_sample_rate && <p><span className='spechead'>Audio Sample Rate</span><span className='specvalue' style={{position: 'relative', left: '3.9rem'}}>{microphone.audio_sample_rate}</span></p>}
            {microphone.mounting_options && <p><span className='spechead'>Mounting Options</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{microphone.mounting_options}</span></p>}
            {microphone.included_accessories && <p><span className='spechead'>Included Accessories</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{microphone.included_accessories}</span></p>}
            <button onClick={() => setExpand(!expand)} style={{position: 'relative', left: '0.5rem', color: 'rgb(0, 113, 133)', backgroundColor: 'white', fontSize: '16px', fontWeight: '600'}}>See Less</button>
            </>
          )}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{microphone.description_para}</p>
          <ul className='descpoints'>
                {microphone.description_points.split('\n').map((point, pointindex) => (
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

export default MicrophoneInfo