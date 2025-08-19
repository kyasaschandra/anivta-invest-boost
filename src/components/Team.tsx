import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Atchuta Rao Boppana",
      role: "Fund Manager & Real Estate Visionary",
      initials: "ARB",
      bio: "With over two decades of real estate leadership, Atchuta Rao Boppana has successfully delivered residential, commercial, and mixed-use projects across India and the UAE. As a founding force behind Anvita Group, he has built a reputation for executing large-scale developments that combine modern design, sustainability, and strong financial performance. His leadership is defined by a deep understanding of market dynamics, meticulous project execution, and a commitment to transparency and investor trust. Under his leadership, Anvita Group is currently developing a diverse portfolio of projects in Hyderabad, India, including Anvita Ivana (a premium high-rise gated community), Anvita High9 (an iconic nine-tower sky bridge project), Anvita Parkside (exclusive villa residences), Anvita Commercial (modern office and retail spaces), and Anvita Amari (a mixed-use lifestyle development). These ongoing projects reflect the Group's commitment to innovation, quality, and sustainable community living. Now venturing into the United States real estate market, Rao is spearheading Anvita Homes' expansion into Texas, one of the nation's fastest-growing real estate hubs. Under his leadership, Anvita Homes is launching residential communities and commercial mixed-use developments in strategic growth corridors to meet the region's surging demand. Rao's vision for construction is firmly rooted in sustainability and green architecture, integrating eco-friendly practices, energy efficiency, and responsible material use. He is equally committed to delivering higher and luxury amenities, strict safety protocols, and setting new benchmarks in construction standards. To achieve this, he consistently engages with renowned architects, industry consultants, and global project management teams, ensuring that every Anvita project combines innovation, functionality, and long-term value. In parallel, Rao has launched Anvita Capital Fund, a private real estate debt platform designed to give investors secure, asset-backed opportunities with predictable fixed returns, no FX risk, and flexible 90-day liquidity. His vision for the Fund is to bridge global capital with high-quality real estate projects, creating a secure, scalable, and sustainable investment vehicle that delivers both financial returns and lasting community impact. Through this dual strategy of developing landmark projects under Anvita Homes and financing them via Anvita Capital Fund, Rao is extending his proven expertise to the global investment community, aligning institutional-grade discipline with entrepreneurial agility.",
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
                      <p>
                        With over <span className="font-semibold text-primary">two decades of real estate leadership</span>, <span className="font-semibold text-primary">Atchuta Rao Boppana</span> has successfully delivered residential, commercial, and mixed-use projects across <span className="font-semibold text-primary">India and the UAE</span>. As a founding force behind <span className="font-semibold text-primary">Anvita Group</span>, he has built a reputation for executing large-scale developments that combine <span className="font-semibold text-primary">modern design, sustainability, and strong financial performance</span>. His leadership is defined by a deep understanding of market dynamics, meticulous project execution, and a commitment to <span className="font-semibold text-primary">transparency and investor trust</span>.
                      </p>
                      
                      <p>
                        Under his leadership, <span className="font-semibold text-primary">Anvita Group</span> is currently developing a diverse portfolio of projects in <span className="font-semibold text-primary">Hyderabad, India</span>, including <span className="font-semibold text-primary">Anvita Ivana</span> (a premium high-rise gated community), <span className="font-semibold text-primary">Anvita High9</span> (an iconic nine-tower sky bridge project), <span className="font-semibold text-primary">Anvita Parkside</span> (exclusive villa residences), <span className="font-semibold text-primary">Anvita Commercial</span> (modern office and retail spaces), and <span className="font-semibold text-primary">Anvita Amari</span> (a mixed-use lifestyle development). These ongoing projects reflect the Group's commitment to <span className="font-semibold text-primary">innovation, quality, and sustainable community living</span>.
                      </p>
                      
                      <p>
                        Now venturing into the <span className="font-semibold text-primary">United States real estate market</span>, Rao is spearheading <span className="font-semibold text-primary">Anvita Homes' expansion into Texas</span>, one of the nation's <span className="font-semibold text-primary">fastest-growing real estate hubs</span>. Under his leadership, Anvita Homes is launching residential communities and commercial mixed-use developments in strategic growth corridors to meet the region's surging demand.
                      </p>
                      
                      <p>
                        Rao's vision for construction is firmly rooted in <span className="font-semibold text-primary">sustainability and green architecture</span>, integrating <span className="font-semibold text-primary">eco-friendly practices, energy efficiency, and responsible material use</span>. He is equally committed to delivering higher and luxury amenities, strict safety protocols, and setting new benchmarks in construction standards. To achieve this, he consistently engages with <span className="font-semibold text-primary">renowned architects, industry consultants, and global project management teams</span>, ensuring that every Anvita project combines innovation, functionality, and long-term value.
                      </p>
                      
                      <p>
                        In parallel, Rao has launched <span className="font-semibold text-primary">Anvita Capital Fund</span>, a private real estate debt platform designed to give investors <span className="font-semibold text-primary">secure, asset-backed opportunities with predictable fixed returns, no FX risk, and flexible 90-day liquidity</span>. His vision for the Fund is to bridge global capital with high-quality real estate projects, creating a secure, scalable, and sustainable investment vehicle that delivers both financial returns and lasting community impact.
                      </p>
                      
                      <p>
                        Through this dual strategy of developing landmark projects under Anvita Homes and financing them via Anvita Capital Fund, Rao is extending his proven expertise to the global investment community, aligning institutional-grade discipline with entrepreneurial agility.
                      </p>
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