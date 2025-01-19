import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactBackgroundImage from "@/public/images/ad.webp";

const ContactForm = () => {
  return (
    <div data-aos="fade-down">
      {/* Contact Section with Background Image */}
      <div
        className="relative h-[500px] lg:h-[700px] bg-cover bg-center text-center flex items-center justify-center mb-16"
        style={{
          backgroundImage: `url(${ContactBackgroundImage.src})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 px-4 lg:px-0 max-w-3xl">
          <h1 className="text-2xl lg:text-4xl font-title font-bold uppercase text-white mb-4">
            Get in Touch with{" "}
            <span className="text-green-500">Nexa Developments</span>
          </h1>
          <p className="lg:text-xl text-lg font-text text-white leading-relaxed">
            We’re here to assist you with all your property needs. Reach out to
            us for inquiries, consultations, or support. Let’s connect today!
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-md border border-gray-200 w-10/12 mx-auto">
        <h1 className="text-2xl lg:text-3xl font-title font-bold uppercase text-black mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-base lg:text-lg font-text text-gray-600 text-center mb-8">
          Fill out the form below, and we’ll get back to you as soon as
          possible.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300 md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="mb-12 text-center">
        <h1 className="text-2xl lg:text-3xl font-title font-bold uppercase text-black mb-4">
          Contact Nexa <span className="text-green-400">Developments</span>
        </h1>
        <p className="lg:text-xl text-base font-text text-[#6F8478] leading-relaxed max-w-2xl mx-auto">
          Get in touch with us for inquiries, property details, or to schedule a
          site visit. We are here to assist you in finding your dream home!
        </p>
      </section>

      {/* Contact Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {[
          {
            icon: <FaPhoneAlt size={30} />,
            title: "Call Us",
            description: "Reach us for property consultations:",
            details: [
              "+880-1849222227",
              "+880-1711659563",
              "+880-1611111024",
            ],
          },
          {
            icon: <FaEnvelope size={30} />,
            title: "Email Us",
            description: "For inquiries or assistance:",
            details: [
              "info@nexadevelopments.com",
              "support@nexadevelopments.com",
            ],
          },
          {
            icon: <FaMapMarkerAlt size={30} />,
            title: "Visit Us",
            description: "Our office is located at:",
            details: [
              "House- 53, Road- 8, Nabinagar Housing, Mohammadpur, Dhaka- 1207",
            ],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-2"
          >
            <div className="bg-[#436033] p-4 rounded-full text-white mb-4">
              {item.icon}
            </div>
            <h2 className="text-2xl lg:text-3xl font-title font-semibold text-black mb-2">
              {item.title}
            </h2>
            <p className="text-lg font-text text-black mb-4">
              {item.description}
            </p>
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-lg lg:text-xl font-bold text-[#436033]">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Map Section */}
      <iframe
        className="w-full mt-12 mx-auto"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.9125380603897!2d90.34526072176212!3d23.759851934952934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf0045e79315%3A0xd10a669c9c3a5b51!2sNexa%20Developments%20Limited!5e0!3m2!1sen!2sbd!4v1737014749242!5m2!1sen!2sbd"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactForm;
