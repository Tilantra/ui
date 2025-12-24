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
import UseCases from './components/docs/UseCases';
import Community from './components/docs/Community';
import PromptCaching from './components/docs/PromptCaching';
import StructuredOutputs from './components/docs/StructuredOutputs';
import ToolCalling from './components/docs/ToolCalling';
import MessageTransforms from './components/docs/MessageTransforms';
import UptimeOptimization from './components/docs/UptimeOptimization';
import ZeroCompletionInsurance from './components/docs/ZeroCompletionInsurance';
import ProvisioningAPIKeys from './components/docs/ProvisioningAPIKeys';
import Overview from './components/docs/Overview';
import Streaming from './components/docs/Streaming';
import Limits from './components/docs/Limits';
import Authentication from './components/docs/Authentication';
import Errors from './components/docs/Errors';
import ComplianceEngine from './components/docs/ComplianceEngine';
import ArmsModel from './components/docs/armsModel';
import PromptSuggestion from './components/docs/PromptSuggestion';

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
          <Route path="arms-routing" element={<ArmsModel />}/>
          <Route path="compliance-engine" element={<ComplianceEngine />} />
          <Route path="prompt-caching" element={<PromptCaching />} />
          <Route path="structured-outputs" element={<StructuredOutputs />} />
          <Route path="tool-calling" element={<ToolCalling />} />
          <Route path="message-transforms" element={<MessageTransforms />} />
          <Route path="uptime-optimization" element={<UptimeOptimization />} />
          <Route path="zero-completion-insurance" element={<ZeroCompletionInsurance />} />
          <Route path="prompt-suggestion" element={<PromptSuggestion />} />
          <Route path="provisioning-api-keys" element={<ProvisioningAPIKeys />} />
          <Route path="overview" element={<Overview />} />
          <Route path="streaming" element={<Streaming />} />
          <Route path="limits" element={<Limits />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="errors" element={<Errors />} />
          <Route path="api-reference" element={<Overview />} />
          <Route path="use-cases" element={<UseCases />} />
          <Route path="community" element={<Community />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
