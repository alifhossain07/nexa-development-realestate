import React from "react";
import PropertyBannerImageDesktop from "@/public/images/PropertyBanner.webp";
import PropertyBannerImageMobile from "@/public/images/PropertyBannerMobile.webp";

const PropertyBanner = () => {
  return (
    <div className="h-[850px]">
      {/* Mobile Background */}
      <div
        className="lg:hidden flex h-full w-full bg-cover bg-center items-center"
        style={{
          backgroundImage: `url(${PropertyBannerImageMobile.src})`,
        }}
      >
        <div className="ml-5 mt-24 w-3/5 text-left">
          <h1 className="text-white font-title uppercase text-2xl sm:text-4xl">
            Discover Nexa Skyline
          </h1>
          <p className="text-white font-title uppercase mt-8 tracking-wider text-lg sm:text-2xl">
            A New Standard in Premium <br className="hidden sm:block" /> Residential Living
          </p>
        </div>
      </div>

      {/* Desktop Background */}
      <div
        className="hidden lg:flex h-full w-full bg-cover bg-center items-center"
        style={{
          backgroundImage: `url(${PropertyBannerImageDesktop.src})`,
        }}
      >
        {/* Text Content */}
        <div className="ml-10 lg:ml-28 text-left">
          <h1 className="text-white font-title uppercase text-2xl lg:text-6xl">
            Discover Nexa Skyline
          </h1>
          <p className="text-white font-title uppercase mt-8 tracking-wider text-lg lg:text-4xl">
            A New Standard in Premium <br className="hidden sm:block" /> Residential Living
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
