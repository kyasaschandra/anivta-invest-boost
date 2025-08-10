import { Target, Shield, TrendingUp, Leaf, DollarSign, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InvestmentObjectives = () => {
  const objectives = [
    {
      icon: TrendingUp,
      title: "Predictable Fixed Income",
      description: "Generate predictable, fixed income for accredited investors"
    },
    {
      icon: Target,
      title: "Secured Projects Only",
      description: "Deploy capital only to secured Anvita Group projects"
    },
    {
      icon: Shield,
      title: "Capital Preservation",
      description: "Preserve investor capital via asset-backed structures"
    },
    {
      icon: Leaf,
      title: "Sustainable Impact",
      description: "Deliver social and environmental impact through sustainable development"
    },
    {
      icon: DollarSign,
      title: "No FX Risk",
      description: "No FX risk – both investment and distributions in USD"
    },
    {
      icon: BadgeCheck,
      title: "Transparency & Compliance",
      description: "Ensure transparency with regular updates, audits, and full regulatory compliance"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
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
      </div>
    </section>
  );
};

export default InvestmentObjectives;