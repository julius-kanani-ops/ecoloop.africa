import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white font-sans border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        {/* Reusable Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { path: "/about", label: "About Us" },
            { path: "/how-it-works", label: "How It Works" },
            { path: "/testimonials", label: "Testimonials" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-slate-600 text-sm pb-1 border-b-2 border-transparent hover:border-eco-green hover:text-slate-900 transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
