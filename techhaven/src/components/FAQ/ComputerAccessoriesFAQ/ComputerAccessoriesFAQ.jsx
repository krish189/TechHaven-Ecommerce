import React from 'react';
import './ComputerAccessoriesFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function ComputerAccessoriesFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='computer-accessories-faq-container'>
        <p className='computer-accessories-faq-head'>FAQ - Computer Accessories</p><br></br>
        <p className='question'>Q:What is the advantage of using an SSD over an HDD?</p>
        <p className='answer'>A:SSDs are faster, more durable, and energy-efficient compared to HDDs, but HDDs are cheaper and offer larger storage capacities.</p>
        <p className='question'>Q:Can I install a graphics card on any computer?</p>
        <p className='answer'>A:Most modern computers support graphics cards, but you need to ensure your motherboard has the necessary PCIe slot and that your power supply is sufficient.</p>
    </div>
    <Footer/>
    </>
  )
}

export default ComputerAccessoriesFAQ