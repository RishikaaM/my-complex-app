// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css'; // Create this file for styling

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
