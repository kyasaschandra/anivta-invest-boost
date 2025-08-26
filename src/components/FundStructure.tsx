import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, ShieldCheck, DollarSign, Clock, Percent, Calendar } from "lucide-react";
import ReturnCalculator from "@/components/ReturnCalculator";

const FundStructure = () => {
  const structure = [
    { icon: FileText, label: "Type", value: "Private Real Estate Debt Fund (Reg D 506(c))" },
    { icon: Building2, label: "Entity", value: "Anvita Capital Fund LLC (Texas registered)" },
    { icon: FileText, label: "Instrument", value: "Promissory Notes with fixed ROI" },
    { icon: ShieldCheck, label: "Investor Eligibility", value: "Accredited investors only (per SEC guidelines)" },
    { icon: DollarSign, label: "Minimum Investment", value: "USD 100,000" },
    { icon: Clock, label: "Minimum Tenure", value: "36 months" },
  ];

  const series = [
    {
      name: "Series 1",
      subtitle: "Quarterly Income",
      roi: "Target ROI: 11% p.a.",
      payout: "Payouts: Every 3 months",
      tenor: "Minimum 36 months investment period.",
      description:
        "Ideal for investors seeking a steady, frequent cash flow while maintaining capital security.",
    },
    {
      name: "Series 2",
      subtitle: "Semi-Annual Income",
      roi: "Target ROI: 11.50% p.a.",
      payout: "Payouts: Every 6 months",
      tenor: "Minimum 36 months investment period.",
      description:
        "Balances higher yield with moderate payout frequency for those preferring fewer disbursements.",
    },
    {
      name: "Series 3",
      subtitle: "Annual Income",
      roi: "Target ROI: 12% p.a.",
      payout: "Payouts: Once per year",
      tenor: "Minimum 36 months investment period.",
      description:
        "Designed for investors comfortable with annual disbursements, maximizing yield over the investment term.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Investment Options",
    itemListElement: series.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${s.name} — ${s.subtitle}`,
      item: {
        "@type": "Offer",
        name: s.name,
        description: `${s.roi}; ${s.payout}; ${s.tenor}. ${s.description}`,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    })),
  } as const;

  return (
    <section id="fund-structure" className="snap-start py-10 md:py-16 bg-blue-50/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Fund Structure */}
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Fund Structure</h2>
        </div>
        <Card className="mb-10 border-0 bg-white/50 backdrop-blur-sm shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl">Key Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {structure.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">{item.label}</div>
                    <div className="text-muted-foreground">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Investment Options */}
        <div id="investment-options" className="text-center space-y-3 mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Investment Options</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
            We offer three structured note series, allowing investors to choose the return frequency that best matches their income goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {series.map((s, i) => (
            <Card key={i} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{s.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{s.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-gradient-primary text-white">
                    <Percent className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{s.roi}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-gradient-primary text-white">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-muted-foreground">{s.payout}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-gradient-primary text-white">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-muted-foreground">{s.tenor}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <ReturnCalculator />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </section>
  );
};

export default FundStructure;
