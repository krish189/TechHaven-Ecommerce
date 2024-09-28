import React from 'react';
import './KeyboardMouseInfo.css';
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

function KeyboardMouseInfo() {
  const { combos_name } = useParams();
  const [combosdata, setCombosdata] = useState([]);
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
    const fetchCombosDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-combos-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: combos_name }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setCombosdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchCombosDatabyName();
  },[combos_name]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (combos) => {
    addToCart(combos);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {combosdata.map((combos,combosindex)=>(
          <div key={combosindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {combos.images && combos.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='combospointerzoom'>
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
        {combosdata && combosdata.map((combos,index)=>(
          <div key={index}>
          <p className='name'>{combos.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(combos.rating)}</span> 
                  <StarRatings
                      rating={Number(combos.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{combos.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((combos.price-combos.discount_price)/combos.price*100)}% </span><span className='newprice'>{formatCurrency(combos.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(combos.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(combos.price-combos.discount_price)}</Badge></p>
          <p className='sku'>SKU: {combos.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(combos)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{combos.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{combos.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{combos.color}</span></p>
          <p><span className='spechead'>Package Dimensions</span><span className='specvalue' style={{position: 'relative', left: '3.2rem'}}>{combos.dimensions}</span></p>
          <p><span className='spechead'>Package Weight</span><span className='specvalue' style={{position: 'relative', left: '5.3rem'}}>{combos.weight}kg</span></p>
          <p><span className='spechead'>Keyboard :</span></p>
          {combos.keyboard_type && <p><span className='spechead'>Keyboard Type</span><span className='specvalue' style={{position: 'relative', left: '5.8rem'}}>{combos.keyboard_type}</span></p>}
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{combos.keyboard_dimension}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.5rem'}}>{combos.keyboard_weight}</span></p>
          {combos.no_of_keys && <p><span className='spechead'>Total Keys</span><span className='specvalue' style={{position: 'relative', left: '7.9rem'}}>{combos.no_of_keys}</span></p>}
          {combos.layout && <p><span className='spechead'>Layout</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{combos.layout}</span></p>}
          {combos.key_switch_type && <p><span className='spechead'>Key Switch Type</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>{combos.key_switch_type}</span></p>}
          {combos.connection_type && <p><span className='spechead'>Connection Type</span><span className='specvalue' style={{position: 'relative', left: '4.7rem'}}>{combos.connection_type}</span></p>}
          {combos.cable_length && <p><span className='spechead'>Cable Length</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>{combos.cable_length}</span></p>}
          {combos.wireless_connectivity && <p><span className='spechead'>Wireless Connectivity</span><span className='specvalue' style={{position: 'relative', left: '2.5rem'}}>{combos.wireless_connectivity}</span></p>}
          {combos.wireless_range && <p><span className='spechead'>Wireless Range</span><span className='specvalue' style={{position: 'relative', left: '5.5rem'}}>{combos.wireless_range}</span></p>}
          {combos.usb_type && <p><span className='spechead'>USB Type</span><span className='specvalue' style={{position: 'relative', left: '8.2rem'}}>{combos.usb_type}</span></p>}
          {combos.battery_type && <p><span className='spechead'>Battery Type</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>{combos.battery_type}</span></p>}
          {combos.media_controls && <p><span className='spechead'>Media Controls</span><span className='specvalue' style={{position: 'relative', left: '5.6rem'}}>Yes</span></p>}
          {combos.ergonomics && <p><span className='spechead'>Ergonomic Design</span><span className='specvalue' style={{position: 'relative', left: '4.3rem'}}>Yes</span></p>}
          {combos.led_backlighting && <p><span className='spechead'>Backlighting</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>Yes</span></p>}
          {combos.phone_holder && <p><span className='spechead'>Phone Holder</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>Yes</span></p>}
          {combos.recharge_time && <p><span className='spechead'>Recharge Time</span><span className='specvalue' style={{position: 'relative', left: '5.5rem'}}>{combos.recharge_time}</span></p>}
          {combos.battery_life && <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{combos.battery_life}</span></p>}
          <p><span className='spechead'>Mouse :</span></p>
          {combos.mouse_type && <p><span className='spechead'>Mouse Type</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>{combos.mouse_type}</span></p>}
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{combos.mouse_dimension}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.5rem'}}>{combos.mouse_weight}</span></p>
          {combos.mouse_connection_type && <p><span className='spechead'>Connection Type</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>{combos.mouse_connection_type}</span></p>}
          {combos.mouse_cable_length && <p><span className='spechead'>Cable Length</span><span className='specvalue' style={{position: 'relative', left: '6.6rem'}}>{combos.mouse_cable_length}</span></p>}
          {combos.mouse_usb_type && <p><span className='spechead'>USB Type</span><span className='specvalue' style={{position: 'relative', left: '8.4rem'}}>{combos.mouse_usb_type}</span></p>}
          {combos.dpi && <p><span className='spechead'>DPI</span><span className='specvalue' style={{position: 'relative', left: '11.1rem'}}>{combos.dpi}</span></p>}
          {combos.no_of_buttons && <p><span className='spechead'>Total Buttons</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{combos.no_of_buttons}</span></p>}
          {combos.ergonomics && <p><span className='spechead'>Ergonomic Design</span><span className='specvalue' style={{position: 'relative', left: '4.4rem'}}>Yes</span></p>}
          {combos.mouse_led_backlighting && <p><span className='spechead'>Backlighting</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>Yes</span></p>}
          {combos.motion_detection && <p><span className='spechead'>Motion Detection</span><span className='specvalue' style={{position: 'relative', left: '4.5rem'}}>{combos.motion_detection}</span></p>}
          {combos.mouse_wireless_connectivity && <p><span className='spechead'>Wireless Connectivity</span><span className='specvalue' style={{position: 'relative', left: '2.5rem'}}>{combos.mouse_wireless_connectivity}</span></p>}
          {combos.mouse_wireless_range && <p><span className='spechead'>Wireless Range</span><span className='specvalue' style={{position: 'relative', left: '5.6rem'}}>{combos.mouse_wireless_range}</span></p>}
          {combos.mouse_battery_type && <p><span className='spechead'>Battery Type</span><span className='specvalue' style={{position: 'relative', left: '6.6rem'}}>{combos.mouse_battery_type}</span></p>}
          {combos.mouserecharge_time && <p><span className='spechead'>Recharge Time</span><span className='specvalue' style={{position: 'relative', left: '5.5rem'}}>{combos.mouse_recharge_time}</span></p>}
          {combos.mouse_battery_life && <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{combos.mouse_battery_life}</span></p>}
          {combos.included_items && <p><span className='spechead'>Combos :</span></p>}
          {combos.included_items && <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{combos.included_items}</span></p>}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{combos.description_para}</p>
          <ul className='descpoints'>
                {combos.description_points.split('\n').map((point, pointindex) => (
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

export default KeyboardMouseInfo