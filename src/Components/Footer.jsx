import React from "react";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D2C4A] text-gray-300 py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Logo & About */}
        <div className="md:w-2/5">
          <h2 className="text-white text-3xl font-bold mb-4">Frispes</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            We offer comfortable spaces, cozy cafe, high-speed internet,
            spacious parking area and many more for your best workspaces and
            meetings.
          </p>
          <div className="flex space-x-6 text-white text-xl">
            <a href="#" className="hover:text-orange-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-nowrap gap-10 md:gap-20">
          {/* Spaces */}
          <div>
            <h3 className="text-white font-semibold mb-4">Spaces</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Co-working spaces</a></li>
              <li><a href="#" className="hover:text-orange-400">Meeting rooms</a></li>
              <li><a href="#" className="hover:text-orange-400">Event spaces</a></li>
              <li><a href="#" className="hover:text-orange-400">Child playground</a></li>
              <li><a href="#" className="hover:text-orange-400">Cafe & resto</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-400">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400">Help</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium">E.</span> Hello@frispes.com</li>
              <li>
                <span className="font-medium">A.</span> Jalan Jayakatwang No.301,
                Ngasem, Kediri
              </li>
              <li><span className="font-medium">P.</span> (+62) 82334670000</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-left text-xs text-gray-400">
        © {new Date().getFullYear()} Frispes. All rights reserved.
      </div>
    </footer>
  );
}
