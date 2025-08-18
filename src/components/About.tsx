import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Target, Lightbulb, Award, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Asset-Backed Security",
      description: "Loans secured by prime real estate assets in the USA, India, and UAE, ensuring capital preservation and stability."
    },
    {
      icon: Lightbulb,
      title: "Fixed Income Strategy",
      description: "Predictable quarterly, half-yearly, or annual payouts with no foreign exchange exposure - all USD denominated."
    },
    {
      icon: Award,
      title: "Proven Sponsor",
      description: "Backed by Anvita Group's track record and expertise in residential and commercial real estate development."
    },
    {
      icon: Globe,
      title: "Global Portfolio",
      description: "Diversified real estate debt investments across three key markets: United States, India, and United Arab Emirates."
    }
  ];

  return (
    <section className="snap-start py-10 md:py-16 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Secured Real Estate Debt Fund
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Anvita Capital Fund LLC provides secured, fixed-income investment opportunities through first-lien and mezzanine debt structures backed by high-quality real estate assets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-5 md:p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-primary text-white group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">$25M</div>
            <div className="text-muted-foreground">Target Fund Raise</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-success">36</div>
            <div className="text-muted-foreground">Months - Minimum tenure for optimal returns</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
            <div className="text-muted-foreground">Global Markets</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;