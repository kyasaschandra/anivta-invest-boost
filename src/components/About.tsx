import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Award, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We specialize in growth-stage companies with proven business models and strong market positions."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Our investment philosophy centers on companies driving technological innovation and market disruption."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Over 4 years of consistent outperformance with a portfolio spanning multiple high-growth sectors."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International investment opportunities across North America, Europe, and emerging markets."
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Investment Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Anivta Capital Fund combines deep market expertise with innovative investment strategies 
            to deliver superior returns while managing risk through diversified portfolio management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">$500M+</div>
            <div className="text-muted-foreground">Assets Under Management</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-success">25%</div>
            <div className="text-muted-foreground">Average Annual Returns</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground">Portfolio Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;