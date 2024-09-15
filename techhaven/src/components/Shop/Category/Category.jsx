import React from 'react';
import down from '../../../assets/downicon.png';
import '../Category/Category.css';
import {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();
  const refs = {
    supportRef: useRef(null)
  }
  const [showSupportsubmenu, setShowSupportsubmenu] = useState(false);
  const displaySupportsubmenu = () => {
    setShowSupportsubmenu(!showSupportsubmenu);
  };
  const handleClickOutside = (event) => {
    if (refs.supportRef.current && !refs.supportRef.current.contains(event.target))
      {
         setShowSupportsubmenu(false);
      }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  });
  return (
    <>
    <div className='category'>
        <nav className='categorynav'>
            <ul className='categoryul'>
                <li onClick={()=>navigate('/shop/laptops')}>Laptops</li>
                <li onClick={()=>navigate('/shop/speakers')}>Speakers</li>
                <li onClick={()=>navigate('/shop/HpEb')}>Headphones & Earbuds</li>
                <li>LED TV</li>
                <li>Projectors</li>
                <li>Microphones</li>
                <li>Accessories</li>
                <li>Peripherals</li>
                <li>Smart Home & CCTV</li>
                <li>Smart Watch</li>
                <li onClick={displaySupportsubmenu}>Support <img src={down} alt='down' className='downicon'></img></li>
            </ul>
        </nav>
    </div>
    <div ref={refs.supportRef} className={showSupportsubmenu ? 'supportsubmenu active' : 'supportsubmenu'}>
          <p>Contact Us</p>
          <p>Register Onsite Support</p>
          <p>Register Warranty</p>
          <p>Product FAQ</p>
    </div>
    </>
  )
}

export default Category