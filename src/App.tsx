import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import DocsLanding from "./pages/docs/DocsLanding";
import Quickstart from "./pages/docs/Quickstart";
import FAQ from "./pages/docs/FAQ";
import Models from "./pages/docs/Models";
import PrivacyPolicy from "./pages/docs/PrivacyPolicy";

import ArmsModel from "./pages/docs/ArmsModel";
import PromptCaching from "./pages/docs/PromptCaching";
import UptimeOptimization from "./pages/docs/UptimeOptimization";
import MessageTransforms from "./pages/docs/MessageTransforms";
import ToolCalling from "./pages/docs/ToolCalling";
import ComplianceEngine from "./pages/docs/ComplianceEngine";
import Principles from "./pages/docs/Principles";
import GetStartedGuidera from "./pages/docs/GetStartedGuidera";
import GetStartedCapsuleHub from "./pages/docs/GetStartedCapsuleHub";
import Contact from "./pages/Contact";
import Guidera from "./pages/Guidera";
import CapsuleHub from "./pages/CapsuleHub";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<Docs />}>
            <Route index element={<DocsLanding />} />
            <Route path="quickstart" element={<Quickstart />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="models" element={<Models />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="get-started-guidera" element={<GetStartedGuidera />} />
            <Route path="get-started-capsule-hub" element={<GetStartedCapsuleHub />} />

            <Route path="arms-routing" element={<ArmsModel />} />
            <Route path="message-transforms" element={<MessageTransforms />} />
            <Route path="tool-calling" element={<ToolCalling />} />
            <Route path="prompt-caching" element={<PromptCaching />} />
            <Route path="uptime-optimization" element={<UptimeOptimization />} />
            <Route path="compliance-engine" element={<ComplianceEngine />} />
            <Route path="principles" element={<Principles />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/guidera" element={<Guidera />} />
          <Route path="/capsule-hub" element={<CapsuleHub />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;