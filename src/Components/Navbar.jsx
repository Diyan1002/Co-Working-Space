import React from "react";
import logo from "../assets/Frispes..png"; // adjust path if different

const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Workspace</a></li>
          <li><a href="#" className="hover:text-orange-500">Service</a></li>
          <li><a href="#" className="hover:text-orange-500">Events</a></li>
          <li><a href="#" className="hover:text-orange-500">Reviews</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-orange-500 font-medium hover:underline">
            Log In
          </a>
          <a
            href="#"
            className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
