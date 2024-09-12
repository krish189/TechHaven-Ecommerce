import React from 'react';
import '../ShippingAddress/ShippingAddress.css';
import logo from '../../assets/logo_login.png';
import { useContext } from 'react';
import { CartContext } from '../AddtoCartPage/Context/AddToCart';
import { useAuth } from '../Shop/Context/AuthContext';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom';
import deleteicon from '../../assets/delete-icon.png';
import { useShipping } from './Context/ShippingContext'; 

function ShippingAddress() {
    const {cart, removeFromCart, overallSubtotal, totalItems} = useContext(CartContext);
    const {user} = useAuth();
    const [fullname, setFullName] = useState();
    const [email, setEmail] = useState();
    const [value, setPhone] = useState();
    const [streetaddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const { updateShippingData } = useShipping();

    const navigate = useNavigate();
    
    function formatCurrency(price) {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
      }).format(price);
    }
  
    const handleShippingSubmit = async (event) => {
      event.preventDefault();
      const shippingData = {
        fullname: user ? user.name : fullname,
        email: user ? user.email : email,
        phone_number: user ? user.phone_number : value,
        street_address: streetaddress,
        city: city,
        state: state,
        country: country,
        postal_code: postalcode
      };
      const response = await fetch('http://localhost:8000/api/shipping/shipping-info/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shippingData)
    });

    const data = await response.json();
    if (response.ok) {
        console.log("Shipping info saved successfully", data);
        navigate('/payment');
    } else {
        console.error("Failed to save shipping info", data);
    }
    updateShippingData(shippingData);
    }
  
    return (
      <>
      <div className='shipping-container'>
       <div className='shipping-info'>
          <img src={logo} alt='logo' className='brand-logo'/>
          <p className='shipping-head'>Shipping Address</p>
          {user ? 
            <form onSubmit={handleShippingSubmit}>
              <input type="text" placeholder='Full Name' value={user.name} disabled/><br></br>
              <input type="email" placeholder='Email' value={user.email} disabled/><br></br>
              <PhoneInput international
                  defaultCountry="IN" value={user.phone_number}  onChange={setPhone}
                  placeholder="Enter Phone Number" 
                  className='phonenumberinput' required/><br></br>
              <input type="text" placeholder='Enter Street Address' onChange={(e)=>{setStreetAddress(e.target.value)}} required/><br></br>
              <input type="text" placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}} required/><br></br>
              <input type="text" placeholder='Enter State' onChange={(e)=>{setState(e.target.value)}} required/><br></br>
              <input type="text" placeholder='Enter Country' onChange={(e)=>{setCountry(e.target.value)}} required/><br></br>
              <input type="text" placeholder='Enter Postal Code' onChange={(e)=>{setPostalCode(e.target.value)}} required/><br></br>
             <Button type='submit' >Continue to Payment</Button> <Link className='return-to-cart' to='/cart'>Return to Cart</Link>
            </form>:
            <form onSubmit={handleShippingSubmit}>
              <input type="text" placeholder='Full Name' onChange={(e)=>{setFullName(e.target.value)}} required/><br></br><br></br>
              <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required/><br></br><br></br>
              <PhoneInput international
                  defaultCountry="IN" value={value} onChange={setPhone} 
                  placeholder="Enter Phone Number" 
                  className='phonenumberinput' required/><br></br>
              <input type="text" placeholder='Enter Street Address' onChange={(e)=>{setStreetAddress(e.target.value)}} required/><br></br><br></br>
              <input type="text" placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}} required/><br></br><br></br>
              <input type="text" placeholder='Enter State' onChange={(e)=>{setState(e.target.value)}} required/><br></br><br></br>
              <input type="text" placeholder='Enter Country' onChange={(e)=>{setCountry(e.target.value)}} required/><br></br><br></br>
              <input type="text" placeholder='Enter Postal Code' onChange={(e)=>{setPostalCode(e.target.value)}} required/><br></br><br></br>
              <Button type='submit' >Continue to Payment</Button><Link className='return-to-cart' to='/cart'>Return to Cart</Link>
            </form>
          }
       </div>
       <div className='total-display'>
          <p className='order-summary-head'>Order Summary</p>
          {cart && cart.map((item,index)=>(
          <div key={index} className='order-summary-display'>
              <p className='order-summary-details'>x{item.quantity} <span className='order-summary-item-name'>{item.name.replace(/\s*\(.*?\)/, '')}</span> 
              </p>
              <p className='price-and-delete-icon'><span className='order-summary-item-price'>{formatCurrency(item.discount_price)}</span>
              <img src={deleteicon} alt='deleteicon' className='deleteicon' onClick={()=>removeFromCart(item.id)}/></p>
          </div>))}
          <hr></hr>
          <p><span className='total-display-head'>Total Items</span> <span className='total-display-value'>{totalItems}</span></p>
          <p><span className='total-display-head'>Subtotal</span> <span className='total-display-value'>{formatCurrency(overallSubtotal)}</span></p>
          <p><span className='total-display-head'>Shipping</span> <span className='total-display-value'>Free</span></p>
          <hr></hr>
          <p><span className='total-head'>Total</span> <span className='total-value'>{formatCurrency(overallSubtotal)}</span></p>
       </div>
      </div>
      </>
    )
}

export default ShippingAddress