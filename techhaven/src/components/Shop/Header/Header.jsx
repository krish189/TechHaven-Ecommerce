import React from 'react';
import logo from '../../../assets/logo.png';
import searchicon from '../../../assets/searchicon.png';
import cart from '../../../assets/cart.png';
import close from '../../../assets/close.png';
import '../Header/Header.css';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext'; 
import down from '../../../assets/downicon.png';
import profile from '../../../assets/profile.png';
import logouticon from '../../../assets/logout.png';
import profiledark from '../../../assets/profileicondark.jpg';

function Header() {
  const [showShopSearch, setShowShopSearch] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const { user, logout } = useAuth();

  const refs = {
    shopsearchRef : useRef(null),
    userinfomenu : useRef(null)
  }
  const displayshopSearch = () => {
    setShowShopSearch(!showShopSearch);
  };
  const displayUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };
  const shopheaderhandleClickOutside = (event) => {
    if (refs.shopsearchRef.current && !refs.shopsearchRef.current.contains(event.target)) 
    {
      setShowShopSearch(false); 
    }
    if (refs.userinfomenu.current && !refs.userinfomenu.current.contains(event.target)) 
      {
        setShowUserInfo(false); 
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
        {user ? (
            <div className='profile' onClick={displayUserInfo}>
              <img src={profile} alt='profile' className='profileicon'/>
              <h5 className='profileshoplogin'>{user.name}</h5>
              <img src={down} alt='down' className='shopdownicon'></img>
            </div>
          ) : (
            <Link to='/login' className='link'>
              <h5 className='shoplogin'>Login</h5>
            </Link>
          )}
        <Link className='link'><img src={cart} alt='cart' className='shopcartimg'/><span  className='cartcount'>0</span></Link>
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
   {user && <div ref={refs.userinfomenu} className={showUserInfo ? 'userinfosubmenu active' : 'userinfosubmenu' }>
       <div className='userinfo'>
               <img src={profiledark} alt='profiledark' className='profileicondark'/>
               <h5 className='username'>{user.name}</h5><br></br>
               <p className='email'>{user.email}</p>
        </div>
      <hr></hr>
      <div onClick={logout}  className='userinfo'>
      <img src={logouticon} alt='logout' className='logouticon'/>
      <h5 className='logoutoption'>Logout</h5>
      </div> 
    </div>}
    </>
  )
}

export default Header