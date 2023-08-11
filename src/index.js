import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Ip from './pages/Ip';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="ip" element={<Ip />} />
          </Route>
        </Routes>
      </BrowserRouter>
);

reportWebVitals();
