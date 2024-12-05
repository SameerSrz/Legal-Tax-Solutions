import React from 'react';
import { motion } from 'framer-motion';

// Sample images, replace these with the actual images of your CEO and Director
// import ceoImage from '../assets/team-1.jpg';
// import directorImage from 'assets/team-1.jpg';

const OurTeam = () => {
  return (
    <section id="our-team" className="w-full py-12 md:py-18 lg:py-14 xl:py-14 text-black bg-[#63629dda]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-lg text-gray-900 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            At Legal Tax Solutions, we pride ourselves on having a team of dedicated professionals who are experts in their field. 
            Meet the people behind our success, committed to delivering exceptional tax and business consultancy services.
          </motion.p>
        </div>

        {/* History Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-2xl font-semibold text-black sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            A Legacy of Trust and Expertise in Tax Consultancy
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg text-gray-900 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Legal Tax Solutions was founded in 2010 with a mission to bridge the gap between businesses and individuals and the complex world of taxes. 
            Over the years, we’ve built a reputation for results-driven tax services, combining expert advice with a commitment to excellence.
          </motion.p>
        </div>

        {/* Team Member Section */}
        <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-2">
          {/* CEO Section */}
          <div className="flex flex-col items-center space-y-4">
            <motion.img
              src='/assets/team-1.jpg'
              alt="Muhammad Shahzaib Malik"
              className="rounded-full w-40 h-40 object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            />
            <motion.h3
              className="text-xl font-bold text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Muhammad Shahzaib Malik
            </motion.h3>
            <motion.p
              className="text-gray-900 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              CEO/Founder, Legal Tax Solutions
            </motion.p>
            <motion.p
              className="text-gray-900 text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              With over 14 years of experience, I have been helping businesses optimize their tax strategies, ensure compliance, and build a financially secure future.
            </motion.p>
          </div>

          {/* Director Section */}
          <div className="flex flex-col items-center space-y-4">
            <motion.img
              src='/assets/team-1.jpg'
              alt="Anees ul Rehman Butt"
              className="rounded-full w-40 h-40 object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            />
            <motion.h3
              className="text-xl font-bold text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Anees ul Rehman Butt
            </motion.h3>
            <motion.p
              className="text-gray-900 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Director, Legal Tax Solutions
            </motion.p>
            <motion.p
              className="text-gray-900 text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              With my extensive background in tax planning and corporate consultancy, I’ve developed strategies that help businesses navigate the complexities of tax regulations.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
