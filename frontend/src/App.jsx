import React, { useEffect } from 'react';
import './index.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Contact from './components/sections/Contact';
import TaxInfo from './components/sections/TaxInfo';

function App() {
  useEffect(() => {
    // Delay slightly to ensure React elements are rendered before observing
    setTimeout(() => {
      const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      };

      const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          revealObserver.observe(el);
      });
    }, 100);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
        <TaxInfo />
      </main>
      <Footer />
    </>
  );
}

export default App;
