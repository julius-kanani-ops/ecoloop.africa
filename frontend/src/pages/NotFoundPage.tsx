import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const NotFoundPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-slate-50 text-center px-6">
      <Logo className="w-20 mb-4" />

      <h1 className="text-4xl font-bold text-eco-green mb-2">404</h1>
      <p className="text-slate-600 text-lg mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-block bg-eco-green text-white px-6 py-2 rounded-lg hover:bg-eco-green-dark transition-all duration-300"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
