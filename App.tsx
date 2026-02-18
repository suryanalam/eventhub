
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Offers from './pages/Offers';
import Account from './pages/Account';
import { CartItem, Service } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
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
