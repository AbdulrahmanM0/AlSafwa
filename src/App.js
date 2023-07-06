import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/HomePage/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import UpButton from './components/UpButton/UpButton';
import './components/IntersectioObserverStyle/InterSection.css';
import ContactUs from './components/Pages/ContactUs/ContactUsPage/ContactUs';
import ProductPage from './components/Pages/Products/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:item" element={<ProductPage />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
