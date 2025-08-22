import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Sectors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
