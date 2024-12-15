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
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-[60px]">
          <motion.h2
            style={{
              // textShadow: '-2px 0 0 rgba(255, 255, 255, 0.8)',
              lineHeight: '1.5',
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#836a28] text-3xl md:text-6xl font-extrabold text-center p-6 drop-shadow-lg tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          >
            <span className="block">Expert Tax Services for</span>
            <span className="block">Individuals & Businesses</span>
            <span className="block mt-4 text-[#ffffff] md:text-2xl font-medium tracking-normal">
              Simplify Your Taxes, Maximize Your Savings.
            </span>
            <span className="block mt-2 text-[#ffffff] md:text-2xl font-medium tracking-normal">
              Trust <span className="text-[#d4af37] font-bold">Legal Tax Solutions</span>—
              Your Partner in Financial Success.
            </span>
          </motion.h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Banner;