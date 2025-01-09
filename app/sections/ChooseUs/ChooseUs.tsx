import React from "react";
import {
  FaTools,
  FaHandshake,
  FaDollarSign,
  FaLightbulb,
} from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div className="lg:mt-4 mb-32">
      <h1 className="text-center font-title font-bold tracking-wider uppercase text-2xl lg:text-4xl">
        Our <span className="text-[#436033]">Commitment</span> to You
      </h1>
      <p className="font-text text-lg lg:text-xl text-center mt-8 mb-8">
        Your satisfaction is our priority, as we deliver quality, reliable
        service, and a seamless <br /> experience to exceed your expectations
      </p>

      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-8">
        {/* Premium Quality */}
        <div className="p-6 hover:transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="inline-block p-4 border border-gray-300 rounded-tr-3xl hover:bg-blue-100 transition duration-300 ease-in-out">
            <FaTools className="text-3xl text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out" />
          </div>
          <h3 className="font-title text-2xl font-semibold tracking-wide mt-4 mb-2 hover:text-blue-600 transition duration-300 ease-in-out">
            Premium Quality
          </h3>
          <p className="font-text mt-5 text-base tracking-wide">
            We focus on using high-quality materials and designs to create
            lasting value in every project.
          </p>
        </div>

        {/* Reliable Service */}
        <div className="p-6 hover:transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="inline-block p-4 border border-gray-300 rounded-tr-3xl hover:bg-green-100 transition duration-300 ease-in-out">
            <FaHandshake className="text-3xl text-green-600 hover:text-green-800 transition duration-300 ease-in-out" />
          </div>
          <h3 className="font-title text-2xl font-semibold tracking-wide mt-4 mb-2 hover:text-green-600 transition duration-300 ease-in-out">
            Reliable Service
          </h3>
          <p className="font-text mt-5 text-base tracking-wide">
            You can count on us for dependable support and solutions, whenever
            you need them.
          </p>
        </div>

        {/* Fair Pricing */}
        <div className="p-6 hover:transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="inline-block p-4 border border-gray-300 rounded-tr-3xl hover:bg-yellow-100 transition duration-300 ease-in-out">
            <FaDollarSign className="text-3xl text-yellow-600 hover:text-yellow-800 transition duration-300 ease-in-out" />
          </div>
          <h3 className="font-title text-2xl font-semibold tracking-wide mt-4 mb-2 hover:text-yellow-600 transition duration-300 ease-in-out">
            Fair Pricing
          </h3>
          <p className="font-text mt-5 text-base tracking-wide">
            We offer competitive pricing to ensure you get the best value for
            your investment.
          </p>
        </div>

        {/* Modern Innovation */}
        <div className="p-6 hover:transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="inline-block p-4 border border-gray-300 rounded-tr-3xl hover:bg-purple-100 transition duration-300 ease-in-out">
            <FaLightbulb className="text-3xl text-purple-600 hover:text-purple-800 transition duration-300 ease-in-out" />
          </div>
          <h3 className="font-title text-2xl font-semibold tracking-wide mt-4 mb-2 hover:text-purple-600 transition duration-300 ease-in-out">
            Modern Innovation
          </h3>
          <p className="font-text mt-5 text-base tracking-wide">
            Our solutions are built using the latest technologies and approaches
            to keep you ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
