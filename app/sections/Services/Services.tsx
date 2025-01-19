import ServiceImage from "@/public/images/service.webp";
import ForSale from "@/public/images/forSale.webp";
import ForBuy from "@/public/images/forBuy.webp";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[1700px] lg:h-[800px] flex items-start justify-center transition-opacity duration-300"
      style={{
        backgroundImage: `url(${ServiceImage.src})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center 20%", // 20% from the top, adjust as needed
      }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 hover:opacity-60 transition-opacity duration-300 z-0"></div>

      <div className="mt-20 z-10 relative">
        <h2 className="text-center text-white tracking-wider mt-10 uppercase font-title text-2xl lg:text-3xl font-bold mb-20">
          Unlock the Best <span className="text-[#76f333]">Real Estate</span>
          Deals
        </h2>

        <div
          data-aos="flip-left"
          className="w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-8"
        >
          {/* Sell Your Home */}
          <Link href="/contact">
            <div className="p-6 bg-[#ccd4c8] border rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
              <div className="inline-block w-full p-4 border border-gray-300 rounded-tl-xl rounded-br-xl hover:bg-[#b1d39f] transition duration-300 ease-in-out">
                <Image
                  src={ForSale}
                  alt=""
                  className="w-full h-60 text-blue-600 hover:text-green-600 transition duration-300 ease-in-out"
                />
              </div>
              <h3 className="font-title text-2xl font-semibold mt-4 mb-2 text-center hover:text-blue-600 transition duration-300 ease-in-out">
                Buy Your Home
              </h3>
              <p className="font-text text-base text-center tracking-wide">
                Get the best price for your property with our expert selling
                services.
              </p>
            </div>
          </Link>

          {/* Buy a Home */}
<Link href="/contact">
<div
            data-aos="flip-right"
            className="p-6 bg-[#ccd4c8] border rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="inline-block w-full p-4 border border-gray-300 rounded-tl-xl rounded-br-xl hover:bg-[#b1d39f] transition duration-300 ease-in-out">
              <Image
                src={ForBuy}
                alt=""
                className="w-[28rem] h-60  text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
              />
            </div>
            <h3 className="font-title text-2xl font-semibold mt-4 mb-2 text-center hover:text-green-600 transition duration-300 ease-in-out">
              Buy a Home
            </h3>
            <p className="font-text text-base text-center tracking-wide">
              Explore a wide variety of homes to find your dream property with
              ease.
            </p>
          </div> </Link>

          {/* Rent a Home */}
          <Link href="/contact">
            <div
              data-aos="flip-left"
              className="p-6 bg-[#ccd4c8] border rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="inline-block w-full p-4 border border-gray-300 rounded-tl-xl rounded-br-xl hover:bg-[#b1d39f] transition duration-300 ease-in-out">
                <Image
                  src="/images/develop.jpg"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full h-60 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                />
              </div>
              <h3 className="font-title text-2xl font-semibold mt-4 mb-2 text-center hover:text-green-600 transition duration-300 ease-in-out">
We Develop Your Land              </h3>
              <p className="font-text text-base text-center tracking-wide">
                Find your ideal rental property with a variety of choices to
                suit your needs.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
