import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-8 md:py-18 lg:py-24 xl:py-20 text-black bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <motion.h1
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              >
                Trusted Legal Expertise
              </motion.h1>
              <motion.p
                className="max-w-2xl text-gray-700 text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              >
                At Legal Tax Solutions, we specialize in delivering expert tax services that cater to both individual and corporate needs. Our experienced team offers personalized tax planning, preparation, and compliance strategies, ensuring you maximize savings while staying fully compliant with the latest regulations. Trust us to simplify the complexities of taxes, allowing you to focus on what matters most. Schedule a consultation today to see how we can help you achieve your financial goals with precision and care.
              </motion.p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <motion.a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#836a28] px-6 text-base font-medium text-white shadow-lg transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#141444] px-6 text-base font-medium text-white shadow-lg transition-colors hover:bg-[#3e3e92] focus:outline-none focus:ring-2 focus:ring-blue-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Our Services
              </motion.a>
            </div>
          </div>
          <motion.img
            src="https://res.cloudinary.com/dffnyrdjn/image/upload/v1725544422/nkwgjkt0qnu36ipnraja.jpg"
            width="550"
            height="750"
            alt="Legal Services"
            className="mx-auto aspect-video h-[450px] overflow-hidden rounded-xl object-cover shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;