import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import GetInvolved from './pages/GetInvolved';
import GreenNoseDay from './pages/GreenNoseDay';
import ContactUs from './pages/ContactUs';
import ImpactStories from './pages/ImpactStories';
import DonateOptions from './pages/DonateOptions';
import PhotoStories from './pages/PhotoStories';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './util/ScrollToTop';
import Donate from './components/Donate';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/green-nose-day" element={<GreenNoseDay />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/stories" element={<ImpactStories />} />
          <Route path="/donate-options" element={<DonateOptions />} />
          <Route path="/gallery" element={<PhotoStories />} />
        </Routes>
        <Donate />
        <Footer />
      </div>
    </Router>
  );
}

export default App;