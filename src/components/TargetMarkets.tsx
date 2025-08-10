import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TargetMarkets = () => {
  const markets = [
    {
      country: "USA",
      flag: "🇺🇸",
      subtitle: "Texas, Florida, California",
      locations: [
        {
          name: "Texas",
          description:
            "Strong population growth, corporate relocations, and a favorable business climate drive demand for both residential and commercial projects in cities like Dallas, Austin, and Houston.",
        },
        {
          name: "Florida",
          description:
            "A top destination for domestic migration, with thriving tourism, retirement communities, and mixed-use developments in markets like Miami, Tampa, and Orlando.",
        },
        {
          name: "California",
          description:
            "Resilient real estate demand in core metro areas like Los Angeles and San Francisco, fueled by high-value commercial assets and premium residential opportunities.",
        },
      ],
    },
    {
      country: "India",
      flag: "🇮🇳",
      subtitle: "Hyderabad, Vijayawada, Vizag, Bengaluru",
      locations: [
        {
          name: "Hyderabad",
          description:
            "IT hub with sustained housing demand, especially in mid-to-premium segments, supported by infrastructure expansion.",
        },
        {
          name: "Vijayawada",
          description:
            "Emerging urban center with increasing government and private sector investments.",
        },
        {
          name: "Vizag (Visakhapatnam)",
          description:
            "Port city with a strategic location for both industrial and residential growth.",
        },
        {
          name: "Bengaluru",
          description:
            'Known as India\'s "Silicon Valley," offering high absorption rates for both office space and residential units.',
        },
      ],
    },
    {
      country: "UAE",
      flag: "🇦🇪",
      subtitle: "Dubai, Abu Dhabi, Sharjah",
      locations: [
        {
          name: "Dubai",
          description:
            "Global business hub with strong demand for luxury, mid-income housing, and mixed-use developments; benefits from freehold laws for foreign investors.",
        },
        {
          name: "Abu Dhabi",
          description:
            "Capital city with steady residential growth, backed by oil wealth and economic diversification initiatives.",
        },
        {
          name: "Sharjah",
          description:
            "Affordable housing destination with easy connectivity to Dubai, attracting both residents and investors.",
        },
      ],
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Target Real Estate Investment Markets",
    itemListElement: markets.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.country}`,
      item: {
        "@type": "Place",
        name: m.country,
        address: { "@type": "PostalAddress", addressCountry: m.country },
        hasPart: m.locations.map((loc) => ({
          "@type": "Place",
          name: loc.name,
          description: loc.description,
        })),
      },
    })),
  } as const;

  return (
    <section id="target-markets" aria-labelledby="target-markets-heading" className="min-h-screen snap-start py-12 md:py-20 bg-gradient-to-b from-background to-muted/20 flex items-center">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <header className="mx-auto max-w-3xl text-center mb-12">
          <h2 id="target-markets-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Target Markets
          </h2>
          <p className="mt-3 text-muted-foreground">
            Our investment strategy focuses on high-growth, urbanizing markets that combine strong economic fundamentals, robust real estate demand, and attractive project pipelines.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {markets.map((m) => (
            <Card key={m.country} className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span aria-hidden="true">{m.flag}</span>
                  <span>{m.country}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{m.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {m.locations.map((loc) => (
                    <li key={loc.name} className="text-sm">
                      <strong className="text-foreground">{loc.name}:</strong>{" "}
                      <span className="text-muted-foreground">{loc.description}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <article className="mt-10 rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">Strategic Focus</h3>
          <p className="text-muted-foreground">
            We target markets with strong GDP contribution, infrastructure growth, and favorable regulatory climates, ensuring long-term stability and capital appreciation potential for our investors.
          </p>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </section>
  );
};

export default TargetMarkets;
