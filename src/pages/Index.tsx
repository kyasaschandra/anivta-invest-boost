import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TargetMarkets from "@/components/TargetMarkets";
import InvestmentObjectives from "@/components/InvestmentObjectives";

import FundStructure from "@/components/FundStructure";
import Team from "@/components/Team";
import AnvitaGroup from "@/components/AnvitaGroup";
import Contact from "@/components/Contact";
import FundDocuments from "@/components/FundDocuments";
import Footer from "@/components/Footer";
import WhatsAppQR from "@/components/WhatsAppQR";

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Anvita Capital Fund | Secured Real Estate Debt";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Fixed-income, asset-backed investment opportunities in USD-denominated real estate loans for accredited investors with no FX risk.');

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + '/');
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Navigation />
      <div id="pdf-content">
        <Hero />
        <div className="bg-background">
          <About />
        </div>
        <FundStructure />
        <div className="bg-background">
          <InvestmentObjectives />
        </div>
        <TargetMarkets />
        <div className="bg-background">
          <Team />
        </div>
        <AnvitaGroup />
        <div className="bg-background">
          <Contact />
        </div>
        <FundDocuments />
        <Footer />
      </div>
      <WhatsAppQR />
    </div>
  );
};

export default Index;
