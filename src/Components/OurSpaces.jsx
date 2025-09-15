import React, { useState } from "react";
import teamImg from "../assets/staff.png";
import privateImg from "../assets/staff1.png";
import officeImg from "../assets/team.png";
import linesImg from "../assets/Mask.png"; // decorative lines asset

// arrow images
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const OurSpaces = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      id: 0,
      title: "Working with team",
      img: teamImg,
      description: "",
    },
    {
      id: 1,
      title: "Private Space",
      img: privateImg,
      description:
        "Comfortable space. Full speed wifi, Free coffee & Snack and many more",
      highlight: true,
    },
    {
      id: 2,
      title: "Custom Office",
      img: officeImg,
      description: "",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-16 md:py-12 mt-[60px] md:mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading + Paragraph + Arrows */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10375C] whitespace-nowrap text-center md:text-left">
              Our Spaces
            </h2>
            <p className="mt-3 md:mt-0 md:ml-8 text-gray-500 max-w-lg text-sm sm:text-base md:text-lg text-center md:text-left">
              Our space is designed to give you a different experience{" "}
              <br className="hidden sm:block" />
              when working with your team or personally
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <img
                src={leftArrow}
                alt="Previous"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <img
                src={rightArrow}
                alt="Next"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-12 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`relative w-[85%] sm:w-[300px] h-[280px] sm:h-[350px] shadow-lg transition-all duration-300 rounded-lg overflow-hidden ${
                slide.highlight
                  ? "bg-[#10375C] text-white scale-105"
                  : "bg-white text-black"
              }`}
            >
              {/* Normal images */}
              <img
                src={slide.img}
                alt={slide.title}
                className={`w-full h-full object-cover ${
                  slide.highlight ? "hidden" : "block"
                }`}
              />

              {/* Highlighted middle card */}
              {slide.highlight && (
                <div className="relative p-6 flex flex-col justify-center items-center h-full text-center">
                  {/* Decorative lines image */}
                  <img
                    src={linesImg}
                    alt="lines decoration"
                    className="absolute top-4 right-4 w-12 sm:w-16 opacity-70"
                  />

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {slide.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-gray-200 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  <button className="absolute bottom-0 left-0 right-0 bg-[#FF5722] hover:bg-orange-600 text-xs sm:text-sm text-white font-semibold py-3">
                    Check availability →
                  </button>
                </div>
              )}

              {/* Side cards bottom bar with arrow */}
              {!slide.highlight && (
                <div className="absolute bottom-0 left-0 right-0 bg-orange-500 text-white font-semibold flex items-center justify-center h-10 group overflow-hidden">
                  <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover:translate-x-1 text-xs sm:text-sm">
                    <span className="whitespace-nowrap overflow-hidden transition-all duration-300 group-hover:max-w-[200px] max-w-0">
                      Check availability
                    </span>
                    →
                  </span>
                </div>
              )}

              {/* Caption */}
              {!slide.highlight && (
                <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium">
                  {slide.title}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-8 sm:mt-10">
          <span className="text-orange-500 font-bold">{activeIndex + 1}</span>
          <span className="text-gray-400">/ {slides.length}</span>
        </div>
      </div>
    </section>
  );
};

export default OurSpaces;
