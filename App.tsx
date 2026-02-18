
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Offers from './pages/Offers';
import Account from './pages/Account';
import { CartItem, Service, City } from './types';
import { SUPPORTED_CITIES } from './constants';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentCity, setCurrentCity] = useState<City | null>(() => {
    const saved = localStorage.getItem('eventhub_city');
    if (saved) {
      const city = SUPPORTED_CITIES.find(c => c.id === saved);
      return city || null;
    }
    return null;
  });

  const handleCityChange = (city: City) => {
    setCurrentCity(city);
    localStorage.setItem('eventhub_city', city.id);
  };

  const handleAddToCart = (service: Service) => {
    setCartItems(prev => {
      if (prev.find(item => item.id === service.id)) return prev;
      return [...prev, service];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Layout currentCity={currentCity} onCityChange={handleCityChange}>
        <Routes>
          <Route path="/" element={<Home currentCityId={currentCity?.id || null} />} />
          <Route path="/listing" element={<Listing currentCityId={currentCity?.id || null} />} />
          <Route path="/detail/:id" element={<Detail onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart items={cartItems} onRemove={handleRemoveFromCart} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
