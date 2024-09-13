import React from 'react';
import cloud_tick from '../../assets/cloud-tick.jpg';
import './OrderConfirmation.css';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { useOrderDetails } from '../Payment/Context/OrderDetails';
import { useShipping } from '../ShippingAddress/Context/ShippingContext';

function OrderConfirmation() {
  const { width, height } = useWindowSize(); 
  const { orderDetails } = useOrderDetails();
  const { shippingData } = useShipping();

  function formatCurrency(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  }

  const orderDate = new Date(orderDetails.order_date);
  const estimatedDeliveryDate = new Date(orderDate);
  estimatedDeliveryDate.setDate(orderDate.getDate() + 7);
  const formattedOrderDate = orderDate.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  const formattedEstimatedDeliveryDate = estimatedDeliveryDate.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  const shipping_address = `${shippingData.street_address},${shippingData.city},${shippingData.state},${shippingData.country}`;


  return (
    <>
       <Confetti
        width={width}
        height={height}
        numberOfPieces='100'
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}
        />
      <div className='order-confirmation-container'>
        <img src={cloud_tick} alt="cloud_tick" className='cloud-tick-img'/>
        <p className='thank-you-txt'>Thank You for Your Order!</p>
        <p className='confirmation-txt'>We’re preparing your order and will send you an email confirmation shortly.</p>
        <div className='order-summary-confirmation'>
           <p className='order-summary-heading'>Order Summary</p>
           <p>Total Items: {orderDetails.total_items}</p>
           <p>Total Price: {formatCurrency(orderDetails.overall_subtotal)}</p>
           <table className="order-items-table">
                    <thead>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </thead>
             {orderDetails.items && orderDetails.items.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.item_name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price_per_item}</td>
                    </tr>
             ))
              }
              </table><br></br>
              <p>Payment Method: Credit Card</p>
              <p>Total Amount Paid: {formatCurrency(orderDetails.overall_subtotal)}</p> 
              <p>Order Date: {formattedOrderDate}</p>
              <p>Estimated Delivery Date: {formattedEstimatedDeliveryDate}</p>
              <p>Shipping Address: {shipping_address}</p>
        </div>
      </div>
    </>
  )
}

export default OrderConfirmation