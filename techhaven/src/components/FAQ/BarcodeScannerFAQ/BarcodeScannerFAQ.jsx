import React from 'react';
import './BarcodeScannerFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function BarcodeScannerFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='bs-faq-container'>
        <p className='bs-faq-head'>FAQ - Barcode Scanner</p><br></br>
        <p className='question'>Q:What are the different types of barcode scanners?</p>
        <p className='answer'>A:Common types include laser, CCD, and 2D imagers. Laser scanners are fast and accurate for 1D barcodes, while 2D imagers can scan both 1D and 2D codes.</p>
        <p className='question'>Q:Can barcode scanners work with mobile devices?</p>
        <p className='answer'>A:Yes, many modern barcode scanners connect via Bluetooth or USB to mobile devices for easy integration with apps or inventory systems.</p>
    </div>
    <Footer/>
    </>
  )
}

export default BarcodeScannerFAQ