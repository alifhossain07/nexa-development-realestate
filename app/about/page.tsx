import Image from "next/image";

export default function About() {
  return (
    <div className="py-32 w-10/12 mx-auto">
      {/* About Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl lg:text-4xl font-title font-bold uppercase text-black mb-6">
          About <span className="text-green-500">Nexa Developments Limited</span>
        </h1>
        <p className="lg:text-xl text-base font-text text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Nexa Developments is a premier real estate company committed to
          delivering modern, sustainable, and affordable solutions for all your
          real estate needs. With an impressive portfolio of residential,
          commercial, and mixed-use properties, we strive to redefine urban
          living by focusing on innovation, quality, and sustainability. Our
          approach is deeply rooted in understanding client aspirations and
          exceeding expectations through excellence.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="mb-16">
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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
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
        <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300">
          Contact Us Today
        </button>
      </section>
    </div>
  );
}
