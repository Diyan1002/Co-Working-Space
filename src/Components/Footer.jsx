import React from "react";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D2C4A] text-gray-300 py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & About */}
        <div className="md:w-2/5">
          <h2 className="text-white text-3xl font-bold mb-4">Frispes</h2>
          <p className="text-sm leading-relaxed mb-6">
            We offer comfortable spaces, cozy<br /> cafe, high-speed internet, spacious<br />
            parking area and many more for<br /> your best workspaces and meetings
          </p>
          <div className="flex space-x-4 text-white text-lg">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20">
          {/* Spaces */}
          <div>
            <h3 className="text-white font-semibold mb-4">Spaces</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Co-working spaces</a></li>
              <li><a href="#">Meeting rooms</a></li>
              <li><a href="#">Event spaces</a></li>
              <li><a href="#">Child playground</a></li>
              <li><a href="#">Cafe & resto</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Help</a></li>
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
    </footer>
  );
}
