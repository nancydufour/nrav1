import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import GetInvolved from './pages/GetInvolved';
import GreenNoseDay from './pages/GreenNoseDay';
import ContactUs from './pages/ContactUs';
import AimsObjectives from './pages/AimsObjectives';
import ImpactStories from './pages/ImpactStories';
import WhyWeExist from './pages/WhyWeExist';
import DonateOptions from './pages/DonateOptions';
import Campaigns from './pages/Campaigns';
import Events from './pages/Events';
import DonorWall from './pages/DonorWall';
import Blog from './pages/Blog';
import PhotoStories from './pages/PhotoStories';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/green-nose-day" element={<GreenNoseDay />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/objectives" element={<AimsObjectives />} />
          <Route path="/stories" element={<ImpactStories />} />
          <Route path="/why-we-exist" element={<WhyWeExist />} />
          <Route path="/donate-options" element={<DonateOptions />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donor-wall" element={<DonorWall />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/photos" element={<PhotoStories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;