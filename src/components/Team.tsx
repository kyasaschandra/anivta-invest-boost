import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Rao Boppana",
      role: "Manager & Strategic Lead",
      image: teamMember1,
      bio: "With a proven track record in global real estate development and investment, Rao Boppana provides strategic direction for Anvita Capital Fund LLC, ensuring every project meets the highest standards of quality, security, and investor value.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarita Kakarla",
      role: "Manager & Operations Lead",
      image: teamMember2,
      bio: "Overseeing U.S. operations, banking, and administration, Sarita Kakarla ensures the fund's day-to-day activities run seamlessly, enabling timely execution, transparent reporting, and efficient investor communications.",
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role} at Anvita Capital Fund LLC`}
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

      </div>
    </section>
  );
};

export default Team;