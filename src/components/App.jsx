import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Sectors from './Sectors';
import Contact from './Contact';
import Footer from './Footer';

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
