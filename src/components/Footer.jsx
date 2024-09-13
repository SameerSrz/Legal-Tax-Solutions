import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { animationStart, reveal } from '../utils/Animation';

const year = new Date().getFullYear();

const Footer = ({ title = "Legal Tax Solutions", description = "Providing expert tax advice and strategic planning to help individuals and businesses navigate complex tax regulations and optimize their financial outcomes. Our goal is to ensure compliance, minimize liabilities, and achieve financial peace of mind through personalized legal solutions.",
     menus = [ { name: "other resources", items: [ { name: "Services", path: "#" },
        { name: "About", path: "#" }, { name: "Contact Us", path: "#" }, { name: "Our Team", path: "#" } ] } ],
        services = [ { name: "Our Services", items: [ { name: "Tax Planning and Strategy", path: "#" },
            { name: "Tax Compliance", path: "#" }, { name: "International Taxation", path: "#" }, { name: "Tax Audits and Disputes", path: "#" } ] } ],
         copyright = `Copyright © ${year} Legal Tax Solutions` }) => {
  return (
    <motion.footer
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="relative px-4 pt-8 pb-6 bg-gray-800 text-white"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 0.5, duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold mb-4">{title}</h4>
            <p className="text-base font-normal lg:w-4/5">{description}</p>
            <div className="mt-6 mb-8 flex justify-center gap-4 lg:justify-start">
              <a href="https://www.facebook.com/hafizlastc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/h_lastc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-24 lg:mx-auto lg:mt-12">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <p className="text-sm font-medium uppercase mb-2">{name}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.path}
                        className="text-base text-gray-400 hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {services.map(({ name, items }) => (
              <div key={name}>
                <p className="text-sm font-medium uppercase mb-2">{name}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.path}
                        className="text-base text-gray-400 hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <p className="text-base">{copyright}</p>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
