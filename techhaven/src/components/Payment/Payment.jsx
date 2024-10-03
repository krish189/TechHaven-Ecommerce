import React from 'react';
import { useState } from 'react';
import './Payment.css';
import logo from '../../assets/logo_login.png';
import { useContext } from 'react';
import { CartContext } from '../AddtoCartPage/Context/AddToCart';
import deleteicon from '../../assets/delete-icon.png';
import mastercard from '../../assets/mastercard.png';
import Button from 'react-bootstrap/Button';
import { useShipping } from '../ShippingAddress/Context/ShippingContext';
import { useNavigate } from 'react-router-dom';
import { useOrderDetails } from './Context/OrderDetails';

function Payment() {
  const {cart, removeFromCart, overallSubtotal, totalItems} = useContext(CartContext);
  const {shippingData} = useShipping();
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const {updateOrderDetails} = useOrderDetails();

  const navigate = useNavigate();
  
  function formatCurrency(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const orderDetails = {
        username: shippingData.fullname,
        total_items: totalItems,
        overall_subtotal: overallSubtotal,
        card_holder_name: cardHolderName,
        card_last_4_digits: cardNumber.slice(-4),
        payment_status: 'Completed',
        items: cart.map(item => ({
            item_name: item.name.replace(/\s*\(.*?\)/, ''),
            quantity: item.quantity,
            price_per_item: item.discount_price,
            product_category: item.product_category
        }))
    };
    try {
        const response = await fetch('http://localhost:8000/api/order_details/orders/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        });
        
        const data = await response.json();
        updateOrderDetails(data);
        navigate('/orderconfirmation');
    } catch (error) {
        console.error('Error creating order:', error.message);
    }
};

  
  return (
    <>
    <div className='payment-container'>
     <div className='payment-info'>
        <img src={logo} alt='logo' className='brand-logo'/>
        <p className='payment-head'>Payment Information</p>
        <form onSubmit={handleSubmit}>
           <label htmlFor="name" className='name-label'>Name on Card</label>
           <input type='text' id='name' placeholder='Name on Card' onChange={(e) => setCardHolderName(e.target.value)} className='name-input'/><br></br><br></br>
           <label htmlFor="cardnumber" className='cardnumber-label'>Card Number</label><br></br>
           <input type='text' id='cardnumber' placeholder='XXXX XXXX XXXX XXXX' onChange={(e) => setCardNumber(e.target.value)} className='cardnumber-input'/><img src={mastercard} alt='mastercard' className='mastercard-icon'/>
           <br></br><br></br>
           <div className='expiration-cvv-label'>
           <label htmlFor="expiration" className='expiration-label'>Expiration</label><br></br>
           <label htmlFor="cvv" className='cvv-label'>CVV</label><br></br>
           </div>
           <input type="text" id='expiration' placeholder='MM/YY' className='expiration-input'/>
           <input type="text" id='cvv' placeholder='CVV' className='cvv-input'/><br></br><br></br>
           <Button type='submit'>Confirm Payment {formatCurrency(overallSubtotal)}</Button>
        </form>
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


export default Payment