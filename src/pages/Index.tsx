import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TargetMarkets from "@/components/TargetMarkets";
import InvestmentObjectives from "@/components/InvestmentObjectives";
import InvestmentOptions from "@/components/InvestmentOptions";
import FundStructure from "@/components/FundStructure";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TargetMarkets />
      <InvestmentObjectives />
      <InvestmentOptions />
      <FundStructure />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
