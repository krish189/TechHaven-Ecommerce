import React from 'react';
import './CCTVInfo.css';
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

function CCTVInfo() {
  const { cctv_name } = useParams();
  const [cctvdata, setCCTVdata] = useState([]);
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
    const fetchCCTVDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-cctv-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: cctv_name }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setCCTVdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchCCTVDatabyName();
  },[cctv_name]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (cctv) => {
    addToCart(cctv);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {cctvdata.map((cctv,cctvindex)=>(
          <div key={cctvindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {cctv.images && cctv.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='cctvpointerzoom'>
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
        {cctvdata && cctvdata.map((cctv,index)=>(
          <div key={index}>
          <p className='name'>{cctv.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(cctv.rating)}</span> 
                  <StarRatings
                      rating={Number(cctv.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{cctv.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((cctv.price-cctv.discount_price)/cctv.price*100)}% </span><span className='newprice'>{formatCurrency(cctv.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(cctv.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(cctv.price-cctv.discount_price)}</Badge></p>
          <p className='sku'>SKU: {cctv.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(cctv)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{cctv.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{cctv.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{cctv.color}</span></p>
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{cctv.dimensions}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{cctv.weight}</span></p>
          {cctv.resolution &&  <p><span className='spechead'>Resolution</span><span className='specvalue' style={{position: 'relative', left: '7.6rem'}}>{cctv.resolution}</span></p>}
          {cctv.field_of_view &&  <p><span className='spechead'>Field of View</span><span className='specvalue' style={{position: 'relative', left: '6.6rem'}}>{cctv.field_of_view}</span></p>}
          {cctv.connectivity &&  <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{cctv.connectivity}</span></p>}
          {cctv.night_vision &&  <p><span className='spechead'>Night Vision</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>Yes</span></p>}
          {cctv.storage_type &&  <p><span className='spechead'>Storage Type</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{cctv.storage_type}</span></p>}
          {cctv.power_supply &&  <p><span className='spechead'>Power Supply</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>{cctv.power_supply}</span></p>}
          {cctv.motion_detection &&  <p><span className='spechead'>Motion Detection</span><span className='specvalue' style={{position: 'relative', left: '4.7rem'}}>Yes</span></p>}
          {cctv.two_way_audio &&  <p><span className='spechead'>Two Way Audio</span><span className='specvalue' style={{position: 'relative', left: '5.7rem'}}>Yes</span></p>}
          {cctv.loop_recording &&  <p><span className='spechead'>Loop Recording</span><span className='specvalue' style={{position: 'relative', left: '5.8rem'}}>Yes</span></p>}
          {cctv.material &&  <p><span className='spechead'>Material</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{cctv.material}</span></p>}
          {cctv.sensor &&  <p><span className='spechead'>Sensor</span><span className='specvalue' style={{position: 'relative', left: '9.9rem'}}>{cctv.sensor}</span></p>}
          {cctv.weatherproof_rating &&  <p><span className='spechead'>Weatherproof Rating</span><span className='specvalue' style={{position: 'relative', left: '3.3rem'}}>{cctv.weatherproof_rating}</span></p>}
          {cctv.installation_type &&  <p><span className='spechead'>Installation Type</span><span className='specvalue' style={{position: 'relative', left: '5.5rem'}}>{cctv.installation_type}</span></p>}
          {cctv.included_items &&  <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{cctv.included_items}</span></p>}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{cctv.description_para}</p>
          <ul className='descpoints'>
                {cctv.description_points.split('\n').map((point, pointindex) => (
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

export default CCTVInfo