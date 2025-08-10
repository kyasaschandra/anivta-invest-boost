import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react";
import performanceChart from "@/assets/performance-chart.jpg";

const Performance = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: "5-Year Returns",
      value: "185%",
      change: "+12% vs benchmark",
      positive: true
    },
    {
      icon: BarChart3,
      label: "Sharpe Ratio",
      value: "1.45",
      change: "Above industry avg",
      positive: true
    },
    {
      icon: PieChart,
      label: "Portfolio Diversity",
      value: "15",
      change: "Sectors covered",
      positive: true
    },
    {
      icon: Activity,
      label: "Volatility",
      value: "8.2%",
      change: "Below market avg",
      positive: true
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Performance Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent reporting and consistent outperformance across market cycles demonstrate our commitment to investor success.
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
                  className="w-full h-64 object-cover"
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-gradient-card border-0 shadow-card">
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-success">98%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-card border-0 shadow-card">
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground">Investor Satisfaction</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-card border-0 shadow-card">
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-accent">AAA</div>
              <div className="text-muted-foreground">Credit Rating</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Performance;