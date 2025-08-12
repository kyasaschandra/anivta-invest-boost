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
import { Percent, CalendarDays, DollarSign } from "lucide-react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const seriesMap = {
  s1: { name: "Series 1", frequency: "Quarterly", periods: 4, rate: 0.11 },
  s2: { name: "Series 2", frequency: "Semi-Annual", periods: 2, rate: 0.115 },
  s3: { name: "Series 3", frequency: "Annual", periods: 1, rate: 0.12 },
} as const;

type SeriesKey = keyof typeof seriesMap;

const MIN_INVESTMENT = 100_000;
const MAX_INVESTMENT = 25_000_000;

const ReturnCalculator = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<number>(MIN_INVESTMENT);
  const [series, setSeries] = useState<SeriesKey>("s1");

  useEffect(() => {
    if (amount < MIN_INVESTMENT) {
      toast({
        title: "Minimum investment is $100,000",
        description: "We adjusted your amount to meet the minimum threshold.",
      });
      setAmount(MIN_INVESTMENT);
    }
  }, [amount, toast]);

  const { payoutPerPeriod, annualReturn, totalReturn, frequency, ratePct } = useMemo(() => {
    const cfg = seriesMap[series];
    const rate = cfg.rate;
    const payout = (amount * rate) / cfg.periods;
    return {
      payoutPerPeriod: payout,
      annualReturn: amount * rate,
      totalReturn: amount * rate * 3, // 36 months tenure
      frequency: cfg.frequency,
      ratePct: `${(rate * 100).toFixed(2)}% p.a.`,
    };
  }, [amount, series]);

  return (
    <section aria-labelledby="return-calculator-heading" className="mt-8">
      <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-elegant">
        <CardHeader>
          <CardTitle id="return-calculator-heading" className="text-xl text-primary">
            Return Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <Label>Series</Label>
              <Select value={series} onValueChange={(v) => setSeries(v as SeriesKey)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select series" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="s1">Series 1 — Quarterly</SelectItem>
                  <SelectItem value="s2">Series 2 — Semi-Annual</SelectItem>
                  <SelectItem value="s3">Series 3 — Annual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 content-start mt-4 md:mt-0">
              <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
                <Percent className="w-4 h-4 text-primary" />
                <div className="text-sm">
                  <div className="text-muted-foreground">Target ROI</div>
                  <div className="font-medium">{ratePct}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
                <CalendarDays className="w-4 h-4 text-primary" />
                <div className="text-sm">
                  <div className="text-muted-foreground">Frequency</div>
                  <div className="font-medium">{frequency}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <div className="text-sm">
                  <div className="text-muted-foreground">Per Payout</div>
                  <div className="font-medium">{formatter.format(payoutPerPeriod)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center rounded-lg bg-card p-4 border border-border">
              <div className="text-xs text-muted-foreground">Estimated Annual Return</div>
              <div className="text-2xl font-semibold text-primary">{formatter.format(annualReturn)}</div>
            </div>
            <div className="text-center rounded-lg bg-card p-4 border border-border">
              <div className="text-xs text-muted-foreground">Estimated Total Return (36 mo)</div>
              <div className="text-2xl font-semibold text-primary">{formatter.format(totalReturn)}</div>
            </div>
            <div className="text-center rounded-lg bg-card p-4 border border-border">
              <div className="text-xs text-muted-foreground">Principal</div>
              <div className="text-2xl font-semibold text-primary">{formatter.format(amount)}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ReturnCalculator;
