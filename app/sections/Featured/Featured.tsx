import Image from "next/image";
import ProjectImage from "@/app/images/featureProject.webp"; // Replace with actual image path

const Featured = () => {
  return (
    <div className="py-20 bg-gray-200">
      <h2 data-aos="fade-down" className="font-title text-center tracking-wider uppercase text-2xl lg:text-3xl font-bold mb-6">
        Exclusive <span className="text-green-500">Showcase</span> 
      </h2>
      <p data-aos="fade-down" className="text-center tracking-wider font-text text-base w-10/12 lg:w-full mx-auto lg:text-xl">
        Discover our premier project, designed to enhance your living experience with comfort, style, <br /> and modern amenities. Explore the perfect blend of quality and functionality.
      </p>

      <div className="w-10/12 bg-white rounded-3xl shadow-xl mx-auto my-20 py-10 flex flex-col md:flex-row items-center gap-x-8">
      <div className="w-10/12 bg-white rounded-3xl  mx-auto  flex flex-col md:flex-row items-center ">
{/* Left Side: Project Details */}
<div data-aos="fade-right" className="p-6 w-full md:w-7/12">
          <h1 className="text-[#436033] text-2xl lg:text-3xl font-title mb-10 font-bold">NEXA SKYLINE</h1>
          <ul className="font-text space-y-2 text-sm lg:text-base leading-7">
            <li>
              <strong>Address:</strong> Nabinagar Housing, Mohammadpur, Dhaka
            </li>
            <li>
              <strong>Nature:</strong> Residential
            </li>
            <li>
              <strong>Storied:</strong> Ground + 8 Living Floors
            </li>
            <li>
              <strong>Facing:</strong> South
            </li>
            <li>
              <strong>No. of Apartments:</strong> 16 Nos.
            </li>
            <li>
              <strong>Apartment Sizes:</strong>
            </li>
            <ul className="pl-5">
              <li>Type A: 1320 sqft (Approx.)</li>
              <li>Type B: 1230 sqft (Approx.)</li>
            </ul>
          </ul>
          <button
            className="mt-8 px-2 py-1 lg:px-6 lg:py-3 bg-[#436033] text-white font-bold rounded-lg shadow-lg hover:bg-[#3a4f2d] transition duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Right Side: Project Image */}
        <div data-aos="fade-left" className=" lg:h-full md:w-5/12 flex ">
          <Image
            src={ProjectImage}
            alt="Nexa Skyline Project"
            className="rounded-lg hover:scale-105 transition-transform duration-300"
            layout="responsive"
           
          />
        </div>
      </div>
      </div>
        
    </div>
  );
};

export default Featured;
