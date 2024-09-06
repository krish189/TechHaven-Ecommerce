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

function App() {
  return (
    <>
    <AuthProvider>
    <FilterProvider>
    <CartProvider>
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
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </FilterProvider>
    </AuthProvider>
    </>
  );
}

export default App;
