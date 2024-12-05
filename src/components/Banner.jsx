import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  const images = [
    { src: 'https://res.cloudinary.com/dffnyrdjn/image/upload/v1725544422/jfrdl99lnojusfyyqazg.jpg', text: 'Welcome to Our Platform' },
    { src: 'https://res.cloudinary.com/dffnyrdjn/image/upload/v1725544422/nkwgjkt0qnu36ipnraja.jpg', text: 'Expert Legal Services' },
    { src: 'https://res.cloudinary.com/dffnyrdjn/image/upload/v1725544422/e9ticdxwjpfwgrwrc4fc.jpg', text: 'Your Trusted Partner' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id='home' className="relative w-full h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={image.src} alt={image.text} className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-[190px]">
            <motion.h2
              style={{ textShadow: '3px 2px 2px white' }}
              className="text-[#836a28] text-3xl md:text-5xl font-bold text-center p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            >
              Expert Tax Services for Individuals & Businesses. Simplify Your Taxes, Maximize Your Savings. Trust Legal Tax Solutions—Your Partner in Financial Success.
            </motion.h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Banner;