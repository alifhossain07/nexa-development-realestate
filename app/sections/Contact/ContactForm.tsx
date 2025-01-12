import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
 
} from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div data-aos="fade-down" className="py-32 w-10/12 mx-auto">
      {/* Contact Us Section */}
      <section className="mb-12 text-center">
        <h1 className="text-2xl  lg:text-3xl font-title font-bold uppercase text-black mb-4">
          Contact Nexa <span className='text-green-400'>Developments</span> 
        </h1>
        <p className="lg:text-xl text-base font-text text-[#6F8478] leading-relaxed max-w-2xl mx-auto">
          Get in touch with us for inquiries, property details, or to schedule a site visit. We are here to assist you in finding your dream home!
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            icon: <FaPhoneAlt size={30} />,
            title: 'Call Us',
            description: 'Reach us for property consultations:',
            details: ['+1 (234) 567-890', '+1 (234) 567-891'],
          },
          {
            icon: <FaEnvelope size={30} />,
            title: 'Email Us',
            description: 'For inquiries or assistance:',
            details: ['info@nexadevelopments.com', 'support@nexadevelopments.com'],
          },
          {
            icon: <FaMapMarkerAlt size={30} />,
            title: 'Visit Us',
            description: 'Our office is located at:',
            details: ['45 Skyline Avenue, Urban Center', 'City, Country, ZIP 45678'],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-2"
          >
            <div className="bg-[#436033] p-4 rounded-full text-white mb-4">{item.icon}</div>
            <h2 className="text-2xl lg:text-3xl font-title font-semibold text-black mb-2">
              {item.title}
            </h2>
            <p className="text-lg font-text text-black mb-4">{item.description}</p>
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-lg lg:text-xl font-bold text-[#436033]">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </section>

    
    </div>
  );
};

export default ContactForm;
