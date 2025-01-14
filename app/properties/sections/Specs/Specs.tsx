import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image"; // Import Image from next/image
import Building1 from "@/public/images/building1.png";
import Building2 from "@/public/images/building2.png";


const Specs = () => {
  return (
    <div className="py-16 mb-28 w-full lg:w-10/12 mx-auto h-[450px] md:h-[400px] xl:h-[500px] 2xl:h-[600px] ">
        <h1 className="text-center mb-5 text-3xl font-bold font-title uppercase tracking-wider">Building <span className="text-green-500">Overview and Features</span> </h1>
      <Carousel slideInterval={5000} theme={{
            root: {
              base: "relative lg:h-full w-full",
              leftControl:
                "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
              rightControl:
                "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
            },
            indicators: {
              active: {
                off: "bg-black hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-green-400 dark:bg-gray-800",
              },
              base: "h-3 w-3 rounded-full",
              wrapper:
                "absolute bottom--5 left-1/2 flex -translate-x-1/2 space-x-5",
            },
            item: {
              base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
              wrapper: {
                off: "w-full flex-shrink-0 transform cursor-default snap-center",
                on: "w-full flex-shrink-0 transform cursor-grab snap-center",
              },
            },
            control: {
              base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-500 group-hover:bg-green-700 group-focus:outline-none group-focus:ring-4 group-focus:ring-green-800 sm:h-10 sm:w-10", // Make the control buttons blue
              icon: "h-5 w-5 text-white sm:h-6 sm:w-6",
            },
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
              snap: "snap-x",
            },
          }}
        >
        {/* Slide 1: Apartment Features */}
        <div className="flex flex-col md:flex-row items-center justify-center h-[400px] md:h-[350px] px-4 md:px-10">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
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

        {/* Slide 2: Common Features & Amenities */}
        <div className="flex flex-col md:flex-row items-center  justify-center h-[400px] md:h-[350px] px-4 md:px-10">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
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
              A Complete Package for <br/> Modern Living
            </h2>
            <ul className="text-sm sm:text-base md:text-lg font-text text-black mt-4 space-y-2">
              <li>Elevator, Prayer Space, Guard Post</li>
              <li>Caretaker Facilities, Generator Room</li>
              <li>Community Space, Substation</li>
              <li>Plantation, Rooftop Machine Room, Cloth Drying Area</li>
            </ul>
          </div>
        </div>

        {/* Slide 3: Structural Integrity & Safety */}
        <div className="flex flex-col md:flex-row items-center justify-center h-[400px] md:h-[350px] px-4 md:px-10">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
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
            <ul className="text-sm font-text text-black sm:text-base md:text-lg  mt-4 space-y-2">
              <li>Compliance with BNBC, ACI, ASTM, BS codes</li>
              <li>Premium materials like AKS/KSRM steel, Crown cement</li>
              <li>Earthquake-resistant design, Cyclone wind resilience</li>
            </ul>
          </div>
        </div>
      </Carousel>

     
    </div>
  );
};

export default Specs;
