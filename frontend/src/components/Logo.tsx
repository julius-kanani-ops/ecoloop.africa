import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/ecoloop-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string; // ✅ Added for external styling (fixes the TypeScript error)
}

const Logo: React.FC<LogoProps> = ({ size = "md", showText = false, className }) => {
  const sizes = {
    sm: "w-10 max-w-[60px]",
    md: "w-[10vw] max-w-[100px] min-w-[60px]",
    lg: "w-[14vw] max-w-[140px] min-w-[80px]",
  };

  return (
    <Link to="/" className={`flex items-center space-x-2 group ${className || ""}`}>
      <img
        src={logo}
        alt="EcoLoop Africa Logo"
        className={`${sizes[size]} h-auto transition-transform duration-300 group-hover:scale-105`}
      />
      {showText && (
        <span className="text-eco-green font-bold text-lg md:text-xl tracking-tight group-hover:text-eco-green-dark transition-colors duration-300">
          EcoLoop Africa
        </span>
      )}
    </Link>
  );
};

export default Logo;
