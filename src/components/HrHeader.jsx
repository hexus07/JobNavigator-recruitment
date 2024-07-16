import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">HR Dashboard</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Overview
          </Link>
          <Link to="/companies" className="text-white hover:text-gray-300">
            Company
          </Link>
          <Link to="/positions" className="text-white hover:text-gray-300">
            Positions
          </Link>
          <Link to="/answers" className="text-white hover:text-gray-300">
            Answers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
