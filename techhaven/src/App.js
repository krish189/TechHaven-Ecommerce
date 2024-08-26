import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/HomePage/Home';
import Shop from './components/Shop/ShopPage/Shop';
import Login from './components/Shop/Login/Login';
import Signup from './components/Shop/SignUp/Signup';
import { AuthProvider } from './components/Shop/Context/AuthContext';
import Laptoppage from './components/Laptops/LaptopPage/Laptoppage';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/shop/laptops' element={<Laptoppage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
