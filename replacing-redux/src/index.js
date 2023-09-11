import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureProductStore from './hook-store/products-store';

// import ProductsProvider from './context/products-context';
configureProductStore(); // no need to wrap in provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);