import React from 'react';
import './BrandStores.css';
import Marquee from '../Home/Marquee/Marquee';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import store from '../../assets/store.jpg';

function BrandStores() {
  return (
    <>
    <Marquee/>
    <Header/>
    <img src={store} alt="techhaven store" className='store-img' />
    <div className='brand-store-container'>
       <p className="brand-store-head">Our Stores</p>
       <div className='address-flex'>
         <div>
            <p className="brand-store-txt">
            <b>TechHaven - Chennai</b><br></br>
            Ground Floor, Phoenix Mall,<br></br>
            Velachery Main Road,<br></br>
            Chennai, Tamil Nadu,<br></br>
            India - 600042.<br></br>
            Email: chennai@techhaven.in<br></br>
            Mobile: +91-44-1234-5678
            </p>
         </div>
         <div>
           <p className="brand-store-txt">
            <b>TechHaven - Bengaluru</b><br></br>
            2nd Floor, Silicon Plaza,<br></br>
            Koramangala,<br></br>
            Bengaluru, Karnataka,<br></br>
            India - 560095.<br></br>
            Email: bengaluru@techhaven.in<br></br>
            Mobile: +91-80-2345-6789
           </p>
         </div>
         <div>
          <p className="brand-store-txt">
            <b>TechHaven - Madurai</b><br></br>
            Ground Floor, Iconic Mall,<br></br>
            80 Feet Road,<br></br>
            Madurai, Tamil Nadu,<br></br>
            India - 625020.<br></br>
            Email:  madurai@techhaven.in<br></br>
            Mobile: +91-452-3456-7890
           </p>
         </div>
         <div>
           <p className="brand-store-txt">
            <b>TechHaven - Hyderabad</b><br></br>
            2nd Floor, Tech Plaza,<br></br>
            Hitech City,<br></br>
            Hyderabad, Telangana,<br></br>
            India - 500081.<br></br>
            Email:  hyderabad@techhaven.in<br></br>
            Mobile: +91-40-4567-8901
           </p>
         </div>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default BrandStores