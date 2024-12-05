import React from "react";
import { motion } from "framer-motion";

const History = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-[#63629dda] py-16 px-6">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="inline-block rounded-lg font-semibold bg-gray-200 px-3 py-1 text-sm text-black">History of Legal Tax Solutions</p>
        <h1 className="text-5xl font-bold text-primary mb-4">
          A Legacy of Trust and Expertise
        </h1>
        <p className="text-lg text-gray-700">
          Bridging the gap between businesses and individuals, Legal Tax
          Solutions offers unparalleled tax consultancy services.
        </p>
      </motion.div>

      {/* Detailed Introduction Section */}
      <motion.div
        className=" bg-gradient-to-r from-white to-[#63629d] rounded-lg shadow-lg p-8 mt-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">
          Welcome to Legal Tax Solutions
        </h2>
        <p className="text-gray-700 mb-4">
          At Legal Tax Solutions, we specialize in providing expert tax
          advisory, planning, and consultancy services to individuals and
          businesses across Lahore and Pakistan.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to empower clients by delivering tailored,
          professional tax and financial solutions that ensure compliance,
          reduce liabilities, and unlock long-term success.
        </p>
        <p className="text-gray-700">
          Whether you’re an individual seeking to optimize your tax position or
          a business in need of strategic tax planning and financial
          consulting, we’re here to simplify your tax matters and help you make
          sound financial decisions.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="max-w-6xl mt-16 mx-auto">
        <div className="relative border-l-4 border-primary pl-8">
          {/* Timeline Item */}
          {[
            {
              year: "2010",
              title: "Our Beginning",
              description:
                "Legal Tax Solutions was founded with a vision to provide comprehensive and accessible tax advice to businesses and individuals.",
            },
            {
              year: "2015",
              title: "Growth & Expansion",
              description:
                "Became a trusted name in tax consultancy, serving small businesses, large corporations, and individuals in diverse industries.",
            },
            {
              year: "2023",
              title: "Continuous Innovation",
              description:
                "With a deep understanding of tax laws, we continue to provide innovative solutions to minimize liabilities and optimize business structures.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="absolute -left-8 top-2 bg-primary w-6 h-6 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.year}: {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      </section>
  );
};

export default History;
