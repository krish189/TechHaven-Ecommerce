import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../../Home/Footer/Footer';
import Category from '../Category/Category';
import Shopcarousel from '../ShopCarousel/Shopcarousel';
import sale from '../../../assets/sale.jpg';
import laptop from '../../../assets/laptop.jpg';
import speaker from '../../../assets/speaker.png';
import headphone from '../../../assets/headphone_shop.jpg';
import ledtv from '../../../assets/ledtv.jpeg';
import projector from '../../../assets/projectors.jpg';
import microphone from '../../../assets/microphone_shop.jpg';
import comp_acc from '../../../assets/computer_accessories_shop.jpg';
import laptop_acc from '../../../assets/laptop_accessories_shop.png';
import mobile_acc from '../../../assets/mobile_accessories_shop.jpg';
import hdmi_acc from '../../../assets/hdmi_accessories_shop.jpg';
import bs from '../../../assets/bs_shop.jpg';
import keyboard from '../../../assets/keyboard_shop.jpg';
import mouse from '../../../assets/mouse_shop.jpg';
import monitor from '../../../assets/monitor_shop.jpg';
import keyboardmouse from '../../../assets/keyboardmouse.jpg';
import ht from '../../../assets/ht_shop.jpg';
import cctv from '../../../assets/cctv_shop.jpg';
import sw from '../../../assets/sw_shop.jpg';
import warranty_icon from '../../../assets/warranty_icon.jpg';
import shipping_icon from '../../../assets/shipping_shop.jpg';
import support_icon from '../../../assets/support_icon.png';
import lock_icon from '../../../assets/lock_icon.jpg';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Shop.css';

function Shop() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  
  const handleSubscribe = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/subscribe/subscriber/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
      setEmail('');
      }
    
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  return (
    <>
     <Header/>
     <Category/>
     <Shopcarousel/>
     <div className='product-explore'>
      <img src={sale} alt="Sale" className='saleimg'/><br></br><br></br>
      <p className='product-explore-txt'>EXPLORE A WIDE RANGE OF LAPTOPS, SPEAKERS, HEADPHONES, LED TVS, PROJECTORS, MICROPHONES, ACCESSORIES, MONITORS, AND SMART WATCHES AT TECHHAVEN. ENJOY SECURE CHECKOUT, FAST SHIPPING, AND ACCESS TO INDIA’S EXTENSIVE CUSTOMER SERVICE NETWORK FOR ALL YOUR ELECTRONICS NEEDS</p>
      <div className='shop-flex-a'>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/laptops')}>
            <Card.Body>
            <Card.Img variant="top" src={laptop} />
            <Card.Title>Laptops</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/speakers')}>
            <Card.Body>
            <Card.Img variant="top" src={speaker} />
            <Card.Title>Speakers</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/headphones-earbuds')}>
            <Card.Body>
            <Card.Img variant="top" src={headphone} />
            <Card.Title>Headphones & Earbuds</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/led-tvs')}>
            <Card.Body>
            <Card.Img variant="top" src={ledtv} />
            <Card.Title>LED TV</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/led-projectors')}>
            <Card.Body>
            <Card.Img variant="top" src={projector} />
            <Card.Title>Projectors</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/microphones')}>
            <Card.Body>
            <Card.Img variant="top" src={microphone} style={{height: '9rem'}} />
            <Card.Title>Microphones</Card.Title>
            </Card.Body>
        </Card>
        </div><br></br>
        <div className='shop-flex-b'>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/accessories/computer-accessories')}>
            <Card.Body>
            <Card.Img variant="top" src={comp_acc} />
            <Card.Title>Computer Accessories</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/accessories/laptop-accessories')}>
            <Card.Body>
            <Card.Img variant="top" src={laptop_acc} />
            <Card.Title>Laptop Accessories</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/accessories/mobile-accessories')}>
            <Card.Body>
            <Card.Img variant="top" src={mobile_acc} style={{height: '10rem'}}/>
            <Card.Title>Mobile Accessories</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/accessories/hdmi-accessories')}>
            <Card.Body>
            <Card.Img variant="top" src={hdmi_acc} />
            <Card.Title>HDMI Accessories</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/barcode-scanners')}>
            <Card.Body>
            <Card.Img variant="top" src={bs} />
            <Card.Title>Barcode Scanners</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/peripherals/keyboard')}>
            <Card.Body>
            <Card.Img variant="top" src={keyboard} style={{height: '9rem'}} />
            <Card.Title>Keyboards</Card.Title>
            </Card.Body>
        </Card>
        </div><br></br>
        <div className='shop-flex-c'>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/peripherals/mouse')}>
            <Card.Body>
            <Card.Img variant="top" src={mouse} />
            <Card.Title>Mouses</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem'}} onClick={()=>navigate('/shop/peripherals/monitor')}>
            <Card.Body>
            <Card.Img variant="top" src={monitor} style={{height: '10rem'}} />
            <Card.Title>Monitors</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem', height: '14rem'}} onClick={()=>navigate('/shop/peripherals/combos')}>
            <Card.Body>
            <Card.Img variant="top" src={keyboardmouse} />
            <Card.Title>Combos</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem', height: '14rem'}} onClick={()=>navigate('/shop/home-theaters')}>
            <Card.Body>
            <Card.Img variant="top" src={ht} style={{height: '10rem'}}/>
            <Card.Title>Home Theaters</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem', height: '14rem'}} onClick={()=>navigate('/shop/cctv')}>
            <Card.Body>
            <Card.Img variant="top" src={cctv} style={{height: '10rem'}}/>
            <Card.Title>CCTV Camera</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem', height: '14rem'}} onClick={()=>navigate('/shop/smart-watch')}>
            <Card.Body>
            <Card.Img variant="top" src={sw} style={{height: '10rem'}} />
            <Card.Title>Smart Watch</Card.Title>
            </Card.Body>
        </Card>
        </div>
     </div>
     <div className='shop-flex'>
     <div className='shop-flex-d'>
          <img src={warranty_icon} alt="Warranty icon" className='warranty-icon' />
          <img src={shipping_icon} alt="Shipping icon" className='shipping-icon'/>
          <img src={support_icon} alt="Support icon" className='support-icon'/>
          <img src={lock_icon} alt="Lock icon" className='lock-icon' />
      </div><br></br>
      <div className="shop-flex-e">
        <p className='pw'>PRODUCT WARRANTY</p>
        <p className='fs'>FREE SHIPPING</p>
        <p className='ps'>PRIORITY SUPPORT</p>
        <p className='sp'>SECURE PAYMENT</p>
      </div>
      <div className="shop-flex-f">
        <p className='pw-value'>Get 1 Year* Hassle Free Warranty</p>
        <p className='fs-value'>Get free shipping on all orders</p>
        <p className='ps-value'>Priority Support Available </p>
        <p className='sp-value'>Safely make payments via Card</p>
      </div>
     </div>
     <div className='get-latest-updates'>
       <div className='get-latest-updates-box'>
         <p className='get-latest-updates-head'>GET LATEST UPDATES ON OFFERS</p>
         <p className='get-latest-updates-txt'>Promotions, new products and sales. Directly to your inbox.</p><br></br>
         <input type="email" placeholder='Your e-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <Button className='subscribe-btn' onClick={handleSubscribe}>SUBSCRIBE</Button>
       </div>
     </div>
     <Footer />
    </>
  )
}

export default Shop