import React from 'react';
import down from '../../../assets/downicon.png';
import '../Category/Category.css';
import {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();
  const refs = {
    supportRef: useRef(null),
    accessoriesRef: useRef(null)
  }

  const [showSupportsubmenu, setShowSupportsubmenu] = useState(false);
  const displaySupportsubmenu = () => {
    setShowSupportsubmenu(!showSupportsubmenu);
  };

  const [showAccessoriessubmenu, setShowAccessoriessubmenu] = useState(false);
  const displayAccessoriessubmenu = () => {
    setShowAccessoriessubmenu(!showAccessoriessubmenu);
  };
  
  const handleClickOutside = (event) => {
    if (refs.supportRef.current && !refs.supportRef.current.contains(event.target))
    {
      setShowSupportsubmenu(false);
    }
    if (refs.accessoriesRef.current && !refs.accessoriesRef.current.contains(event.target))
    {
      setShowAccessoriessubmenu(false);
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
                <li onClick={()=>navigate('/shop/headphones-earbuds')}>Headphones & Earbuds</li>
                <li onClick={()=>navigate('/shop/led-tvs')}>LED TV</li>
                <li onClick={()=>navigate('/shop/led-projectors')}>Projectors</li>
                <li onClick={()=>navigate('/shop/microphones')}>Microphones</li>
                <li onClick={displayAccessoriessubmenu}>Accessories<img src={down} alt='down' className='downicon'></img></li>
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
    <div ref={refs.accessoriesRef} className={showAccessoriessubmenu ? 'categoryaccessoriessubmenu active' : 'categoryaccessoriessubmenu'}>
          <p onClick={()=>navigate('/shop/accessories/computer-accessories')}>Computer Accessories</p>
          <p onClick={()=>navigate('/shop/accessories/laptop-accessories')}>Laptop Accessories</p>
          <p onClick={()=>navigate('/shop/accessories/mobile-accessories')}>Mobile Accessories</p>
          <p onClick={()=> navigate('/shop/barcode-scanners')}>Barcode Scanners</p>
    </div>
    </>
  )
}

export default Category