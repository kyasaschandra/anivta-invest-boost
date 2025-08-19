import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Anvita Capital</h3>
              <p className="text-white/80 mt-2 leading-relaxed">
                Strategic investment solutions for sustainable growth and exceptional returns.
              </p>
            </div>
          </div>



          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>invest@anvitafunds.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+1 (945) 217-9280</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Suite #301, 9300 John Hickman Pkwy<br />Frisco, TX 75035</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-6 md:mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Anvita Capital Fund LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/60">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Legal Disclaimers</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-white/50 text-center md:text-left">
            Investment involves risk. Past performance does not guarantee future results. 
            Please read all investment materials carefully before investing.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;