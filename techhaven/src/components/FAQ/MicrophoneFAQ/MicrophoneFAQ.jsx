import React from 'react';
import './MicrophoneFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function MicrophoneFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='microphone-faq-container'>
        <p className='microphone-faq-head'>FAQ - Microphone</p><br></br>
        <p className='question'>Q:What is the difference between dynamic and condenser microphones?</p>
        <p className='answer'>A:Dynamic microphones are more durable and handle high sound pressure, ideal for live performances. Condenser microphones are more sensitive and used for studio recording.</p>
        <p className='question'>Q:Do I need a pop filter for my microphone?</p>
        <p className='answer'>A:A pop filter helps reduce popping sounds when recording vocals and is recommended for clearer audio.</p>
    </div>
    <Footer/>
    </>
  )
}

export default MicrophoneFAQ