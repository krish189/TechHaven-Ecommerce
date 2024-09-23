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
import './LedProjectorInfo.css';

function LedProjectorInfo() {
  const { projector_name } = useParams();
  const [ledprojectordata, setLedProjectordata] = useState([]);
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
    const fetchLedProjectorDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-ledprojector-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: projector_name }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setLedProjectordata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchLedProjectorDatabyName();
  },[projector_name]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (ledprojector) => {
    addToCart(ledprojector);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
      <div>
        {ledprojectordata.map((ledprojector,ledprojectorindex)=>(
          <div key={ledprojectorindex}>
          <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
          {ledprojector.images && ledprojector.images.map((image, imageindex) => (
                <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
                onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
              ))}
          </Card>
          </div>
        ))
        }
      </div>
      <div className='ledprojectorpointerzoom'>
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
        {ledprojectordata && ledprojectordata.map((ledprojector,index)=>(
          <div key={index}>
          <p className='name'>{ledprojector.name}</p>
          <div className='rating'><span className='ratingvalue'>{Math.abs(ledprojector.rating)}</span> 
                  <StarRatings
                      rating={Number(ledprojector.rating)}
                      starRatedColor="#DE7921"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <span className='numreviews'>{ledprojector.num_reviews} reviews</span>
          </div>
          <hr style={{color:'gray'}}></hr>
          <p><span className='offer'>-{Math.round((ledprojector.price-ledprojector.discount_price)/ledprojector.price*100)}% </span><span className='newprice'>{formatCurrency(ledprojector.discount_price)}</span></p>
          <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(ledprojector.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(ledprojector.price-ledprojector.discount_price)}</Badge></p>
          <p className='sku'>SKU: {ledprojector.sku}</p>
          <Button className='addtocartbtn' onClick={() => handleAddToCart(ledprojector)}>Add to Cart</Button><br></br>
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
          <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.2rem'}}>{ledprojector.brand}</span></p>
          <p><span className='spechead'>Model Name</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{ledprojector.name.replace(/\s*\(.*?\)/, '')}</span></p>
          <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.7rem'}}>{ledprojector.color}</span></p>
          <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{ledprojector.dimensions}</span></p>
          <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{ledprojector.weight}kg</span></p>
          {ledprojector.projector_type && <p><span className='spechead'>Projector Type</span><span className='specvalue' style={{position: 'relative', left: '5.8rem'}}>{ledprojector.projector_type}</span></p>}
          {ledprojector.native_resolution && <p><span className='spechead'>Native Resolution</span><span className='specvalue' style={{position: 'relative', left: '4.2rem'}}>{ledprojector.native_resolution}</span></p>}
          {ledprojector.brightness && <p><span className='spechead'>Brightness</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{ledprojector.brightness} lumens</span></p>}
          {ledprojector.contrast_ratio && <p><span className='spechead'>Contrast Ratio</span><span className='specvalue' style={{position: 'relative', left: '5.7rem'}}>{ledprojector.contrast_ratio}</span></p>}
          {ledprojector.throw_distance && <p><span className='spechead'>Throw Distance</span><span className='specvalue' style={{position: 'relative', left: '5.1rem'}}>{ledprojector.throw_distance}</span></p>}
          {ledprojector.projection_size && <p><span className='spechead'>Projection Size</span><span className='specvalue' style={{position: 'relative', left: '5.4rem'}}>{ledprojector.projection_size}</span></p>}
          {!expand && (
              <button onClick={() => setExpand(!expand)} style={{position: 'relative', left: '0.5rem', color: 'rgb(0, 113, 133)', fontSize: '16px', backgroundColor: 'white', fontWeight: '600'}}>See More</button>
            )}
          {expand && 
          (<>
          {ledprojector.lamp_life && <p><span className='spechead'>Lamp Life</span><span className='specvalue' style={{position: 'relative', left: '7.7rem'}}>{ledprojector.lamp_life} hours</span></p>}
          {ledprojector.aspect_ratio && <p><span className='spechead'>Aspect Ratio</span><span className='specvalue' style={{position: 'relative', left: '6.3rem'}}>{ledprojector.aspect_ratio}</span></p>}
          {ledprojector.zoom && <p><span className='spechead'>Zoom</span><span className='specvalue' style={{position: 'relative', left: '9.5rem'}}>{ledprojector.zoom}</span></p>}
          {ledprojector.lens_shift && <p><span className='spechead'>Lens Shift</span><span className='specvalue' style={{position: 'relative', left: '7.6rem'}}>Yes</span></p>}
          {ledprojector.keystone_correction && <p><span className='spechead'>Keystone Correction</span><span className='specvalue' style={{position: 'relative', left: '2.8rem'}}>Yes</span></p>}
          {ledprojector.speaker_output && <p><span className='spechead'>Speaker Output</span><span className='specvalue' style={{position: 'relative', left: '4.8rem'}}>{ledprojector.speaker_output}</span></p>}
          {ledprojector.three_d_support && <p><span className='spechead'>3d Support</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>Yes</span></p>}
          {ledprojector.remote_control && <p><span className='spechead'>Remote Control</span><span className='specvalue' style={{position: 'relative', left: '4.8rem'}}>Yes</span></p>}
          {ledprojector.projection_technology && <p><span className='spechead'>Projection Technology</span><span className='specvalue' style={{position: 'relative', left: '1.7rem'}}>{ledprojector.projection_technology}</span></p>}
          {ledprojector.hdr_support && <p><span className='spechead'>HDR Support</span><span className='specvalue' style={{position: 'relative', left: '6rem'}}>Yes</span></p>}
          {ledprojector.noise_level && <p><span className='spechead'>Noise Level</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{ledprojector.noise_level}</span></p>}
          {ledprojector.power_consumption && <p><span className='spechead'>Power Consumption</span><span className='specvalue' style={{position: 'relative', left: '2.7rem'}}>{ledprojector.power_consumption}</span></p>}
          {ledprojector.projection_ratio && <p><span className='spechead'>Projection Ratio</span><span className='specvalue' style={{position: 'relative', left: '4.6rem'}}>{ledprojector.projection_ratio}</span></p>}
          {ledprojector.focus_type && <p><span className='spechead'>Focus Type</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{ledprojector.focus_type}</span></p>}
          {ledprojector.bluetooth_audio && <p><span className='spechead'>Bluetooth Audio</span><span className='specvalue' style={{position: 'relative', left: '4.3rem'}}>Yes</span></p>}
          {ledprojector.smart_features && <p><span className='spechead'>Smart Features</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>Yes</span></p>}
          {ledprojector.wireless_connectivity && <p><span className='spechead'>Wireless Connectivity</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ledprojector.wireless_connectivity}</span></p>}
          {ledprojector.input_ports && <p><span className='spechead'>Input Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ledprojector.input_ports}</span></p>}
          {ledprojector.included_accessories && <p><span className='spechead'>Included Accessories</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{ledprojector.included_accessories}</span></p>}
          <button onClick={() => setExpand(!expand)} style={{position: 'relative', left: '0.5rem', color: 'rgb(0, 113, 133)', backgroundColor: 'white', fontSize: '16px', fontWeight: '600'}}>See Less</button>
          </>)}
          <hr style={{color:'gray'}}></hr>
          <p className='spechead'>About this item</p>
          <p className='descpara'>{ledprojector.description_para}</p>
          <ul className='descpoints'>
                {ledprojector.description_points.split('\n').map((point, pointindex) => (
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

export default LedProjectorInfo