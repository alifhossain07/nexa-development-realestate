import React from "react";
import Image from "next/image"; // Import Image from next/image
import Building1 from "@/public/images/building1.png";
import Building2 from "@/public/images/building2.png";

const SpecsMobileVersion = () => {
  return (
    <div className="py-16 lg:hidden  w-full lg:w-10/12 mx-auto">
      <h1 className="text-center mb-5 text-2xl lg:text-3xl font-bold font-title uppercase tracking-wider">
        Building <span className="text-green-500">Overview and Features</span>
      </h1>

      {/* Apartment Features Card */}
      <div className="flex w-10/12 mx-auto flex-col md:flex-row items-center justify-between mb-8 p-4 border border-gray-200 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <Image
            src={Building1}  // Replace with your image path
            alt="Apartment Features"
            width={300} // Adjust width
            height={300} // Adjust height for compactness
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
          <div className="bg-[#436033] text-xs sm:text-sm rounded-full font-semibold text-white px-4 py-2 inline-block mb-4">
            Apartment Features
          </div>
          <h2 className="text-2xl font-title sm:text-3xl md:text-4xl font-bold text-green-500">
            Modern Apartments with <br /> Spacious Layouts
          </h2>
          <ul className="text-sm sm:text-base md:text-lg font-text text-black mt-4 space-y-2">
            <li><strong>Type A:</strong> 1320 sqft (With Parking)</li>
            <li><strong>Type B:</strong> 1230 sqft (Without Parking)</li>
            <li>3 Bedrooms, 3 Bathrooms (2 attached), 5 Balconies</li>
            <li>Dining-cum-Living Area, Kitchen with balconies</li>
          </ul>
        </div>
      </div>

      {/* Amenities & Features Card */}
      <div className="flex w-10/12 mx-auto flex-col md:flex-row items-center justify-between mb-8 p-4 border border-gray-200 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <Image
            src={Building2}  // Replace with your image path
            alt="Common Features & Amenities"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
          <div className="bg-[#436033] text-xs sm:text-sm rounded-full font-semibold text-white px-4 py-2 inline-block mb-4">
            Amenities & Features
          </div>
          <h2 className="text-2xl font-title sm:text-3xl md:text-4xl font-bold text-green-500">
            A Complete Package for <br /> Modern Living
          </h2>
          <ul className="text-sm sm:text-base md:text-lg font-text text-black mt-4 space-y-2">
            <li>Elevator, Prayer Space, Guard Post</li>
            <li>Caretaker Facilities, Generator Room</li>
            <li>Community Space, Substation</li>
            <li>Plantation, Rooftop Machine Room, Cloth Drying Area</li>
          </ul>
        </div>
      </div>

      {/* Structural Integrity & Safety Card */}
      <div className="flex w-10/12 mx-auto flex-col md:flex-row items-center justify-between mb-8 p-4 border border-gray-200 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <Image
            src={Building1}  // Replace with your image path
            alt="Structural Integrity & Safety"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
          <div className="bg-[#436033] text-xs sm:text-sm rounded-full font-semibold text-white px-4 py-2 inline-block mb-4">
            Structural Integrity
          </div>
          <h2 className="text-2xl sm:text-3xl font-title md:text-4xl font-bold text-green-500">
            Built for Safety & Longevity
          </h2>
          <ul className="text-sm font-text text-black sm:text-base md:text-lg mt-4 space-y-2">
            <li>Compliance with BNBC, ACI, ASTM, BS codes</li>
            <li>Premium materials like AKS/KSRM steel, Crown cement</li>
            <li>Earthquake-resistant design, Cyclone wind resilience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecsMobileVersion;
