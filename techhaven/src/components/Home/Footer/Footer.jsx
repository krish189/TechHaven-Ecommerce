import React from 'react';
import '../Footer/Footer.css';
import chevron from '../../../assets/chevron.png';
import fb from '../../../assets/fb.png';
import twitter from '../../../assets/twitter.png';
import insta from '../../../assets/insta.png';
import youtube from '../../../assets/youtube.png';
import linkedin from '../../../assets/linkedin.png';
import whatsapp from '../../../assets/whatsapp.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <>
    <div className="footer">
    <div>
        <h5>Company</h5>
        <ul>
            <li>About Us</li>
            <li>Brand Stores</li>
            <li>Careers</li>
            <li>News Centre</li>
            <li>Corporate Gifting</li>
            <li>Security</li>
            <li>Blog</li>
        </ul>
    </div>
    <div>
        <h5>Product</h5>
        <ul>
            <li onClick={()=>{navigate('/shop/laptops')}}>Laptops</li>
            <li onClick={()=>{navigate('/shop/speakers')}}>Speakers</li>
            <li onClick={()=>{navigate('/shop/headphones-earbuds')}}>Headphones & Earbuds</li>
            <li onClick={()=>{navigate('/shop/led-tvs')}}>LED TVs</li>
            <li onClick={()=>{navigate('/shop/led-projectors')}}>Projectors</li>
            <li onClick={()=>{navigate('/shop/microphones')}}>Microphones</li>
            <li onClick={()=>{navigate('/shop/accessories/computer-accessories')}}>Computer Accessories</li>
            <li onClick={()=>{navigate('/shop/accessories/laptop-accessories')}}>Laptop Accessories</li>
            <li onClick={()=>{navigate('/shop/accessories/mobile-accessories')}}>Mobile Accessories</li>
            <li onClick={()=>{navigate('/shop/accessories/hdmi-accessories')}}>HDMI Accessories</li>
            <li onClick={()=>{navigate('/shop/barcode-scanners')}}>Barcode Scanners</li>
            <li onClick={()=>{navigate('/shop/peripherals/keyboard')}}>Keyboards</li>
            <li onClick={()=>{navigate('/shop/peripherals/mouse')}}>Mouses</li>
            <li onClick={()=>{navigate('/shop/peripherals/monitor')}}>Monitors</li>
            <li onClick={()=>{navigate('/shop/peripherals/combos')}}>Keyboard Mouse Combo</li>
            <li onClick={()=>{navigate('/shop/home-theaters')}}>Home Theater</li>
            <li onClick={()=>{navigate('/shop/smart-lighting')}}>Smart Lighting</li>
            <li onClick={()=>{navigate('/shop/cctv')}}>CCTV Camera</li>
            <li onClick={()=>{navigate('/shop/smart-watch')}}>SmartWatch</li>
        </ul>
       </div>
       <div>
       <h5>Support</h5>
       <ul>
            <li onClick={()=>navigate('/support/contact-us')}>Contact Us</li>
            <li onClick={()=>navigate('/support/warranty-registration')}>Register Warranty</li>
            <li onClick={()=>navigate('/support/terms-and-conditions')}>Terms and Conditions</li>
            <li onClick={()=>navigate('/support/warranty-policy')}>Warranty Policy</li>
            <li onClick={()=>navigate('/support/product-faq')}>Product FAQ</li>
        </ul>
       </div>
       <div>
          <h5>Stay Connected</h5>
          <ul>
             <li>Subscribe to get latest product launches, offers, exclusive news.</li>
          </ul>
          <input type='email' placeholder='E-mail'></input>
          <img src={chevron} alt='chevron' className='chevron'/>
       </div>
    </div>
    <div className='media'>
         <img src={fb} alt='facebook' className='mediaicons'/>
         <img src={twitter} alt='twitter' className='mediaicons'/>
         <img src={insta} alt='instagram' className='mediaicons'/>
         <img src={youtube} alt='youtube' className='mediaicons'/>
         <img src={linkedin} alt='linkedin' className='mediaicons'/>
         <img src={whatsapp} alt='whatsapp' className='mediaicons'/>
    </div><br></br><br></br>
    <div className='tailtext'>
     &copy;TechHaven India Pvt. Ltd. &reg; All Rights Reserved
    </div>
    </>
  )
}

export default Footer