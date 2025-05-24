import React from 'react';
import './App.css';
import { CartProvider, useCart } from './Components/CartContext';
import { Routes, Route, Link } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Files from './Components/Files';
import Menu from './Customers/Menu';
import Cart from './Components/Cart';
import Billing from './Billing/Billing';
import Orders from './Billing/Orders';
import { PaymentProvider } from './Components/PaymentContext';
import Chef from './Billing/Chef';

function App() {
  return (
    <div className="App position-relative">
      
      <PaymentProvider>
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Files />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Chef" element={<Chef />} />
        </Routes>
        
      </CartProvider>
      </PaymentProvider>
      
    </div>
  );
}

export default App;
