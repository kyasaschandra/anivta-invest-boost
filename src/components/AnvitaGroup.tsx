import { Building2, Award, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AnvitaGroup = () => {
  const achievements = [
    {
      icon: Building2,
      title: "Since 2005",
      description: "Nearly two decades of proven track record in real estate development"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to delivering highest quality on every project"
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Dedicated professionals with wealth of experience and knowledge"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Using latest technology and best practices to exceed expectations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            About Anvita Group
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With a proven track record, we started our journey in 2005. Ever since then, we have grown to become a well-respected and trusted name in real estate development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Redefining Urban Landscapes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We pride ourselves on our commitment to excellence and strive to achieve the highest quality on every project. Our team of dedicated professionals, with their wealth of experience and knowledge, are trained to pay attention to the smallest details.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We ensure that every project we undertake is completed with precision and accuracy, using the latest technology and best practices to deliver exceptional results that continue to exceed our customers' expectations.
            </p>
            <div className="text-xl font-semibold text-primary">
              We are Anvita Group!
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Our Legacy in Dubai
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From our headquarters in Dubai, we have been redefining urban landscapes and creating exceptional living spaces that stand as testaments to our unwavering commitment to quality and innovation.
          </p>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Anvita Group",
              "foundingDate": "2005",
              "description": "A well-respected and trusted name in real estate development, committed to excellence and delivering highest quality projects.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "UAE"
              },
              "sameAs": [
                "https://anvitagroup.com/"
              ]
            })
          }}
        />
      </div>
    </section>
  );
};

export default AnvitaGroup;