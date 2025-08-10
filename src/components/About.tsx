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
    <section className="py-16 md:py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
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
            <div className="text-muted-foreground">Months Lock-In Period</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
            <div className="text-muted-foreground">Global Markets</div>
          </div>
        </div>

        {/* Ongoing Projects Section */}
        <section className="mt-16 md:mt-24" aria-labelledby="ongoing-projects">
          <div className="text-center space-y-3 mb-8">
            <h3 id="ongoing-projects" className="text-2xl md:text-3xl font-bold text-primary">Ongoing Projects in India</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">Explore select developments across Hyderabad.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <article className="h-full" itemScope itemType="https://schema.org/CreativeWork">
              <Card className="overflow-hidden h-full">
                <AspectRatio ratio={16/9}>
                  <img
                    src="/lovable-uploads/0251c39f-d44d-45b4-9f88-b9b6b6289e5e.png"
                    alt="Antiva Ivana, Hyderabad real estate project overview with key stats and visuals"
                    className="object-cover w-full h-full"
                    loading="lazy"
                    itemProp="image"
                  />
                </AspectRatio>
                <CardContent className="p-4 md:p-5">
                  <h4 className="text-lg font-semibold text-primary" itemProp="headline">Antiva Ivana, Hyderabad</h4>
                  <p className="text-muted-foreground text-sm mt-1" itemProp="description">A 12.9-acre gated community designed for urban and modern luxury living.</p>
                </CardContent>
              </Card>
            </article>

            <article className="h-full" itemScope itemType="https://schema.org/CreativeWork">
              <Card className="overflow-hidden h-full">
                <AspectRatio ratio={16/9}>
                  <img
                    src="/lovable-uploads/81c4ca11-b279-47a2-88c6-361da95cbf0b.png"
                    alt="High 9, Hyderabad project with aerial view and specifications"
                    className="object-cover w-full h-full"
                    loading="lazy"
                    itemProp="image"
                  />
                </AspectRatio>
                <CardContent className="p-4 md:p-5">
                  <h4 className="text-lg font-semibold text-primary" itemProp="headline">High 9, Hyderabad</h4>
                  <p className="text-muted-foreground text-sm mt-1" itemProp="description">A sophisticated high-rise community designed for luxury and convenience.</p>
                </CardContent>
              </Card>
            </article>

            <article className="h-full" itemScope itemType="https://schema.org/CreativeWork">
              <Card className="overflow-hidden h-full">
                <AspectRatio ratio={16/9}>
                  <img
                    src="/lovable-uploads/74eda0b4-efe5-420d-8224-b99e22eb2edf.png"
                    alt="Anvita Parkside, Hyderabad villas with lush greenery and amenities"
                    className="object-cover w-full h-full"
                    loading="lazy"
                    itemProp="image"
                  />
                </AspectRatio>
                <CardContent className="p-4 md:p-5">
                  <h4 className="text-lg font-semibold text-primary" itemProp="headline">Anvita Parkside, Hyderabad</h4>
                  <p className="text-muted-foreground text-sm mt-1" itemProp="description">Upscale living with thoughtful architecture, landscapes, and world-class amenities.</p>
                </CardContent>
              </Card>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;