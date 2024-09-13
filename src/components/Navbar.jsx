import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { animationStart, reveal } from '../utils/Animation';
import { IoMenu, IoClose, IoCall } from "react-icons/io5";
import { MdEmail, MdDateRange  } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className='fixed z-10 w-full'>
        {/* Top Bar */}
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: animationStart }}
       className="w-full  bg-gray-800 text-white text-sm py-2 flex justify-center items-center">
        <div className="flex space-x-9">
          <span className='flex flex-row'><IoCall className='h-4 w-6 pt-1' /><a href="tel:+1234567890">Phone: (+92) 234 567890</a></span>
          <span className='flex flex-row'><MdEmail className='h-4 w-6 pt-1' /><a href="mailto:info@legaltaxsolutions.com">Email: info@legaltaxsolutions.com</a></span>
          <span className='flex flex-row'><MdDateRange  className='h-4 w-6 pt-1' /> Mon - Fri 9am - 6pm</span>
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
      className='top-[35px] w-full h-20 bg-white z-50 flex items-center justify-around px-6'
    >
      <motion.div
        // variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ ease: "easeIn", type: "tween", staggerChildren: 0.1, duration: 0.5, delayChildren: animationStart + 0.5 }}
        className="flex items-center space-x-2"
      >
        <motion.img  src="/assets/balance.png" className="h-6 w-auto" alt="Hafiz Legal Solutions Logo" />
        <motion.span className="text-lg font-semibold">Legal Tax Solutions</motion.span>
      </motion.div>
      
      <motion.div
        // variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ ease: "easeIn", type: "tween", staggerChildren: 0.1, duration: 0.5, delayChildren: animationStart + 0.5 }}
        className="hidden md:flex space-x-8"
      >
        <motion.a href='#home'  className='cursor-pointer font-semibold'>Home</motion.a>
        <motion.a href='#services'className='cursor-pointer font-semibold'>Services</motion.a>
        <motion.a href='#about'className='cursor-pointer font-semibold'>About Us</motion.a>
        <motion.a href='#team' className='cursor-pointer font-semibold'>Our Team</motion.a>
        <motion.a href='#contact' className='cursor-pointer font-semibold'>Contact Us</motion.a>
        <motion.a href='#contact' className='cursor-pointer '> <span className='font-semibold bg-gray-800 text-white p-3 rounded-md'>Request Consultation </span></motion.a>
      </motion.div>
      
      <motion.div className='flex md:hidden'>
        <IoMenu className='text-2xl cursor-pointer' onClick={toggleMenu} />
      </motion.div>
      
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4"
        >
          <IoClose className='text-2xl cursor-pointer absolute top-4 right-4' onClick={closeMenu} />
          <a href="#home" className="text-lg font-semibold" onClick={closeMenu}>Home</a>
          <a href="#services" className="text-lg font-semibold" onClick={closeMenu}>Services</a>
          <a href="#about" className="text-lg font-semibold" onClick={closeMenu}>About Us</a>
          <a href="#team" className="text-lg font-semibold" onClick={closeMenu}>Our Team</a>
          <a href="#contact" className="text-lg font-semibold" onClick={closeMenu}>Contact Us</a>
        </motion.div>
      )}
    </motion.div>
    </div>
    
  );
}

export default Navbar;
