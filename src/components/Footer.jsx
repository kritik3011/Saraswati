import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: About */}
          <div>
            <div className="flex flex-col items-start text-white leading-none mb-4">
              <span className="text-xs font-bold tracking-wide text-gray-300">Since-1998</span>
              <span className="brand-name text-3xl text-white">सरस्वती IAS</span>
              <span className="text-[11px] font-medium text-gray-400">आपके सपनों को करे साकार ... रखे आगे</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Expert guidance, structured preparation, experienced faculty, and a focused learning environment for UPSC and State Civil Services aspirants.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-poppins mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">Courses</Link></li>
              <li><Link to="/faculty" className="text-gray-300 hover:text-white transition-colors text-sm">Faculty</Link></li>
              <li><Link to="/results" className="text-gray-300 hover:text-white transition-colors text-sm">Results</Link></li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-lg font-bold font-poppins mb-4 text-gold">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/courses/upsc-civil-services" className="text-gray-300 hover:text-white transition-colors text-sm">UPSC Civil Services</Link></li>
              <li><Link to="/courses/uppsc" className="text-gray-300 hover:text-white transition-colors text-sm">UPPSC</Link></li>
              <li><Link to="/courses/foundation-course" className="text-gray-300 hover:text-white transition-colors text-sm">Foundation Course</Link></li>
              <li><Link to="/courses/geography" className="text-gray-300 hover:text-white transition-colors text-sm">Optional Subjects</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold font-poppins mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                    {contactInfo.phone}
                  </a>
                  <a href={`tel:${contactInfo.phone2}`} className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                    {contactInfo.phone2}
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed"
                >
                  {contactInfo.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Saraswati IAS. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
