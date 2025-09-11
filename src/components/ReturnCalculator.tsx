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
import { Percent, CalendarDays, DollarSign, Clock, AlertTriangle } from "lucide-react";

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
      
      const compoundAmount = amount * Math.pow(1 + effectiveRate, years);
      const totalReturn = compoundAmount - amount;
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
                {comparisonData.map((seriesData) => (
                  <Card 
                    key={seriesData.key} 
                    className="border border-border bg-card hover:shadow-md transition-all"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">
                        {seriesData.name}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {seriesData.frequency} • {seriesData.rate} p.a.
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Total Return ({durationInMonths} mo)</div>
                        <div className="text-lg font-semibold text-primary">
                          {formatter.format(seriesData.totalReturn)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Principal Payout</div>
                        <div className="text-sm font-medium">
                          {formatter.format(amount)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">
                          {seriesData.key === 's3' ? 'At Maturity' : 'Per Payout'}
                        </div>
                        <div className="text-sm font-medium">
                          {seriesData.key === 's3' 
                            ? 'No Interim Payout' 
                            : formatter.format(seriesData.payoutPerPeriod)
                          }
                        </div>
                      </div>
                      {hasEarlyExitAdjustment && (
                        <div className="text-center">
                          <div className="text-xs text-orange-800">After Early Exit Adjustment</div>
                          <div className="text-sm font-medium text-orange-700">
                            {formatter.format(seriesData.adjustedPrincipal)}
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
