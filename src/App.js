import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Error from './components/Error';
import CatalogPage from './components/CatalogPage';
import Basket from './components/Basket';
import InfoPage from './components/InfoPage';
import ProductPage from './components/ProductPage';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/error" element={<Error />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/about" element={<InfoPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
