import React from 'react';
import down from '../../../assets/downicon.png';
import '../Category/Category.css';

function Category() {
 
  return (
    <>
    <div className='category'>
        <nav className='categorynav'>
            <ul className='categoryul'>
                <li>Laptops</li>
                <li>Speakers</li>
                <li>Headphones & Earbuds</li>
                <li>LED TV</li>
                <li>Projectors</li>
                <li>Microphones</li>
                <li>Accessories</li>
                <li>Peripherals</li>
                <li>Smart Home & CCTV</li>
                <li>Smart Watch</li>
                <li>Support <img src={down} alt='down' className='downicon'></img></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Category