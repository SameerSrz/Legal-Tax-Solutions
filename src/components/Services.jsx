import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Service list with logos, descriptions, and items
const services = [
  {
    title: 'Business / Company Registration',
    items: ['Sole Proprietorship (FBR)', 'Partnership Firm (AOP)', 'Company Registration (SECP)', 'NTN Registration (FBR)'],
    logo: 'assets/secp.png',
  },
  {
    title: 'Tax Returns',
    items: ['Annual Income Tax Return', 'Withholding Income Tax Returns', 'Monthly Sales Tax Returns'],
    logo: 'assets/fbr.png',
  },
  {
    title: 'Audit Reports and Accounts',
    items: [],
    description: 'We provide professional audit reports and maintain accurate accounts for your business to meet regulatory standards.',
    logo: 'assets/audit.png',
  },
  {
    title: 'PRA Registration',
    items: [],
    description: 'Effortlessly register with the Punjab Revenue Authority (PRA) to ensure compliance with provincial tax requirements.',
    logo: 'assets/Revenue.png',
  },
  {
    title: 'SRB Registration',
    items: [],
    description: 'Simplify your Sindh Revenue Board (SRB) registration process with our expert assistance.',
    logo: 'assets/srb.png',
  },
  {
    title: 'KPRA Registration',
    items: [],
    description: 'Get registered with the Khyber Pakhtunkhwa Revenue Authority (KPRA) seamlessly.',
    logo: 'assets/kpra.jpeg',
  },
  {
    title: 'General Sales Tax Number (GST)',
    items: [],
    description: 'Obtain your GST number to comply with sales tax regulations and enhance your business credibility.',
    logo: 'assets/fbr.png',
  },
  {
    title: 'Trademark, Copyright, and Logo Registration',
    items: ['IPO Pakistan'],
    description: 'Secure your intellectual property with trademark, copyright, and logo registration services.',
    logo: 'assets/trademark.png',
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSlides = 3; // Number of slides visible at once
  const totalSlides = services.length;
  const slideWidth = 300;
  const containerWidth = slideWidth * visibleSlides;

  // Handlers for slider navigation
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (totalSlides - visibleSlides + 1)
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + (totalSlides - visibleSlides + 1)) % (totalSlides - visibleSlides + 1)
    );
  };

  return (
    <motion.section
      id="services"
      className="w-full py-12 md:py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Comprehensive Legal and Tax Solutions
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 md:text-lg">
            We provide a wide range of legal and tax-related services tailored to meet your needs. Explore our comprehensive offerings below.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative mt-10 overflow-hidden">
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out space-x-6"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}px)`,
              width: `${containerWidth}px`,
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                {/* Logo */}
                {service.logo && (
                  <div className="mb-4 flex justify-center">
                    <img
                      src={service.logo}
                      alt={`${service.title} logo`}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                )}
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {service.title}
                </h3>
                {/* Items or Description */}
                {service.items.length > 0 ? (
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-green-500">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 flex-grow">
                    {service.description || 'Details available upon request.'}
                  </p>
                )}
                {/* Contact Button */}
                <div className="mt-4">
                  <button
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
                    onClick={() => window.location.href = '#contact'} // Update with the actual contact page URL
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>
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
