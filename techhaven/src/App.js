import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from './components/Home/Marquee/Marquee';
import Header from './components/Home/Header/Header';
import CarouselComponent from './components/Home/Carousel/CarouselComponent';
import Explore from './components/Home/Explore/Explore';
import Subscribe from './components/Home/Subscribe/Subscribe';

function App() {
  return (
    <>
    <Marquee/>
    <Header/>
    <CarouselComponent/>
    <Explore/>
    <Subscribe/>
    </>
  );
}

export default App;
