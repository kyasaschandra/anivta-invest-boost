import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppQR from "@/components/WhatsAppQR";

const ContactPage = () => {
  useEffect(() => {
    // Title
    document.title = "Invest with Anvita Capital Fund | Investor Relations";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Accredited investor inquiries for our private placement, USD-denominated real estate debt fund. Contact Anvita Capital investor relations.');

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + '/contact');

    // Structured Data (Organization Contact)
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Anvita Capital Fund LLC",
      url: window.location.origin,
      contactPoint: [{
        "@type": "ContactPoint",
        telephone: "+1-945-217-9280",
        contactType: "Investor relations",
        areaServed: "US",
        availableLanguage: ["English"]
      }]
    });
    document.head.appendChild(ld);

    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="contact" className="pt-24">
        <header className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Contact Anvita Capital Fund LLC</h1>
        </header>
        <Contact />
      </main>
      <Footer />
      <WhatsAppQR />
    </div>
  );
};

export default ContactPage;
