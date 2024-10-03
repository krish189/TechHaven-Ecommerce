import React from 'react';
import './MouseFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function MouseFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='mouse-faq-container'>
        <p className='mouse-faq-head'>FAQ - Mouse</p><br></br>
        <p className='question'>Q:What is the difference between a wired and wireless mouse?</p>
        <p className='answer'>A:Wired mice connect to your computer via a USB cable, offering a stable connection without the need for batteries. Wireless mice connect using Bluetooth or RF and provide more flexibility and portability but require batteries or recharging.</p>
        <p className='question'>Q:Do wireless mice have input lag?</p>
        <p className='answer'>A:Some lower-end wireless mice may have slight input lag, but most modern, high-quality wireless mice, especially those designed for gaming or productivity, minimize lag to be almost imperceptible.</p>
        <p className='question'>Q:What is DPI, and why is it important for a mouse?</p>
        <p className='answer'>A:DPI (Dots Per Inch) measures the sensitivity of a mouse. Higher DPI allows the cursor to move faster across the screen with smaller physical movements. For gaming or graphic design, a mouse with adjustable DPI is preferred for precision control.</p>
        <p className='question'>Q:How do I choose the right DPI for my mouse?</p>
        <p className='answer'>A:For general use, 800-1600 DPI is suitable. For gaming or detailed work like graphic design, you may want a higher DPI (up to 16,000 DPI) and the ability to adjust DPI settings depending on your task.</p>
        <p className='question'>Q:What is the difference between optical and laser mice?</p>
        <p className='answer'>A:Optical mice use an LED light and work best on non-reflective surfaces. Laser mice use a laser, offering higher precision and can work on more surfaces, including glass. Laser mice are typically more sensitive and are often favored by gamers and professionals.</p>
        <p className='question'>Q:What is an ergonomic mouse, and why should I use one?</p>
        <p className='answer'>A:An ergonomic mouse is designed to fit the natural shape of your hand, reducing strain on your wrist and forearm. It is especially beneficial for users who spend long hours working on a computer, helping prevent conditions like carpal tunnel syndrome.</p>
    </div>
    <Footer/>
    </>
  )
}

export default MouseFAQ