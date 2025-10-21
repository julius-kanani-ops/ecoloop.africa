import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send 
} from "lucide-react";
import Logo from "../components/Logo";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Integrate with your backend (e.g., EmailJS, Formspree)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-slate-800 font-sans relative overflow-hidden">
      {/* Subtle eco-pattern bg */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath d=\'m0 0h60v60h-60z\' fill=\'%23f0fdf4\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\' fill=\'%23ecfdf5\'/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-eco-green/10 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-fade-in">
            <Logo />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eco-green leading-tight">
            Contact Us
          </h1>
          <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Got questions about closing the loop? We're here to help turn your ideas into impact. Reach out and let's build a greener Africa together.
          </p>
          <Link
            to="/about"
            className="inline-block bg-eco-green text-white px-8 py-3 rounded-full font-semibold hover:bg-eco-green/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More About Us
          </Link>
        </div>
      </div>

      {/* Contact Info & Form Grid */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 relative z-10">
        {/* Contact Details */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-semibold text-eco-green">Get in Touch</h2>
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@ecoloop.africa", href: "mailto:hello@ecoloop.africa" },
              { icon: Phone, label: "Phone", value: "+234 123 456 789", href: "tel:+234123456789" },
              { icon: MapPin, label: "Address", value: "Nairobi Innovation Hub, Westlands, Nairobi, Kenya", href: "#" },
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-eco-green/10 hover:shadow-md hover:border-eco-green/20 transition-all duration-300 group"
              >
                <contact.icon className="w-6 h-6 text-eco-green group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-medium text-slate-600">{contact.label}</p>
                  <p className="text-slate-700">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
          {/* Map Placeholder - Replace with Google Maps embed */}
          <div className="mt-8 p-4 bg-eco-green/5 rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.762!2d36.815!3d-1.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172f!2sNairobi%20Innovation%20Hub!5e0!3m2!1sen!2ske!4v1630000000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-semibold text-eco-green mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent transition-all resize-none"
                placeholder="Tell us how we can help close the loop..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-eco-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-eco-green/90 disabled:opacity-50 transition-all duration-300 shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
          {submitStatus && (
            <div className={`mt-4 p-4 rounded-lg text-sm ${
              submitStatus === "success" 
                ? "bg-green-50 text-green-700 border border-green-200" 
                : "bg-red-50 text-red-700 border border-red-200"
            }`}>
              {submitStatus === "success" 
                ? "Thanks! We'll get back to you soon." 
                : "Oops, something went wrong. Try again?"
              }
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-eco-green py-16 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Loop?</h2>
          <p className="text-eco-green-100 mb-6 text-lg">Join EcoLoop today and turn waste into wealth.</p>
          <Link
            to="/signup"
            className="inline-block bg-white text-eco-green px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;