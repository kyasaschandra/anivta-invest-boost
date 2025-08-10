import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TargetMarkets from "@/components/TargetMarkets";
import InvestmentObjectives from "@/components/InvestmentObjectives";

import FundStructure from "@/components/FundStructure";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import FundDocuments from "@/components/FundDocuments";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <FundStructure />
      
      <InvestmentObjectives />
      <TargetMarkets />
      <Team />
      <Contact />
      <FundDocuments />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Index;
