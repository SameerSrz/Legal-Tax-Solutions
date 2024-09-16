import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMenu, IoClose, IoCall } from "react-icons/io5";
import { MdEmail, MdDateRange  } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleMassageSubmit = ()=>{
    window.open(`https://wa.me/923217080012`)
  }

  return (
    <div className='fixed z-10 w-full'>
        {/* Top Bar */}
      <div
       className="w-full  bg-gray-800 px-4 text-white text-sm py-2 flex justify-center items-center">
        <div className="flex space-x-9">
          <span className='flex flex-row'><IoCall className='h-4 w-6 pt-1' /><a href="tel:+923217080012">Phone: (+92) 321 7080012</a></span>
          <span className='flex flex-row cursor-pointer' onClick={handleMassageSubmit}><IoLogoWhatsapp className='h-4 w-6 pt-1' />(+92) 321 7080012</span>
          <span className='flex flex-row'><MdDateRange  className='h-4 w-6 pt-1' /> Mon - Fri 9am - 7pm</span>
        </div>
      </div>

      {/* Navbar */}
      <div
      className='top-[35px] w-full h-20 bg-white z-50 flex items-center justify-around px-6'
    >
      <div
        className="flex items-center space-x-2"
      >
        <img  src="/assets/balance.png" className="h-6 w-auto" alt="Hafiz Legal Solutions Logo" />
        <span className="text-lg font-semibold">Legal Tax Solutions</span>
      </div>
      
      <div
        className="hidden md:flex space-x-8"
      >
        <a href='#home'  className='cursor-pointer font-semibold'>Home</a>
        <a href='#services'className='cursor-pointer font-semibold'>Services</a>
        <a href='#about'className='cursor-pointer font-semibold'>About Us</a>
        <a href='#team' className='cursor-pointer font-semibold'>Our Team</a>
        <a href='#contact' className='cursor-pointer font-semibold'>Contact Us</a>
        <a href='#contact' className='cursor-pointer '> <span className='font-semibold bg-gray-800 text-white p-3 rounded-md'>Request Consultation </span></a>
      </div>
      
      <div className='flex md:hidden'>
        <IoMenu className='text-2xl cursor-pointer' onClick={toggleMenu} />
      </div>
      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4"
        >
          <IoClose className='text-2xl cursor-pointer absolute top-4 right-4' onClick={closeMenu} />
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
