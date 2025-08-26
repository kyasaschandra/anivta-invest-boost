import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppQR from "@/components/WhatsAppQR";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    // Title
    document.title = "Privacy Policy - Anvita Capital Fund – Asset-Backed Real Estate Debt Fund | Fixed Returns | 90-Day Liquidity";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      "Read Anvita Capital's Privacy Policy: how we collect, use, share, and protect your information."
    );

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + '/privacy-policy');

    // Structured Data (WebPage)
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      url: window.location.origin + "/privacy-policy",
      description: "Privacy Policy for Anvita Capital Fund LLC",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
          { "@type": "ListItem", position: 2, name: "Privacy Policy", item: window.location.origin + "/privacy-policy" }
        ]
      }
    });
    document.head.appendChild(ld);

    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="privacy-policy" className="pt-24">
        <header className="px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
        </header>

        <article className="max-w-4xl mx-auto px-6 py-10 space-y-8">
          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY ACCESSING AND USING THIS WEBSITE OR ANY RELATED DIGITAL PLATFORM, YOU AGREE TO BE BOUND BY THIS PRIVACY POLICY IN ITS ENTIRETY. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT USE OUR SITE(S).
            </p>
            <p>
              This Privacy Policy explains how Anvita Capital Fund LLC, managed by Anvita Capital Fund MGR LLC ("Anvita Capital," "we," "us," or "our"), collects, uses, and protects information you provide through our website, investor portal, or other communications (collectively, the "Site"). This Privacy Policy forms part of our Terms of Use and governs your interaction with the Site and the investment services offered by Anvita Capital Fund LLC (the "Services").
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <h3 className="font-medium text-foreground">A. Information You Provide Directly</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Name, email address, mailing address, and phone number</li>
              <li>Investment profile information (e.g., net worth, income range, investment experience)</li>
              <li>Identification details for compliance with Know Your Customer ("KYC") and Anti-Money Laundering ("AML") laws, including government-issued ID and tax identification number</li>
              <li>Banking details for funding and disbursement purposes</li>
            </ul>
            <h3 className="font-medium text-foreground">B. Financial &amp; Compliance Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Bank account information for transactions</li>
              <li>Proof of accredited investor status as required under Regulation D Rule 506(c)</li>
              <li>Compliance documentation required by law</li>
            </ul>
            <h3 className="font-medium text-foreground">C. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>IP address, browser type, device type, operating system, and access times</li>
              <li>Cookies or similar technologies for functionality, analytics, and security purposes</li>
            </ul>
            <h3 className="font-medium text-foreground">D. Information from Third Parties</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Compliance service providers</li>
              <li>Public databases or government records</li>
              <li>Investment partners or affiliates involved in processing your application</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Provide and operate the Services, including processing investments</li>
              <li>Communicate with you about your account, investments, and updates</li>
              <li>Conduct compliance checks and meet legal obligations</li>
              <li>Improve Site functionality and user experience</li>
              <li>Send promotional or educational content (you may opt out at any time)</li>
              <li>Protect against fraud, unauthorized transactions, and misuse of our Services</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. How We Share Your Information</h2>
            <p className="text-muted-foreground">
              We do not sell your information to third parties. We may share information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>With service providers who assist in operations, compliance, and payment processing</li>
              <li>As required by law, court order, or regulatory authority</li>
              <li>In connection with a corporate transaction such as a merger, acquisition, or reorganization</li>
              <li>In aggregated or anonymized form for reporting purposes</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement commercially reasonable measures to safeguard your information. While we take precautions, no system is completely secure, and we cannot guarantee the absolute security of your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Cookies &amp; Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar technologies for Site performance, analytics, and personalization. You can manage cookie preferences through your browser settings; however, disabling cookies may affect Site functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Request a copy of your personal information</li>
              <li>Update or correct your data</li>
              <li>Request deletion of your information, subject to legal retention requirements</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. International Users</h2>
            <p className="text-muted-foreground">
              Our Site and servers are located in the United States. By using our Site, you consent to the transfer and processing of your data in the United States.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Children’s Privacy</h2>
            <p className="text-muted-foreground">
              Our Site is not intended for individuals under the age of 18, and we do not knowingly collect information from such individuals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Changes to this Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Changes will be posted with a revised “Last Updated” date. Your continued use of the Site constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
            <address className="not-italic text-muted-foreground">
              Anvita Capital Fund MGR LLC<br/>
              Email: privacy@anvitacapitalfund.com<br/>
              Phone: +1 (945) 217-9280<br/>
              Address: 9300 John Hickman Pkwy, Suite 301, Frisco, Texas 75035
            </address>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppQR />
    </div>
  );
};

export default PrivacyPolicyPage;