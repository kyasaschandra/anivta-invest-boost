import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, Globe2, Percent, CalendarDays } from "lucide-react";

const InvestmentOptions = () => {
  const stats = [
    {
      label: "Target Fund Raise",
      value: "$25M",
      icon: DollarSign,
      highlight: false,
    },
    {
      label: "Months Lock-In Period",
      value: "36",
      icon: Clock,
      highlight: true,
    },
    {
      label: "Global Markets",
      value: "3",
      icon: Globe2,
      highlight: false,
    },
  ] as const;

  const series = [
    {
      name: "Series 1",
      roi: "11% ROI",
      payout: "Quarterly payouts",
      term: "36 months",
    },
    {
      name: "Series 2",
      roi: "11.50% ROI",
      payout: "Half-yearly payouts",
      term: "36 months",
    },
    {
      name: "Series 3",
      roi: "12% ROI",
      payout: "Annual payouts",
      term: "36 months",
    },
  ] as const;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Investment Options",
    itemListElement: series.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: s.name,
      item: {
        "@type": "Offer",
        name: s.name,
        description: `${s.roi} — ${s.payout}, term ${s.term}`,
        priceCurrency: "USD",
      },
    })),
  } as const;

  return (
    <section id="investment-options" aria-labelledby="investment-options-heading" className="py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <header className="mb-6 text-center">
          <h2 id="investment-options-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Investment Options
          </h2>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch mb-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/80 backdrop-blur-sm py-6">
              <div className="flex items-center gap-2">
                <s.icon className="w-5 h-5 text-muted-foreground" />
                <span className={`text-3xl font-bold ${s.highlight ? "text-accent" : "text-foreground"}`}>{s.value}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Series Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {series.map((s) => (
            <Card key={s.name} className="group hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{s.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-gradient-primary text-white">
                    <Percent className="w-5 h-5" />
                  </div>
                  <p className="text-sm"><span className="font-semibold">{s.roi}</span></p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-muted text-foreground/80">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">{s.payout}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-muted text-foreground/80">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">{s.term}</p>
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

export default InvestmentOptions;
