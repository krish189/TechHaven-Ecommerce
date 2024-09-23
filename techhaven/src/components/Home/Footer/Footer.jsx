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
            <li onClick={()=>{navigate('/shop/LedProjectors')}}>Projectors</li>
            <li onClick={()=>{navigate('/shop/Microphones')}}>Microphones</li>
            <li>Peripherals</li>
            <li>Gaming</li>
            <li>Smart Watch</li>
            <li>Surveillance</li>
        </ul>
       </div>
       <div>
       <h5>Support</h5>
       <ul>
            <li>Contact Us</li>
            <li>Register Onsite Support</li>
            <li>Register Warranty</li>
            <li>Terms and Conditions</li>
            <li>Warranty Policy</li>
            <li>E-Waste Management</li>
            <li>Product FAQ</li>
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
    </div>
    <div className='tailtext'>
     &copy;TechHaven India Pvt. Ltd. &reg; All Rights Reserved
    </div>
    </>
  )
}

export default Footer