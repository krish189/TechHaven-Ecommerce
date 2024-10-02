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
import MobileAccessoriesPage from  './components/MobileAccessories/MobileAccessoriesPage/MobileAccessoriesPage';
import BarcodescannerPage from './components/BarcodeScanner/BarcodescannerPage/BarcodescannerPage';
import BarcodescannerInfo from './components/BarcodeScanner/BarcodescannerInfo/BarcodescannerInfo';
import MobileAccessoriesInfo from './components/MobileAccessories/MobileAccessoriesInfo/MobileAccessoriesInfo';
import HdmiAccessoriesPage from './components/HdmiAccessories/HdmiAccessoriesPage/HdmiAccessoriesPage';
import HdmiAccessoriesInfo from './components/HdmiAccessories/HdmiAccessoriesInfo/HdmiAccessoriesInfo';
import KeyboardPage from './components/Keyboard/KeyboardPage/KeyboardPage';
import MousePage from './components/Mouse/MousePage/MousePage';
import MouseInfo from './components/Mouse/MouseInfo/MouseInfo';
import KeyboardInfo from './components/Keyboard/KeyboardInfo/KeyboardInfo';
import MonitorPage from './components/Monitor/MonitorPage/MonitorPage';
import MonitorInfo from './components/Monitor/MonitorInfo/MonitorInfo';
import KeyboardMousePage from './components/KeyboardMouseCombo/KeyboardMousePage/KeyboardMousePage';
import KeyboardMouseInfo from './components/KeyboardMouseCombo/KeyboardMouseInfo/KeyboardMouseInfo';
import HomeTheaterPage from './components/HomeTheater/HomeTheaterPage/HomeTheaterPage';
import HomeTheaterInfo from './components/HomeTheater/HomeTheaterInfo/HomeTheaterInfo';
import SmartLightingPage from './components/SmartLighting/SmartLightingPage/SmartLightingPage';
import SmartLightingInfo from './components/SmartLighting/SmartLightingInfo/SmartLightingInfo';
import CCTVPage from './components/CCTV/CCTVPage/CCTVPage';
import CCTVInfo from './components/CCTV/CCTVInfo/CCTVInfo';
import SmartWatchPage from './components/SmartWatch/SmartWatchPage/SmartWatchPage';
import SmartWatchInfo from './components/SmartWatch/SmartWatchInfo/SmartWatchInfo';
import ContactUs from './components/ContactUsPage/ContactUs';
import WarrantyRegistration from './components/WarrantyRegistration/WarrantyRegistration';

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
        <Route path='/shop/headphones-earbuds' element={<HeadphoneEarbudPage/>}></Route>
        <Route path='/shop/headphones-earbuds/:hp_eb_type' element={<HeadphoneEarbudPage/>}></Route>
        <Route path='/shop/headphones-earbuds/:hp_eb_type/:hp_eb_name' element={<HeadphoneEarbudInfo/>}></Route>
        <Route path='/shop/led-tvs' element={<LedtvPage/>}></Route>
        <Route path='/shop/led-tvs/:tv_type' element={<LedtvPage/>}></Route>
        <Route path='/shop/led-tvs/:tv_type/:tv_name' element={<LedtvInfoShop/>}></Route>
        <Route path='/shop/led-projectors' element={<LedProjectorPage/>}></Route>
        <Route path='/shop/led-projectors/:projector_name' element={<LedProjectorInfo/>}></Route>
        <Route path='/shop/microphones' element={<MicrophonePage/>}></Route>
        <Route path='/shop/microphones/:microphone_name' element={<MicrophoneInfo/>}></Route>
        <Route path='/shop/accessories/computer-accessories' element={<ComputerAccessoriesPage/>}></Route>
        <Route path='/shop/accessories/computer-accessories/:accessory_category' element={<ComputerAccessoriesPage/>}></Route>
        <Route path='/shop/accessories/computer-accessories/:accessory_category/:computeraccessoriesname' element={<ComputerAccessoriesInfo/>}></Route>
        <Route path='/shop/accessories/laptop-accessories' element={<LaptopAccessoriesPage/>}></Route>
        <Route path='/shop/accessories/laptop-accessories/:accessory_category' element={<LaptopAccessoriesPage/>}></Route>
        <Route path='/shop/accessories/laptop-accessories/:accessory_category/:laptopaccessoriesname' element={<LaptopAccessoriesInfo/>}></Route>
        <Route path='/shop/accessories/mobile-accessories' element={<MobileAccessoriesPage/>}></Route>
        <Route path='/shop/accessories/mobile-accessories/:accessory_category' element={<MobileAccessoriesPage/>}></Route>
        <Route path='/shop/accessories/mobile-accessories/:accessory_category/:mobileaccessoriesname' element={<MobileAccessoriesInfo/>}></Route>
        <Route path='/shop/accessories/hdmi-accessories' element={<HdmiAccessoriesPage/>}></Route>
        <Route path='/shop/accessories/hdmi-accessories/:accessory_category' element={<HdmiAccessoriesPage/>}></Route>
        <Route path='/shop/accessories/hdmi-accessories/:accessory_category/:hdmiaccessoriesname' element={<HdmiAccessoriesInfo/>}></Route>
        <Route path='/shop/barcode-scanners' element={<BarcodescannerPage/>}></Route>
        <Route path='/shop/barcode-scanners/:bs_name' element={<BarcodescannerInfo/>}></Route>
        <Route path='/shop/peripherals/keyboard' element={<KeyboardPage/>}></Route>
        <Route path='/shop/peripherals/keyboard/:keyboard_type' element={<KeyboardPage/>}></Route>
        <Route path='/shop/peripherals/keyboard/:keyboard_type/:keyboardname' element={<KeyboardInfo/>}></Route>
        <Route path='/shop/peripherals/mouse' element={<MousePage/>}></Route>
        <Route path='/shop/peripherals/mouse/:mouse_type' element={<MousePage/>}></Route>
        <Route path='/shop/peripherals/mouse/:mouse_type/:mousename' element={<MouseInfo/>}></Route>
        <Route path='/shop/peripherals/monitor' element={<MonitorPage/>}></Route>
        <Route path='/shop/peripherals/monitor/:monitor_type' element={<MonitorPage/>}></Route>
        <Route path='/shop/peripherals/monitor/:monitor_type/:monitorname' element={<MonitorInfo/>}></Route>
        <Route path='/shop/peripherals/combos' element={<KeyboardMousePage/>}></Route>
        <Route path='/shop/peripherals/combos/:combos_name' element={<KeyboardMouseInfo/>}></Route>
        <Route path='/shop/home-theaters' element={<HomeTheaterPage/>}></Route>
        <Route path='/shop/home-theaters/:ht_name' element={<HomeTheaterInfo/>}></Route>
        <Route path='/shop/smart-lighting' element={<SmartLightingPage/>}></Route>
        <Route path='/shop/smart-lighting/:sl_name' element={<SmartLightingInfo/>}></Route>
        <Route path='/shop/cctv' element={<CCTVPage/>}></Route>
        <Route path='/shop/cctv/:cctv_name' element={<CCTVInfo/>}></Route>
        <Route path='/shop/smart-watch' element={<SmartWatchPage/>}></Route>
        <Route path='/shop/smart-watch/:sw_name' element={<SmartWatchInfo/>}></Route>
        <Route path='/support/contact-us' element={<ContactUs/>}></Route>
        <Route path='/support/warranty-registration' element={<WarrantyRegistration/>}></Route>
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
