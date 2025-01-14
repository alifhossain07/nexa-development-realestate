import Image from "next/image";
import ProjectImage from "@/public/images/featureProject.webp"; // Replace with actual image path

const ProjectOverview = () => {
  return (
    <div className="py-20 bg-gray-100 ">
      <h2
        data-aos="fade-down"
        className="font-title text-center tracking-wider uppercase text-2xl lg:text-3xl font-bold mb-6"
      >
        Project <span className="text-green-500">Overview</span>
      </h2>
      <p
        data-aos="fade-down"
        className="text-center tracking-wider font-text text-base w-10/12 lg:w-8/12 mx-auto lg:text-xl"
      >
        Nexa Skyline is a premier residential development by Nexa Developments Limited, offering modern living 
        standards and a perfect blend of quality, style, and community.
      </p>

      <div className="w-10/12 bg-white rounded-3xl shadow-2xl mx-auto my-20 py-10 flex flex-col md:flex-row items-center gap-x-8">

      <div className="flex flex-col lg:flex-row w-10/12 mx-auto">
{/* Left Side: Project Details */}
<div
          data-aos="fade-right"
          className="p-6 w-full md:w-7/12"
        >
          <h1 className="text-[#436033] text-2xl lg:text-3xl font-title mb-10 font-bold">NEXA SKYLINE</h1>
          <ul className="font-text space-y-2 text-sm lg:text-base leading-7">
            <li>
              <strong>Address:</strong> Plot #95, Road #13, Nabinagar Housing, Mohammadpur, Dhaka, Bangladesh
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
              <strong>Land Area:</strong> 3.75 Katha (More or Less)
            </li>
            <li>
              <strong>Apartment Sizes:</strong>
            </li>
            <ul className="pl-5">
              <li>Type A: 1320 sqft (Approx.)</li>
              <li>Type B: 1230 sqft (Approx.)</li>
            </ul>
          </ul>
          
        </div>

        {/* Right Side: Project Image */}
        <div
          data-aos="fade-left"
          className="lg:h-full md:w-5/12 flex"
        >
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

export default ProjectOverview;
