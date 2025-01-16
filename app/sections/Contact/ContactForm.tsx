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
            details: [' +880-1849222227', '+880-1711659563', '+880-1611111024'],
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
            details: ['House- 53, Road- 8, Nabinagar Housing, Mohammadpur, Dhaka- 1207'],
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
      <iframe  className="w-full mt-12 mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.9125380603897!2d90.34526072176212!3d23.759851934952934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf0045e79315%3A0xd10a669c9c3a5b51!2sNexa%20Developments%20Limited!5e0!3m2!1sen!2sbd!4v1737014749242!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    </div>
  );
};

export default ContactForm;
