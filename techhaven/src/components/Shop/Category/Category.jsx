import React from 'react';
import down from '../../../assets/downicon.png';
import '../Category/Category.css';
import {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();
  const [showSupportsubmenu, setShowSupportsubmenu] = useState(false);
  const [showAccessoriessubmenu, setShowAccessoriessubmenu] = useState(false);
  const [showPeripheralssubmenu, setShowPeripheralssubmenu] = useState(false);

  const refs = {
    supportRef: useRef(null),
    accessoriesRef: useRef(null),
    peripheralsRef: useRef(null)
  }

  
  const displaySupportsubmenu = () => {
    setShowSupportsubmenu(!showSupportsubmenu);
  };

  const displayAccessoriessubmenu = () => {
    setShowAccessoriessubmenu(!showAccessoriessubmenu);
  };
  
  const displayPeripheralssubmenu = () => {
    setShowPeripheralssubmenu(!showPeripheralssubmenu);
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
    if (refs.peripheralsRef.current && !refs.peripheralsRef.current.contains(event.target))
    {
      setShowPeripheralssubmenu(false);
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
                <li onClick={displayPeripheralssubmenu}>Peripherals<img src={down} alt='down' className='downicon'></img></li>
                <li>Smart Home & CCTV</li>
                <li>Smart Watch</li>
                <li onClick={displaySupportsubmenu}>Support <img src={down} alt='down' className='downicon'></img></li>
            </ul>
        </nav>
    </div>
    <div ref={refs.accessoriesRef} className={showAccessoriessubmenu ? 'categoryaccessoriessubmenu active' : 'categoryaccessoriessubmenu'}>
          <p onClick={()=>navigate('/shop/accessories/computer-accessories')}>Computer Accessories</p>
          <p onClick={()=>navigate('/shop/accessories/laptop-accessories')}>Laptop Accessories</p>
          <p onClick={()=>navigate('/shop/accessories/mobile-accessories')}>Mobile Accessories</p>
          <p onClick={()=>navigate('/shop/accessories/hdmi-accessories')}>HDMI Accessories</p>
          <p onClick={()=> navigate('/shop/barcode-scanners')}>Barcode Scanners</p>
    </div>
    <div ref={refs.peripheralsRef} className={showPeripheralssubmenu ? 'categoryperipheralssubmenu active' : 'categoryperipheralssubmenu'}>
          <p onClick={()=>navigate('/shop/peripherals/mouse')}>Mouses</p>
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