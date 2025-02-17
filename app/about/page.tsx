import Image from "next/image";
import AboutBackgroundImage from "@/public/images/ad.webp";
import SocialSidebar from "../shared/SocialSidebar";
import Link from "next/link";

export default function About() {
  return (
<div>
      <SocialSidebar></SocialSidebar>
    <div data-aos="fade-down">
      {/* About Section with Gradient Overlay */}
      <div
        className="relative h-[500px] lg:h-[700px] bg-cover bg-center text-center mb-16 flex items-center justify-center"
        style={{
          backgroundImage: `url(${AboutBackgroundImage.src})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 px-4 lg:px-0 max-w-3xl text-center">
          <h1 className="text-2xl lg:text-4xl font-title font-bold uppercase text-white mb-6">
            About <span className="text-green-500">Nexa Developments Limited</span>
          </h1>
          <p className="lg:text-xl text-lg font-text text-white leading-relaxed">
            Nexa Developments is a premier real estate company committed to
            delivering modern, sustainable, and affordable solutions for all your
            real estate needs. 
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <section className="mb-16 w-10/12 mx-auto">
        <h2 className="text-2xl lg:text-3xl font-title font-semibold text-black mb-4 text-center">
          Our Vision & Mission
        </h2>
        <p className="text-lg font-text text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
          Our vision is to redefine urban spaces by blending modern
          architectural practices with sustainability. At Nexa Developments, our
          mission is to create value-driven real estate solutions that not only
          enhance lifestyles but also contribute positively to the community and
          environment. We aim to build spaces that inspire, enrich, and
          transform lives.
        </p>
      </section>

      {/* Unique Selling Points */}
      <section className="grid grid-cols-1 w-10/12 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {[
          {
            title: "Sustainability",
            description:
              "We implement eco-conscious designs and energy-efficient practices to create environmentally responsible projects that stand the test of time.",
            image: "/images/Sustainability.jpg",
          },
          {
            title: "Prime Locations",
            description:
              "Our properties are strategically positioned in highly sought-after locations, ensuring unparalleled convenience and connectivity for our clients.",
            image: "/images/Prime Locations.jpg",
          },
          {
            title: "Customer-Centric",
            description:
              "We are committed to delivering exceptional customer experiences by focusing on personalized solutions tailored to each client’s unique needs.",
            image: "/images/Customer-Centric.jpg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 text-center"
          >
            <Image
              src={item.image}
              width={500}
              height={500}
              alt={item.title}
              className="rounded-md mb-6"
            />
            <h3 className="text-xl lg:text-2xl font-title font-bold text-green-500 mb-4">
              {item.title}
            </h3>
            <p className="text-lg font-text text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl lg:text-3xl font-title font-semibold text-black mb-4">
          Ready to Discover Your Dream Property?
        </h2>
        <p className="text-lg font-text text-gray-600 max-w-2xl mx-auto mb-6">
          Whether you&apos;re looking to buy, rent, or invest, Nexa Developments is
          here to assist you every step of the way. Explore our wide range of
          properties, or reach out to schedule a site visit and let us help you
          turn your real estate dreams into reality.
        </p>
        <Link href="/contact">
        <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300">
          Contact Us Today
        </button></Link>
      </section>
    </div>
</div>
  );
}
