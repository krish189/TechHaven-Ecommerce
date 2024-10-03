import React from 'react';
import './MonitorFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function MonitorFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='monitor-faq-container'>
        <p className='monitor-faq-head'>FAQ - Monitor</p><br></br>
        <p className='question'>Q:What is the difference between LED, LCD, and OLED monitors?</p>
        <p className='answer'>A:LED monitors are a type of LCD that use LED backlighting for better brightness and energy efficiency. OLED monitors do not require backlighting, offering deeper blacks and higher contrast, but are more expensive and less common.</p>
        <p className='question'>Q:What does refresh rate mean, and why is it important?</p>
        <p className='answer'>A:Refresh rate refers to how many times per second (measured in Hz) the screen refreshes the image. A higher refresh rate, like 144Hz or 240Hz, results in smoother visuals, making it essential for gaming or fast-motion applications.</p>
        <p className='question'>Q:What is response time in a monitor?</p>
        <p className='answer'>A:Response time is how quickly a pixel can change from one color to another, usually measured in milliseconds (ms). Lower response times (e.g., 1ms or 2ms) reduce motion blur, which is ideal for fast-paced gaming or video editing.</p>
        <p className='question'>Q:What is HDR, and do I need it for a monitor?</p>
        <p className='answer'>A:HDR (High Dynamic Range) enhances brightness, color, and contrast, providing more vivid and lifelike images. It is beneficial for watching HDR content, gaming, or professional media work.</p>
    </div>
    <Footer/>
    </>
  )
}

export default MonitorFAQ