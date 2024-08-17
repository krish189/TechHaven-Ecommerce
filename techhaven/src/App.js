import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/HomePage/Home';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
