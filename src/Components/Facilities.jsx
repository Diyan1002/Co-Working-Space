import React, { useState } from "react";
import cafeImg from "../assets/cafe.png";
import parkingImg from "../assets/Parking.jpg";
import spacesImg from "../assets/Spaces.jpg";
import playgroundImg from "../assets/Playground.jpg";
import outdoorImg from "../assets/Outdoor.jpg";

const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default "Cozy cafe"

  const facilities = [
    { name: "Spacious parking area", img: parkingImg },
    { name: "Comfortable spaces", img: spacesImg },
    { name: "Cozy cafe", img: cafeImg },
    { name: "Child playground", img: playgroundImg },
    { name: "Outdoor spaces", img: outdoorImg },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          {/* Title */}
          <p className="text-sm text-[#222831] mb-2 flex items-center">
            Our Facilities
            <span className="inline-block w-12 h-[1px] bg-gray-400 ml-2"></span>
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#10375C] leading-snug mb-8">
            All facilities are designed to <br className="hidden md:block" /> meet all your needs
          </h2>

          {/* Facilities List */}
          <div className="relative">
            {/* Vertical line + pagination (only on md+) */}
            <div className="absolute -left-5 top-0 hidden md:flex flex-col items-center">
              <span className="w-[2px] h-28 bg-gray-300 relative">
                <span
                  className="absolute w-[2px] bg-orange-500 transition-all duration-300"
                  style={{
                    top: `${activeIndex * 28}px`,
                    height: "24px",
                  }}
                ></span>
              </span>
              <span className="mt-4 text-xs text-gray-500 rotate-[-90deg]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(facilities.length).padStart(2, "0")}
              </span>
            </div>

            {/* Options */}
            <div className="flex flex-col w-full max-w-xs md:ml-6 space-y-3 overflow-x-auto md:overflow-visible">
              {facilities.map((facility, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-4 py-2 rounded transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#FF5722] text-white font-medium shadow"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {facility.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full">
          <img
            src={facilities[activeIndex].img}
            alt="Facility"
            className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
