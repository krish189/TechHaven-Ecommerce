import React from 'react';
import './HeadphoneEarbudFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function HeadphoneEarbudFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='hp-eb-faq-container'>
        <p className='hp-eb-faq-head'>FAQ - Headphones & Earbuds</p><br></br>
        <p className='question'>Q:What’s the difference between wired and wireless headphones?</p>
        <p className='answer'>A:Wired headphones connect to devices via cables, while wireless headphones use Bluetooth or RF for a cable-free experience.</p>
        <p className='question'>Q:Do wireless earbuds have better battery life than wireless headphones?</p>
        <p className='answer'>A:Generally, wireless headphones have longer battery life than wireless earbuds due to their larger size and batteries.</p>
        <p className='question'>Q:Can I use wireless headphones while working out?</p>
        <p className='answer'>Many wireless headphones are designed for active use and come with features like sweat resistance and secure ear hooks.</p>
    </div>
    <Footer/>
    </>
  )
}

export default HeadphoneEarbudFAQ