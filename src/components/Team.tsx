import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Team = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  
  const teamMembers = [
    {
      name: "Atchuta Rao Boppana",
      role: "Fund Manager & Real Estate Visionary",
      initials: "ARB",
      bio: {
        paragraph1: "Atchuta Rao Boppana is the driving force behind the launch of Anvita Capital Fund, a private real estate debt platform designed to provide investors with secure, asset-backed opportunities that deliver predictable fixed returns, no FX risk, and flexible 90-day liquidity. His vision for the Fund is to bridge global capital with high-quality real estate projects, building a secure, scalable, and sustainable investment vehicle that generates reliable financial returns while creating lasting community impact.",
        paragraph2: "With over two decades of real estate leadership, Rao has successfully delivered residential, commercial, and mixed-use developments across India and the UAE. As a founding force behind Anvita Group, he has established a reputation for executing large-scale projects that combine modern design, sustainable practices, and strong financial performance. His leadership is characterized by a deep understanding of market dynamics, meticulous project execution, and a commitment to transparency and investor trust.",
        paragraph3: "Under his leadership, Anvita Group is currently developing a diverse portfolio of projects in Hyderabad, India, including Anvita Ivana (a premium high-rise gated community), Anvita High9 (an iconic nine-tower sky bridge project), Anvita Parkside (exclusive villa residences), Anvita Commercial (modern office and retail spaces), and Anvita Amari (a mixed-use lifestyle development). These ongoing projects highlight the Group's commitment to innovation, quality, and sustainable community living.",
        paragraph4: "Now expanding into the United States real estate market, Rao is spearheading Anvita Homes' entry into Texas, one of the country's fastest-growing real estate hubs. The Texas pipeline includes residential communities and commercial mixed-use developments in key growth corridors, designed to meet rising demand while setting new standards of design and delivery.",
        paragraph5: "Rao's vision for construction emphasizes sustainability, green architecture, energy efficiency, and responsible material use, while integrating luxury amenities, strict safety protocols, and next-generation construction standards. He partners with renowned architects, industry consultants, and global project management teams to ensure every Anvita project delivers innovation, functionality, and long-term value.",
        paragraph6: "Through this dual approach of financing via Anvita Capital Fund and developing under Anvita Homes, Rao is extending his proven expertise to the global investment community—aligning institutional-grade discipline with entrepreneurial agility."
      },
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section className="snap-start py-10 md:py-16 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guided by strategic vision and operational excellence, the leadership team of Anvita Capital Fund LLC combines global real estate expertise with disciplined fund management to deliver secure, fixed-income opportunities for investors.
          </p>
        </div>

        {/* Team Profile */}
        <div className="max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Header Section */}
                  <div className="text-center space-y-3">
                    <h3 className="text-3xl font-bold text-primary">{member.name}</h3>
                    <p className="text-xl text-accent font-medium">{member.role}</p>
                  </div>
                  
                  {/* Content Section - Full Width */}
                  <div className="w-full">
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                      <p>{member.bio.paragraph1}</p>
                      <p>{member.bio.paragraph2}</p>
                      
                      {showFullBio && (
                        <>
                          <p>{member.bio.paragraph3}</p>
                          <p>{member.bio.paragraph4}</p>
                          <p>{member.bio.paragraph5}</p>
                          <p>{member.bio.paragraph6}</p>
                        </>
                      )}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button 
                        variant="outline" 
                        onClick={() => setShowFullBio(!showFullBio)}
                        className="px-6 py-2"
                      >
                        {showFullBio ? "Read Less" : "Read More"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;