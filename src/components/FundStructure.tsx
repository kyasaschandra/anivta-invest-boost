import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, ShieldCheck, DollarSign, Clock, Percent, Calendar } from "lucide-react";

const FundStructure = () => {
  const structure = [
    { icon: FileText, label: "Type", value: "Private Real Estate Debt Fund (Reg D 506(c))" },
    { icon: Building2, label: "Entity", value: "Anvita Capital Fund LLC (Texas registered)" },
    { icon: FileText, label: "Instrument", value: "Promissory Notes with fixed ROI" },
    { icon: ShieldCheck, label: "Investor Eligibility", value: "Accredited investors only (per SEC guidelines)" },
    { icon: DollarSign, label: "Minimum Investment", value: "USD 100,000" },
    { icon: Clock, label: "Lock-In Period", value: "36 months" },
  ];

  const series = [
    { name: "Series 1", roi: "11% ROI", payout: "Quarterly payouts", tenor: "36 months" },
    { name: "Series 2", roi: "11.50% ROI", payout: "Half-yearly payouts", tenor: "36 months" },
    { name: "Series 3", roi: "12% ROI", payout: "Annual payouts", tenor: "36 months" },
  ];

  return (
    <section id="fund-structure" className="min-h-screen snap-start py-12 md:py-24 bg-gradient-subtle flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Fund Structure */}
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Fund Structure</h2>
        </div>
        <Card className="mb-16 border-0 bg-white/50 backdrop-blur-sm shadow-elegant">
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
        <div id="investment-options" className="text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Investment Options</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {series.map((s, i) => (
            <Card key={i} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{s.name}</CardTitle>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundStructure;
