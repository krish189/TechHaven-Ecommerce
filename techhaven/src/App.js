import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/HomePage/Home';
import Shop from './components/Shop/ShopPage/Shop';
import Login from './components/Shop/Login/Login';
import Signup from './components/Shop/SignUp/Signup';
import { AuthProvider } from './components/Shop/Context/AuthContext';
import { FilterProvider } from './components/Laptops/Context/FilterContext';
import Laptoppage from './components/Laptops/LaptopPage/Laptoppage';
import LaptopInfoShop from './components/Laptops/LaptopInfoShop/LaptopInfoShop';
import { CartProvider } from './components/AddtoCartPage/Context/AddToCart';
import AddtoCart from './components/AddtoCartPage/AddtoCart/AddtoCart';
import Payment from './components/Payment/Payment';
import ShippingAddress from './components/ShippingAddress/ShippingAddress';
import { ShippingProvider } from './components/ShippingAddress/Context/ShippingContext';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import { OrderDetailsProvider } from './components/Payment/Context/OrderDetails';
import SpeakerPage from './components/Speakers/SpeakerPage/SpeakerPage';
import SpeakerInfoShop from './components/Speakers/SpeakerInfoShop/SpeakerInfoShop';
import HeadphoneEarbudPage from './components/HeadphoneEarbuds/HeadphoneEarbudPage/HeadphoneEarbudPage';
import HeadphoneEarbudInfo from './components/HeadphoneEarbuds/HeadphoneEarbudInfo/HeadphoneEarbudInfo';

function App() {
  
  return (
    <>
    <AuthProvider>
    <FilterProvider>
    <CartProvider>
    <ShippingProvider>
    <OrderDetailsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/shop/laptops' element={<Laptoppage/>}></Route>
        <Route path='/shop/laptops/:laptoptype' element={<Laptoppage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/cart' element={<AddtoCart/>}></Route>
        <Route path='/shop/laptops/:laptoptype/:laptopname' element={<LaptopInfoShop/>}></Route>
        <Route path='/shipping' element={<ShippingAddress/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/orderconfirmation' element={<OrderConfirmation/>}></Route>
        <Route path='/shop/speakers' element={<SpeakerPage/>}></Route>
        <Route path='/shop/speakers/:speakertype' element={<SpeakerPage/>}></Route>
        <Route path='/shop/speakers/:speakertype/:speakername' element={<SpeakerInfoShop/>}></Route>
        <Route path='/shop/HpEb' element={<HeadphoneEarbudPage/>}></Route>
        <Route path='/shop/HpEb/:hp_eb_type' element={<HeadphoneEarbudPage/>}></Route>
        <Route path='/shop/HpEb/:hp_eb_type/:hp_eb_name' element={<HeadphoneEarbudInfo/>}></Route>
      </Routes>
    </BrowserRouter>
    </OrderDetailsProvider>
    </ShippingProvider>
    </CartProvider>
    </FilterProvider>
    </AuthProvider>
    </>
  );
}

export default App;
