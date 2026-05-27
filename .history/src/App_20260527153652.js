import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import SobreNosotros from './components/Sobrenosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import FloatingButtons from './components/Floatingbuttons';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Servicios />
      <SobreNosotros />
      <Contacto />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;