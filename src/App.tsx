import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import ClickSpark from './components/ClickSpark';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { AboutUs } from './pages/AboutUs';
import { FounderMessage } from './pages/FounderMessage';
import { OurProjects } from './pages/OurProjects';
import { Contact } from './pages/Contact';
import { Ecosystem } from './pages/Ecosystem';
import { HireUs } from './pages/HireUs';
import { Insights } from './pages/Insights';
import Testimony from './pages/Testimony';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ChatBot } from './components/ChatBot';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ClickSpark>
        <div className="relative min-h-screen bg-bg-dark selection:bg-brand-primary/30">
          {/* Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left" 
            style={{ scaleX }} 
          />

          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/founder-message" element={<FounderMessage />} />
            <Route path="/our-projects" element={<OurProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/hire-us" element={<HireUs />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/testimony" element={<Testimony />} />
            <Route path="*" element={<Home />} />
          </Routes>

          <Footer />
          <WhatsAppButton />
          <ChatBot />
        </div>
      </ClickSpark>
    </Router>
  );
}
