import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-[#375A53] p-4 rounded-r-lg shadow-md space-y-4 z-50">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-[#6F8478] transition-colors duration-300"
      >
        <FaFacebookF size={24} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-[#6F8478] transition-colors duration-300"
      >
        <FaTwitter size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-[#6F8478] transition-colors duration-300"
      >
        <FaLinkedinIn size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-[#6F8478] transition-colors duration-300"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialSidebar;
