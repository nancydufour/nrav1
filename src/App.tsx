import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "sonner";
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import GetInvolved from './pages/GetInvolved';
import GreenNoseDay from './pages/GreenNoseDay';
import ContactUs from './pages/ContactUs';
import ImpactStories from './pages/ImpactStories';
import DonateOptions from './pages/DonateOptions';
import PhotoStories from './pages/PhotoStories';
import Partners from './pages/Partners';
import NeedyReliefClinic from './pages/NeedyReliefClinic';
import HungerProgram from './pages/work/HungerProgram';
import HealthcareProgram from './pages/work/HealthcareProgram';
import ShelterProgram from './pages/work/ShelterProgram';
import ChildrenProgram from './pages/work/ChildrenProgram';
import CultureProgram from './pages/work/CultureProgram';
import RebuildingProgram from './pages/work/RebuildingProgram';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './util/ScrollToTop';
import Donate from './components/Donate';
import BackgroundMusic from './components/BackgroundMusic';
import Events from './pages/Events';
import GreenNoseDetails from './pages/GreenNoseDetails';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <BackgroundMusic src='/bgMusic.mp3' />
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/green-nose-day" element={<GreenNoseDay />} />
          <Route path="/green-nose-details" element={<GreenNoseDetails />} />{' '}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/stories" element={<ImpactStories />} />
          <Route path="/donate-options" element={<DonateOptions />} />
          <Route path="/gallery" element={<PhotoStories />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/clinic" element={<NeedyReliefClinic />} />
          <Route path="/work/hunger" element={<HungerProgram />} />
          <Route path="/work/healthcare" element={<HealthcareProgram />} />
          <Route path="/work/shelter" element={<ShelterProgram />} />
          <Route path="/work/children" element={<ChildrenProgram />} />
          <Route path="/work/culture" element={<CultureProgram />} />
          <Route path="/work/rebuilding" element={<RebuildingProgram />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Donate />
        <Footer />

        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;