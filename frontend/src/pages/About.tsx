import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Sparkles, 
  Leaf 
} from "lucide-react";
import Logo from "../components/Logo";

const About: React.FC = () => {
  return (
    <section className="bg-white text-slate-800 font-sans relative overflow-hidden">
      {/* Subtle eco-pattern bg - Fixed URL with single quotes */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath d=\'m0 0h60v60h-60z\' fill=\'%23f0fdf4\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\' fill=\'%23ecfdf5\'/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-eco-green/10 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-fade-in">
            <Logo />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eco-green leading-tight">
            About EcoLoop Africa
          </h1>
          <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering communities through sustainable recycling and responsible
            waste management. At EcoLoop, we believe in creating a cleaner,
            greener Africa — one loop at a time.
          </p>
          <Link
            to="/get-involved"
            className="inline-block bg-eco-green text-white px-8 py-3 rounded-full font-semibold hover:bg-eco-green/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Join the Movement
          </Link>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 relative z-10">
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-eco-green" />
            <h2 className="text-3xl font-semibold text-eco-green">Our Mission</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg">
            Our mission is to build a sustainable circular economy in Africa by
            connecting individuals, communities, and organizations through
            eco-conscious recycling initiatives. We aim to transform waste into
            opportunity — promoting environmental awareness, green innovation,
            and economic empowerment.
          </p>
        </div>

        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-eco-green" />
            <h2 className="text-3xl font-semibold text-eco-green">Our Vision</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg">
            We envision an Africa where sustainability is not an afterthought
            but a way of life. A continent where technology, innovation, and
            community work hand in hand to close the waste loop for a cleaner,
            healthier planet.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="relative bg-eco-green/5 py-20 z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-eco-green animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Sustainability", desc: "Every action we take is designed to protect the environment and sustain natural resources for future generations." },
              { icon: Sparkles, title: "Innovation", desc: "We leverage modern technology to make recycling accessible, efficient, and rewarding for everyone." },
              { icon: Users, title: "Community", desc: "We collaborate with people at all levels — from households to cities — to create real, lasting environmental impact." },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-sm border border-eco-green/10 hover:shadow-md hover:border-eco-green/20 transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-fade-in" 
                style={{ animationDelay: `${(idx + 1) * 0.2}s` }}
              >
                <value.icon className="w-12 h-12 text-eco-green mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Spotlight */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Founder Image */}
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img
            src="https://yt3.googleusercontent.com/bBlJGt-1P09ZW95f1RReKoPbribrjkxzMebRCTg_t5KPY3RG9IjBGoKzggK3tChtBW_eSqdkig=s900-c-k-c0x00ffffff-no-rj"
            alt="Julius Kanani, Founder of EcoLoop Africa"
            className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover border-4 border-eco-green/20 hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        
        {/* Bio & Powerful Message */}
        <div className="order-1 md:order-2 space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-semibold text-eco-green flex items-center gap-3">
            <span className="w-2 h-2 bg-eco-green rounded-full"></span>
            Meet Our Founder
          </h2>
          <h3 className="text-2xl font-bold text-slate-900">Julius Kanani</h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            As the visionary behind EcoLoop Africa, Julius brings over a decade of experience in sustainable development and tech innovation to the fight against waste. From Nairobi's bustling streets to pan-African initiatives, his passion for turning challenges into opportunities drives our mission forward.
          </p>
          {/* Powerful Message Quote */}
          <blockquote className="border-l-4 border-eco-green pl-6 italic text-slate-600 bg-eco-green/5 p-6 rounded-r-2xl">
            "Waste isn't Africa's burden; it's our blueprint for prosperity. At EcoLoop, we're not just recycling materials—we're recycling futures, empowering communities to build wealth from what others discard."
          </blockquote>
          <p className="text-sm text-slate-500">- Julius Kanani, Founder</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-eco-green py-16 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Close the Loop?</h2>
          <p className="text-eco-green-100 mb-6 text-lg">Join thousands transforming waste into opportunity across Africa.</p>
          <Link
            to="/signup"
            className="inline-block bg-white text-eco-green px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;