import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import CountryImage from './components/CountryImage'; // Nuevo componente
import './i18n'; 
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <CountryImage /> 
      <Content />
      <Footer />
    </div>
  );
}

export default App;
