import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ShieldAlert } from "lucide-react";

const Disclaimer = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="disclaimer" aria-labelledby="disclaimer-heading" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="border border-border shadow-sm">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-3">
              <div className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-primary text-white">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <CardTitle id="disclaimer-heading" className="text-2xl text-primary">Disclaimer</CardTitle>
            </div>
            <Collapsible open={open} onOpenChange={setOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  {open ? (
                    <><ChevronUp className="w-4 h-4 mr-1"/> Hide disclaimer</>
                  ) : (
                    <><ChevronDown className="w-4 h-4 mr-1"/> Read full disclaimer</>
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    No communication by Anvita Capital Fund LLC or any of its affiliates, including its manager, Anvita Capital Fund MGR LLC (collectively, “Anvita Capital”), through this website, printed materials, or any other medium should be construed, or is intended, as a recommendation to purchase, sell, or hold any security, or as investment, tax, financial, accounting, legal, regulatory, or compliance advice. Nothing herein constitutes an offer to extend credit, an offer to purchase or sell securities, or a solicitation of any securities transaction, except as expressly set forth in the confidential offering materials provided to qualified investors.
                  </p>
                  <p>
                    Any financial projections or returns shown are estimates only, hypothetical in nature, not based on actual investment results, and are not guarantees of future performance. Such projections do not represent actual results, and no representation is made that any investment will achieve results or returns similar to those shown. All performance metrics and calculations presented are subject to verification and may differ from the actual performance of any investment. Information herein has been obtained from sources believed to be reliable; however, Anvita Capital makes no warranties as to the accuracy or completeness of such information and accepts no liability for any loss arising from its use.
                  </p>
                  <p>
                    Private placement investments are NOT bank deposits (and are NOT insured by the FDIC or any other governmental agency), are NOT guaranteed by Anvita Capital or any other party, and MAY lose value. Neither the U.S. Securities and Exchange Commission (SEC) nor any state securities regulator has approved or recommended any investment or the accuracy of any information contained herein. Investors must be able to afford the loss of their entire investment.
                  </p>
                  <p>
                    Investments in private placements are speculative, illiquid, and involve a high degree of risk. They are intended only for accredited investors who understand and are willing and able to accept the risks associated with private real estate debt investments. Such investments may be subject to holding period requirements, transfer restrictions, and limited secondary market options. Investors should have a long-term investment horizon and low liquidity needs.
                  </p>
                  <p>
                    Alternative investments should only be part of a diversified portfolio. Before investing, you should: (1) conduct your own investigation and analysis; (2) carefully review all offering materials, including risk factors; and (3) consult with your own investment, tax, financial, and legal advisors.
                  </p>
                  <p>
                    This website and related communications provide preliminary, general information about the offering and do not contain all the material terms or details. The information herein is qualified in its entirety by the applicable Private Placement Memorandum (PPM), which should be reviewed carefully before making any investment decision. No investment will be made without the delivery and execution of definitive offering documents.
                  </p>
                  <p>
                    Anvita Capital Fund LLC is managed by Anvita Capital Fund MGR LLC, which may partner with affiliated or third-party service providers for administrative, operational, and compliance functions. Anvita Capital Fund LLC is not a bank, and no banking or custodial services are provided by the Fund.
                  </p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default Disclaimer;
