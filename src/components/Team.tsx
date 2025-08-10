import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Atchuta Rao Boppana",
      role: "Managing Partner & CEO",
      image: teamMember1,
      bio: "20+ years in investment banking and private equity. Former Goldman Sachs VP with expertise in growth-stage investments.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarita Kakarla",
      role: "Chief Investment Officer",
      image: teamMember2,
      bio: "Former BlackRock portfolio manager with deep expertise in ESG investing and risk management across global markets.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced leadership team brings decades of combined expertise in investment management, 
            portfolio optimization, and strategic business development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4 pt-4">
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.twitter}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">Dr. James Harrison</h4>
              <p className="text-sm text-muted-foreground">Former Federal Reserve Board Member</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">Lisa Thompson</h4>
              <p className="text-sm text-muted-foreground">Ex-CEO, Fortune 500 Tech Company</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">Robert Kim</h4>
              <p className="text-sm text-muted-foreground">Venture Capital Pioneer, 30+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;