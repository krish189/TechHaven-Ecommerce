import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from './components/Home/Marquee/Marquee';
import Header from './components/Home/Header/Header';
import CarouselComponent from './components/Home/Carousel/CarouselComponent';
import Explore from './components/Home/Explore/Explore';
import Subscribe from './components/Home/Subscribe/Subscribe';
import Product from './components/Home/Product/Product';
import Footer from './components/Home/Footer/Footer';

function App() {
  return (
    <>
    <Marquee/>
    <Header/>
    <CarouselComponent/>
    <Explore/>
    <Subscribe/>
    <Product/>
    <Footer/>
    </>
  );
}

export default App;
