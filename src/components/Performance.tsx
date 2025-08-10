import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react";
import performanceChart from "@/assets/performance-chart.jpg";

const Performance = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: "Fixed Returns",
      value: "Targeted",
      change: "Quarterly/Semi-Annual",
      positive: true
    },
    {
      icon: BarChart3,
      label: "USD Denominated",
      value: "100%",
      change: "No FX exposure",
      positive: true
    },
    {
      icon: PieChart,
      label: "Asset Security",
      value: "First-Lien",
      change: "Real estate backed",
      positive: true
    },
    {
      icon: Activity,
      label: "Fund Structure",
      value: "Reg D",
      change: "506(c) Compliant",
      positive: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Fund Structure & Benefits
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our structured approach ensures predictable returns through rigorous due diligence, milestone-based funding, and strong asset security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Performance Chart */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Fund Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <img 
                  src={performanceChart} 
                  alt="Performance Chart" 
                  className="w-full h-56 md:h-64 object-cover"
                />
              </CardContent>
            </Card>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Past performance does not guarantee future results. All investments carry risk.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary text-white">
                      <metric.icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className={`text-sm ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                        {metric.change}
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground font-medium">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="text-center p-6 md:p-8 bg-gradient-card border-0 shadow-card">
            <CardContent className="space-y-4">
              <div className="text-2xl md:text-3xl font-bold text-success">LEED/IGBC</div>
              <div className="text-muted-foreground">Sustainability Focus</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 md:p-8 bg-gradient-card border-0 shadow-card">
            <CardContent className="space-y-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">Anvita Group</div>
              <div className="text-muted-foreground">Proven Sponsor</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 md:p-8 bg-gradient-card border-0 shadow-card">
            <CardContent className="space-y-4">
              <div className="text-2xl md:text-3xl font-bold text-accent">Milestone</div>
              <div className="text-muted-foreground">Based Funding</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Performance;