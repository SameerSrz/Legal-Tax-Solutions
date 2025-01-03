import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaAddressBook  } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import {PageTitle} from './PageTitle';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

    const handleMassageSubmit = ()=>{
      window.open(`https://wa.me/923217080012`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }

    // WhatsApp phone number in international format, replace with your number
    const phoneNumber = '+923217080012'; 

    // Create a message with the form data
    const whatsappMessage = `Full Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`;

    // Encode the message and create a WhatsApp API URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect the user to WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <div id='contact' className="bg-gradient-to-b from-[#63629dda] to-gray-200 p-6 w-full mx-auto">
      <PageTitle section="Contact Us" heading="Get in Touch with Us">
        Whether you have questions, need support, or want to explore partnership opportunities, we are here to help. Complete the form below, and we'll get back to you within 24 hours.
      </PageTitle>
      <div className="lg:flex lg:gap-12 px-11">
        {/* Contact Information on the Left */}
        <div className="lg:w-5/12 mt-12 lg:mt-0 pt-[90px]">
          <h3 className="text-xl font-semibold text-black mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <MdEmail />
              <p className="text-gray-900">LEGALTAXSOLUTIONS.NET@gmail.com</p>
            </div>
              <a href="tel:+923217080012" className="flex items-center space-x-3">
                <IoCall />
                <p className="text-gray-900">(+92) 321 7080012</p>
              </a>
            <div className="flex items-center space-x-3">
              <FaAddressBook />
              <p className="text-gray-900">Suit no 1 & 1A, 2nd floor sadiq plaza, the mall road, Lahore, Pakistan</p>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleMassageSubmit}>
              <IoLogoWhatsapp />
              <p className="text-gray-900">(+92) 321 7080012</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form on the Right */}
        <div className="lg:w-7/12">
          <form className="w-full mt-12 space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
              <div className="flex-1">
                <label htmlFor="full-name" className="block text-gray-900 font-medium mb-2">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-900 font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-gray-900">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#141444] text-white font-semibold rounded-lg hover:bg-[#3e3e92] transition duration-300"
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
