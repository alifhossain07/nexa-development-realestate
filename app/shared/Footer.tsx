"use client";

import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const NexaFooter = () => {
  return (
    <Footer container className="bg-green-100 mt-20">
      <div className="w-full">
        <div className="w-11/12 mx-auto">
{/* Top Section */}
<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Brand Section */}
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="logo" width={100} height={100} />
            <h1>Nexa Developments Limited</h1>
          </div>

          {/* Footer Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {/* About Us */}
            <div>
              <Footer.Title title="About Us" />
              <Footer.LinkGroup col>
                <Link href="/about">Our Vision</Link>
                <Link href="/about">Our Team</Link>
                <Link href="/properties">Projects</Link>
              </Footer.LinkGroup>
            </div>

            {/* Quick Links */}
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Link href="/contact">Contact Us</Link>
                <Link href="/contact">FAQs</Link>
                <Link href="/contact">Site Map</Link>
              </Footer.LinkGroup>
            </div>

            {/* Legal */}
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms & Conditions</Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          {/* Copyright Section */}
          <Footer.Copyright
            href="#"
            by="Nexa Developments"
            year={new Date().getFullYear()}
          />
          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsYoutube} />
          </div>
        </div>
        </div>
        
      </div>
    </Footer>
  );
};

export default NexaFooter;
