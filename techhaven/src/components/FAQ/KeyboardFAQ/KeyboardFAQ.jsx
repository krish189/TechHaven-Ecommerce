import React from 'react';
import './KeyboardFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function KeyboardFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='keyboard-faq-container'>
        <p className='keyboard-faq-head'>FAQ - Keyboard</p><br></br>
        <p className='question'>Q:What is the difference between mechanical and membrane keyboards?</p>
        <p className='answer'>A:Mechanical keyboards use individual switches under each key, providing tactile feedback and durability. Membrane keyboards use a pressure pad system, which is quieter and more affordable but may wear out faster.</p>
        <p className='question'>Q:Are mechanical keyboards better for typing or gaming?</p>
        <p className='answer'>A:Mechanical keyboards are preferred for both typing and gaming due to their responsiveness, tactile feedback, and customizable switches. Different switch types (e.g., linear, tactile, or clicky) cater to different preferences.</p>
        <p className='question'>Q:What are keyboard switches, and how do they affect performance?</p>
        <p className='answer'>A:Keyboard switches are mechanisms under the keycaps that register keystrokes. They come in various types, such as Cherry MX, Razer, and Romer-G, each offering a unique feel (linear, tactile, or clicky) and actuation force, which impacts typing speed and comfort.</p>
        <p className='question'>Q:What is a wireless keyboard, and how does it differ from a wired keyboard?</p>
        <p className='answer'>A:Wireless keyboards connect via Bluetooth or RF, offering more portability and reducing cable clutter. Wired keyboards connect through a USB cable, providing a more stable connection with no need for batteries or charging.</p>
        <p className='question'>Q:Do wireless keyboards have input lag?</p>
        <p className='answer'>A:Some wireless keyboards may have a slight input lag, but higher-quality models designed for gaming or productivity often minimize or eliminate noticeable delay.</p>
        <p className='question'>Q:What is a backlit keyboard?</p>
        <p className='answer'>A:A backlit keyboard has illuminated keys, allowing users to type in low-light conditions. Some models offer customizable RGB lighting, while others may only have a single color.</p>
        <p className='question'>Q:What is the difference between a full-sized keyboard and a tenkeyless (TKL) keyboard?</p>
        <p className='answer'>A:A full-sized keyboard includes all keys, including a number pad, while a tenkeyless (TKL) keyboard omits the number pad, making it more compact and portable.</p>
    </div>
    <Footer/>
    </>
  )
}

export default KeyboardFAQ