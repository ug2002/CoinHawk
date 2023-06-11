import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-alice-carousel/lib/alice-carousel.css";
import App from './App';
import CryptoContext from './CryptoContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoContext>
    <App />


    </CryptoContext>
  </React.StrictMode>
);

 