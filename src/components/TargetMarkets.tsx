import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TargetMarkets = () => {
  const markets = [
    {
      country: "USA",
      locations: ["Texas", "Florida", "California"],
    },
    {
      country: "India",
      locations: ["Hyderabad", "Vijayawada", "Vizag", "Bengaluru"],
    },
    {
      country: "UAE",
      locations: ["Dubai", "Abu Dhabi", "Sharjah"],
    },
  ];

  return (
    <section id="target-markets" aria-labelledby="target-markets-heading" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <header className="mx-auto max-w-2xl text-center mb-12">
          <h2 id="target-markets-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Target Markets
          </h2>
          <p className="mt-3 text-muted-foreground">
            Focus on high-growth, urbanizing markets with strong GDP contribution
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {markets.map((m) => (
            <Card key={m.country} className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{m.country}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {m.locations.map((loc) => (
                    <li
                      key={loc}
                      className="px-3 py-1 rounded-full bg-muted text-foreground/80 text-sm"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetMarkets;
