import React from 'react';
import './HometheaterFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function HometheaterFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='ht-faq-container'>
        <p className='ht-faq-head'>FAQ - Home Theater</p><br></br>
        <p className='question'>Q:What is a home theater system?</p>
        <p className='answer'>A:A home theater system is a combination of audio and video equipment that provides a cinematic experience at home. It typically includes a large display (such as a TV or projector), surround sound speakers, a subwoofer, and an audio/video receiver.</p>
        <p className='question'>Q:What is the difference between 5.1 and 7.1 surround sound?</p>
        <p className='answer'>A:5.1 surround sound has five speakers (front left, front right, center, rear left, rear right) and one subwoofer. 7.1 surround sound adds two extra rear speakers, providing more immersive sound from all angles.</p>
        <p className='question'>Q:What is Dolby Atmos?</p>
        <p className='answer'>A:Dolby Atmos is an advanced surround sound technology that adds overhead sound, creating a more immersive audio experience by simulating sounds coming from above and around you.</p>
        <p className='question'>Q:What is the role of a subwoofer in a home theater system?</p>
        <p className='answer'>A:A subwoofer handles the low-frequency sounds or bass, adding depth and richness to audio, especially in action scenes or music with deep bass.</p>
    </div>
    <Footer/>
    </>
  )
}

export default HometheaterFAQ