import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // you can replace with your own arrow image

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqs = [
    { id: 0, question: "How do I know if a space is available?" },
    { id: 1, question: "How do I book a space?" },
    { id: 2, question: "How do reviews work?" },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#10375C] mb-12">
          Find the answers to anything <br /> you need in our Help Center
        </h2>

        {/* FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`relative  shadow-md transition-all duration-300 p-10 flex flex-col items-center justify-center min-h-[160px] ${
                activeIndex === index
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black border border-white"
              }`}
            >
              <p className="text-base font-medium text-center">
                {faq.question}
              </p>

              {/* Dropdown button */}
              <button
                onClick={() => setActiveIndex(index)}
                className={`absolute -bottom-5 flex items-center justify-center w-10 h-10 transition ${
                  activeIndex === index
                    ? "bg-white text-orange-500"
                    : "bg-orange-500 text-white"
                }`}
              >
                <ChevronDown size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* More questions */}
        <button className="text-orange-500 font-medium flex items-center gap-2 mx-auto hover:underline">
          More questions <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default HelpCenter;
