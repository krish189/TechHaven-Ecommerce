import React from 'react';
import './LaptopAccessoriesFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function LaptopAccessoriesFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='laptop-accessories-faq-container'>
        <p className='laptop-accessories-faq-head'>FAQ - Laptop Accessories</p><br></br>
        <p className='question'>Q:How do I choose a laptop stand?</p>
        <p className='answer'>A:Consider factors like height adjustability, material (e.g., aluminum), portability, and compatibility with your laptop’s size and weight.</p>
        <p className='question'>Q:Do cooling pads really help laptops?</p>
        <p className='answer'>A:Yes, cooling pads improve airflow and help reduce laptop temperature during heavy use, extending the life of internal components.        </p>
    </div>
    <Footer/>
    </>
  )
}

export default LaptopAccessoriesFAQ