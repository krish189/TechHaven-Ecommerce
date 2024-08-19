import React from 'react';
import logo from '../../../assets/logo.png';
import searchicon from '../../../assets/searchicon.png';
import cart from '../../../assets/cart.png';
import close from '../../../assets/close.png';
import '../Header/Header.css';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Header() {
  const [showShopSearch, setShowShopSearch] = useState(false);
  const refs = {
    shopsearchRef : useRef(null)
  }
  const displayshopSearch = () => {
    setShowShopSearch(!showShopSearch);
  };
  const shopheaderhandleClickOutside = (event) => {
    if (refs.shopsearchRef.current && !refs.shopsearchRef.current.contains(event.target)) 
    {
      setShowShopSearch(false); 
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', shopheaderhandleClickOutside);
    return () => {
      document.removeEventListener('mousedown', shopheaderhandleClickOutside);   
    };
  });
  return (
    <>
    <div className='shopheader'>
        <nav>
        <Link className='link' onClick={displayshopSearch}><img src={searchicon} alt='search' className='shopsearchicon' /><h5 className='lookingfor'>What are you looking for?</h5></Link>
        <img src={logo} alt='techhaven' className='shoplogoimg'/>
        <Link to='/login' className='link'><h5 className='shoplogin'>Login</h5></Link>
        <Link className='link'><img src={cart} alt='cart' className='shopcartimg'/><span>0</span></Link>
       </nav>
    </div>
    <div ref={refs.shopsearchRef} className={showShopSearch ? 'shopsearch active' : 'shopsearch'}>
        <img src={close} alt='close' className='shopcloseicon' onClick={()=>{setShowShopSearch(false)}}/>
        <input type='text' placeholder='What are you looking for?' />
        <div className='shopsearchlistings'>
        <h4>SHOP</h4>
        <Link className='shopsearchlistingslink'><p>Laptops</p></Link>
        <Link className='shopsearchlistingslink'><p>Speakers</p></Link>
        <Link className='shopsearchlistingslink'><p>Headphones & Earbuds</p></Link>
        <Link className='shopsearchlistingslink'><p>LED TV</p></Link>
        <Link className='shopsearchlistingslink'><p>Projectors</p></Link>
        <Link className='shopsearchlistingslink'><p>Microphones</p></Link>
        <Link className='shopsearchlistingslink'><p>Accessories</p></Link>
        <Link className='shopsearchlistingslink'><p>Peripherals</p></Link>
        <Link className='shopsearchlistingslink'><p>Smart Watch</p></Link>
        <Link className='shopsearchlistingslink'><p>Smart Home & CCTV</p></Link>
      </div>
    </div>
    
    </>
  )
}

export default Header