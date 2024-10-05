import React from 'react';
import './AboutUs.css';
import Marquee from '../Home/Marquee/Marquee';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import building from '../../assets/building.png';

function AboutUs() {
  return (
    <>
    <Marquee/>
    <Header/>
    <img src={building} alt='techhaven office' className='building-img'/>
    <div className='about-us-container'>
     <p className='about-us-head'>About Us</p>
     <p className="about-us-subhead">About TechHaven</p>
     <p className="about-us-txt">Welcome to TechHaven, your ultimate destination for cutting-edge electronics and gadgets. At TechHaven, we are passionate about providing top-quality electronics that enhance your everyday life, offering everything from high-performance laptops and cameras to smart home devices and accessories.</p>
     <p className="about-us-subhead">Our Story</p>
     <p className="about-us-txt">Founded with a vision to bridge the gap between technology and consumers, TechHaven started as a small venture driven by a passion for innovation and customer satisfaction. Our mission is to bring the latest electronics to the forefront, ensuring that our customers always have access to the best and most reliable products in the market. Whether you’re a tech enthusiast, a gamer, a professional, or just someone looking for the best in electronics, we have something for everyone.</p>
     <p className="about-us-subhead">Why TechHaven?</p>
     <p className="about-us-txt">At TechHaven, we believe in offering more than just products — we offer solutions. We handpick every item in our catalog, ensuring it meets our high standards for quality, performance, and innovation. Our team is constantly researching the latest trends and technologies so that we can offer our customers the most up-to-date products, ranging from electronics essentials to high-end gadgets.</p>
     <p className="about-us-subhead">Our Commitment to You</p>
     <p className="about-us-txt">We are committed to delivering exceptional customer service and providing a seamless shopping experience. From browsing our extensive catalog to fast, reliable shipping and after-sales support, TechHaven is with you every step of the way. We aim to build lasting relationships with our customers by prioritizing transparency, trust, and satisfaction.</p>
     <ul className='about-us-ul'>
        <li><b>Quality and Innovation:</b> Our selection of products is driven by quality and the latest technological advancements, ensuring you always get the best.</li>
        <li><b>Expert Support:</b> Our team of tech experts is available to help you make informed decisions, answer any questions, and provide personalized recommendations.</li>
        <li><b>Customer-Centric Approach:</b> Your needs are at the heart of everything we do. We offer flexible payment options, easy returns, and responsive customer service.</li>
     </ul>
     <p className="about-us-subhead">Our Products</p>
     <p className="about-us-txt">TechHaven offers a wide range of electronics to cater to every need, from everyday essentials to advanced gadgets for tech enthusiasts. Explore our diverse product categories:</p>
     <ul className="about-us-ul">
        <li><b>Laptops:</b> Whether you need a high-performance gaming laptop or a reliable workhorse for productivity, we offer laptops that deliver on both power and style.</li>
        <li><b>Speakers:</b> Enhance your audio experience with our range of speakers, designed for both immersive sound quality and sleek aesthetics.</li>
        <li><b>Headphones & Earbuds:</b> From noise-cancelling headphones to compact wireless earbuds, we provide audio solutions that combine comfort, clarity, and convenience.</li>
        <li><b>LED TVs:</b> Discover vibrant displays with our selection of LED TVs, delivering crisp visuals and smooth performance for a cinematic viewing experience.</li>
        <li><b>Projectors:</b> Transform your home or office space with our top-tier projectors, perfect for both entertainment and professional presentations.</li>
        <li><b>Microphones:</b> Whether for recording, broadcasting, or live streaming, our microphones ensure high-quality sound capture for clear communication.</li>
        <li><b>Accessories:</b>Enhance your tech experience with our comprehensive range of accessories. From computer accessories like external hard drives and USB hubs, to laptop accessories such as ergonomic stands and cooling pads for improved comfort and functionality. Keep your devices powered and protected with our mobile accessories, including cases, chargers, and adapters. Additionally, ensure seamless connectivity for your audio-visual devices with our high-speed HDMI cables and adapters.</li>
        <li><b>Barcode Scanners:</b> For businesses, we provide reliable and efficient barcode scanners, helping streamline operations and improve inventory management.</li>
        <li><b>Peripherals:</b> Elevate your setup with our range of high-performance peripherals. Choose from keyboards, including mechanical and ergonomic models, designed for comfort and efficiency. Our mice selection offers both wired and wireless options, perfect for casual users and professionals alike, with precision and ergonomic designs. Experience stunning visuals with our monitors, tailored for gaming, graphic design, and productivity. For seamless integration, opt for our keyboard and mouse combo sets, providing efficiency and ease of use.</li>
        <li><b>Smart Home:</b> Bring convenience and innovation into your living space with our smart home solutions, including home theater systems and smart lighting for an integrated, modern home experience.</li>
        <li><b>CCTV Cameras:</b> Keep your home or business secure with our reliable CCTV camera systems, offering high-definition video and easy remote access.</li>
        <li><b>Smart Watches:</b> Stay connected and track your health with our range of smart watches, blending functionality, style, and convenience.</li>
     </ul>
     <p className="about-us-subhead">Our Vision for the Future</p>
     <p className="about-us-txt">At TechHaven, we are always looking to the future, not just in terms of products, but in the way we operate. As technology evolves, we are committed to sustainability and innovation, ensuring that the products we offer are energy-efficient and eco-friendly. Our goal is to contribute positively to the technological landscape while fostering a greener future.</p>
     <p className="about-us-subhead">Join the TechHaven Family</p>
     <p className="about-us-txt">Join the thousands of satisfied customers who trust TechHaven for their electronic needs. Whether you're upgrading your gear or exploring new gadgets, we are here to help you stay ahead of the curve.</p>
     <p className="about-us-subhead">Corporate Headquarters</p>
     <p className="about-us-txt">TechHaven Private Limited<br></br>1st Floor, Tech Park,<br></br>
        Market Road, Sattur,<br></br>
        Tamil Nadu, India - 626203.<br></br>
        Email: enquiry@techhaven.com</p>
     <p className="about-us-txt">Thank you for choosing TechHaven — where technology meets excellence.</p>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs