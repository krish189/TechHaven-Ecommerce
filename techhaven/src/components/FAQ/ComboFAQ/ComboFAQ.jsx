import React from 'react';
import './ComboFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function ComboFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='combo-faq-container'>
        <p className='combo-faq-head'>FAQ - Keyboard Mouse Combo</p><br></br>
        <p className='question'>Q:Are keyboard and mouse combos cheaper than buying them separately?</p>
        <p className='answer'>A:Yes, buying a keyboard and mouse combo is often more affordable than purchasing the items individually. Manufacturers often bundle these products at a lower cost, providing a more budget-friendly option.</p>
        <p className='question'>Q:Can I use the keyboard and mouse from a combo separately?</p>
        <p className='answer'>A:Yes, the keyboard and mouse from a combo can usually be used separately with other devices, provided they have compatible connectivity (USB, Bluetooth, etc.).</p>
        <p className='question'>Q:Do keyboard and mouse combos come with ergonomic designs?</p>
        <p className='answer'>A:Yes, many combos feature ergonomic keyboards and mice designed to reduce strain during long periods of use. These often include contoured designs, wrist rests, and adjustable tilt for the keyboard, and comfortable grip shapes for the mouse.</p>
        <p className='question'>Q:Can I connect a wireless combo to a computer without Bluetooth?</p>
        <p className='answer'>A:If your computer doesn’t have built-in Bluetooth, most wireless combos come with a USB receiver that plugs into your computer’s USB port, providing wireless functionality without needing Bluetooth.</p>
    </div>
    <Footer/>
    </>
  )
}

export default ComboFAQ