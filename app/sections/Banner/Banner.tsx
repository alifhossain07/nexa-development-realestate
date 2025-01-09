"use client";
import BannerImage from "@/public/images/banner3.webp";
import { Typewriter } from "react-simple-typewriter";
import { FaHome, FaBuilding, FaTools, FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center lg:h-[1000px] h-[950px] flex items-start justify-center hover:opacity-90 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${BannerImage.src})`,
          clipPath: "ellipse(80% 50% at 50% 24%)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center 20%", // 20% from the top, adjust as needed
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content positioned at the top */}
        <div className="absolute top-56 lg:top-64 w-9/12 mx-auto text-white z-10 text-center px-6">
          {/* Typewriter container with fixed height */}
          <div className="lg:text-6xl text-2xl tracking-wider mx-auto font-bold font-title h-[100px]">
            <Typewriter
              words={["Your Dream Home, Our Commitment to Quality"]}
              loop={Infinity} // Infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={80} // Speed of typing
              deleteSpeed={0} // No delete effect, only typing
              delaySpeed={3000} // Delay before typing starts again
            />
          </div>

          <p className="mt-10 text-xl lg:text-2xl tracking-wide font-text animate-fade-in-up">
            From land acquisition to sales, we guide you through every step,
            ensuring <br />
            you get the best quality and service in your new home.
          </p>
        </div>
      </div>

      <div className="absolute font-title tracking-wider grid grid-cols-2 gap-5 p-8 lg:flex left-5 lg:left-80 mt-10 lg:w-8/12 w-11/12 mx-auto lg:bottom-48 bottom-36 items-center justify-around bg-[#ccd4c8] py-4 z-10">
        {/* Elevated Living */}
        <div className="flex flex-col items-center text-center flex-1 lg:px-4 group">
          <FaHome className="lg:w-20 lg:h-20 w-6 h-6 mb-4 text-[#436033] transition-transform group-hover:scale-110 group-hover:text-green-600 duration-300" />
          <h2 className="lg:text-xl text-sm font-bold text-black group-hover:text-green-800 transition-colors duration-300">
            Elevated Living
          </h2>
        </div>

        {/* Top-Notch Spaces */}
        <div className="flex flex-col items-center text-center flex-1 lg:px-4 group">
          <FaBuilding className="lg:w-20 lg:h-20 w-6 h-6 mb-4 text-[#436033] transition-transform group-hover:scale-110 group-hover:text-green-600 duration-300" />
          <h2 className="lg:text-xl text-sm font-bold text-black group-hover:text-green-800 transition-colors duration-300">
            Top-Notch Spaces
          </h2>
        </div>

        {/* Quality Craftsmanship */}
        <div className="flex flex-col items-center text-center flex-1 lg:px-4 group">
          <FaTools className="lg:w-20 lg:h-20 w-6 h-6 mb-4 text-[#436033] transition-transform group-hover:scale-110 group-hover:text-green-600 duration-300" />
          <h2 className="lg:text-xl text-sm font-bold text-black group-hover:text-green-800 transition-colors duration-300">
            Quality Crafting
          </h2>
        </div>

        {/* Exclusive Residences */}
        <div className="flex flex-col items-center text-center flex-1 lg:px-4 group">
          <FaStar className="lg:w-20 lg:h-20 w-6 h-6 mb-4 text-[#436033] transition-transform group-hover:scale-110 group-hover:text-green-600 duration-300" />
          <h2 className="lg:text-xl text-sm font-bold text-black group-hover:text-green-800 transition-colors duration-300">
            Exclusive Residences
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
