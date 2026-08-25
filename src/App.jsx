import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Faculty from './pages/Faculty';
import Results from './pages/Results';
import StudyMaterial from './pages/StudyMaterial';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

// Wraps routes with a fade-in animation on every page change
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <main key={location.pathname} className="flex-grow w-full overflow-x-hidden page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetails />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/results" element={<Results />} />
        <Route path="/study-material" element={<StudyMaterial />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
