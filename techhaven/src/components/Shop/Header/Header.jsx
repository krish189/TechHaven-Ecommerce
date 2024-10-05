import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import searchicon from '../../../assets/searchicon.png';
import cart from '../../../assets/cart.png';
import close from '../../../assets/close.png';
import '../Header/Header.css';
import {Link, useNavigate} from 'react-router-dom';
import { useState, useRef, useEffect} from 'react';
import { useAuth } from '../Context/AuthContext'; 
import down from '../../../assets/downicon.png';
import profile from '../../../assets/profile.png';
import logouticon from '../../../assets/logout.png';
import profiledark from '../../../assets/profileicondark.jpg';
import { CartContext } from '../../AddtoCartPage/Context/AddToCart';

function Header() {
  const [showShopSearch, setShowShopSearch] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productData, setProductData] = useState([]);

  const { user, logout } = useAuth();
  
  const { cartCount } = useContext(CartContext);

  const navigate = useNavigate();

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

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProductClick = (product) =>{
    if (product.laptop_type)
    {
      navigate(`/shop/laptops/${product.laptop_type}/${encodeURIComponent(product.name)}`);
    }
    else if (product.speaker_type)
    {
      navigate(`/shop/speakers/${product.speaker_type}/${encodeURIComponent(product.name)}`);
    }
    else if (product.headphone_earbud_type)
    {
      navigate(`/shop/headphones-earbuds/${product.headphone_earbud_type}/${encodeURIComponent(product.name)}`);
    }
    else if (product.tv_type)
    {
      navigate(`/shop/led-tvs/${product.tv_type}/${encodeURIComponent(product.name)}`);
    }
    else if (product.projector_type)
    {
      navigate(`/shop/led-projectors/${encodeURIComponent(product.name)}`);
    }
    else if (product.microphone_type)
    {
      navigate(`/shop/microphones/${encodeURIComponent(product.name)}`);
    }
    else if (product.accessory_category==='Solid State Drives' || product.accessory_category==='Hard Disk Drives' || product.accessory_category==='CPU Fans'
      || product.accessory_category==='Graphics Cards' || product.accessory_category==='Sound Cards' || product.accessory_category==='USB Expansion Cards' 
      || product.accessory_category==='Motherboards')
    {
      navigate(`/shop/accessories/computer-accessories/${encodeURIComponent(product.accessory_category)}/${encodeURIComponent(product.name)}`);
    }
    else if (product.accessory_category==='Power Banks' || product.accessory_category==='USB Hubs' || product.accessory_category==='Docking Stations'
      || product.accessory_category==='Sleeve Cases' || product.accessory_category==='Cooling Pads' || product.accessory_category==='Laptop Stands')
    {
      navigate(`/shop/accessories/laptop-accessories/${encodeURIComponent(product.accessory_category)}/${encodeURIComponent(product.name)}`);
    }
    else if(product.accessory_category==='Stylus Pens' || product.accessory_category==='Memory Cards' || product.accessory_category==='Wallet Cases'
      || product.accessory_category==='Charging Cables' || product.accessory_category==='Mobile Holders')
    {
      navigate(`/shop/accessories/mobile-accessories/${encodeURIComponent(product.accessory_category)}/${encodeURIComponent(product.name)}`);
    }
    else if (product.accessory_category==='HDMI Adapters' || product.accessory_category==='HDMI Cables')
    {
      navigate(`/shop/accessories/hdmi-accessories/${encodeURIComponent(product.accessory_category)}/${encodeURIComponent(product.name)}`);
    }
    else if (product.scanner_type)
    {
      navigate(`/shop/barcode-scanners/${encodeURIComponent(product.name)}`);
    }
    else if (product.keyboard_type && product.mouse_type)
    {
      navigate(`/shop/peripherals/combos/${encodeURIComponent(product.name)}`);
    }
    else if (product.keyboard_type)
    {
      navigate(`/shop/peripherals/keyboard/${encodeURIComponent(product.keyboard_type)}/${encodeURIComponent(product.name)}`);
    }
    else if (product.mouse_type)
    {
      navigate(`/shop/peripherals/mouse/${encodeURIComponent(product.mouse_type)}/${encodeURIComponent(product.name)}`);
    }
    else if (product.monitor_type)
    {
      navigate(`/shop/peripherals/monitor/${encodeURIComponent(product.monitor_type)}/${encodeURIComponent(product.name)}`);
    }
    else if (product.product_category==='Home Theater')
    {
      navigate(`/shop/home-theaters/${encodeURIComponent(product.name)}`);
    }
    else if (product.product_category==='Smart Lighting')
    {
      navigate(`/shop/smart-lighting/${encodeURIComponent(product.name)}`);
    }
    else if (product.product_category==='CCTV Camera')
    {
      navigate(`/shop/cctv/${encodeURIComponent(product.name)}`);
    }
    else if (product.product_category==='Smart Watch')
    {
      navigate(`/shop/smart-watch/${encodeURIComponent(product.name)}`);
    }
  }
  
  useEffect(() => {
    const fetchProducts = async () => {
      if (searchQuery.trim().length > 0) {
        try {
          const response = await fetch('http://localhost:8000/api/product/search/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: searchQuery }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProductData(data.products);
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      }
    };

      fetchProducts();
  }, [searchQuery]);

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
        <Link className='link' to='/cart'><img src={cart} alt='cart' className='shopcartimg'/><span  className='cartcount'>{cartCount}</span></Link>
       </nav>
    </div>
    <div ref={refs.shopsearchRef} className={showShopSearch ? 'shopsearch active' : 'shopsearch'}>
        <img src={close} alt='close' className='shopcloseicon' onClick={()=>{setShowShopSearch(false)}}/>
        <input type='text' placeholder='What are you looking for?' value={searchQuery} onChange={handleSearchQuery}/>
        {searchQuery !=='' ? <>{productData.length > 0 && (
        <div className="search-results">
          {productData.map((product, index) => (
            <div key={index} className="product-item" onClick={() => handleProductClick(product)}>
              <div className='productimg'>
              <img src={`http://localhost:8000${product.images[0]}`} alt='product' className='searchproductimg'/>
              </div>
              <div className='details'>
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>Price: ₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        )}</>:<>
        <div className='shopsearchlistings'>
        <h4>SHOP</h4>
        <Link className='shopsearchlistingslink' to='/shop/laptops'><p>Laptops</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/speakers'><p>Speakers</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/headphones-earbuds'><p>Headphones & Earbuds</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/led-tvs'><p>LED TV</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/led-projectors'><p>Projectors</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/microphones'><p>Microphones</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/accessories/computer-accessories'><p>Computer Accessories</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/accessories/laptop-accessories'><p>Laptop Accessories</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/accessories/mobile-accessories'><p>Mobile Accessories</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/accessories/hdmi-accessories'><p>HDMI Accessories</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/barcode-scanners'><p>Barcode Scanners</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/peripherals/keyboard'><p>Keyboard</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/peripherals/mouse'><p>Mouse</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/peripherals/monitor'><p>Monitor</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/peripherals/combos'><p>Keyboard Mouse Combo</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/home-theaters'><p>Home Theaters</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/smart-lighting'><p>Smart Lighting</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/cctv'><p>CCTV Camera</p></Link>
        <Link className='shopsearchlistingslink' to='/shop/smart-watch'><p>Smart Watch</p></Link>
      </div></>}
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