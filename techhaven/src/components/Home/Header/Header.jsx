import React from 'react';
import logo from '../../../assets/logo.png';
import down from '../../../assets/downicon.png';
import searchicon from '../../../assets/searchicon.png';
import close from '../../../assets/close.png';
import sidearrow from '../../../assets/side_arrow.png';
import '../Header/Header.css';
import {useState,useRef,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Header() {
  // State variables and State Functions
  const [showSearch, setShowSearch] = useState(false);
  const [showLaptopsubmenu, setShowLaptopsubmenu] = useState(false);
  const [showAudiovideosubmenu, setShowAudiovideosubmenu] = useState(false);
  const [showAccessoriessubmenu, setShowAccessoriessubmenu] = useState(false);
  const [showPeripheralsubmenu, setShowPeripheralsubmenu] = useState(false);
  const [showSmarthomesubmenu, setShowSmarthomesubmenu] = useState(false);
  const [showSupportsubmenu, setShowSupportsubmenu] = useState(false);
  const [showSpeakerCategory, setShowSpeakerCategory] = useState(false);
  const [showHeadphoneCategory, setShowHeadphoneCategory] = useState(false);
  const [showTVCategory, setShowTVCategory] = useState(false);
  const [showComputeraccCategory, setShowComputeraccCategory] = useState(false);
  const [showLaptopaccCategory, setShowLaptopaccCategory] = useState(false);
  const [showMobileaccCategory, setShowMobileaccCategory] = useState(false);
  const [showHdmiaccCategory, setShowHdmiaccCategory] = useState(false);
  const [showKeyboardCategory, setShowKeyboardCategory] = useState(false);
  const [showMouseCategory, setShowMouseCategory] = useState(false);
  const [showMonitorCategory, setShowMonitorCategory] = useState(false);

  // Navigate initialization
  const navigate = useNavigate();
 
  // Creates references to DOM elements using useRef
  const refs = {
    searchRef : useRef(null),
    lapsubmenuRef : useRef(null),
    audiovideosubmenuRef : useRef(null),
    accessoriessubmenuRef : useRef(null),
    speakercategoryRef : useRef(null),
    headphonecategoryRef : useRef(null),
    tvcategoryRef : useRef(null),
    computeraccRef : useRef(null),
    laptopaccRef : useRef(null),
    mobileaccRef : useRef(null),
    hdmiaccRef : useRef(null),
    peripheralsubmenuRef : useRef(null),
    keyboardRef : useRef(null),
    mouseRef : useRef(null),
    monitorRef : useRef(null),
    smartHomeRef : useRef(null),
    supportRef : useRef(null)
  };

  // Defines functions to toggle the visibility of different elements
  const displaySearch = () => {
    setShowSearch(!showSearch);
  };
  const displayLaptopsubmenu = () => {
    setShowLaptopsubmenu(!showLaptopsubmenu);
  };
  const displayAudioVideosubmenu = () => {
    setShowAudiovideosubmenu(!showAudiovideosubmenu);
  };
  const displayAccessoriessubmenu = () => {
    setShowAccessoriessubmenu(!showAccessoriessubmenu);
  };
  const displayPeripheralsubmenu = () => {
    setShowPeripheralsubmenu(!showPeripheralsubmenu);
  };
  const displaySmarthomesubmenu = () => {
    setShowSmarthomesubmenu(!showSmarthomesubmenu);
  };
  const displaySupportsubmenu = () => {
    setShowSupportsubmenu(!showSupportsubmenu);
  };
  const displaySpeakerCategory = () => {
    setShowSpeakerCategory(!showSpeakerCategory);
    setShowHeadphoneCategory(false);
    setShowTVCategory(false);
  };
  const displayHeadphoneCategory = () => {
    setShowHeadphoneCategory(!showHeadphoneCategory);
    setShowSpeakerCategory(false);
    setShowTVCategory(false);
  };
  const displayTVCategory = () => {
    setShowTVCategory(!showTVCategory);
    setShowSpeakerCategory(false);
    setShowHeadphoneCategory(false);
  };
  const displayComputeraccCategory = () => {
    setShowComputeraccCategory(!showComputeraccCategory);
    setShowLaptopaccCategory(false);
    setShowMobileaccCategory(false);
    setShowHdmiaccCategory(false);
  };
  const displayLaptopaccCategory = () => {
    setShowLaptopaccCategory(!showLaptopaccCategory);
    setShowMobileaccCategory(false);
    setShowHdmiaccCategory(false);
    setShowComputeraccCategory(false);
  };
  const displayMobileaccCategory = () => {
    setShowMobileaccCategory(!showMobileaccCategory);
    setShowLaptopaccCategory(false);
    setShowHdmiaccCategory(false);
    setShowComputeraccCategory(false);
  };
  const displayHdmiaccCategory = () => {
    setShowHdmiaccCategory(!showHdmiaccCategory);
    setShowLaptopaccCategory(false);
    setShowComputeraccCategory(false);
    setShowMobileaccCategory(false);
  };
  const displayKeyboardCategory = () => {
    setShowKeyboardCategory(!showKeyboardCategory);
    setShowMouseCategory(false);
    setShowMonitorCategory(false);
  };
  const displayMouseCategory = () => {
    setShowMouseCategory(!showMouseCategory);
    setShowKeyboardCategory(false);
    setShowMonitorCategory(false);
  };
  const displayMonitorCategory = () => {
    setShowMonitorCategory(!showMonitorCategory);
    setShowKeyboardCategory(false);
    setShowMouseCategory(false);
  };

 // Defines a function to handle clicks outside of specific elements
  const handleClickOutside = (event) => {
    if (refs.searchRef.current && !refs.searchRef.current.contains(event.target)) 
    {
      setShowSearch(false); 
    }
    if (refs.lapsubmenuRef.current && !refs.lapsubmenuRef.current.contains(event.target))
    {
      setShowLaptopsubmenu(false);
    }
    if (refs.audiovideosubmenuRef.current && !refs.audiovideosubmenuRef.current.contains(event.target)) 
    {
      setShowAudiovideosubmenu(false);
    }
    if (refs.speakercategoryRef.current && !refs.speakercategoryRef.current.contains(event.target)) 
    {
        setShowSpeakerCategory(false);
    }
    if (refs.headphonecategoryRef.current && !refs.headphonecategoryRef.current.contains(event.target)) 
    {
          setShowHeadphoneCategory(false);
    }
    if (refs.tvcategoryRef.current && !refs.tvcategoryRef.current.contains(event.target)) 
    {
          setShowTVCategory(false);
    }
    if (refs.accessoriessubmenuRef.current && !refs.accessoriessubmenuRef.current.contains(event.target))
    {
      setShowAccessoriessubmenu(false);
    }
    if (refs.computeraccRef.current && !refs.computeraccRef.current.contains(event.target))
    {
      setShowComputeraccCategory(false);
    }
    if (refs.laptopaccRef.current && !refs.laptopaccRef.current.contains(event.target))
    {
      setShowLaptopaccCategory(false);
    }
    if (refs.mobileaccRef.current && !refs.mobileaccRef.current.contains(event.target))
    {
      setShowMobileaccCategory(false);
    }
    if (refs.hdmiaccRef.current && !refs.hdmiaccRef.current.contains(event.target))
      {
        setShowHdmiaccCategory(false);
      }
    if (refs.peripheralsubmenuRef.current && !refs.peripheralsubmenuRef.current.contains(event.target))
    {
      setShowPeripheralsubmenu(false);
    }
    if (refs.keyboardRef.current && !refs.keyboardRef.current.contains(event.target))
    {
      setShowKeyboardCategory(false);
    }
    if (refs.mouseRef.current && !refs.mouseRef.current.contains(event.target))
    {
      setShowMouseCategory(false);
    }
    if (refs.monitorRef.current && !refs.monitorRef.current.contains(event.target))
    {
      setShowMonitorCategory(false);
    }
    if (refs.supportRef.current && !refs.supportRef.current.contains(event.target))
    {
      setShowSupportsubmenu(false);
    }
  };

  // Add mousedown event listener to detect clicks outside specific elements
  // 'handleClickOutside' function is invoked to handle these clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  });
  return (
    <>
    <div className='header'>
        <nav>
            <img src={logo} alt='techhaven' className='logoimg' title='TechHaven'/>
            <ul>
                <li onClick={displayLaptopsubmenu}>Laptops <img src={down} alt='down' className='downicon'></img></li>
                <li onClick={displayAudioVideosubmenu}>Audio/Video<img src={down} alt='down' className='downicon'></img></li>
                <li onClick={displayAccessoriessubmenu}>Accessories <img src={down} alt='down' className='downicon'></img></li>
                <li onClick={displayPeripheralsubmenu}>Peripherals <img src={down} alt='down' className='downicon'></img></li>
                <li onClick={displaySmarthomesubmenu}>Smart Home & CCTV<img src={down} alt='down' className='downicon'></img></li>
                <li>Smart Watch</li>
                <li>< Link to='/shop' className='link'>Shop</Link></li>
                <li onClick={displaySupportsubmenu}>Support <img src={down} alt='down' className='downicon'></img></li>
                <img src={searchicon} alt='search' className='searchicon' onClick={displaySearch} />
            </ul>
        </nav>
    </div>
    <div ref={refs.searchRef} className={showSearch ? 'search active' : 'search'}>
        <img src={close} alt='close' className='closeicon' onClick={()=>{setShowSearch(false)}}/>
        <input type='text' placeholder='Search for...' />
    </div>
    <div ref={refs.lapsubmenuRef} className={showLaptopsubmenu ? 'laptopsubmenu active' : 'laptopsubmenu'}>
          <p onClick={()=>{navigate('/shop/laptops/Ultrabooks')}}>Ultrabooks</p>
          <p onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent('Gaming Laptops')}`)}}>Gaming Laptops</p>
          <p onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent('2-in-1 Laptops')}`)}}>2-in-1 Laptops</p>
          <p onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent('Business Laptops')}`)}}>Business Laptops</p>
          <p onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent('Workstation Laptops')}`)}}>Workstation Laptops</p>
          <p onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent('Chromebooks')}`)}}>Chromebooks</p>
          <p onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent('Everyday Laptops')}`)}}>Everyday Laptops</p>
          <p onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent('Rugged Laptops')}`)}}>Rugged Laptops</p>
    </div>
    <div ref={refs.audiovideosubmenuRef} className={showAudiovideosubmenu ? 'audiovideosubmenu active' : 'audiovideosubmenu'}>
          <p  onClick={displaySpeakerCategory} className={showSpeakerCategory ? 'clickedcategory' : ''}>Speakers <img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', left: '7.1rem', bottom: '0.1rem'}} onClick={displaySpeakerCategory}/></p>
          <p  onClick={displayHeadphoneCategory} className={showHeadphoneCategory ? 'clickedcategory' : ''}>Headphones & Earbuds <img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', left: '0.6rem', bottom: '0.1rem'}} onClick={displayHeadphoneCategory}/></p>
          <p  onClick={displayTVCategory} className={showTVCategory ? 'clickedcategory' : ''}>LED TVs <img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', left: '7.4rem', bottom: '0.1rem'}} onClick={displayTVCategory}/></p>
          <p onClick={()=>{navigate('/shop/led-projectors')}}>LED Projectors</p>
          <p onClick={()=>{navigate('/shop/microphones')}}>Microphones</p>
    </div>
    <div ref={refs.speakercategoryRef} className={showSpeakerCategory ? 'speakercategory active' : 'speakercategory'}>
        <h6>Speakers</h6>
        <p onClick={() =>{navigate(`/shop/speakers/${encodeURIComponent('Soundbars')}`)}}>Soundbars</p>
        <p onClick={()=>{navigate(`/shop/speakers/${encodeURIComponent('Wireless Speakers')}`)}}>Wireless Speakers</p>
        <p onClick={()=>{navigate(`/shop/speakers/${encodeURIComponent('Party Speakers')}`)}}>Party Speakers</p>
    </div>
    <div ref={refs.headphonecategoryRef} className={showHeadphoneCategory ? 'headphonecategory active' : 'headphonecategory'}>
      <h6>Headphones and Earbuds</h6>
      <p onClick={() =>{navigate(`/shop/headphones-earbuds/${encodeURIComponent('Wired Headphones')}`)}}>Wired Headphones</p>
      <p onClick={() =>{navigate(`/shop/headphones-earbuds/${encodeURIComponent('Wireless Headphones')}`)}}>Wireless Headphones</p>
      <p onClick={() =>{navigate(`/shop/headphones-earbuds/${encodeURIComponent('Wired Earbuds')}`)}}>Wired Earbuds</p>
      <p onClick={() =>{navigate(`/shop/headphones-earbuds/${encodeURIComponent('Wireless Earbuds')}`)}}>Wireless Earbuds</p>
    </div>
    <div ref={refs.tvcategoryRef} className={showTVCategory ? 'tvcategory active' : 'tvcategory'}>
      <h6>LED TVs</h6>
      <p onClick={() =>{navigate(`/shop/led-tvs/${encodeURIComponent('Smart LED TVs')}`)}}>Smart LED TVs</p>
      <p onClick={() =>{navigate(`/shop/led-tvs/${encodeURIComponent('Curved LED TVs')}`)}}>Curved LED TVs</p>
    </div>
    <div ref={refs.accessoriessubmenuRef} className={showAccessoriessubmenu ? 'accessoriessubmenu active' : 'accessoriessubmenu'}>
          <p onClick={displayComputeraccCategory} className={showComputeraccCategory ? 'clickedcategory' : ''} >Computer Accessories<img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', bottom: '0.1rem', left: '1rem'}} onClick={displayComputeraccCategory}/></p>
          <p onClick={displayLaptopaccCategory} className={showLaptopaccCategory ? 'clickedcategory' : ''}>Laptop Accessories<img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', bottom: '0.1rem', left: '2.3rem'}} onClick={displayLaptopaccCategory}/></p>
          <p onClick={displayMobileaccCategory} className={showMobileaccCategory ? 'clickedcategory' : ''}>Mobile Accessories<img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', bottom: '0.1rem', left: '2.3rem'}} onClick={displayMobileaccCategory}/></p>
          <p onClick={displayHdmiaccCategory} className={showHdmiaccCategory ? 'clickedcategory' : ''}>HDMI Accessories<img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', bottom: '0.1rem', left: '2.6rem'}} onClick={displayHdmiaccCategory}/></p>
          <p onClick={()=> navigate('/shop/barcode-scanners')}>Barcode Scanners</p>
    </div>
    <div ref={refs.computeraccRef} className={showComputeraccCategory ? 'computeracccategory active' : 'computeracccategory'}>
      <h6>Computer Accessories</h6>
      <p onClick={()=>navigate(`/shop/accessories/computer-accessories/${encodeURIComponent('Solid State Drives')}`)}>Solid State Drives</p>
      <p onClick={()=>navigate(`/shop/accessories/computer-accessories/${encodeURIComponent('Hard Disk Drives')}`)}>Hard Disk Drives</p>
      <p onClick={()=>navigate(`/shop/accessories/computer-accessories/${encodeURIComponent('CPU Fans')}`)}>CPU Fans</p>
      <p onClick={()=>navigate(`/shop/accessories/computer-accessories/${encodeURIComponent('Graphics Cards')}`)}>Graphics Cards</p>
      <p onClick={()=>navigate(`/shop/accessories/computer-accessories/${encodeURIComponent('Sound Cards')}`)}>Sound Cards</p>
      <p onClick={()=>navigate(`/shop/accessories/computer-accessories/${encodeURIComponent('USB Expansion Cards')}`)}>USB Expansion Cards</p>
      <p onClick={()=>navigate(`/shop/accessories/computer-accessories/${encodeURIComponent('Motherboards')}`)}>Motherboards</p>
    </div>
    <div ref={refs.laptopaccRef} className={showLaptopaccCategory ? 'laptopacccategory active' : 'laptopacccategory'}>
      <h6>Laptop Accessories</h6>
      <p onClick={()=>navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent('Laptop Stands')}`)}>Laptop Stands</p>
      <p onClick={()=>navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent('Cooling Pads')}`)}>Cooling Pads</p>
      <p onClick={()=>navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent('Sleeve Cases')}`)}>Sleeve Cases</p>
      <p onClick={()=>navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent('Docking Stations')}`)}>Docking Stations</p>
      <p onClick={()=>navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent('USB Hubs')}`)}>USB Hubs</p>
      <p onClick={()=>navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent('Power Banks')}`)}>Power Banks</p>
    </div>
    <div ref={refs.mobileaccRef} className={showMobileaccCategory ? 'mobileacccategory active' : 'mobileacccategory'}>
      <h6>Mobile Accessories</h6>
      <p onClick={()=>navigate(`/shop/accessories/mobile-accessories/${encodeURIComponent('Mobile Holders')}`)}>Mobile Holders</p>
      <p onClick={()=>navigate(`/shop/accessories/mobile-accessories/${encodeURIComponent('Charging Cables')}`)}>Charging Cables</p>
      <p onClick={()=>navigate(`/shop/accessories/mobile-accessories/${encodeURIComponent('Wallet Cases')}`)}>Wallet Cases</p>
      <p onClick={()=>navigate(`/shop/accessories/mobile-accessories/${encodeURIComponent('Memory Cards')}`)}>Memory Cards</p>
      <p onClick={()=>navigate(`/shop/accessories/mobile-accessories/${encodeURIComponent('Stylus Pens')}`)}>Stylus Pens</p>
    </div>
    <div ref={refs.hdmiaccRef} className={showHdmiaccCategory ? 'hdmiacccategory active' : 'hdmiacccategory'}>
      <h6>HDMI Accessories</h6>
      <p onClick={()=>navigate(`/shop/accessories/hdmi-accessories/${encodeURIComponent('HDMI Cables')}`)}>HDMI Cables</p>
      <p onClick={()=>navigate(`/shop/accessories/hdmi-accessories/${encodeURIComponent('HDMI Adapters')}`)}>HDMI Adapters</p>
    </div>
    <div ref={refs.peripheralsubmenuRef} className={showPeripheralsubmenu ? 'peripheralsubmenu active' : 'peripheralsubmenu'}>
          <p className={showKeyboardCategory ? 'clickedcategory' : ''}  onClick={displayKeyboardCategory}>Keyboards<img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', left: '7rem'}} onClick={displayKeyboardCategory}/></p>
          <p className={showMouseCategory ? 'clickedcategory' : ''}  onClick={displayMouseCategory}>Mouses<img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', left: '8.2rem'}} onClick={displayMouseCategory}/></p>
          <p className={showMonitorCategory ? 'clickedcategory' : ''} onClick={displayMonitorCategory}>Monitors<img src={sidearrow} alt='sidearrow' style={{width: '13px', height: '15px', position: 'relative', left: '7.6rem'}} onClick={displayMonitorCategory}/></p>
          <p onClick={()=>navigate('/shop/peripherals/combos')}>Keyboard Mouse Combo</p>
          <p>Webcams</p>
          <p>Printers</p>
          <p>Modems</p>
    </div>
    <div ref={refs.keyboardRef} className={showKeyboardCategory ? 'keyboardcategory active' : 'keyboardcategory'}>
      <h6>Keyboards</h6>
      <p onClick={()=>navigate(`/shop/peripherals/keyboard/${encodeURIComponent('Wired Keyboard')}`)}>Wired Keyboard</p>
      <p onClick={()=>navigate(`/shop/peripherals/keyboard/${encodeURIComponent('Wireless Keyboard')}`)}>Wireless Keyboard</p>
    </div>
    <div ref={refs.mouseRef} className={showMouseCategory ? 'mousecategory active' : 'mousecategory'}>
      <h6>Mouses</h6>
      <p onClick={()=>navigate(`/shop/peripherals/mouse/${encodeURIComponent('Wired Mouse')}`)}>Wired Mouse</p>
      <p onClick={()=>navigate(`/shop/peripherals/mouse/${encodeURIComponent('Wireless Mouse')}`)}>Wireless Mouse</p>
    </div>
    <div ref={refs.monitorRef} className={showMonitorCategory ? 'monitorcategory active' : 'monitorcategory'}>
      <h6>Monitors</h6>
      <p onClick={()=>navigate(`/shop/peripherals/monitor/${encodeURIComponent('Curved Monitor')}`)}>Curved Monitor</p>
      <p onClick={()=>navigate(`/shop/peripherals/monitor/${encodeURIComponent('Touchscreen Monitor')}`)}>Touchscreen Monitor</p>
      <p onClick={()=>navigate(`/shop/peripherals/monitor/${encodeURIComponent('Portable Monitor')}`)}>Portable Monitor</p>
    </div>
    <div ref={refs.smartHomeRef} className={showSmarthomesubmenu ? 'smarthomesubmenu active' : 'smarthomesubmenu'}>
          <p onClick={()=>navigate('/shop/home-theaters')}>Home Theater</p>
          <p>Smart Lighting</p>
          <p>CCTV Cameras</p>
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

export default Header;