// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css'; // Ensure this CSS file exists

const App = () => {
  return (
    <BrowserRouter basename="/my-complex-app"> {/* Adjust this path */}
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
