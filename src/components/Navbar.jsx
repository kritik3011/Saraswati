import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { contactInfo } from '../data/contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-navy-900 text-white text-xs md:text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p>Admissions Open for Upcoming Batches | Talk to Our Counsellor</p>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center hover:text-gold transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col items-start text-navy-900 leading-none">
            <span className="text-[10px] sm:text-xs font-bold tracking-wide">Since-1998</span>
            <span className="text-2xl sm:text-3xl font-black font-poppins tracking-tight mt-0.5 mb-0.5">सरस्वती IAS</span>
            <span className="text-[9px] sm:text-[11px] font-medium text-gray-700">आपके सपनों को करे साकार ... रखे आगे</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-navy-900 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-navy-900 font-medium">About Us</Link>
            
            {/* Dropdown */}
            <div className="relative group" onMouseEnter={() => setIsCoursesOpen(true)} onMouseLeave={() => setIsCoursesOpen(false)}>
              <button className="flex items-center text-gray-700 hover:text-navy-900 font-medium">
                Courses <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isCoursesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg py-2">
                  <Link to="/courses/upsc-civil-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPSC Civil Services</Link>
                  <Link to="/courses/uppsc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPPSC</Link>
                  <Link to="/courses/foundation-course" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">Foundation Course</Link>
                  <Link to="/courses/upsc-prelims" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPSC Prelims</Link>
                  <Link to="/courses/upsc-mains" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPSC Mains</Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase">Optional Subjects</div>
                  <Link to="/courses/geography" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">Geography</Link>
                  <Link to="/courses/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">History</Link>
                  <Link to="/courses/sociology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">Sociology</Link>
                  <Link to="/courses/political-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">Political Science</Link>
                </div>
              )}
            </div>

            <Link to="/faculty" className="text-gray-700 hover:text-navy-900 font-medium">Faculty</Link>
            <Link to="/results" className="text-gray-700 hover:text-navy-900 font-medium">Results</Link>
            <Link to="/study-material" className="text-gray-700 hover:text-navy-900 font-medium">Study Material</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-navy-900 font-medium">Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-navy-900 font-medium">Contact</Link>
            
            <Link to="/contact" className="bg-gold text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors">
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-900 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-navy-900" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-navy-900" onClick={() => setIsOpen(false)}>About Us</Link>
            
            <div className="border-l-2 border-gray-100 pl-4 space-y-3">
              <p className="text-sm font-semibold text-gray-400">Courses</p>
              <Link to="/courses/upsc-civil-services" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>UPSC Civil Services</Link>
              <Link to="/courses/uppsc" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>UPPSC</Link>
              <Link to="/courses/foundation-course" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Foundation Course</Link>
              <Link to="/courses/upsc-prelims" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>UPSC Prelims</Link>
              <Link to="/courses/upsc-mains" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>UPSC Mains</Link>
              <p className="text-sm font-semibold text-gray-400 mt-2">Optional Subjects</p>
              <Link to="/courses/geography" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Geography</Link>
              <Link to="/courses/history" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>History</Link>
              <Link to="/courses/sociology" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Sociology</Link>
              <Link to="/courses/political-science" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Political Science</Link>
            </div>

            <Link to="/faculty" className="text-gray-700 hover:text-navy-900" onClick={() => setIsOpen(false)}>Faculty</Link>
            <Link to="/results" className="text-gray-700 hover:text-navy-900" onClick={() => setIsOpen(false)}>Results</Link>
            <Link to="/study-material" className="text-gray-700 hover:text-navy-900" onClick={() => setIsOpen(false)}>Study Material</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-navy-900" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-navy-900" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <Link to="/contact" className="bg-gold text-white text-center px-4 py-2 rounded-md font-semibold" onClick={() => setIsOpen(false)}>
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
