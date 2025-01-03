import React, { useState, useEffect, useRef } from 'react';

const companies = [
  { name: 'FBR', logo: 'assets/fbr.png' },
  { name: 'IPO', logo: 'assets/ipo.jpg' },
  { name: 'Revenue', logo: 'assets/Revenue.png' },
  { name: 'weboc', logo: 'assets/weboc.jpg' },
  { name: 'pseb', logo: 'assets/pseb.png' },
  { name: 'psw', logo: 'assets/psw.png' },
  { name: 'secp', logo: 'assets/secp.png' },
  // Add more companies as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = companies.length;
  const itemWidth = 200; // Width of each company item
  const visibleItems = 3; // Number of items visible at a time
  const sliderRef = useRef(null);

  // Clone companies to create infinite scrolling effect
  const clonedCompanies = [...companies, ...companies]; // Clone the array to loop back smoothly

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currentIndex === totalItems) {
      setTimeout(() => {
        sliderRef.current.style.transition = 'none'; 
        setCurrentIndex(0); 
      }, 500); 
    } else {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out'; 
    }
  }, [currentIndex, totalItems]);

  return (
    <section
      id='companies'
      className="w-full py-12 md:py-24 lg:py-10"
    >
      <div
        className="container mx-auto px-4 md:px-6"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">Our Expertise In</div>
          </div>
        </div>

        <div className="relative overflow-hidden pt-4 px-11">
          <div
            ref={sliderRef}
            className="flex space-x-6"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${itemWidth * clonedCompanies.length}px`,
            }}
          >
            {clonedCompanies.map((company, index) => (
              <div key={index} className="flex-shrink-0 bg-[white] rounded-lg border-2 overflow-hidden shadow-md" style={{ width: `${itemWidth}px`, height: '100px' }}>
                <div className="flex items-center justify-center h-full">
                  <img src={company.logo} alt={company.name} className="h-full w-auto" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Slider;