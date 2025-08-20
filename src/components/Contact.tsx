import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    investmentAmount: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", investmentAmount: "", message: "" });
  };

  return (
    <section id="investment-inquiry" className="snap-start py-10 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Accredited Investor Opportunities
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore secured, fixed-income real estate debt opportunities with Anvita Capital Fund LLC. 
            Contact our team to learn about our asset-backed investment structure.
          </p>
          <div className="bg-muted/50 rounded-lg p-6 mt-8 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-center">
              Reach out to us to request a copy of our Private Placement Memorandum (PPM) and detailed investor materials. 
              Our team will be happy to provide further information and guide you through the process.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Investment Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name*</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input 
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="investment">Investment Amount Interest</Label>
                    <Input 
                      id="investment"
                      placeholder="e.g., $500K - $1M"
                      value={formData.investmentAmount}
                      onChange={(e) => setFormData({...formData, investmentAmount: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea 
                    id="message"
                    rows={6}
                    placeholder="Tell us about your investment goals and any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;