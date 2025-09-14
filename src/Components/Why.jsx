import React from "react";

// Import your icons from assets
import meetingIcon from "../assets/meeting.png";
import eventIcon from "../assets/event.png";
import countriesIcon from "../assets/countries.png";
import speedIcon from "../assets/speed.png";
import mentorsIcon from "../assets/mentors.png";
import communityIcon from "../assets/community.png";

const WhyFrispes = () => {
  const stats = [
    { id: 1, icon: meetingIcon, value: "500+", label: "Meeting rooms" },
    { id: 2, icon: eventIcon, value: "100+", label: "Event spaces" },
    { id: 3, icon: countriesIcon, value: "60+", label: "Countries" },
    { id: 4, icon: speedIcon, value: "500 Mbps", label: "Internet speed" },
    { id: 5, icon: mentorsIcon, value: "5K+", label: "Startup mentors" },
    { id: 6, icon: communityIcon, value: "200+", label: "Communities inside" },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* Left side - Stats */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {stats.map((item) => (
            <div key={item.id} className="flex items-center space-x-3 sm:space-x-4">
              {/* Icon */}
              <img src={item.icon} alt={item.label} className="w-7 h-7 sm:w-8 sm:h-8" />

              {/* Text beside icon */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#10375C]">
                  {item.value}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Text content */}
        <div className="bg-[#10375C] text-white w-full p-6 sm:p-8 md:p-16">
          <p className="text-xs sm:text-sm uppercase tracking-wide opacity-80 mb-2">
            Why Frispes
            <span className="inline-block w-10 sm:w-12 h-[1px] bg-white ml-2 align-middle"></span>
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-4">
            We revolutionize your workspace
          </h2>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
            With a decade of insights and expertise, we’re decided to reimagine
            co-working space, designed to help a new startup grow up and realize
            their ideas so they can give a positive impacts on many people
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyFrispes;
