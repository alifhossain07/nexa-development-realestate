"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoCall } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi"; // For the hamburger icon

import Logo from "@/public/images/logo.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // To control the mobile menu

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <div className="flex w-11/12 mx-auto justify-between items-center py-4">
                {/* Logo and Company Name */}
                <div className="flex items-center">
                    <Image src={Logo} alt="logo" width={100} height={100} />
                    <h1
                        className={`text-2xl font-title font-bold tracking-wider ${
                            isScrolled ? "text-black" : "text-white"
                        }`}
                    >
                        Nexa Developments LTD
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex font-title text-lg items-center gap-10 font-semibold">
                    <ul
                        className={`flex gap-10 ${
                            isScrolled ? "text-black" : "text-white"
                        }`}
                    >
                        <li>Home</li>
                        <li>About</li>
                        <li>Properties</li>
                        <li>Contact</li>
                    </ul>

                    <li
                        className="text-lg gap-2 bg-[#436033] px-2 py-1 rounded-3xl text-white flex font-semibold items-center tracking-wider"
                    >
                        <IoCall /> +88 01716115775
                    </li>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`text-3xl ${isScrolled ? "text-black" : "text-white"}`}
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#436033] text-white py-4 px-6">
                    <ul className="flex flex-col gap-4 text-lg font-semibold">
                        <li>Home</li>
                        <li>About</li>
                        <li>Properties</li>
                        <li>Contact</li>
                        <li className="text-lg gap-2 bg-[#436033] px-2 py-1 rounded-3xl text-white flex font-semibold items-center tracking-wider">
                            <IoCall /> +88 01716115775
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
