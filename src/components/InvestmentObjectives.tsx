import { Target, Shield, TrendingUp, Leaf, DollarSign, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InvestmentObjectives = () => {
  const objectives = [
    {
      icon: TrendingUp,
      title: "Deliver Predictable, Fixed Income",
      description: "Provide accredited investors with stable, contractually defined returns through secured real estate debt instruments."
    },
    {
      icon: Target,
      title: "Invest Exclusively in Anvita Group Projects",
      description: "Deploy capital only into vetted, high-quality developments backed by Anvita Group’s proven track record."
    },
    {
      icon: Shield,
      title: "Preserve Capital Through Asset-Backed Security",
      description: "Ensure all investments are secured by tangible real estate assets in prime, high-demand markets."
    },
    {
      icon: Leaf,
      title: "Promote Sustainable Growth",
      description: "Drive projects that contribute to urban development, create jobs, and integrate eco-friendly, resource-efficient practices."
    },
    {
      icon: DollarSign,
      title: "Eliminate Foreign Exchange Risk",
      description: "Maintain both investment and distributions in USD to safeguard returns from currency volatility."
    },
    {
      icon: BadgeCheck,
      title: "Uphold Full Transparency and Governance",
      description: "Commit to regular investor updates, independent audits, and strict adherence to all applicable laws and regulations."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Investment Objectives",
    itemListElement: objectives.map((o, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: o.title,
      item: {
        "@type": "Thing",
        name: o.title,
        description: o.description,
      },
    })),
  } as const;

  return (
    <section className="snap-start py-10 md:py-16 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Investment Objectives
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Our strategic approach to delivering consistent returns while maintaining capital security and sustainable impact.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {objectives.map((objective, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-5 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white group-hover:scale-110 transition-transform duration-300">
                  <objective.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {objective.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </section>
  );
};

export default InvestmentObjectives;