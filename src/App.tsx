import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './css/custom.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import VideoQuote from './components/VideoQuote';
import PricingSection from './components/PricingSection';
import FeaturesCarousel from './components/FeaturesCarousel';
import MarketStats from './components/MarketStats';
import ChatbotSection from './components/ChatbotSection';
import Footer from './components/Footer';
import Docs from './components/Docs';
import TeamSection from './components/TeamSection';
import UseCasesSection from './components/UseCasesSection';
import HowTilantraWorks from './components/HowTilantraWorks';
import Quickstart from './components/docs/Quickstart';
import FAQ from './components/docs/FAQ';
import Principles from './components/docs/Principles';
import Models from './components/docs/Models';
import Enterprise from './components/docs/Enterprise';
import Features from './components/docs/Features';
import APIReference from './components/docs/APIReference';
import UseCases from './components/docs/UseCases';
import Community from './components/docs/Community';

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
              <div id="what-we-are"><About /></div>
              <HowTilantraWorks />
              <MarketStats />
              <div id="our-features"><FeaturesCarousel /></div>
              <UseCasesSection />
              <ChatbotSection />
              <div id="contact-footer"><Footer /></div>
            </>
          }
        />
        <Route path="/docs" element={<Docs />}>
          <Route index element={<Quickstart />} />
          <Route path="quickstart" element={<Quickstart />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="principles" element={<Principles />} />
          <Route path="models" element={<Models />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="features" element={<Features />} />
          <Route path="api-reference" element={<APIReference />} />
          <Route path="use-cases" element={<UseCases />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
