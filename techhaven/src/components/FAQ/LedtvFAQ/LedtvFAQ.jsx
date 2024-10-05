import React from 'react';
import './LedtvFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function LedtvFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='ledtv-faq-container'>
        <p className='ledtv-faq-head'>FAQ - LED TV</p><br></br>
        <p className='question'>Q:What is a Smart LED TV?</p>
        <p className='answer'>A:A Smart LED TV can connect to the internet and support streaming apps like Netflix, YouTube, and more, offering a smart interface.</p>
        <p className='question'>Q:What is a Curved LED TV?</p>
        <p className='answer'>A:A Curved LED TV has a slightly curved screen that offers an immersive viewing experience by expanding the field of view.</p>
        <p className='question'>Q:Do Smart TVs require a separate streaming device?</p>
        <p className='answer'>A:No, Smart TVs have built-in streaming apps, but you can use an external device like a Roku or Amazon Fire Stick for additional content.</p>
    </div>
    <Footer/>
    </>
  )
}

export default LedtvFAQ