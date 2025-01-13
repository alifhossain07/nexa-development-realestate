import React from 'react';
import PropertyBannerImageDesktop from "@/public/images/propertyBanner.webp";
import PropertyBannerImageMobile from "@/public/images/PropertyBannerMobile.webp";

const PropertyBanner = () => {
  return (
    <div
      className={`h-[600px]  flex items-center bg-cover bg-center transition-opacity duration-300`}
      style={{
        backgroundImage: `url(${PropertyBannerImageMobile.src})`,
      }}
    >
      {/* Mobile Background */}
      <div
        className="absolute inset-0 block sm:hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${PropertyBannerImageMobile.src})`,
        }}
      ></div>

      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden sm:block bg-cover bg-center"
        style={{
          backgroundImage: `url(${PropertyBannerImageDesktop.src})`,
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 lg:ml-28 w-2/3 lg:mt-60 mt-80 lg:w-5/6  leading-10  px-4 sm:px-8">
        <h1 className="text-white font-title uppercase text-2xl lg:text-6xl ">
          Discover Nexa Skyline
        </h1>
        <p className="text-white font-title uppercase mt-8 tracking-wider text-lg lg:text-4xl ">
          A New Standard in Premium <br className="hidden sm:block" /> Residential Living
        </p>
      </div>
    </div>
  );
};

export default PropertyBanner;
