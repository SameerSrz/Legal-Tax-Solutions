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
      <div className="w-full bg-gray-800 px-4 text-white text-sm py-2 flex justify-center items-center">
        <div className="flex space-x-9">
          <span className='flex flex-row'><IoCall className='h-4 w-6 pt-1' /><a href="tel:+923217080012">Phone: (+92) 321 7080012</a></span>
          <span className='flex flex-row cursor-pointer' onClick={handleMassageSubmit}><IoLogoWhatsapp className='h-4 w-6 pt-1' />(+92) 321 7080012</span>
          <span className='flex flex-row'><MdDateRange className='h-4 w-6 pt-1' /> Mon - Sat 9am - 7pm</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="top-[35px] w-full h-20 bg-white z-50 flex items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <img src="/assets/logo1.png" className="w-auto h-[200px]" alt="Legal tax Solutions Logo" />
          {/* <span className="text-lg font-semibold">Legal Tax Solutions</span> */}
        </div>

        <div className="hidden md:flex space-x-8">
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
            <span className="font-semibold bg-gray-800 text-white p-3 rounded-md">
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
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4">
            <IoClose className="text-2xl cursor-pointer absolute top-4 right-4" onClick={closeMenu} />
            <a href="#home" className="text-lg font-semibold" onClick={closeMenu}>Home</a>
            <a href="#services" className="text-lg font-semibold" onClick={closeMenu}>Services</a>
            <a href="#about" className="text-lg font-semibold" onClick={closeMenu}>About Us</a>
            <a href="#team" className="text-lg font-semibold" onClick={closeMenu}>Our Team</a>
            <a href="#contact" className="text-lg font-semibold" onClick={closeMenu}>Contact Us</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
