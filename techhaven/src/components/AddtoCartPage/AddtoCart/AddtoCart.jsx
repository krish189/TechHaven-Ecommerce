import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/AddToCart';
import Header from '../../Shop/Header/Header';
import Category from '../../Shop/Category/Category';
import Footer from '../../Home/Footer/Footer';
import '../AddtoCart/AddtoCart.css';
import emptycart from '../../../assets/emptycart.png';

function AddtoCart() {
  const { cart, cartCount } = useContext(CartContext);

  console.log(cart);
  return (
    <>
    <Header/>
    <Category/>
    {cartCount!=0 && 
    <div>
        <p className='carthead'>Cart ({cartCount})</p>
    </div>}
    {cartCount==0 && 
    <div>
    <p className='carthead'>Cart ({cartCount})</p>
    <img src={emptycart} alt='emptycart' className='emptycart'/>
    <p className='carttxt'>Your Techhaven Cart is Empty</p>
    <p className='carttxt'>Sign in to see your saved items.</p>
    </div>}
    <Footer/>
    </>
  )
}

export default AddtoCart