import React from 'react';
import './MobileAccessoriesFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function MobileAccessoriesFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='mobile-accessories-faq-container'>
        <p className='mobile-accessories-faq-head'>FAQ - Mobile Accessories</p><br></br>
        <p className='question'>Q:What is the benefit of using a mobile holder?</p>
        <p className='answer'>A:Mobile holders keep your phone secure and stable while driving or working, allowing hands-free use.</p>
        <p className='question'>Q:Are all charging cables compatible with my device?</p>
        <p className='answer'>A:No, you need to check the connector type (e.g., USB-C, Lightning) and ensure the cable supports the required charging speed and data transfer rate.</p>
    </div>
    <Footer/>
    </>
  )
}

export default MobileAccessoriesFAQ