import BannerImage from "@/public/images/banner3.webp";

const Ad = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px] flex items-start justify-center hover:opacity-90 transition-opacity duration-300"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
      }}
    >
      {/* Black overlay with hover effect */}
      <div className="absolute inset-0 bg-black opacity-60 hover:opacity-40 transition-opacity duration-300"></div>

      {/* Ad Content */}
      <div className="absolute bottom-20 right-40 bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full hover:scale-105 transition-transform duration-300">
        <h2 className="font-title text-3xl font-bold text-green-600">Nexa Skyline - Type A</h2>
        <p className="font-para text-xl text-gray-700 mt-2">Price: $550,000</p>
        <p className="font-para text-gray-600 mt-2">
          2 Bedroom, 2 Bath Apartment with Modern Amenities and Scenic Views. Perfect for families looking for luxury and comfort.
        </p>
        <div className="mt-4">
          <p className="font-para text-lg text-gray-600">Location: Downtown Skyline</p>
          <p className="font-para text-lg text-gray-600">Size: 1,200 sq. ft.</p>
          <p className="font-para text-lg text-gray-600">Floor: 5th of 8</p>
          <p className="font-para text-lg text-gray-600">Available: Move-in Ready</p>
        </div>
        <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
          Sell Your Property
        </button>
      </div>
    </div>
  );
};

export default Ad;
