import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    company: "",
    investmentAmount: "",
    message: ""
  });

  const countryCodes = [
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+61", country: "Australia" },
    { code: "+971", country: "UAE" },
    { code: "+65", country: "Singapore" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('investment_enquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            country_code: formData.countryCode || null,
            phone_number: formData.phone || null,
            company: formData.company || null,
            investment_interest: formData.investmentAmount || null,
            message: formData.message,
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was an issue submitting your inquiry. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message Sent",
        description: "Thank you for your interest. Our team will contact you within 24 hours.",
      });
      setFormData({ name: "", email: "", countryCode: "", phone: "", company: "", investmentAmount: "", message: "" });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive",
      });
    }
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
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Investment Inquiry</CardTitle>
              <div className="bg-muted/50 rounded-lg p-4 mt-4">
                <p className="text-muted-foreground text-sm">
                  Reach out to us to request a copy of our Private Placement Memorandum (PPM) and detailed investor materials. 
                  Our team will be happy to provide further information and guide you through the process.
                </p>
              </div>
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
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number</Label>
                  <div className="flex gap-2">
                    <Select value={formData.countryCode} onValueChange={(value) => setFormData({...formData, countryCode: value})}>
                      <SelectTrigger className="w-32 bg-background border-input">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border shadow-lg z-50">
                        {countryCodes.map((item) => (
                          <SelectItem key={item.code} value={item.code} className="hover:bg-accent">
                            {item.code} {item.country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="123-456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="flex-1"
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