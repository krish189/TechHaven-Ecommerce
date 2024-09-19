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
import './LedtvInfoShop.css';

function LedtvInfoShop() {
  const { tv_name } = useParams();
  const [ledtvdata, setLedTvdata] = useState([]);
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

  const handleToggleExpand = () => {
    setExpand(!expand);
  };


  useEffect(() => {
    const fetchLedTvDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-ledtv-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: tv_name }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setLedTvdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchLedTvDatabyName();
  },[tv_name]);
  
  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (ledtv) => {
    addToCart(ledtv);
  };


  return (
    <>
     <Header/>
     <Category/>
      <div className='image-wrapper'>
        <div>
          {ledtvdata.map((ledtv,ledtvindex)=>(
            <div key={ledtvindex}>
            <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
            {ledtv.images && ledtv.images.map((image, imageindex) => (
                  <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                  onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
                ))}
            </Card>
            </div>
          ))
          }
        </div>
        <div className='ledtvpointerzoom'>
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
          {ledtvdata && ledtvdata.map((ledtv,index)=>(
            <div key={index}>
            <p className='name'>{ledtv.name}</p>
            <div className='rating'><span className='ratingvalue'>{Math.abs(ledtv.rating)}</span> 
                    <StarRatings
                        rating={Number(ledtv.rating)}
                        starRatedColor="#DE7921"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="1px"
                      />
                      <span className='numreviews'>{ledtv.num_reviews} reviews</span>
            </div>
            <hr style={{color:'gray'}}></hr>
            <p><span className='offer'>-{Math.round((ledtv.price-ledtv.discount_price)/ledtv.price*100)}% </span><span className='newprice'>{formatCurrency(ledtv.discount_price)}</span></p>
            <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(ledtv.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(ledtv.price-ledtv.discount_price)}</Badge></p>
            <p className='sku'>SKU: {ledtv.sku}</p>
            <Button className='addtocartbtn' onClick={() => handleAddToCart(ledtv)}>Add to Cart</Button><br></br>
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
            <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{ledtv.brand}</span></p>
            <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{ledtv.name.replace(/\s*\(.*?\)/, '')}</span></p>
            <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{ledtv.color}</span></p>
            <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{ledtv.dimensions}</span></p>
            <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{ledtv.weight}kg</span></p>
            <p><span className='spechead'>Screen Size</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{ledtv.screen_size}</span></p>
            <p><span className='spechead'>Resolution</span><span className='specvalue' style={{position: 'relative', left: '7.6rem'}}>{ledtv.resolution}</span></p>
            {!expand && (
              <button onClick={() => setExpand(!expand)} style={{position: 'relative', left: '0.5rem', color: 'rgb(0, 113, 133)', fontSize: '16px', backgroundColor: 'white', fontWeight: '600'}}>See More</button>
            )}
           {expand && 
            (<>
            {ledtv.hdr_support && <p><span className='spechead'>HDR Support</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>Yes</span></p>}
            <p><span className='spechead'>Refresh Rate</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{ledtv.refresh_rate}</span></p>
            <p><span className='spechead'>Operating System</span><span className='specvalue' style={{position: 'relative', left: '4.2rem'}}>{ledtv.operating_system}</span></p>
            <p><span className='spechead'>Audio Output</span><span className='specvalue' style={{position: 'relative', left: '6.1rem'}}>{ledtv.audio_output}</span></p>
            <p><span className='spechead'>HDMI Ports</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{ledtv.hdmi_ports} ports</span></p>
            <p><span className='spechead'>USB Ports</span><span className='specvalue' style={{position: 'relative', left: '7.8rem'}}>{ledtv.usb_ports} ports</span></p>
            <p><span className='spechead'>Bluetooth Version</span><span className='specvalue' style={{position: 'relative', left: '4rem'}}>{ledtv.bluetooth_version}</span></p>
            {ledtv.wifi_support &&   <p><span className='spechead'>Wifi Support</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>Yes</span></p>}
            {ledtv.wifi_version &&   <p><span className='spechead'>Wifi Version</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{ledtv.wifi_version}</span></p>}
            {ledtv.ethernet_port &&   <p><span className='spechead'>Ethernet Port</span><span className='specvalue' style={{position: 'relative', left: '6.1rem'}}>Yes</span></p>}
            {ledtv.vesa_mount && <p><span className='spechead'>Vesa Mount Size</span><span className='specvalue' style={{position: 'relative', left: '4.7rem'}}>{ledtv.vesa_mount}</span></p>}
            {ledtv.energy_efficiency_rating &&   <p><span className='spechead'>Energy Rating</span><span className='specvalue' style={{position: 'relative', left: '5.8rem'}}>{ledtv.energy_efficiency_rating}</span></p>}
            {ledtv.panel_type &&   <p><span className='spechead'>Panel Type</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{ledtv.panel_type}</span></p>}
            {ledtv.upscaling_technology &&   <p><span className='spechead'>Upscaling Technology</span><span className='specvalue' style={{position: 'relative', left: '2.1rem'}}>{ledtv.upscaling_technology}</span></p>}
            {ledtv.vrr_support &&   <p><span className='spechead'>VRR Support</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>Yes</span></p>}
            {ledtv.allm_support &&   <p><span className='spechead'>ALLM Support</span><span className='specvalue' style={{position: 'relative', left: '5.7rem'}}>Yes</span></p>}
            {ledtv.bezel_size &&   <p><span className='spechead'>Bezel Size</span><span className='specvalue' style={{position: 'relative', left: '7.8rem'}}>{ledtv.bezel_size}</span></p>}
            {ledtv.power_consumption &&   <p><span className='spechead'>Power Consumption</span><span className='specvalue' style={{position: 'relative', left: '2.9rem'}}>{ledtv.power_consumption}</span></p>}
            {ledtv.standby_power_consumption &&   <p><span className='spechead'>Standby Power</span><span className='specvalue' style={{position: 'relative', left: '5.4rem'}}>{ledtv.standby_power_consumption}</span></p>}
            {ledtv.voice_assistant &&   <p><span className='spechead'>Voice Assistant</span><span className='specvalue' style={{position: 'relative', left: '0.5rem',  display: 'flex'}}>{ledtv.voice_assistant}</span></p>}
            {ledtv.streaming_services &&   <p><span className='spechead'>Streaming Services</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ledtv.streaming_services}</span></p>}
            {ledtv.included_accessories &&   <p><span className='spechead'>Included Accessories</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ledtv.included_accessories}</span></p>}
            <button onClick={() => setExpand(!expand)} style={{position: 'relative', left: '0.5rem', color: 'rgb(0, 113, 133)', backgroundColor: 'white', fontSize: '16px', fontWeight: '600'}}>See Less</button>
            </>)}
            <hr style={{color:'gray'}}></hr>
            <p className='spechead'>About this item</p>
            <p className='descpara'>{ledtv.description_para}</p>
            <ul className='descpoints'>
                  {ledtv.description_points.split('\n').map((point, pointindex) => (
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

export default LedtvInfoShop