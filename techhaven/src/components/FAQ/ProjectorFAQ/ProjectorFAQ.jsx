import React from 'react';
import './ProjectorFAQ.css';
import Marquee from '../../Home/Marquee/Marquee';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';

function ProjectorFAQ() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='projector-faq-container'>
        <p className='projector-faq-head'>FAQ - Projector</p><br></br>
        <p className='question'>Q:Can a projector replace my TV?</p>
        <p className='answer'>A:Yes, projectors can replace TVs, especially for home theaters. However, they may require a dark room and external speakers for the best experience.</p>
        <p className='question'>Q:What’s the difference between DLP and LCD projectors?</p>
        <p className='answer'>A:DLP projectors offer sharper images and smoother motion, while LCD projectors typically provide better color accuracy and brightness.</p>
    </div>
    <Footer/>
    </>
  )
}

export default ProjectorFAQ