import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons
import logo from "../assets/Frispes..png"; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white  fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
        </div>

        {/* Desktop Menu (unchanged) */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Workspace</a></li>
          <li><a href="#" className="hover:text-orange-500">Service</a></li>
          <li><a href="#" className="hover:text-orange-500">Events</a></li>
          <li><a href="#" className="hover:text-orange-500">Reviews</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
        </ul>

        {/* Desktop Auth (unchanged) */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-black focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <ul className="flex flex-col space-y-3 text-black font-medium">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">Workspace</a></li>
            <li><a href="#" className="hover:text-orange-500">Service</a></li>
            <li><a href="#" className="hover:text-orange-500">Events</a></li>
            <li><a href="#" className="hover:text-orange-500">Reviews</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
          </ul>
          <div className="flex flex-col space-y-3 pt-4">
            <a href="#" className="text-orange-500 font-medium hover:underline">
              Log In
            </a>
            <a
              href="#"
              className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600 transition text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
