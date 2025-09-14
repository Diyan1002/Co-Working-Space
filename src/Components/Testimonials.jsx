import React, { useState } from "react";
import pedroImg from "../assets/pedro.png";
import raymondImg from "../assets/raymond.png";
import yuliImg from "../assets/yuli.png";

// arrow images
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Our team has been working at Frispes for almost 2 months because our office still closed. During working at Frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet in there. Thank you for Frispes and team.",
      name: "Pedro Ibanez",
      role: "UI Designer at Google",
      img: pedroImg,
    },
    {
      text: "The high-speed internet at Frispes was so amazing, I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what I need because I used to work as freelancer for a long time.",
      name: "Raymond Thual",
      role: "Professional Freelancer",
      img: raymondImg,
    },
    {
      text: "Just three words : Frispes is Awesome!",
      name: "Yuli Berliam",
      role: "iOS Dev at Tokopedia",
      img: yuliImg,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm text-[#222831] mb-2 flex items-center">
              Reviews
              <span className="inline-block w-12 h-[1px] bg-[#222831] ml-2"></span>
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#10375C]">
              What our customers are saying
            </h2>
          </div>

          {/* Arrows with images */}
          <div className="flex items-center mr-8 gap-4">
            <button
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0
                    ? testimonials.length - 1
                    : activeIndex - 1
                )
              }
              className="transition transform hover:scale-110"
            >
              <img
                src={leftArrow}
                alt="Previous"
                className="w-6 h-6 md:w-14 md:h-4"
              />
            </button>
            <button
              onClick={() =>
                setActiveIndex(
                  activeIndex === testimonials.length - 1
                    ? 0
                    : activeIndex + 1
                )
              }
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

        {/* Testimonials Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-end">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`p-6 rounded-md shadow-md flex flex-col justify-between transition-all duration-500 ${
                activeIndex === index
                  ? "bg-[#10375C] text-white"
                  : "bg-[#10375C]/90 text-white/90"
              }`}
            >
              {/* Testimonial text */}
              <p className="text-sm mb-6 leading-relaxed flex-1">{t.text}</p>

              {/* Image + name + role BELOW */}
              <div className="flex flex-row items-center text-left">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-sm">{t.name}</h4>
                  <p className="text-xs opacity-80">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination centered below */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-[3px] w-6 rounded-sm cursor-pointer transition-all ${
                  activeIndex === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;