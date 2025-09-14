import React from "react";
import googleLogo from "../assets/google.png";
import tokopediaLogo from "../assets/tokopedia.png";
import upworkLogo from "../assets/upwork.png";
import microsoftLogo from "../assets/microsoft.png";
import shopifyLogo from "../assets/shopify.png";
import stripeLogo from "../assets/Stripe.png";

const Clients = () => {
  const logos = [
    { src: googleLogo, alt: "Google" },
    { src: tokopediaLogo, alt: "Tokopedia" },
    { src: upworkLogo, alt: "Upwork" },
    { src: microsoftLogo, alt: "Microsoft" },
    { src: shopifyLogo, alt: "Shopify" },
    { src: stripeLogo, alt: "Stripe" },
  ];

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0D2C4A] mb-2">
          Who uses Frispes?
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          Big brands, small business, new startups and individuals
        </p>

        {/* Logos Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-16 animate-slide">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
