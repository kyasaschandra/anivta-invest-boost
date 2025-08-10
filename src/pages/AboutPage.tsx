import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Factory, Building2, Rocket, ShieldCheck, Clock, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Anvita Group | Sponsor Overview";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Discover Anvita Group: established in 2005, delivering quality, reliable, on‑time real estate developments backed by innovation and strong leadership.'
    );

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + '/about');

    // Structured Data (Organization)
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Anvita Group",
      "url": "https://www.anvitagroup.com/",
      "logo": window.location.origin + "/lovable-uploads/89343412-3f23-4f7b-a630-9fac8175f2a0.png",
      "slogan": "Building Happiness",
      "sameAs": [
        "https://www.youtube.com/@AnvitaGroup" 
      ]
    });
    document.head.appendChild(ld);

    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }}>
            <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm font-medium">Building Happiness since 2005</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold font-display">About Anvita Group</h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Founded in 2005, Anvita Group is a trusted real estate developer known for quality, reliability, and on‑time delivery—guided by a leadership culture that emphasizes integrity, transparency, and innovation.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" variant="hero" className="group">
                <a href="/contact">Contact Investor Relations</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="https://www.anvitagroup.com/" rel="noopener noreferrer" target="_blank">Visit Anvita Group</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative max-w-7xl mx-auto px-6 mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { label: 'Established', value: '2005' },
            { label: 'Projects', value: 'Ongoing + Delivered' },
            { label: 'Focus', value: 'Residential' },
            { label: 'Promise', value: 'On‑time Delivery' },
          ].map((s, i) => (
            <Card key={i} className="shadow-card hover:shadow-elegant transition-all duration-300 rounded-xl">
              <CardContent className="p-6 md:p-7 text-center space-y-1">
                <div className="text-2xl font-bold text-primary font-display">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Content */}
        <section className="mt-12 mb-16 md:mb-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overview */}
          <article className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-primary font-display">Who We Are</h2>
                <p className="text-muted-foreground">
                  With a proven track record since 2005, Anvita Group has become a respected name in residential development. The team blends craftsmanship with modern construction practices, focusing on precision, attention to detail, and customer satisfaction.
                </p>
                <p className="text-muted-foreground">
                  By leveraging the latest tools and technologies, Anvita consistently delivers projects that meet the highest benchmarks for quality and safety, earning enduring trust from homeowners and partners alike.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-semibold text-primary">Vision</h3>
                  </div>
                  <p className="text-muted-foreground">Set the industry benchmark for quality, reliability, performance, trust, and on‑time delivery—designing modern, enduring spaces.</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Rocket className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-semibold text-primary">Mission</h3>
                  </div>
                  <p className="text-muted-foreground">Deliver projects to the highest standards while building strong, transparent relationships with customers and partners.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold text-primary font-display">Expertise</h3>
                </div>
                <p className="text-muted-foreground">End‑to‑end residential development with a focus on gated communities and modern living—supported by rigorous project management and quality control.</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Attention to detail and precision execution</li>
                  <li>Use of contemporary materials and construction technology</li>
                  <li>Customer‑centric design and after‑sales support</li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-primary font-display">Quality & Safety</h3>
                  </div>
                  <p className="text-muted-foreground">Rigorous QC, precision execution, and durable materials across projects.</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-primary font-display">On‑Time Delivery</h3>
                  </div>
                  <p className="text-muted-foreground">Disciplined planning and project controls that keep timelines on track.</p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Handshake className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-primary font-display">Trust & Transparency</h3>
                  </div>
                  <p className="text-muted-foreground">Clear communication and accountability from launch to handover.</p>
                </CardContent>
              </Card>
            </div>
          </article>

          {/* Fast Facts and Timeline */}
          <aside className="space-y-6">
            <Card className="shadow-card bg-gradient-card border-0">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Factory className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold text-primary font-display">Fast Facts</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li><CheckCircle2 className="inline w-4 h-4 mr-2 text-accent" /> Established in 2005</li>
                  <li><CheckCircle2 className="inline w-4 h-4 mr-2 text-accent" /> Quality‑first, on‑time delivery</li>
                  <li><CheckCircle2 className="inline w-4 h-4 mr-2 text-accent" /> Integrity, transparency, accountability</li>
                  <li><CheckCircle2 className="inline w-4 h-4 mr-2 text-accent" /> Innovation‑driven leadership</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary font-display">Timeline</h3>
                <ol className="relative border-l border-border pl-4 space-y-4">
                  <li>
                    <div className="text-sm text-muted-foreground">2005</div>
                    <div className="font-medium text-primary">Founded with a quality‑first vision</div>
                  </li>
                  <li>
                    <div className="text-sm text-muted-foreground">2010s</div>
                    <div className="font-medium text-primary">Growth across residential communities</div>
                  </li>
                  <li>
                    <div className="text-sm text-muted-foreground">2020s</div>
                    <div className="font-medium text-primary">Innovation in design and project management</div>
                  </li>
                  <li>
                    <div className="text-sm text-muted-foreground">Today</div>
                    <div className="font-medium text-primary">Trusted brand focused on on‑time delivery</div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <div className="pt-2">
              <Button asChild size="lg" className="w-full">
                <a href="/contact" aria-label="Contact Anvita Capital Fund LLC">Contact Investor Relations</a>
              </Button>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
