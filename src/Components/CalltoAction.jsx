import React from "react";

// Import assets
import manImg from "../assets/men.png"; // the man’s picture
import linesImg from "../assets/lines.png"; // diagonal lines background

export default function CallToAction() {
  return (
    <div className="bg-[#0a2e52] h-96 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 relative overflow-hidden">
      {/* Left Content */}
      <div className="text-white max-w-lg z-10">
        <p className="uppercase tracking-wide text-sm mb-3">Become a member</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Ready to try different <br /> work experience now?
        </h2>
        <p className="text-gray-300 mb-6">
          Get the best working experience that you never feel before
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-sm font-semibold">
          SIGN UP NOW
        </button>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 mr-40 md:mt-0">
        {/* Diagonal lines behind */}
        <img
          src={linesImg}
          alt="Decorative lines"
          className="absolute top-0 right-0 mt-20 w-80 h-80 -z-0"
        />
        {/* Man Image */}
        <img
          src={manImg}
          alt="Smiling man"
          className="relative w-80 h-96 z-10"
        />
      </div>
    </div>
  );
}
