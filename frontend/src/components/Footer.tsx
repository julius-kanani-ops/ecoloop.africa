import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone 
} from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your email service (e.g., Mailchimp)
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-emerald-50/50 border-t border-ash-gray/50 relative overflow-hidden">
      {/* Subtle eco-wave pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-green/20 via-transparent to-eco-green/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* 1️⃣ Brand Section */}
        <div className="animate-fade-in">
          <Logo size="sm" showText={false} />
          <p className="mt-4 text-slate-600 text-sm leading-relaxed max-w-sm">
            Building a cleaner, wealthier Africa — connecting people who want to
            earn from waste with businesses that buy and repurpose recyclable
            materials.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div className="animate-fade-in animation-delay-200">
          <h3 className="text-slate-900 font-semibold mb-4 text-base flex items-center">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/about", label: "About Us", icon: "📖" },
              { to: "/how-it-works", label: "How It Works", icon: "🔄" },
              { to: "/testimonials", label: "Testimonials", icon: "⭐" },
              { to: "/contact", label: "Contact", icon: "💬" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to}
                  className="text-slate-600 hover:text-eco-green flex items-center gap-2 transition-all duration-300 hover:translate-x-1 group"
                >
                  <span className="text-eco-green/70 group-hover:text-eco-green">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Connect Section */}
        <div className="animate-fade-in animation-delay-400">
          <h3 className="text-slate-900 font-semibold mb-4 text-base">Connect With Us</h3>
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
            {[
              { href: "#", icon: Facebook, label: "Facebook" },
              { href: "#", icon: Twitter, label: "X (formerly Twitter)" },
              { href: "#", icon: Instagram, label: "Instagram" },
              { href: "#", icon: Linkedin, label: "LinkedIn" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                className="text-slate-600 hover:text-eco-green transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          {/* Contact Details */}
          <div className="space-y-2 text-xs text-slate-500">
            <a href="mailto:hello@ecoloop.africa" className="flex items-center gap-2 hover:text-eco-green transition-colors">
              <Mail className="w-4 h-4" />
              hello@ecoloop.africa
            </a>
            <a href="tel:+234123456789" className="flex items-center gap-2 hover:text-eco-green transition-colors">
              <Phone className="w-4 h-4" />
              +234 123 456 789
            </a>
          </div>
        </div>

        {/* 4️⃣ Newsletter */}
        <div className="animate-fade-in animation-delay-600 md:col-span-2 lg:col-span-1">
          <h3 className="text-slate-900 font-semibold mb-4 text-base">Join the Loop</h3>
          <p className="text-slate-600 text-sm mb-4 max-w-xs">
            Get tips on earning from waste and updates on Africa's green revolution.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="w-full bg-eco-green text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-eco-green/90 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-ash-gray/50 mt-8 pt-6">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p className="order-2 md:order-1">© {new Date().getFullYear()} EcoLoop Africa. All rights reserved.</p>
          <div className="space-x-6 mt-3 md:mt-0 order-1 md:order-2 flex items-center">
            <Link to="/privacy" className="hover:text-eco-green transition-colors flex items-center gap-1">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-eco-green transition-colors flex items-center gap-1">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;