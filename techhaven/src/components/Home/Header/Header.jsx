import React from 'react';
import logo from '../../../assets/logo.png';
import down from '../../../assets/downicon.png';
import searchicon from '../../../assets/searchicon.png';
import close from '../../../assets/close.png';
import chevronsubmenu from '../../../assets/chevron-submenu.png';
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
  const [showGamingCategory, setShowGamingCategory] = useState(false);
  const [showPowerCategory, setShowPowerCategory] = useState(false);

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
    gamingRef : useRef(null),
    powerRef : useRef(null),
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
    setShowGamingCategory(false);
    setShowPowerCategory(false);
  };
  const displayMouseCategory = () => {
    setShowMouseCategory(!showMouseCategory);
    setShowKeyboardCategory(false);
    setShowMonitorCategory(false);
    setShowGamingCategory(false);
    setShowPowerCategory(false);
  };
  const displayMonitorCategory = () => {
    setShowMonitorCategory(!showMonitorCategory);
    setShowKeyboardCategory(false);
    setShowMouseCategory(false);
    setShowGamingCategory(false);
    setShowPowerCategory(false);
  };
  const displayGamingCategory = () => {
    setShowGamingCategory(!showGamingCategory);
    setShowKeyboardCategory(false);
    setShowMouseCategory(false);
    setShowMonitorCategory(false);
    setShowPowerCategory(false);
  };
  const displayPowerCategory = () => {
    setShowPowerCategory(!showPowerCategory);
    setShowKeyboardCategory(false);
    setShowMouseCategory(false);
    setShowMonitorCategory(false);
    setShowGamingCategory(false);
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
    if (refs.peripheralsubmenuRef.current && !refs.peripheralsubmenuRef.current.contains(event.target))
      {
        setShowPeripheralsubmenu(false);
        setShowKeyboardCategory(false);
        setShowMouseCategory(false);
        setShowMonitorCategory(false);
        setShowGamingCategory(false);
        setShowPowerCategory(false);
      }
      if (refs.smartHomeRef.current && !refs.smartHomeRef.current.contains(event.target))
      {
         setShowSmarthomesubmenu(false);
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
          <p className='no-text-decor-hover' onClick={displaySpeakerCategory}>Speakers <img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '6.8rem'}} onClick={displaySpeakerCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayHeadphoneCategory}>Headphones & Earbuds <img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '0.3rem'}} onClick={displayHeadphoneCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayTVCategory}>LED TV <img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '7.6rem'}} onClick={displayTVCategory}/></p>
          <p onClick={()=>{navigate('/shop/LedProjectors')}}>LED Projectors</p>
          <p onClick={()=>{navigate('/shop/Microphones')}}>Microphones</p>
    </div>
    <div ref={refs.speakercategoryRef} className={showSpeakerCategory ? 'speakercategory active' : 'speakercategory'}>
        <p onClick={() =>{navigate(`/shop/speakers/${encodeURIComponent('Soundbars')}`)}}>Soundbars</p>
        <p onClick={()=>{navigate(`/shop/speakers/${encodeURIComponent('Wireless Speakers')}`)}}>Wireless Speakers</p>
        <p onClick={()=>{navigate(`/shop/speakers/${encodeURIComponent('Party Speakers')}`)}}>Party Speakers</p>
    </div>
    <div ref={refs.headphonecategoryRef} className={showHeadphoneCategory ? 'headphonecategory active' : 'headphonecategory'}>
      <p onClick={() =>{navigate(`/shop/HpEb/${encodeURIComponent('Wired Headphones')}`)}}>Wired Headphones</p>
      <p onClick={() =>{navigate(`/shop/HpEb/${encodeURIComponent('Wireless Headphones')}`)}}>Wireless Headphones</p>
      <p onClick={() =>{navigate(`/shop/HpEb/${encodeURIComponent('Wired Earbuds')}`)}}>Wired Earbuds</p>
      <p onClick={() =>{navigate(`/shop/HpEb/${encodeURIComponent('Wireless Earbuds')}`)}}>Wireless Earbuds</p>
    </div>
    <div ref={refs.tvcategoryRef} className={showTVCategory ? 'tvcategory active' : 'tvcategory'}>
      <p onClick={() =>{navigate(`/shop/LedTvs/${encodeURIComponent('Smart LED TVs')}`)}}>Smart LED TVs</p>
      <p onClick={() =>{navigate(`/shop/LedTvs/${encodeURIComponent('Curved LED TVs')}`)}}>Curved LED TVs</p>
    </div>
    <div ref={refs.accessoriessubmenuRef} className={showAccessoriessubmenu ? 'accessoriessubmenu active' : 'accessoriessubmenu'}>
          <p className='no-text-decor-hover' onClick={displayComputeraccCategory} >Computer Accessories<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '3.2rem'}} onClick={displayComputeraccCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayLaptopaccCategory} >Laptop Accessories<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '4.6rem'}} onClick={displayLaptopaccCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayMobileaccCategory} >Mobile & Tablet Accessories<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '0.6rem'}} onClick={displayMobileaccCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayHdmiaccCategory}>HDMI Accessories<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '5.1rem'}} onClick={displayHdmiaccCategory}/></p>
          <p>Power Banks</p>
          <p>Power Strip</p>
          <p>Barcode Scanner</p>
          <p>LED Light</p>
          <p>DVI Cables</p>
          <p>Trimmers</p>
          <p>Projector Screens</p>
    </div>
    <div ref={refs.computeraccRef} className={showComputeraccCategory ? 'computeracccategory active' : 'computeracccategory'}>
      <p onClick={()=>navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent('Solid State Drives')}`)}>Solid State Drives</p>
      <p onClick={()=>navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent('Hard Disk Drives')}`)}>Hard Disk Drives</p>
      <p onClick={()=>navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent('CPU Fans')}`)}>CPU Fans</p>
      <p onClick={()=>navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent('Graphics Cards')}`)}>Graphics Cards</p>
      <p onClick={()=>navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent('Sound Cards')}`)}>Sound Cards</p>
      <p onClick={()=>navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent('USB Expansion Cards')}`)}>USB Expansion Cards</p>
      <p onClick={()=>navigate(`/shop/Accessories/ComputerAccessories/${encodeURIComponent('Motherboards')}`)}>Motherboards</p>
    </div>
    <div ref={refs.laptopaccRef} className={showLaptopaccCategory ? 'laptopacccategory active' : 'laptopacccategory'}>
      <p onClick={()=>navigate(`/shop/Accessories/LaptopAccessories/${encodeURIComponent('Laptop Stands')}`)}>Laptop Stands</p>
      <p onClick={()=>navigate(`/shop/Accessories/LaptopAccessories/${encodeURIComponent('Cooling Pads')}`)}>Cooling Pads</p>
      <p onClick={()=>navigate(`/shop/Accessories/LaptopAccessories/${encodeURIComponent('Sleeve Cases')}`)}>Sleeve Cases</p>
      <p onClick={()=>navigate(`/shop/Accessories/LaptopAccessories/${encodeURIComponent('Docking Stations')}`)}>Docking Stations</p>
      <p onClick={()=>navigate(`/shop/Accessories/LaptopAccessories/${encodeURIComponent('USB Hubs')}`)}>USB Hubs</p>
      <p onClick={()=>navigate(`/shop/Accessories/LaptopAccessories/${encodeURIComponent('Power Banks')}`)}>Power Banks</p>
    </div>
    <div ref={refs.mobileaccRef} className={showMobileaccCategory ? 'mobileacccategory active' : 'mobileacccategory'}>
      <p>Mobile Cases</p>
      <p>Mobile Chargers</p>
      <p>Mobile Holders</p>
      <p>Tablet Covers/Cases</p>
      <p>Tablet Stands</p>
      <p>Stylus Pens</p>
    </div>
    <div ref={refs.hdmiaccRef} className={showHdmiaccCategory ? 'hdmiacccategory active' : 'hdmiacccategory'}>
      <p>HDMI Cable</p>
      <p>HDMI Adapters</p>
    </div>
    <div ref={refs.peripheralsubmenuRef} className={showPeripheralsubmenu ? 'peripheralsubmenu active' : 'peripheralsubmenu'}>
          <p className='no-text-decor-hover' onClick={displayKeyboardCategory}>Keyboard<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '7rem'}} onClick={displayKeyboardCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayMouseCategory}>Mouse<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '8.2rem'}} onClick={displayMouseCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayMonitorCategory}>Monitor<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '7.7rem'}} onClick={displayMonitorCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayGamingCategory}>Gaming<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '7.8rem'}} onClick={displayGamingCategory}/></p>
          <p className='no-text-decor-hover' onClick={displayPowerCategory}>Power Solution<img src={chevronsubmenu} alt='chevronsubmenu' style={{width: '20px', height: '20px', position: 'relative', left: '4.6rem'}} onClick={displayPowerCategory}/></p>
          <p>Keyboard & Mouse Combo</p>
          <p>Webcams</p>
          <p>Printers</p>
          <p>Modems</p>
          <p>Network Adapters</p>
          <p>Routers</p>
    </div>
    <div ref={refs.keyboardRef} className={showKeyboardCategory ? 'keyboardcategory active' : 'keyboardcategory'}>
      <p>Mechanical Keyboard</p>
      <p>Wireless Keyboard</p>
      <p>Multimedia Keyboard</p>
      <p>Standard Keyboard</p>
    </div>
    <div ref={refs.mouseRef} className={showMouseCategory ? 'mousecategory active' : 'mousecategory'}>
      <p>Wired Mouse</p>
      <p>Wireless Mouse</p>
    </div>
    <div ref={refs.monitorRef} className={showMonitorCategory ? 'monitorcategory active' : 'monitorcategory'}>
      <p>Curved Monitors</p>
      <p>Touchscreen Monitors</p>
      <p>Ultrawide Monitors</p>
      <p>Portable Monitors</p>
      <p>4K/8K Monitors</p>
      <p>HDR Monitors</p>
    </div>
    <div ref={refs.gamingRef} className={showGamingCategory ? 'gamingcategory active' : 'gamingcategory'}>
      <p>Gaming Keyboard</p>
      <p>Gaming Mouse</p>
      <p>Gaming Monitors</p>
      <p>Gaming Controllers</p>
      <p>Gaming Chairs</p>
      <p>Gaming Mousepads</p>
      <p>Gaming Headsets</p>
      <p>Gaming Mic</p>
    </div>
    <div ref={refs.powerRef} className={showPowerCategory ? 'powercategory active' : 'powercategory'}>
      <p>Battery Backup UPS</p>
      <p>Line-Interactive UPS</p>
      <p>Battery</p>
      <p>Power Adapters & Chargers</p>
      <p>Portable Generators</p>
    </div>
    <div ref={refs.smartHomeRef} className={showSmarthomesubmenu ? 'smarthomesubmenu active' : 'smarthomesubmenu'}>
          <p>Smart Lighting</p>
          <p>Smart Speakers</p>
          <p>Smart Plugs</p>
          <p>CCTV Cameras</p>
          <p>CCTV Accessories</p>
          <p>Home Theater</p>
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