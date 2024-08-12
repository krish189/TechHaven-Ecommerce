import './App.css';
import Carousel from './components/Carousel/CarouselComponent';
import Header from './components/Header/Header';
import Marquee from './components/Marquee/Marquee';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Marquee />
    <Header />
    <Carousel/>
    </>
  );
}

export default App;
