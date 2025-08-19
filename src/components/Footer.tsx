import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold">Anvita Capital</h3>
              <p className="text-white/80 mt-1 leading-relaxed text-sm">
                Strategic investment solutions for sustainable growth and exceptional returns.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold">Contact Info</h4>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>invest@anvitafunds.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 (945) 217-9280</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>Suite #301, 9300 John Hickman Pkwy, Frisco, TX 75035</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-4 md:mt-6 pt-3">
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