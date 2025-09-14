import React from "react";

// Import your images from assets
import eventImg from "../assets/event1.png";
import workspaceImg from "../assets/speaker.png";
import remoteWorkImg from "../assets/routine.png";
import routineImg from "../assets/coworking.png";
import coworkingImg from "../assets/remotework.png";
import speakerImg from "../assets/workspace.png";

export default function NewsSection() {
  return (
    <div className="bg-white px-6 py-10">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-3xl font-semibold text-[#10375C]">
          News, events and insights for you
        </h2>
        <a
          href="#"
          className="text-orange-500 text-sm font-medium hover:underline flex items-center gap-1"
        >
          See more <span>→</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First row: Big section + Minimal workspace attached */}
        <div className="md:col-span-3 flex flex-col md:flex-row">
          {/* Event block (2/3 width) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-sm">
            <img
              src={eventImg}
              alt="Google I/O"
              className="w-full h-80 object-cover"
            />
            <div className="flex flex-col justify-between bg-gray-50 p-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Google I / O 2020 news update
                </h3>
                <p className="text-[#9A9A9A] text-sm mb-3 leading-relaxed">
                  Out of concern for the health and safety of our developers,
                  employees, and local communities — and in line with recent ...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={speakerImg}
                  alt="Sundar Pichai"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-[#10375C]">
                    Sundar Pichai
                  </p>
                  <p className="text-xs text-[#9A9A9A]">CEO at Google</p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal workspace card */}
          <div className="w-full md:w-1/3 bg-white shadow-sm overflow-hidden md:ml-4 mt-4 md:mt-0 flex flex-col">
            <img
              src={workspaceImg}
              alt="Workspace"
              className="w-full h-60 object-cover"
            />
            <div className="p-3 flex-1 flex flex-col justify-between">
              <h4 className="font-medium text-[#222831] text-base mb-1">
                Minimal workspace for inspirations
              </h4>
              <p className="text-xs text-[#9A9A9A]">Anthony Masional</p>
            </div>
          </div>
        </div>

        {/* Remote work */}
        <div className="bg-white shadow-sm overflow-hidden">
          <img
            src={remoteWorkImg}
            alt="Remote work"
            className="w-full h-60 object-cover"
          />
          <div className="p-3">
            <h4 className="font-medium text-[#222831] text-sm mb-1">
              Does productivity increase when working remotely?
            </h4>
            <p className="text-xs text-[#9A9A9A]">Franck Martin</p>
          </div>
        </div>

        {/* Morning routine */}
        <div className="bg-white shadow-sm overflow-hidden">
          <img
            src={routineImg}
            alt="Morning routine"
            className="w-full h-60 object-cover"
          />
          <div className="p-3">
            <h4 className="font-medium text-[#222831] text-sm mb-1">
              Morning routine to boost your mood
            </h4>
            <p className="text-xs text-[#9A9A9A]">Elizabeth Swan</p>
          </div>
        </div>

        {/* Co-working space */}
        <div className="bg-white ounded-xl shadow-sm overflow-hidden">
          <img
            src={coworkingImg}
            alt="Coworking"
            className="w-full h-60 object-cover"
          />
          <div className="p-3">
            <h4 className="font-medium text-[#222831] text-sm mb-1">
              5+ tips to find comfortable co-working space
            </h4>
            <p className="text-xs text-[#9A9A9A]">Mykola IIschenko</p>
          </div>
        </div>
      </div>
    </div>
  );
}
