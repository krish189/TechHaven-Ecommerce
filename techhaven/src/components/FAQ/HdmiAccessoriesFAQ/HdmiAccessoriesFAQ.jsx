import React from 'react';
import './HdmiAccessoriesFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function HdmiAccessoriesFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='hdmi-accessories-faq-container'>
        <p className='hdmi-accessories-faq-head'>FAQ - HDMI Accessories</p><br></br>
        <p className='question'>Q:What is the difference between HDMI 2.0 and HDMI 2.1 cables?</p>
        <p className='answer'>A:HDMI 2.1 supports higher bandwidth, allowing for 8K resolution and faster refresh rates, while HDMI 2.0 supports up to 4K.</p>
        <p className='question'>Q:Can HDMI adapters affect video quality?</p>
        <p className='answer'>A:HDMI adapters typically do not affect video quality, but using low-quality adapters may cause signal degradation or compatibility issues.</p>
    </div>
    <Footer/>
    </>
  )
}

export default HdmiAccessoriesFAQ