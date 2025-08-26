import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppQR from "@/components/WhatsAppQR";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQPage = () => {
  useEffect(() => {
    document.title = "FAQ | Anvita Capital Fund – Asset-Backed Real Estate Debt Fund | Fixed Returns | 90-Day Liquidity";
    
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Find quick answers to the most common questions about Anvita Capital and our investment process.');

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + '/faq');
  }, []);

  const faqData = [
    {
      question: "What is Anvita Capital Fund LLC and what is its primary investment objective?",
      answer: "Anvita Capital Fund LLC is a Texas limited liability company formed on April 11, 2025, operating as a private debt fund. Its primary investment objective is to strategically invest in real estate projects developed or co-developed by Anvita Homes, Inc., Anvita Buildpro LLP, and their affiliates and subsidiaries (collectively, \"Anvita Group\") across global markets. The Fund aims to generate predictable, fixed returns by providing debt financing to high-potential residential and commercial developments handled by the Anvita Group. All principal amounts raised will fund secured loans from Anvita Capital Fund LLC to affiliated Anvita Group entities through one or more revolving line of credit notes (LOCs), which the Anvita Group will then use for real estate development."
    },
    {
      question: "What types of promissory notes does Anvita Capital Fund LLC offer, and what are their key terms?",
      answer: "Anvita Capital Fund LLC offers three series of promissory notes: Series 1, Series 2, and Series 3. All series require a minimum investment of $100,000 per Note, though the Manager may waive or reduce this amount at its discretion. All Notes have a simple/non-compounding interest rate, a term of 36 months with three one-year extension options at the Manager's discretion, and a 5% prepayment penalty if requested by the Holder (0% if elected by the Company). The key differences are:\n\n• Series 1 Notes: Offer an 11% annual interest rate with quarterly interest-only payments.\n• Series 2 Notes: Offer an 11.5% annual interest rate with bi-annual interest-only payments.\n• Series 3 Notes: Offer a 12% annual interest rate with annual interest-only payments. The entire principal amount, plus any accrued and unpaid interest, is due as a single payment on the last day of the Note Term."
    },
    {
      question: "What is the nature of the security interest for the Notes, and what does it not include?",
      answer: "The Notes are secured against the assets of Anvita Capital Fund LLC, which primarily consist of the revolving line of credit notes (LOCs) issued to Anvita Group entities. While the LOCs themselves may be secured by a deed of trust against the Portfolio Properties (real estate projects), the Notes issued to investors do not have a direct security interest in these Portfolio Investments. Investors hold a general security interest against the Company's assets, but they have no direct claim or security interest in the underlying real estate projects. This means investors are creditors of the Company, not owners of the Company or the properties, and their rights are limited to the terms of their specific Note and Security Agreement."
    },
    {
      question: "Who is eligible to invest in Anvita Capital Fund LLC Notes, and what are the restrictions?",
      answer: "Investment in Anvita Capital Fund LLC Notes is limited to \"Accredited Investors\" as defined by Rule 501 of Regulation D under the Securities Act of 1933. This includes individuals with a net worth over $1,000,000 (excluding primary residence) or an annual gross income exceeding $200,000 ($300,000 jointly) for the past two years with a reasonable expectation for the current year, among other specific entities. The Company reserves the right to require verification of accredited investor status. Additionally, the Company may only admit up to 100 investors in total, pursuant to an exemption in the Investment Company Act, and cannot accept \"Unacceptable Investors\" as defined by the USA PATRIOT Act and related regulations. While Qualified Plans (like ERISA plans or IRAs) can invest, their aggregate ownership is limited to 25% or less of the total outstanding Notes."
    },
    {
      question: "What are some of the significant risks associated with investing in Anvita Capital Fund LLC Notes?",
      answer: "Investing in Anvita Capital Fund LLC Notes is highly speculative and involves a high degree of risk, with the potential for complete loss of investment. Key risks include:\n\n• Limited Security Interest: Notes are secured only by the Company's assets (primarily the LOCs), not directly by the underlying real estate properties.\n• No Ownership or Control: Investors are creditors, not owners, with no voting rights or say in the Company's management or investment decisions.\n• Dependency on Anvita Group: The success of the investment is heavily reliant on the operational and financial success of Anvita Group, which develops all the financed properties.\n• Conflicts of Interest: As Anvita Group is owned by affiliates of the Manager, costs for development and construction may not be independently negotiated, potentially reducing profitability.\n• International Investment Risks: Investments in India, UAE, and other foreign countries expose investors to political, economic, currency, and regulatory risks, as well as less transparent accounting standards.\n• Lack of Liquidity: There is no public market for the Notes, meaning investors must be prepared to hold their investment for an indefinite period.\n• Development Stage Business: The Company has a limited operating history and may experience initial operating losses and negative cash flows.\n• Subordination: Payments on Notes are subordinate to any senior liabilities and expenses of the Company."
    },
    {
      question: "How does Anvita Capital Fund LLC manage the real estate projects it invests in, and what is its investment strategy?",
      answer: "Anvita Capital Fund LLC operates as a \"blind pool\" investment fund, meaning Holders do not have voting rights or decision-making authority over specific Portfolio Investments. Investment decisions are made solely by the Manager, Anvita Capital Fund MGR LLC. The Fund's strategy focuses on providing fixed-income investment opportunities backed by real estate development loans to Anvita Group projects. The Manager intends to deploy principal amounts based on Anvita Group's risk assessment, targeting residential (luxury, mid-range, affordable) and commercial (Grade-A offices, retail, mixed-use) projects in specific high-growth markets: Texas, Florida, California in the United States; Tier 1 and Tier 2 cities in India (Bengaluru, Hyderabad, Mumbai, Pune); and Dubai, Abu Dhabi, and Sharjah in the United Arab Emirates. Projects must have full legal approvals and clear titles before funding."
    },
    {
      question: "What is the role of the U.S. Securities and Exchange Commission (SEC) in this offering?",
      answer: "The United States Securities and Exchange Commission (SEC) **does not pass upon the merits of or give its approval to any securities offered or the terms of the offering.** The Notes offered by Anvita Capital Fund LLC have not been registered under the Securities Act of 1933 or the securities laws of certain states. They are being offered and sold in reliance on exemptions from registration requirements, primarily Section 4(2) of the Securities Act and Rule 506(c) of Regulation D. The SEC and any state securities commission have not made an independent determination that these securities are exempt from registration, nor have they approved or disapproved of the offering's merits or the accuracy of the Private Placement Memorandum. Any representation to the contrary is unlawful. Investors must rely on their own examination of the Company and the offering's terms, including the merits and risks involved."
    },
    {
      question: "What reporting can investors expect from Anvita Capital Fund LLC regarding their investment?",
      answer: "Anvita Capital Fund LLC is committed to providing investors with periodic updates. No later than ninety (90) days after the end of each calendar year, the Company will email a status report of the investment and activities of the Company to Investors or upload it to a web portal. This report aims to keep investors informed about the Fund's performance and operations. However, it's crucial for prospective investors to note that any pro-forma projections provided are estimates only and should not be relied upon as guaranteed forecasts of financial performance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-glow to-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Clarity You Need
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Find quick answers to the most common questions about Anvita Capital and our investment process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-foreground">
            Your real estate investment questions answered
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-display font-bold mb-6 text-foreground">
            Ready to start investing with Anvita Capital?
          </h3>
          <a href="/#investment-inquiry" className="no-underline">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start investing today!
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppQR />
    </div>
  );
};

export default FAQPage;