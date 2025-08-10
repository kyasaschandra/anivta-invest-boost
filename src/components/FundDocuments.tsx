import { FileText, ChevronDown, ShieldAlert, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FundDocuments = () => {
  const ppmHref = "/docs/anvita-capital-ppm.pdf"; // replace with your final PPM path when ready

  return (
    <section id="fund-documents" aria-labelledby="fund-documents-heading" className="snap-start py-10 md:py-16 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <header className="text-center space-y-3 mb-6">
          <h2 id="fund-documents-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Fund Documents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download the latest Private Placement Memorandum (PPM) for full terms, risks, and disclosures.
          </p>
        </header>

        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-6 text-center shadow-elegant">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-primary text-white">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-primary">Private Placement Memorandum (PPM)</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            PDF • Updated regularly • Contains offering details and investor eligibility
          </p>
          <a href={ppmHref} download className="inline-block" aria-label="Download Fund PPM (PDF)">
            <Button size="lg" className="group">
              Download PPM
            </Button>
          </a>
        </div>

        {/* Disclaimer under Fund Documents */}
        <div className="mx-auto max-w-3xl mt-6">
          <Card className="border border-border shadow-sm">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <div className="flex items-center gap-3">
                <div className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-primary text-white">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl text-primary">Disclaimer</CardTitle>
              </div>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="whitespace-nowrap">
                    <ChevronDown className="w-4 h-4 mr-1"/> Read full disclaimer
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

        {/* Portfolio Disclosure under Fund Documents */}
        <div className="mx-auto max-w-3xl mt-6">
          <Card className="border border-border shadow-sm">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <div className="flex items-center gap-3">
                <div className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-primary text-white">
                  <Briefcase className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl text-primary">Portfolio Disclosure</CardTitle>
              </div>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="whitespace-nowrap">
                    <ChevronDown className="w-4 h-4 mr-1"/> Read portfolio disclosure
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      The portfolio of Anvita Capital Fund LLC will be comprised exclusively of secured debt investments in residential and commercial real estate projects sponsored, developed, or co-developed by Anvita Group. All investments will be collateralized by tangible real estate assets located in targeted high-growth markets within the United States, India, and the United Arab Emirates.
                    </p>
                    <p>
                      The Fund seeks to maintain diversification across asset classes, project stages, and geographies to help mitigate market-specific risks. However, portfolio diversification does not eliminate risk, and the performance of individual investments may vary significantly. There is no assurance that the Fund will achieve its investment objectives or that investors will receive any return of or on their invested capital.
                    </p>
                    <p>
                      The composition of the portfolio is expected to change over time based on market conditions, investment opportunities, and the discretion of the Manager, Anvita Capital Fund MGR LLC. The Fund’s investments are illiquid, and investors should not expect to have access to their capital prior to the stated maturity or redemption periods, except as provided in the governing agreements.
                    </p>
                    <p>
                      Portfolio performance will depend on numerous factors, including the quality of underlying collateral, the ability of project sponsors to complete developments on time and within budget, and overall real estate market conditions. While the Manager will employ rigorous due diligence, milestone-based funding, and risk mitigation strategies, there can be no assurance that such measures will prevent losses.
                    </p>
                    <p>
                      Past performance of Anvita Group or its affiliates is not necessarily indicative of future results, and the value of portfolio assets may fluctuate. All portfolio valuations are subject to change and may not reflect actual liquidation values.
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </CardHeader>
          </Card>
        </div>

        <link rel="canonical" href="#fund-documents" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DigitalDocument",
              name: "Anvita Capital Fund LLC - Private Placement Memorandum",
              fileFormat: "application/pdf",
              url: ppmHref,
              about: "Fund offering terms, risks, and disclosures for accredited investors.",
            }),
          }}
        />
      </div>
    </section>
  );
};

export default FundDocuments;
