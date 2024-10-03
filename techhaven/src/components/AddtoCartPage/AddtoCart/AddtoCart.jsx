import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/AddToCart';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import '../AddtoCart/AddtoCart.css';
import emptycart from '../../../assets/emptycart.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gift from '../../../assets/gift.png';
import Card from 'react-bootstrap/Card';
import success from '../../../assets/success.jpeg';

function AddtoCart() {
  const { cart, cartCount, updateQuantity, removeFromCart, overallSubtotal, totalItems} = useContext(CartContext);
  const navigate = useNavigate();

  function formatCurrency(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  }

  return (
    <>
    <Header/>
    <Category/>
    {cartCount!==0 &&
    <div className='cartcontent'> 
    <Container className='cartdisplay'>
        <Row>
        <Col>
        <p className='carthead_a'>Shopping Cart ({cartCount})</p><br></br><br></br>
        <hr className='cartline'></hr>
        {cart && cart.map((item,index)=>(
          <div key={index}>
          <div className='cartitems'>
            <div>
            <img src={`http://localhost:8000${item.images[0]}`} alt='productimage' className='productimage'/>
            </div>
            <div>
            <p className='productname' onClick={()=>{navigate(`/shop/laptops/${encodeURIComponent(item.laptop_type)}/${encodeURIComponent(item.name)}`)}}>{item.name}</p>
            <p className='productprice'>{formatCurrency(item.discount_price)}</p>
            <p className='producteligible'>Eligible for Free Delivery</p>
            <p className='gifteligible'><img src={gift} alt='gift' style={{width: '14px', height: '14px'}}/>&nbsp;Gift Eligible</p>
            {item.laptop_type ? <><p className='productinfo'><span className='valuehead'>Color:</span> {item.color}</p></>
            : <><p className='productinfo'><span className='valuehead'>Color:</span> {item.color}</p><br></br></>}
            {item.laptop_type && item.ram && item.storage && <p className='productinfo' style={{position: 'relative', bottom: '2rem'}}><span className='valuehead'>Size:</span> {item.ram}+{item.storage}</p>}
            {item.laptop_type && item.cpu && <p className='productinfo' style={{position: 'relative', bottom: '3rem'}}><span className='valuehead'>CPU:</span> {item.cpu}</p>}
            {item.laptop_type && item.display && <p className='productinfo' style={{position: 'relative', bottom: '4rem'}}><span className='valuehead'>Display:</span> {item.display}</p>}
            <div className='modifydata'>
            <div className='quantity'>
              <Button variant='light' onClick={()=>updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</Button>
              <span className='qty'>{item.quantity}</span>
              <Button  variant='light' onClick={()=>updateQuantity(item.id, 1)} disabled={item.quantity >= item.stock} className='increment'>+</Button>
            </div>
            <p className='delete' onClick={()=>removeFromCart(item.id)}>Delete</p>
            </div>
            </div>
            </div>
            <hr className='alt-cartline'></hr><br></br>
            {index === cart.length - 1 && 
             <div className='subtotal'>
              <p><span className='subtotalhead'>Subtotal ({item.quantity} items):</span> <span className='subtotalprice'>{formatCurrency(overallSubtotal)}</span></p>
             </div>}
          </div>
        ))}
        </Col>
        </Row>
    </Container>
    <Container className='proceedtobuy-container'>
      <Row>
        <Col>
         <Card className='proceedtobuy'>
          <div>
            <p>
              <img src={success} alt="success" className='success'/>
              <span className='free-delivery'>Your order is eligible for FREE Delivery.</span>
            </p>
            <p>
              <span className='subtotal-head'>Subtotal ({totalItems} items):</span>
              <span className='subtotal-value'>{formatCurrency(overallSubtotal)}</span>
            </p>
            <Button className='proceedtobuy-btn' onClick={()=>{navigate('/shipping')}}>Proceed to Buy</Button>
          </div>
        </Card>
        </Col>
      </Row>
    </Container>
    </div>
    }
    {cartCount===0 && 
    <div className='cartempty'>
    <p className='carthead_b'>Shopping Cart ({cartCount})</p>
    <img src={emptycart} alt='emptycart' className='emptycart'/>
    <p className='carttxt_a'>Your Techhaven Cart is Empty</p>
    <p className='carttxt_b'>Sign in to see your saved items.</p>
    <Button className='signin' onClick={()=>{navigate('/login')}}>Sign in</Button><br></br><br></br><br></br>
    <hr className='lineaftersignin'></hr>
    <p className='carttxt_t'>Time to start shopping!</p>
    <Button className='shopbtn' onClick={()=>{navigate('/shop')}}>Shop Electronics</Button>
    </div>}
    <Footer/>
    </>
  )
}

export default AddtoCart