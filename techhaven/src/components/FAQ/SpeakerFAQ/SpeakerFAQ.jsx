import React from 'react';
import './SpeakerFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function SpeakerFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='speaker-faq-container'>
      <p className='speaker-faq-head'>FAQ - Speaker</p><br></br>
      <p className='question'>Q:What is a soundbar, and how is it different from regular speakers?</p>
      <p className='answer'>A:A soundbar is a slim speaker system designed to enhance TV audio. Unlike traditional speakers, it’s compact and often comes with multiple channels for surround sound.</p>
      <p className='question'>Q:Do wireless speakers require Wi-Fi or Bluetooth?</p>
      <p className='answer'>A:Wireless speakers typically connect via Bluetooth or Wi-Fi. Some models may support both options.</p>
      <p className='question'>Q:What is a party speaker?</p>
      <p className='answer'>A:Party speakers are high-powered speakers designed for large gatherings. They often come with extra bass, built-in lights, and karaoke features.</p>
    </div>
    <Footer/>
    </>
  )
}

export default SpeakerFAQ