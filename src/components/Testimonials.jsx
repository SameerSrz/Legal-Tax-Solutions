import React, { useState } from 'react';

const companies = [
  { name: 'ARTISAN COFFEE', logo: 'assets/artisanCoffee.jpeg' },
  { name: 'MANHATTAN BITES', logo: 'assets/manhattan.jpeg' },
  { name: 'GLORIA JEANS', logo: 'assets/gloria.png' },
  { name: 'LAHORE LAB', logo: 'assets/lahoreLab.png' },
  { name: 'MUHAMMADI NIHARI', logo: 'assets/nehari.jpeg' },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = 3; 
    const totalItems = companies.length;
    const itemWidth = 200; 
    const containerWidth = itemWidth * visibleItems;

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems - visibleItems + 1));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (totalItems - visibleItems + 1)) % (totalItems - visibleItems + 1));
    };

  return (
    <section
    id='testimonials'
    className="w-full py-12 md:py-24 lg:py-10"
  >
    <div
      className="container mx-auto px-4 md:px-6"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">Our Valued Clients</div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            -- In the Spotlight
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden pt-4 px-11">
        <div
          className="flex space-x-6"
          style={{ transform: `translateX(-${currentIndex * itemWidth}px)`, width: `${itemWidth * totalItems}px` }}
        >
          {companies.map((company, index) => (
            <div key={index} className="flex-shrink-0 bg-white rounded-lg border-2 overflow-hidden shadow-md" style={{ width: `${itemWidth}px`, height: '100px' }}>
              <div className="flex items-center justify-center h-full">
                <img src={company.logo} alt={company.name} className="h-full w-auto" />
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
    </div>
  </section>
  )
}

export default Testimonials
