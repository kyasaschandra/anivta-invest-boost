import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const InvestmentObjectives = () => {
  const objectives = [
    {
      image: project1,
      title: "Deliver Predictable, Fixed Income",
      description: "Provide accredited investors with stable, contractually defined returns through secured real estate debt instruments."
    },
    {
      image: project2,
      title: "Invest Exclusively in Anvita Group Projects",
      description: "Deploy capital only into vetted, high-quality developments backed by Anvita Group's proven track record."
    },
    {
      image: project3,
      title: "Preserve Capital Through Asset-Backed Security",
      description: "Ensure all investments are secured by tangible real estate assets in prime, high-demand markets."
    },
    {
      image: project4,
      title: "Promote Sustainable Growth",
      description: "Drive projects that contribute to urban development, create jobs, and integrate eco-friendly, resource-efficient practices."
    },
    {
      image: project5,
      title: "Eliminate Foreign Exchange Risk",
      description: "Maintain both investment and distributions in USD to safeguard returns from currency volatility."
    },
    {
      image: project6,
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
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={objective.image} 
                    alt={objective.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-5 text-center space-y-3">
                  <h3 className="text-lg font-semibold text-primary">
                    {objective.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </div>
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