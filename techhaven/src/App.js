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
import LedtvPage from './components/LedTvs/LedtvPage/LedtvPage';
import LedtvInfoShop from './components/LedTvs/LedtvInfoShop/LedtvInfoShop';
import LedProjectorPage from './components/LedProjectors/LedProjectorPage/LedProjectorPage';
import LedProjectorInfo from './components/LedProjectors/LedProjectorInfo/LedProjectorInfo';
import MicrophonePage from './components/Microphones/MicrophonePage/MicrophonePage';
import MicrophoneInfo from './components/Microphones/MicrophoneInfo/MicrophoneInfo';
import ComputerAccessoriesPage from './components/ComputerAccessories/ComputerAccessoriesPage/ComputerAccessoriesPage';
import ComputerAccessoriesInfo from './components/ComputerAccessories/ComputerAccessoriesInfo/ComputerAccessoriesInfo';
import LaptopAccessoriesPage from './components/LaptopAccessories/LaptopAccessoriesPage/LaptopAccessoriesPage';
import LaptopAccessoriesInfo from './components/LaptopAccessories/LaptopAccessoriesInfo/LaptopAccessoriesInfo';

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
        <Route path='/shop/LedTvs' element={<LedtvPage/>}></Route>
        <Route path='/shop/LedTvs/:tv_type' element={<LedtvPage/>}></Route>
        <Route path='/shop/LedTvs/:tv_type/:tv_name' element={<LedtvInfoShop/>}></Route>
        <Route path='/shop/LedProjectors' element={<LedProjectorPage/>}></Route>
        <Route path='/shop/LedProjectors/:projector_name' element={<LedProjectorInfo/>}></Route>
        <Route path='/shop/Microphones' element={<MicrophonePage/>}></Route>
        <Route path='/shop/Microphones/:microphone_name' element={<MicrophoneInfo/>}></Route>
        <Route path='/shop/Accessories/ComputerAccessories' element={<ComputerAccessoriesPage/>}></Route>
        <Route path='/shop/Accessories/ComputerAccessories/:accessory_category' element={<ComputerAccessoriesPage/>}></Route>
        <Route path='/shop/Accessories/ComputerAccessories/:accessory_category/:computeraccessoriesname' element={<ComputerAccessoriesInfo/>}></Route>
        <Route path='/shop/Accessories/LaptopAccessories' element={<LaptopAccessoriesPage/>}></Route>
        <Route path='/shop/Accessories/LaptopAccessories/:accessory_category' element={<LaptopAccessoriesPage/>}></Route>
        <Route path='/shop/Accessories/LaptopAccessories/:accessory_category/:laptopaccessoriesname' element={<LaptopAccessoriesInfo/>}></Route>
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
