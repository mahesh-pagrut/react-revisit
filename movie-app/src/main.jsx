import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </MovieProvider>
  </React.StrictMode>
);
