import React from 'react';
import Header from '../../Shop/Header/Header';
import Footer from '../../Home/Footer/Footer';
import Category from '../../Shop/Category/Category';
import { useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import '../LaptopInfoShop/LaptopInfoShop.css';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';


function LaptopInfoShop() {
  const { laptopname } = useParams();
  const [laptopdata, setLaptopdata] = useState([]);
  const [image, setImage] = useState('');
  const [imageDimensions, setImageDimensions] = useState({ width: 660, height: 679 });

  const imageRef = useRef(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaptopDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-laptop-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: laptopname }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setLaptopdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchLaptopDatabyName();
  },[laptopname]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (laptop) => {
    addToCart(laptop);
  };


  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
    <div>
       {laptopdata.map((laptop)=>(
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {laptop.images && laptop.images.map((image, index) => (
              <Card.Img key={index} src={`http://localhost:8000${image}`} alt={`Image ${index + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
       ))
       }
    </div>
     <div className='pointerzoom'>
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
      {laptopdata && laptopdata.map((laptop,index)=>(
        <div key={index}>
        <p className='name'>{laptop.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(laptop.rating)}</span> 
                 <StarRatings
                    rating={Number(laptop.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{laptop.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((laptop.price-laptop.discount_price)/laptop.price*100)}% </span><span className='newprice'>₹{laptop.discount_price}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>₹{laptop.price}</span></span> <Badge className='saveprice' bg="success">SAVE ₹{laptop.price-laptop.discount_price}</Badge></p>
        <p className='sku'>SKU: {laptop.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(laptop)}>Add to Cart</Button><br></br>
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
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{laptop.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue'>{laptop.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Display</span><span className='specvalue' style={{position: 'relative', left: '9.6rem'}}>{laptop.display}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.8rem'}}>{laptop.color}</span></p>
        <p><span className='spechead'>CPU Model</span><span className='specvalue' style={{position: 'relative', left: '7.6rem'}}>{laptop.cpu}</span></p>
        <p><span className='spechead'>RAM Memory</span><span className='specvalue' style={{position: 'relative', left: '6.2rem'}}>{laptop.ram}</span></p>
        <p><span className='spechead'>Storage</span><span className='specvalue' style={{position: 'relative', left: '9.2rem'}}>{laptop.storage}</span></p>
        <p><span className='spechead'>Graphics</span><span className='specvalue' style={{position: 'relative', left: '8.8rem'}}>{laptop.graphics}</span></p>
        <p><span className='spechead'>Operating System</span><span className='specvalue' style={{position: 'relative', left: '4.4rem'}}>{laptop.operating_system}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.3rem'}}>{laptop.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.3rem'}}>{laptop.weight}kg</span></p>
        <hr style={{color:'gray'}}></hr>
        <p className='spechead'>About this item</p>
        <p className='descpara'>{laptop.description_para}</p>
        <ul className='descpoints'>
              {laptop.description_points.split('\n').map((point, index) => (
                <li key={index}>&#8226; {point}</li>
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

export default LaptopInfoShop