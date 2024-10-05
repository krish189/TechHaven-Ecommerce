import React from 'react';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import {useState, useEffect, useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './ComputerAccessoriesInfo.css';
import PointerZoom from 'react-pointer-zoom';
import StarRatings from 'react-star-ratings';
import Badge from 'react-bootstrap/Badge';
import productreturn from '../../../assets/product_return.jpg';
import warranty from '../../../assets/warranty.png';
import delivery from '../../../assets/delivery.png';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';

function ComputerAccessoriesInfo() {
  const { computeraccessoriesname } = useParams();
  const [computeraccessoriesdata, setComputerAccessoriesdata] = useState([]);
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
    const fetchComputerAccessoriesDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-computer-accessories-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: computeraccessoriesname }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setComputerAccessoriesdata([data]);
          if (data.images && data.images.length > 0) {
            setImage(`http://localhost:8000${data.images[0]}`); 
          }
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchComputerAccessoriesDatabyName();
  },[computeraccessoriesname]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleAddToCart = (computeraccessories) => {
    addToCart(computeraccessories);
  };

  return (
    <>
    <Header/>
    <Category/>
    <div className='image-wrapper'>
    <div>
       {computeraccessoriesdata.map((computeraccessories,computeraccessoriesindex)=>(
        <div key={computeraccessoriesindex}>
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {computeraccessories.images && computeraccessories.images.map((image, imageindex) => (
              <Card.Img key={imageindex} src={`http://localhost:8000${image}`} alt={`Image ${imageindex + 1}`} className='smallcardimg'
               onClick={()=>{setImage(`http://localhost:8000${image}`)}}/>
            ))}
        </Card>
        </div>
       ))
       }
    </div>
     <div className='computeraccessoriespointerzoom'>
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
      {computeraccessoriesdata && computeraccessoriesdata.map((computeraccessories,index)=>(
        <div key={index}>
        <p className='name'>{computeraccessories.name}</p>
        <div className='rating'><span className='ratingvalue'>{Math.abs(computeraccessories.rating)}</span> 
                 <StarRatings
                    rating={Number(computeraccessories.rating)}
                    starRatedColor="#DE7921"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                  />
                  <span className='numreviews'>{computeraccessories.num_reviews} reviews</span>
        </div>
        <hr style={{color:'gray'}}></hr>
        <p><span className='offer'>-{Math.round((computeraccessories.price-computeraccessories.discount_price)/computeraccessories.price*100)}% </span><span className='newprice'>{formatCurrency(computeraccessories.discount_price)}</span></p>
        <p><span className='mrp'>MRP:<span className='oldprice'>{formatCurrency(computeraccessories.price)}</span></span> <Badge className='saveprice' bg="success">SAVE {formatCurrency(computeraccessories.price-computeraccessories.discount_price)}</Badge></p>
        <p className='sku'>SKU: {computeraccessories.sku}</p>
        <Button className='addtocartbtn' onClick={() => handleAddToCart(computeraccessories)}>Add to Cart</Button><br></br>
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
        <p><span className='spechead'>Brand</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{computeraccessories.brand}</span></p>
        <p><span className='spechead'>Model Name</span><span className='specvalue'>{computeraccessories.name.replace(/\s*\(.*?\)/, '')}</span></p>
        <p><span className='spechead'>Colour</span><span className='specvalue' style={{position: 'relative', left: '9.8rem'}}>{computeraccessories.color}</span></p>
        <p><span className='spechead'>Dimensions</span><span className='specvalue' style={{position: 'relative', left: '7.4rem'}}>{computeraccessories.dimensions}</span></p>
        <p><span className='spechead'>Weight</span><span className='specvalue' style={{position: 'relative', left: '9.4rem'}}>{computeraccessories.weight} kg</span></p>
        <p><span className='spechead'>Category</span><span className='specvalue' style={{position: 'relative', left: '8.4rem'}}>{computeraccessories.accessory_category}</span></p>
        {!expand && (
              <button onClick={() => setExpand(!expand)} style={{position: 'relative', left: '0.5rem', color: 'rgb(0, 113, 133)', fontSize: '16px', backgroundColor: 'white', fontWeight: '600'}}>See More</button>
            )}
        {expand && 
        (<>
        {computeraccessories.storage_capacity &&  <p><span className='spechead'>Storage Capacity</span><span className='specvalue' style={{position: 'relative', left: '4.8rem'}}>{computeraccessories.storage_capacity}</span></p>}
        {computeraccessories.interface_type &&  <p><span className='spechead'>Interface Type</span><span className='specvalue' style={{position: 'relative', left: '5.9rem'}}>{computeraccessories.interface_type}</span></p>}
        {computeraccessories.form_factor &&  <p><span className='spechead'>Form Factor</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{computeraccessories.form_factor}</span></p>}
        {computeraccessories.audio_channels && <p><span className='spechead'>Audio Channels</span><span className='specvalue' style={{position: 'relative', left: '5.3rem'}}>{computeraccessories.audio_channels}</span></p>}
        {computeraccessories.signal_to_noise_ratio && <p><span className='spechead'>Signal to Noise Ratio</span><span className='specvalue' style={{position: 'relative', left: '2.8rem'}}>{computeraccessories.signal_to_noise_ratio}</span></p>}
        {computeraccessories.sample_rate && <p><span className='spechead'>Sample Rate</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{computeraccessories.sample_rate}</span></p>}
        {computeraccessories.audio_processor && <p><span className='spechead'>Audio Processor</span><span className='specvalue' style={{position: 'relative', left: '5rem'}}>{computeraccessories.audio_processor}</span></p>}
        {computeraccessories.read_speed && <p><span className='spechead'>Read Speed</span><span className='specvalue' style={{position: 'relative', left: '7.1rem'}}>{computeraccessories.read_speed}</span></p>}
        {computeraccessories.write_speed && <p><span className='spechead'>Write Speed</span><span className='specvalue' style={{position: 'relative', left: '6.8rem'}}>{computeraccessories.write_speed}</span></p>}
        {computeraccessories.gpu_fan_included && <p><span className='spechead'>Fan Included</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>Yes</span></p>}
        {computeraccessories.gpu_fan_name && <p><span className='spechead'>Fan Type</span><span className='specvalue' style={{position: 'relative', left: '8.5rem'}}>{computeraccessories.gpu_fan_name}</span></p>}
        {computeraccessories.rpm && <p><span className='spechead'>RPM</span><span className='specvalue' style={{position: 'relative', left: '10.4rem'}}>{computeraccessories.rpm} RPM</span></p>}
        {computeraccessories.fan_speed && <p><span className='spechead'>Fan Speed</span><span className='specvalue' style={{position: 'relative', left: '7.7rem'}}>{computeraccessories.fan_speed}</span></p>}
        {computeraccessories.airflow && <p><span className='spechead'>Airflow</span><span className='specvalue' style={{position: 'relative', left: '9.1rem'}}>{computeraccessories.airflow}</span></p>}
        {computeraccessories.noise_level && <p><span className='spechead'>Noise Level</span><span className='specvalue' style={{position: 'relative', left: '7.2rem'}}>{computeraccessories.noise_level}</span></p>}
        {computeraccessories.bearing_type && <p><span className='spechead'>Bearing Type</span><span className='specvalue' style={{position: 'relative', left: '6.4rem'}}>{computeraccessories.bearing_type}</span></p>}
        {computeraccessories.fan_size && <p><span className='spechead'>Fan Size</span><span className='specvalue' style={{position: 'relative', left: '8.8rem'}}>{computeraccessories.fan_size}</span></p>}
        {computeraccessories.gpu_chipset && <p><span className='spechead'>GPU Chipset</span><span className='specvalue' style={{position: 'relative', left: '6.7rem'}}>{computeraccessories.gpu_chipset}</span></p>}
        {computeraccessories.memory_size && <p><span className='spechead'>Memory Size</span><span className='specvalue' style={{position: 'relative', left: '6.5rem'}}>{computeraccessories.memory_size}</span></p>}
        {computeraccessories.memory_type && <p><span className='spechead'>Memory Type</span><span className='specvalue' style={{position: 'relative', left: '6rem'}}>{computeraccessories.memory_type}</span></p>}
        {computeraccessories.core_clock && <p><span className='spechead'>Core Clock</span><span className='specvalue' style={{position: 'relative', left: '7.5rem'}}>{computeraccessories.core_clock}</span></p>}
        {computeraccessories.boost_clock && <p><span className='spechead'>Boost Clock</span><span className='specvalue' style={{position: 'relative', left: '7rem'}}>{computeraccessories.boost_clock}</span></p>}
        {computeraccessories.power_consumption && <p><span className='spechead'>Power Consumption</span><span className='specvalue' style={{position: 'relative', left: '3.1rem'}}>{computeraccessories.power_consumption}</span></p>}
        {computeraccessories.cache_size && <p><span className='spechead'>Cache Size</span><span className='specvalue' style={{position: 'relative', left: '7.8rem'}}>{computeraccessories.cache_size}</span></p>}
        {computeraccessories.usb_version && <p><span className='spechead'>USB Version</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{computeraccessories.usb_version}</span></p>}
        {computeraccessories.data_transfer_rate && <p><span className='spechead'>Data Transfer Rate</span><span className='specvalue' style={{position: 'relative', left: '3.9rem'}}>{computeraccessories.data_transfer_rate}</span></p>}
        {computeraccessories.number_of_ports && <p><span className='spechead'>Total Ports</span><span className='specvalue' style={{position: 'relative', left: '7.6rem'}}>{computeraccessories.number_of_ports === 1 ? '1 port' : `${computeraccessories.number_of_ports} ports`}</span></p>}
        {computeraccessories.socket_type &&  <p><span className='spechead'>Socket Type</span><span className='specvalue' style={{position: 'relative', left: '6.9rem'}}>{computeraccessories.socket_type}</span></p>}
        {computeraccessories.chipset &&  <p><span className='spechead'>Chipset</span><span className='specvalue' style={{position: 'relative', left: '9.1rem'}}>{computeraccessories.chipset}</span></p>}
        {computeraccessories.ram_slots && <p><span className='spechead'>RAM Slots</span><span className='specvalue' style={{position: 'relative', left: '7.9rem'}}>{computeraccessories.ram_slots === 1 ? '1 slot' : `${computeraccessories.ram_slots} slots`}</span></p>}
        {computeraccessories.max_ram_capacity &&  <p><span className='spechead'>Max RAM Capacity</span><span className='specvalue' style={{position: 'relative', left: '3.8rem'}}>{computeraccessories.max_ram_capacity}</span></p>}
        {computeraccessories.expansion_slots &&  <p><span className='spechead'>Expansion Slots</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.expansion_slots}</span></p>}
        {computeraccessories.power_output_per_port && <p><span className='spechead'>Power Output Rate</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.number_of_ports === 1 ? `${computeraccessories.power_output_per_port}` : `${computeraccessories.power_output_per_port} per port`}</span></p>}
        {computeraccessories.interface && <p><span className='spechead'>Interface</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.interface}</span></p>}
        {computeraccessories.input_ports && <p><span className='spechead'>Input Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.input_ports}</span></p>}
        {computeraccessories.output_ports && <p><span className='spechead'>Output Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.output_ports}</span></p>}
        {computeraccessories.storage_ports && <p><span className='spechead'>Storage Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.storage_ports}</span></p>}
        {computeraccessories.usb_ports && <p><span className='spechead'>USB Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.usb_ports}</span></p>}
        {computeraccessories.network_ports && <p><span className='spechead'>Network Ports</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.network_ports}</span></p>}
        {computeraccessories.included_items && <p><span className='spechead'>Included Items</span><span className='specvalue' style={{position: 'relative', left: '0.5rem', display: 'flex'}}>{computeraccessories.included_items}</span></p>}
        <button onClick={() => setExpand(!expand)} style={{position: 'relative', left: '0.5rem', color: 'rgb(0, 113, 133)', backgroundColor: 'white', fontSize: '16px', fontWeight: '600'}}>See Less</button>
        </>)}
        <hr style={{color:'gray'}}></hr>
        <p className='spechead'>About this item</p>
        <p className='descpara'>{computeraccessories.description_para}</p>
        <ul className='descpoints'>
              {computeraccessories.description_points.split('\n').map((point, pointindex) => (
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

export default ComputerAccessoriesInfo