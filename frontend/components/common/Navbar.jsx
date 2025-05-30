import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-lg fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <Link
          to="/"
          className="text-2xl font-noto-sans-jp font-bold text-[#2C5282]"
        >
          福祉M&A支援
        </Link>
        <div className="flex space-x-8">
          <Link
            to="/property-listings"
            className="font-noto-sans-jp text-gray-700 hover:text-[#2C5282]"
          >
            物件一覧
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
