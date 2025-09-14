import React from "react";
import officeImg from "../assets/Office.png"; // make sure filename matches

const Intro = () => {
  return (
    <section className="w-full bg-white relative">
      <div className="max-w-7xl mt-16 mx-auto px-6 py-12">
        {/* Top Text Area (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Heading */}
          <div>
            <div className="flex items-center mb-2">
              <p className="text-sm text-[#222831] font-lato font-bold">
                Introducing
              </p>
              <span className="inline-block w-16 h-0.5 bg-gray-600 rounded ml-2"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-gray-900">
              <span className="text-orange-500">Revolutionary</span>{" "}
              co-working space to realize your innovation
            </h1>
          </div>

          {/* Right: Paragraph */}
          <div className="text-[#6A6A6A] font-Lato mt-6 md:mt-8 text-sm sm:text-base leading-relaxed">
            <p>
              At Frispes, we don’t just provide workspaces, we create an<br /> ecosystem
               where creativity thrives, connections flourish,<br /> and every individual 
               is empowered to achieve<br /> their highest potential. 
            </p>
          </div>
        </div>
      </div>

      {/* Image (attached to right) */}
      <div className="relative flex justify-end">
        <div className="w-full md:w-[70%] h-[300px] sm:h-[400px] md:h-[500px] relative">
          <img
            src={officeImg}
            alt="Office workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Box (Responsive) */}
      <div
        className="
          absolute 
          left-1/2 -translate-x-1/2 bottom-[-40%] 
          w-[90%] sm:w-[70%] 
          md:left-32 md:translate-x-0 md:bottom-6 md:w-[30%] md:max-w-sm
          bg-[#10375C] text-white 
          p-6 sm:p-8 
          shadow-lg rounded-lg
        "
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 mt-2 text-center md:text-left">
          Find your space now
        </h2>
        <form className="space-y-4">
          {/* Location */}
          <select className="w-full px-3 py-3 bg-[#0D2C4A] text-white rounded-md text-sm sm:text-base">
            <option>Malang, Indonesia</option>
            <option>Jakarta, Indonesia</option>
            <option>Bandung, Indonesia</option>
            <option>Surabaya, Indonesia</option>
            <option>Bali, Indonesia</option>
          </select>

          {/* Type */}
          <select className="w-full px-3 py-3 bg-[#0D2C4A] text-white rounded-md text-sm sm:text-base">
            <option>Private Office</option>
            <option>Dedicated Desk</option>
            <option>Hot Desk</option>
            <option>Meeting Room</option>
            <option>Event Space</option>
          </select>

          {/* Date */}
          <select className="w-full px-3 py-3 bg-[#0D2C4A] text-white rounded-md text-sm sm:text-base">
            <option>9 Aug 2020</option>
            <option>10 Aug 2020</option>
            <option>11 Aug 2020</option>
            <option>12 Aug 2020</option>
            <option>13 Aug 2020</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#FF5722] hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md text-sm sm:text-base"
          >
            FIND MY SPACE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Intro;
