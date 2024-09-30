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
import './BarcodescannerInfo.css';

function BarcodescannerInfo() {
  const { bs_name } = useParams();
  const [bsdata, setBsdata] = useState([]);
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
    const fetchBsDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-bs-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: bs_name }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setBsdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchBsDatabyName();
  },[bs_name]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (bs) => {
    addToCart(bs);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {bsdata.map((bs,bsindex)=>(
          <div key={bsindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {bs.images && bs.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='bspointerzoom'>
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
        {bsdata && bsdata.map((bs,index)=>(
          <div key={index}>
          <p className='name'>{bs.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(bs.rating)}</span> 
                  <StarRatings
                      rating={Number(bs.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{bs.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((bs.price-bs.discount_price)/bs.price*100)}% </span><span className='newprice'>{formatCurrency(bs.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(bs.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(bs.price-bs.discount_price)}</Badge></p>
          <p className='sku'>SKU: {bs.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(bs)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{bs.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{bs.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{bs.color}</span></p>
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{bs.dimensions}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{bs.weight} kg</span></p>
          {bs.scanner_type && <p><span className='spechead'>Scanner Type</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>{bs.scanner_type}</span></p>}
          {bs.scan_speed && <p><span className='spechead'>Scan Speed</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{bs.scan_speed}</span></p>}
          {bs.battery_life && <p><span className='spechead'>Battery Life</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{bs.battery_life}</span></p>}
          {bs.sensor_type && <p><span className='spechead'>Sensor Type</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>{bs.sensor_type}</span></p>}
          {bs.ruggedness && <p><span className='spechead'>Ruggedness</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{bs.ruggedness}</span></p>}
          {bs.led_indicator && <p><span className='spechead'>LED Indicator</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>Yes</span></p>}
          {bs.operating_temperature && <p><span className='spechead'>Operating Temperature</span><span className='specvalue' style={{position: 'relative', left: '1.8rem'}}>{bs.operating_temperature}</span></p>}
          {bs.storage_temperature && <p><span className='spechead'>Storage Temperature</span><span className='specvalue' style={{position: 'relative', left: '2.5rem'}}>{bs.storage_temperature}</span></p>}
          {bs.connectivity && <p><span className='spechead'>Connectivity</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{bs.connectivity}</span></p>}
          {bs.supported_barcode_types && <p><span className='spechead'>Supported Barcode Types</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{bs.supported_barcode_types}</span></p>}
          {bs.interface_type && <p><span className='spechead'>Interface</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{bs.interface_type}</span></p>}
          {bs.software_compatibility && <p><span className='spechead'>Software Compatibility</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{bs.software_compatibility}</span></p>}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{bs.description_para}</p>
          <ul className='descpoints'>
                {bs.description_points.split('\n').map((point, pointindex) => (
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

export default BarcodescannerInfo