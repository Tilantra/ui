import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import VideoQuote from './components/VideoQuote';
import PricingSection from './components/PricingSection';
import FeaturesCarousel from './components/FeaturesCarousel';
import ChatbotSection from './components/ChatbotSection';
import Footer from './components/Footer';
import Docs from './components/Docs';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <VideoQuote />
              <FeaturesCarousel />
              <ChatbotSection />
              <PricingSection />
              <Footer />
            </>
          }
        />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default App;
