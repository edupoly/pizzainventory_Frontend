import React from 'react';
import ReactDOM from 'react-dom/client'; // Changed import
import './index.css';
import App from './App';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

// Use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
