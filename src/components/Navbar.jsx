import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { contactInfo } from '../data/contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium inline-block transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
      isActive
        ? 'text-navy-900 font-bold scale-[1.12]'
        : 'text-gray-500 hover:text-navy-900 hover:scale-[1.07] scale-100'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block text-[17px] py-1 ${isActive ? 'text-gold font-bold' : 'text-gray-700 hover:text-navy-900'}`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-navy-900 text-white text-xs md:text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-1 sm:gap-0">
          <p>Admissions Open for Upcoming Batches | Talk to Our Counsellor</p>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center hover:text-gold transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              {contactInfo.phone}
            </a>
            <span className="text-gray-500">|</span>
            <a href={`tel:${contactInfo.phone2}`} className="flex items-center hover:text-gold transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              {contactInfo.phone2}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo — circular image + text, PW-style */}
          <Link to="/" className="flex items-center gap-3 text-navy-900 leading-none group">
            {/* Circular logo */}
            <div className="relative flex-shrink-0 w-14 h-14">
              <img
                src="/logo.jpg"
                alt="Saraswati IAS Logo"
                className="w-14 h-14 rounded-full object-cover border-[3px] border-yellow-500 shadow-md group-hover:shadow-yellow-400/50 transition-shadow duration-300"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
              />
              {/* Fallback if image not found */}
              <div style={{display:'none'}} className="absolute inset-0 rounded-full bg-black border-[3px] border-yellow-500 flex items-center justify-center">
                <span className="text-yellow-400 font-black text-sm leading-none">IAS</span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-gray-400 uppercase">Since 1998</span>
              <span className="brand-name text-xl sm:text-2xl text-navy-900">सरस्वती IAS</span>
              <span className="text-[8px] sm:text-[10px] font-medium text-gray-500">आपके सपनों को करे साकार ... रखे आगे</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-navy-900 font-medium transition-colors duration-200">
                Courses <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isCoursesOpen && (
                <div className="absolute left-0 top-full pt-2 w-56 z-50">
                  <div className="bg-white border border-gray-100 rounded-md shadow-lg py-2">
                    <NavLink to="/courses/upsc-civil-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPSC Civil Services</NavLink>
                    <NavLink to="/courses/uppsc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPPSC</NavLink>
                    <NavLink to="/courses/foundation-course" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">Foundation Course</NavLink>
                    <NavLink to="/courses/upsc-prelims" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPSC Prelims</NavLink>
                    <NavLink to="/courses/upsc-mains" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPSC Mains</NavLink>
                    <div className="border-t border-gray-100 my-1"></div>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase">Optional Subjects</div>
                    <NavLink to="/courses/geography" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">Geography</NavLink>
                    <NavLink to="/courses/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">History</NavLink>
                    <NavLink to="/courses/sociology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">Sociology</NavLink>
                    <NavLink to="/courses/political-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">Political Science</NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Official Links Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsLinksOpen(true)}
              onMouseLeave={() => setIsLinksOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-navy-900 font-medium transition-colors duration-200">
                Official Links <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isLinksOpen && (
                <div className="absolute left-0 top-full pt-2 w-48 z-50">
                  <div className="bg-white border border-gray-100 rounded-md shadow-lg py-2">
                    <a href="https://www.upsc.gov.in/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPSC Website</a>
                    <a href="https://web.archive.org/web/20210618222017/http://uppsc.up.nic.in/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-900">UPPSC Website</a>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/study-material" className={navLinkClass}>Study Material</NavLink>
            <NavLink to="/videos" className={navLinkClass}>Videos</NavLink>
            <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

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
        <div className="md:hidden bg-white border-t border-gray-100 pb-24 pt-6 px-6 sm:px-8 shadow-inner">
          <div className="flex flex-col space-y-5">
            <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>About Us</NavLink>

            <div className="space-y-2">
              <p className="text-[19px] font-bold text-navy-900">Courses</p>
              <div className="border-l border-gray-200 pl-5 space-y-3 ml-2 py-1">
                <NavLink to="/courses/upsc-civil-services" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>UPSC Civil Services</NavLink>
                <NavLink to="/courses/uppsc" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>UPPSC</NavLink>
                <NavLink to="/courses/foundation-course" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>Foundation Course</NavLink>
                <NavLink to="/courses/upsc-prelims" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>UPSC Prelims</NavLink>
                <NavLink to="/courses/upsc-mains" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>UPSC Mains</NavLink>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[19px] font-bold text-navy-900">Optional Subjects</p>
              <div className="border-l border-gray-200 pl-5 space-y-3 ml-2 py-1">
                <NavLink to="/courses/geography" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>Geography</NavLink>
                <NavLink to="/courses/history" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>History</NavLink>
                <NavLink to="/courses/sociology" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>Sociology</NavLink>
                <NavLink to="/courses/political-science" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>Political Science</NavLink>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[19px] font-bold text-navy-900">Official Links</p>
              <div className="border-l border-gray-200 pl-5 space-y-3 ml-2 py-1">
                <a href="https://www.upsc.gov.in/" target="_blank" rel="noopener noreferrer" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>UPSC Website</a>
                <a href="https://web.archive.org/web/20210618222017/http://uppsc.up.nic.in/" target="_blank" rel="noopener noreferrer" className="block text-[17px] text-gray-600 hover:text-navy-900" onClick={() => setIsOpen(false)}>UPPSC Website</a>
              </div>
            </div>

            <NavLink to="/study-material" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Study Material</NavLink>
            <NavLink to="/videos" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Videos</NavLink>
            <NavLink to="/gallery" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Gallery</NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>

            {/* Mobile phone numbers */}
            <div className="flex flex-col gap-3 pt-6 pb-2 border-t border-gray-100">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center text-[17px] text-navy-900 font-bold">
                <Phone className="w-5 h-5 mr-3 text-gold" />{contactInfo.phone}
              </a>
              <a href={`tel:${contactInfo.phone2}`} className="flex items-center text-[17px] text-navy-900 font-bold">
                <Phone className="w-5 h-5 mr-3 text-gold" />{contactInfo.phone2}
              </a>
            </div>

            <Link to="/contact" className="bg-gold text-white text-center px-4 py-3 rounded-md font-semibold text-[17px]" onClick={() => setIsOpen(false)}>
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


