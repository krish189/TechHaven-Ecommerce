import React from 'react';
import './CCTVFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function CCTVFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='cctv-faq-container'>
        <p className='cctv-faq-head'>FAQ - CCTV Camera</p><br></br>
        <p className='question'>Q:What is a CCTV camera?</p>
        <p className='answer'>A:A CCTV (Closed-Circuit Television) camera is a security device that captures video footage and transmits it to a specific location, such as a monitor, DVR (Digital Video Recorder), or network storage for surveillance purposes.</p>
        <p className='question'>Q:How does a CCTV camera work?</p>
        <p className='answer'>A:CCTV cameras capture video footage and either record it locally on a DVR/NVR (Network Video Recorder) or transmit it to a remote server. Modern systems can be connected to the internet, allowing remote viewing via apps or web interfaces.</p>
        <p className='question'>Q:Can I install CCTV cameras myself?</p>
        <p className='answer'>A:Many CCTV systems come with DIY installation instructions. However, for more complex systems or for cameras requiring specific wiring or configurations, it's recommended to hire a professional installer.</p>
        <p className='question'>Q:Do CCTV cameras work without an internet connection?</p>
        <p className='answer'>A:Yes, CCTV cameras can work without an internet connection if they are connected to a DVR/NVR system for local recording. However, internet access is required for remote viewing and cloud storage.</p>
    </div>
    <Footer/>
    </>
  )
}

export default CCTVFAQ