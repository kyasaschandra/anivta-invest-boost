import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Percent, CalendarDays, DollarSign, Clock, AlertTriangle, TrendingUp, Star } from "lucide-react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const seriesMap = {
  s1: { name: "Series 1", frequency: "Quarterly", periods: 4, rate: 0.11 },
  s2: { name: "Series 2", frequency: "Annual", periods: 1, rate: 0.12 },
  s3: { name: "Series 3", frequency: "At Maturity", periods: 0, rate: 0.15, earlyRate: 0.12 },
} as const;

type SeriesKey = keyof typeof seriesMap;

const MIN_INVESTMENT = 100_000;
const MAX_INVESTMENT = 25_000_000;

const ReturnCalculator = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<number>(MIN_INVESTMENT);
  const [timePeriod, setTimePeriod] = useState<"months" | "years">("years");
  const [duration, setDuration] = useState<number>(3);

  useEffect(() => {
    if (amount < MIN_INVESTMENT) {
      toast({
        title: "Minimum investment is $100,000",
        description: "We adjusted your amount to meet the minimum threshold.",
      });
      setAmount(MIN_INVESTMENT);
    }
  }, [amount, toast]);

  const durationInMonths = timePeriod === "years" ? duration * 12 : duration;
  const hasEarlyExitAdjustment = durationInMonths < 36;

  // Series comparison data
  const comparisonData = useMemo(() => {
    const months = timePeriod === "years" ? duration * 12 : duration;
    const years = months / 12;
    const earlyExitPenalty = months < 36 ? amount * 0.05 : 0;
    
    return Object.entries(seriesMap).map(([key, cfg]) => {
      let effectiveRate = cfg.rate;
      if (key === 's3' && months < 36 && 'earlyRate' in cfg) {
        effectiveRate = cfg.earlyRate;
      }
      
      let totalReturn;
      if (key === 's1' || key === 's2') {
        // Simple interest calculation for Series 1 and 2
        totalReturn = amount * effectiveRate * years;
      } else {
        // Compound interest for Series 3
        const compoundAmount = amount * Math.pow(1 + effectiveRate, years);
        totalReturn = compoundAmount - amount;
      }
      
      const payout = cfg.periods > 0 ? (amount * effectiveRate) / cfg.periods : 0;
      
      return {
        key,
        name: cfg.name,
        frequency: cfg.frequency,
        rate: `${(effectiveRate * 100).toFixed(2)}%`,
        totalReturn,
        payoutPerPeriod: payout,
        adjustedPrincipal: amount - earlyExitPenalty,
      };
    });
  }, [amount, timePeriod, duration]);

  return (
    <section aria-labelledby="return-calculator-heading" className="mt-8">
      <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-elegant">
        <CardHeader>
          <CardTitle id="return-calculator-heading" className="text-xl text-primary">
            Return Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Label htmlFor="investment-amount">Amount (USD)</Label>
              <div className="space-y-3">
                <Slider
                  id="investment-amount"
                  min={MIN_INVESTMENT}
                  max={MAX_INVESTMENT}
                  step={50_000}
                  value={[amount]}
                  onValueChange={(value) => setAmount(value[0])}
                  className="w-full"
                  aria-describedby="amount-help"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatter.format(MIN_INVESTMENT)}</span>
                  <span className="font-medium text-primary text-base">{formatter.format(amount)}</span>
                  <span>{formatter.format(MAX_INVESTMENT)}</span>
                </div>
              </div>
              <p id="amount-help" className="text-xs text-muted-foreground">
                Drag to select investment amount ($100K - $25M)
              </p>
            </div>

            <div className="space-y-2">
              <Label>Investment Period</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  min={1}
                  max={timePeriod === "years" ? 10 : 120}
                  className="flex-1"
                />
                <Select value={timePeriod} onValueChange={(v) => setTimePeriod(v as "months" | "years")}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="months">Months</SelectItem>
                    <SelectItem value="years">Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {hasEarlyExitAdjustment && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-orange-50 border border-orange-200">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <div className="text-sm text-orange-800">
                  <div className="font-medium">Early Exit Adjustment</div>
                  <div>Withdrawals within 36 months carry a 5% adjustment to safeguard fund stability.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                <Percent className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <div className="font-medium">ROI Adjustment for Series 3</div>
                  <div>Returns reduced to 12% p.a. for withdrawals within 36 months.</div>
                </div>
              </div>
            </div>
          )}

          {/* Series Comparison */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Series Comparison</h3>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-full">
                {comparisonData.map((seriesData, index) => (
                  <Card 
                    key={seriesData.key} 
                    className="border border-border bg-gradient-to-br from-white to-gray-50/50 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-primary">
                          {seriesData.name}
                        </CardTitle>
                        <div className="w-3 h-3 rounded-full bg-gradient-primary"></div>
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {seriesData.frequency} • <span className="text-primary font-semibold">{seriesData.rate} p.a.</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0">
                      <div className="bg-primary/5 rounded-lg p-3 text-center relative">
                        <div className="absolute top-2 right-2">
                          {seriesData.key === 's1' && (
                            <div className="flex flex-col items-end gap-1">
                              <TrendingUp className="w-4 h-4 text-blue-600" />
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                Steady
                              </span>
                            </div>
                          )}
                          {seriesData.key === 's2' && (
                            <div className="flex flex-col items-end gap-1">
                              <div className="flex items-center gap-1">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                                <Star className="w-3 h-3 text-green-500" />
                              </div>
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                Better
                              </span>
                            </div>
                          )}
                          {seriesData.key === 's3' && (
                            <div className="flex flex-col items-end gap-1">
                              <div className="flex items-center gap-1">
                                <TrendingUp className="w-4 h-4 text-amber-600" />
                                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                              </div>
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                                Premium
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="text-xs font-medium text-muted-foreground mb-1">
                          Total Return ({durationInMonths} mo)
                        </div>
                        <div className="text-xl font-bold text-primary">
                          {formatter.format(seriesData.totalReturn)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 bg-card rounded border">
                          <div className="text-xs text-muted-foreground mb-1">Principal Payout</div>
                          <div className="text-sm font-semibold text-foreground">
                            {formatter.format(hasEarlyExitAdjustment ? seriesData.adjustedPrincipal : amount)}
                          </div>
                        </div>
                        <div className="text-center p-2 bg-card rounded border">
                          <div className="text-xs text-muted-foreground mb-1">
                            {seriesData.key === 's3' ? 'At Maturity' : 'Per Payout'}
                          </div>
                          <div className="text-sm font-semibold text-foreground">
                            {seriesData.key === 's3' 
                              ? 'No Interim Payout' 
                              : formatter.format(seriesData.payoutPerPeriod)
                            }
                          </div>
                        </div>
                      </div>
                      
                      {hasEarlyExitAdjustment && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 text-center">
                          <div className="text-xs text-orange-700 mb-1">After Early Exit Adjustment</div>
                          <div className="text-sm font-semibold text-orange-800">
                            {formatter.format(amount * 0.05)}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ReturnCalculator;
