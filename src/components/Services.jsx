import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { reveal } from '../utils/Animation';

// Define scroll animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const animationStart = 0.5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { title: 'Tax Planning', description: 'Strategic planning to optimize your tax position and minimize liabilities.' },
    { title: 'Tax Preparation', description: 'Expert preparation of your tax returns to ensure accuracy and compliance.' },
    { title: 'Tax Compliance', description: 'Assistance with meeting tax obligations and navigating regulatory requirements.' },
    { title: 'Audit Assistance', description: 'Support during audits to ensure a smooth and compliant process.' },
    { title: 'Estate Planning', description: 'Planning to manage your estate and ensure your wishes are carried out.' },
  ];

  const visibleSlides = 3;
  const totalSlides = slides.length;
  const slideWidth = 300;
  const containerWidth = slideWidth * visibleSlides;

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalSlides - visibleSlides + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (totalSlides - visibleSlides + 1)) % (totalSlides - visibleSlides + 1));
  };

  return (
    <motion.section
      id='services'
      layout
      className="w-full py-12 md:py-24 lg:py-20 bg-gray-100"
    >
      <motion.div
        className="container mx-auto px-4 md:px-6"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">Our Services</div>
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Comprehensive Legal Solutions
            </motion.h2>
            <motion.p
              className="max-w-4xl text-gray-600 md:text-xl lg:text-base"
            >
              Legal Tax Solutions offers a wide range of legal services to individuals and businesses, including litigation,
              corporate law, real estate, and more. Our team of experts is dedicated to providing tailored solutions to
              meet your unique needs.
            </motion.p>
          </div>
        </div>
        
        <div className="relative overflow-hidden pt-4">
          <div
            className="flex transition-transform duration-500 ease-in-out space-x-9"
            style={{ transform: `translateX(-${currentIndex * (slideWidth - 24)}px)`, width: `${containerWidth}px` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 bg-white rounded-lg border-2 overflow-hidden shadow-md" style={{ width: `${slideWidth}px`, height: '300px' }}>
                <div className="px-4 py-6 flex-1">
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-xl">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {slide.description}
                  </p>
                </div>
                <div className="px-4 py-4">
                  <a
                    aria-describedby="tier-company"
                    className="flex items-center justify-center w-full
                    px-6 py-2.5 text-center text-white bg-black border-2 border-black rounded-full duration-200 hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md focus:outline-none"
          >
            &lt;
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md focus:outline-none"
          >
            &gt;
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
