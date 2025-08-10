import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import InvestmentObjectives from "@/components/InvestmentObjectives";
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
      <InvestmentObjectives />
      <FundStructure />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
