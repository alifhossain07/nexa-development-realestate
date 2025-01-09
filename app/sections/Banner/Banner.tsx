"use client";
import BannerImage from "@/public/images/banner3.webp";
import { Typewriter } from "react-simple-typewriter";
import { FaHome, FaBuilding, FaTools, FaStar } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center h-[1000px]  flex items-start justify-center"
        style={{
          backgroundImage: `url(${BannerImage.src})`,
          clipPath: "ellipse(80% 50% at 50% 24%)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center 20%", // 20% from the top, adjust as needed
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content positioned at the top */}
        <div className="absolute top-64 w-9/12 mx-auto text-white z-10 text-center px-6">
          {/* Typewriter container with fixed height */}
          <div className="text-6xl tracking-wider mx-auto font-bold font-title h-[100px]">
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

          <p className="mt-10 text-2xl tracking-wide font-text animate-fade-in-up">
            From land acquisition to sales, we guide you through every step,
            ensuring <br />
            you get the best quality and service in your new home.
          </p>
        </div>
      </div>

      <div className="absolute font-title tracking-wider  left-80 mt-10 w-8/12 mx-auto bottom-48 flex justify-around bg-[#ccd4c8] py-4 z-10">
    {/* Elevated Living */}
    <div className="flex flex-col items-center text-center flex-1 px-4">
        <FaHome className="w-20 h-20 mb-4 text-[#436033]" />
        <h2 className="text-xl font-bold text-black ">Elevated Living</h2>
    </div>

    {/* Top-Notch Spaces */}
    <div className="flex flex-col items-center text-center flex-1 px-4">
        <FaBuilding className="w-20 h-20 mb-4 text-[#436033]" />
        <h2 className="text-xl font-bold text-black">Top-Notch Spaces</h2>
    </div>

    {/* Quality Craftsmanship */}
    <div className="flex flex-col items-center text-center flex-1 px-4">
        <FaTools className="w-20 h-20 mb-4 text-[#436033]" />
        <h2 className="text-xl font-bold text-black">Quality Craftsmanship</h2>
    </div>

    {/* Exclusive Residences */}
    <div className="flex flex-col items-center text-center flex-1 px-4">
        <FaStar className="w-20 h-20 mb-4 text-[#436033]" />
        <h2 className="text-xl font-bold text-black ">Exclusive Residences</h2>
    </div>
</div>



    </div>
  );
};

export default Banner;

