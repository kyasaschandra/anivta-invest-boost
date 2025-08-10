import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const FundDocuments = () => {
  const ppmHref = "/docs/anvita-capital-ppm.pdf"; // replace with your final PPM path when ready

  return (
    <section id="fund-documents" aria-labelledby="fund-documents-heading" className="min-h-screen snap-start py-12 md:py-24 bg-gradient-card flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <header className="text-center space-y-3 mb-8">
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
