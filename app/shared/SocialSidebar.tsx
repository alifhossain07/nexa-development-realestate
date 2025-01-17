import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-[#375A53] p-4 lg:p-4 rounded-r-lg shadow-md space-y-4 z-50">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-[#6F8478] transition-colors duration-300"
      >
        <FaFacebookF className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-[#6F8478] transition-colors duration-300"
      >
        <FaTwitter className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-[#6F8478] transition-colors duration-300"
      >
        <FaLinkedinIn className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-[#6F8478] transition-colors duration-300"
      >
        <FaInstagram className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>
    </div>
  );
};

export default SocialSidebar;
