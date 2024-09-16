import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaAddressBook  } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import {PageTitle} from './PageTitle';

const Contact = () => {
    const handleMassageSubmit = ()=>{
      window.open(`https://wa.me/923217080012`)
  }

  return (
    <div id='contact' className="bg-gray-100 p-6 w-full mx-auto">
      <PageTitle section="Contact Us" heading="Get in Touch with Us">
        Whether you have questions, need support, or want to explore partnership opportunities, we are here to help. Complete the form below, and we'll get back to you within 24 hours.
      </PageTitle>
      <div className="lg:flex lg:gap-12 px-11">
        {/* Contact Information on the Left */}
        <div className="lg:w-5/12 mt-12 lg:mt-0 pt-[90px]">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <MdEmail />
              <p className="text-gray-700">email@gmail.com</p>
            </div>
              <a href="tel:+923217080012" className="flex items-center space-x-3">
                <IoCall />
                <p className="text-gray-700">(+92) 321 7080012</p>
              </a>
            <div className="flex items-center space-x-3">
              <FaAddressBook />
              <p className="text-gray-700">123 Street Name, Lahore, Pakistan</p>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleMassageSubmit}>
              <IoLogoWhatsapp />
              <p className="text-gray-700">(+92) 321 7080012</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form on the Right */}
        <div className="lg:w-7/12">
          <form className="w-full mt-12 space-y-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
              <div className="flex-1">
                <label htmlFor="full-name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              {/* <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                /> */}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="8"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
