import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMenu, IoClose, IoCall } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleMassageSubmit = () => {
    window.open(`https://wa.me/923217080012`)
  }

  return (
    <div>
      {/* Top Bar */}
      <div className="w-full bg-[#141444] px-4 text-white text-sm py-2 flex justify-center items-center">
        <div className="flex space-x-9">
          <span className='flex flex-row'><IoCall className='h-4 w-6 pt-1' /><a href="tel:+923217080012">Phone: (+92) 321 7080012</a></span>
          <span className='flex flex-row cursor-pointer' onClick={handleMassageSubmit}><IoLogoWhatsapp className='h-4 w-6 pt-1' />(+92) 321 7080012</span>
          <span className='flex flex-row'><MdDateRange className='h-4 w-6 pt-1' /> Mon - Sat 9am - 7pm</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="top-[35px] w-full h-20 bg-[#857447] z-50 flex items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <img src="/assets/logo1.png" className="w-auto h-[200px]" alt="Legal tax Solutions Logo" />
          {/* <span className="text-lg font-semibold">Legal Tax Solutions</span> */}
        </div>

        <div className="hidden md:flex space-x-8 text-white">
          <motion.a
            href="#home"
            className="cursor-pointer font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#services"
            className="cursor-pointer font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Services
          </motion.a>
          <motion.a
            href="#about"
            className="cursor-pointer font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#our-team"
            className="cursor-pointer font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Our Team
          </motion.a>
          <motion.a
            href="#contact"
            className="cursor-pointer font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Us
          </motion.a>
          <motion.a
            href="#contact"
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="font-semibold bg-[#141444] text-white p-3 rounded-md">
              Request Consultation
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <IoMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#857447] z-50 flex flex-col items-center justify-center p-6 transition-all duration-300">
            {/* Close Icon */}
            <IoClose 
              className="text-4xl text-[#141444] cursor-pointer absolute top-6 right-6 hover:scale-110 transition-transform duration-200" 
              onClick={closeMenu} 
            />

            {/* Logo */}
            <div className="flex flex-col items-center">
            <img src="/assets/logo1.png" className="w-auto h-[300px]" alt="Legal tax Solutions Logo" />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center w-full max-w-md space-y-2 mb-[190px]">
              <a 
                href="#home" 
                className="w-full text-center py-3 px-6 bg-[#141444] text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
                onClick={closeMenu}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="w-full text-center py-3 px-6 bg-[#141444] text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
                onClick={closeMenu}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="w-full text-center py-3 px-6 bg-[#141444] text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
                onClick={closeMenu}
              >
                About Us
              </a>
              <a 
                href="#our-team" 
                className="w-full text-center py-3 px-6 bg-[#141444] text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
                onClick={closeMenu}
              >
                Our Team
              </a>
              <a 
                href="#contact" 
                className="w-full text-center py-3 px-6 bg-[#141444] text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </nav>


            {/* Call to Action */}
            {/* <motion.a
            href="#contact"
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="font-semibold bg-[#141444] text-white p-3 rounded-md">
              Request Consultation
            </span>
          </motion.a> */}

            {/* Footer
            <footer className="absolute bottom-6 text-sm text-gray-600">
              © 2024 Legal Tax Solutions. All Rights Reserved.
            </footer> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
