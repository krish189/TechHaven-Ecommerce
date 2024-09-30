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
import './HomeTheaterInfo.css';

function HomeTheaterInfo() {
  const { ht_name } = useParams();
  const [htdata, setHtdata] = useState([]);
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
    const fetchHtDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-home-theater-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: ht_name }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setHtdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchHtDatabyName();
  },[ht_name]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (ht) => {
    addToCart(ht);
  };

  
  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {htdata.map((ht,htindex)=>(
          <div key={htindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {ht.images && ht.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='htpointerzoom'>
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
        {htdata && htdata.map((ht,index)=>(
          <div key={index}>
          <p className='name'>{ht.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(ht.rating)}</span> 
                  <StarRatings
                      rating={Number(ht.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{ht.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((ht.price-ht.discount_price)/ht.price*100)}% </span><span className='newprice'>{formatCurrency(ht.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(ht.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(ht.price-ht.discount_price)}</Badge></p>
          <p className='sku'>SKU: {ht.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(ht)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{ht.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{ht.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{ht.color}</span></p>
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{ht.dimensions}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{ht.weight}kg</span></p>
          {ht.audio_output_power && <p><span className='spechead'>Audio Output Power</span><span className='specvalue' style={{position: 'relative', left: '3rem'}}>{ht.audio_output_power}</span></p>}
          {ht.number_of_hdmi_ports && <p><span className='spechead'>Total HDMI Ports</span><span className='specvalue' style={{position: 'relative', left: '4.7rem'}}>{ht.number_of_hdmi_ports === 1 ? '1 port' : `${ht.number_of_hdmi_ports} ports`}</span></p>}
          {ht.surround_sound && <p><span className='spechead'>Surround Sound</span><span className='specvalue' style={{position: 'relative', left: '5.4rem'}}>Yes</span></p>}
          {ht.remote_control && <p><span className='spechead'>Remote Control</span><span className='specvalue' style={{position: 'relative', left: '5.7rem'}}>Yes</span></p>}
          {ht.wireless_subwoofer && <p><span className='spechead'>Wireless Subwoofer</span><span className='specvalue' style={{position: 'relative', left: '3.8rem'}}>Yes</span></p>}
          {ht.multi_room_support && <p><span className='spechead'>Multi Room Support</span><span className='specvalue' style={{position: 'relative', left: '3.5rem'}}>Yes</span></p>}
          {ht.ethernet_port && <p><span className='spechead'>Ethernet Port</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>Yes</span></p>}
          {ht.voice_assistant_integration && <p><span className='spechead'>Voice Assistant</span><span className='specvalue' style={{position: 'relative', left: '6.2rem'}}>Yes</span></p>}
          {ht.frequency_response && <p><span className='spechead'>Frequency Response</span><span className='specvalue' style={{position: 'relative', left: '3rem'}}>{ht.frequency_response}</span></p>}
          {ht.power_consumption && <p><span className='spechead'>Power Consumption</span><span className='specvalue' style={{position: 'relative', left: '3rem'}}>{ht.power_consumption}</span></p>}
          {ht.signal_to_noise_ratio && <p><span className='spechead'>Signal to Noise Ratio</span><span className='specvalue' style={{position: 'relative', left: '2.7rem'}}>{ht.signal_to_noise_ratio}</span></p>}
          {ht.usb_ports && <p><span className='spechead'>Total USB Ports</span><span className='specvalue' style={{position: 'relative', left: '5.3rem'}}>{ht.number_of_hdmi_ports === 1 ? '1 port' : `${ht.number_of_hdmi_ports} ports`}</span></p>}
          {ht.bluetooth_version && <p><span className='spechead'>Bluetooth Version</span><span className='specvalue' style={{position: 'relative', left: '4.3rem'}}>{ht.bluetooth_version}</span></p>}
          {ht.battery_backup && <p><span className='spechead'>Battery Backup</span><span className='specvalue' style={{position: 'relative', left: '5.4rem'}}>{ht.battery_backup}</span></p>}
          {ht.mounting_options && <p><span className='spechead'>Mounting Options</span><span className='specvalue' style={{position: 'relative', left: '3.8rem'}}>{ht.mounting_options}</span></p>}
          {ht.speaker_configuration && <p><span className='spechead'>Speaker Configuration</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ht.speaker_configuration}</span></p>}
          {ht.supported_audio_formats && <p><span className='spechead'>Supported Audio Formats</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ht.supported_audio_formats}</span></p>}
          {ht.connectivity && <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ht.connectivity}</span></p>}
          {ht.streaming_services && <p><span className='spechead'>Streaming Services</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ht.streaming_services}</span></p>}
          {ht.smart_features && <p><span className='spechead'>Smart Features</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ht.smart_features}</span></p>}
          {ht.included_items && <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ht.included_items}</span></p>}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{ht.description_para}</p>
          <ul className='descpoints'>
                {ht.description_points.split('\n').map((point, pointindex) => (
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

export default HomeTheaterInfo