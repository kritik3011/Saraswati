import React from 'react';
import { contactInfo } from '../data/contact';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20Saraswati%20IAS,%20I%20would%20like%20to%20know%20more%20about%20your%20courses.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 md:w-9 md:h-9" />
    </a>
  );
};

export default WhatsAppButton;
