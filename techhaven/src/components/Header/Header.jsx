import React from 'react'
import logo from '../../assets/logo.png'
import down from '../../assets/downicon.png'
import searchicon from '../../assets/searchicon.png'
import '../Header/Header.css'

function Header() {
  return (
    <div className='header'>
        <nav>
            <img src={logo} alt='techhaven' className='logoimg' title='TechHaven'/>
            <ul>
                <li>Laptops <img src={down} alt='down' className='downicon'></img></li>
                <li>Smartphones <img src={down} alt='down' className='downicon'></img></li>
                <li>Cameras <img src={down} alt='down' className='downicon'></img></li>
                <li>Peripherals <img src={down} alt='down' className='downicon'></img></li>
                <li>Home Appliances <img src={down} alt='down' className='downicon'></img></li>
                <li>Smartwatches</li>
                <li>Shop</li>
                <li>Support <img src={down} alt='down' className='downicon'></img></li>
                <img src={searchicon} alt='search' className='searchicon'/>
            </ul>
        </nav>
    </div>
  )
}

export default Header;