import React from 'react';
import './SmartLightFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function SmartLightFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='sl-faq-container'>
        <p className='sl-faq-head'>FAQ - Smart Light</p><br></br>
        <p className='question'>Q:What is smart lighting?</p>
        <p className='answer'>A:Smart lighting refers to lighting systems that can be controlled remotely through a smartphone, tablet, or smart home hub. These systems often include features like scheduling, dimming, color changes, and integration with other smart home devices.</p>
        <p className='question'>Q:How does smart lighting work?</p>
        <p className='answer'>A:Smart lighting works using wireless communication technologies such as Wi-Fi, Bluetooth, Zigbee, or Z-Wave. These lights connect to your home network, allowing you to control them through apps or voice assistants like Amazon Alexa, Google Assistant, or Apple Siri.</p>
        <p className='question'>Q:Do I need special wiring for smart lighting?</p>
        <p className='answer'>A:Most smart lighting systems work with your existing wiring and standard light sockets. Some may require a neutral wire, so it's important to check compatibility before installation.</p>
        <p className='question'>Q:Can I use smart lighting outdoors?</p>
        <p className='answer'>A:Yes, many brands offer outdoor-rated smart lights. These lights are designed to withstand weather conditions and work with your existing smart home setup.</p>
    </div>
    <Footer/>
    </>
  )
}

export default SmartLightFAQ