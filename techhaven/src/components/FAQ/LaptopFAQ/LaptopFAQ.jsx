import React from 'react';
import './LaptopFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function LaptopFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='laptop-faq-container'>
        <p className='laptop-faq-head'>FAQ - Laptop</p><br></br>
        <p className='question'>Q:What is the difference between ultrabooks and everyday laptops?</p>
        <p className='answer'>A:Ultrabooks are slim, lightweight, and designed for high performance with extended battery life, while everyday laptops are general-purpose devices suitable for basic computing tasks.</p>
        <p className='question'>Q:Are gaming laptops suitable for work?</p>
        <p className='answer'>A:Yes, gaming laptops offer high performance and can handle tasks like video editing, software development, and more. However, they tend to be heavier and have shorter battery life.</p>
        <p className='question'>Q:What is a 2-in-1 laptop?</p>
        <p className='answer'>A:A 2-in-1 laptop can function both as a laptop and a tablet, offering flexibility with touchscreens and detachable or foldable keyboards.</p>
        <p className='question'>Q:What is the main benefit of business laptops?</p>
        <p className='answer'>A:Business laptops prioritize security, durability, and performance, often featuring longer battery life, built-in security features, and premium designs.</p>
        <p className='question'>Q:What is a rugged laptop?</p>
        <p className='answer'>A:Rugged laptops are built to withstand harsh conditions, such as extreme temperatures, drops, and exposure to water and dust, making them ideal for industrial or fieldwork.</p>
    </div>
    <Footer/>
    </>
  )
}

export default LaptopFAQ