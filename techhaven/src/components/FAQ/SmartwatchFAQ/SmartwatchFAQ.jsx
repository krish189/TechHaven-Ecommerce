import React from 'react';
import './SmartwatchFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';


function SmartwatchFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='sw-faq-container'>
        <p className='sw-faq-head'>FAQ - Smart Watch</p><br></br>
        <p className='question'>Q:What is a smartwatch?</p>
        <p className='answer'>A:A smartwatch is a wearable device that functions as a traditional wristwatch but also provides advanced features such as fitness tracking, notifications, apps, and sometimes calling or messaging capabilities by connecting to a smartphone.</p>
        <p className='question'>Q:How does a smartwatch work?</p>
        <p className='answer'>A:Smartwatches pair with your smartphone via Bluetooth, enabling them to receive notifications, messages, calls, and more. Some models have built-in cellular connectivity, allowing them to operate independently of a smartphone.</p>
        <p className='question'>Q:Can I make phone calls from a smartwatch?</p>
        <p className='answer'>A:Some smartwatches, especially those with cellular capabilities (e.g., Apple Watch Series with LTE, Samsung Galaxy Watch), allow you to make and receive calls without needing to be connected to your smartphone.</p>
        <p className='question'>Q:Can I reply to messages on a smartwatch?</p>
        <p className='answer'>A:Yes, many smartwatches allow you to reply to messages via voice dictation, pre-set replies, or even an on-screen keyboard, depending on the model and the app.</p>
        <p className='question'>Q:Can I swim with a smartwatch?</p>
        <p className='answer'>A:Some smartwatches are water-resistant and suitable for swimming. Models like the Apple Watch or Garmin watches have specific swim tracking features. Always check the water resistance rating before using it in water.</p>
    </div>
    <Footer/>
    </>
  )
}

export default SmartwatchFAQ