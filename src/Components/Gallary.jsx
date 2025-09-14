import { useState } from "react";

import img1 from "../assets/1.png"; 
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

// arrow images
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const images = [img1, img2, img3, img4];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-8 py-10">
      {/* Images Section */}
      <div className="flex items-center gap-4">
        {/* Left Image (Grayscale) */}
        <img
          src={images[(currentIndex + images.length - 1) % images.length]}
          alt="preview"
          className="w-48 h-72 object-cover grayscale rounded-lg"
        />

        {/* Main Image */}
        <img
          src={images[currentIndex]}
          alt="main"
          className="w-72 h-96 object-cover rounded-lg shadow-lg"
        />

        {/* Two Small Images */}
        <div className="flex flex-col gap-4">
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="side1"
            className="w-48 h-32 object-cover rounded-lg"
          />
          <img
            src={images[(currentIndex + 2) % images.length]}
            alt="side2"
            className="w-48 h-32 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Text + Arrows */}
      <div className="text-center md:text-left">
        <p className="text-gray-500 text-sm mb-1">Frispes gallery</p>
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4 leading-snug">
          Immersive beautiful <br />
          co-working space gallery
        </h2>

        {/* Arrows */}
        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <button
            onClick={prevSlide}
            className="transition transform hover:scale-110"
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="w-6 h-6 md:w-14 md:h-4"
            />
          </button>
          <button
            onClick={nextSlide}
            className="transition transform hover:scale-110"
          >
            <img
              src={rightArrow}
              alt="Next"
              className="w-6 h-6 md:w-16 md:h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
