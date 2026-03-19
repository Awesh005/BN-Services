import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import ClickSpark from './components/ClickSpark';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Preloader } from './components/Preloader';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const ServiceDetail = lazy(() =>
  import('./pages/ServiceDetail').then((module) => ({ default: module.ServiceDetail })),
);
const AboutUs = lazy(() => import('./pages/AboutUs').then((module) => ({ default: module.AboutUs })));
const FounderMessage = lazy(() =>
  import('./pages/FounderMessage').then((module) => ({ default: module.FounderMessage })),
);
const OurProjects = lazy(() =>
  import('./pages/OurProjects').then((module) => ({ default: module.OurProjects })),
);
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const Ecosystem = lazy(() =>
  import('./pages/Ecosystem').then((module) => ({ default: module.Ecosystem })),
);
const HireUs = lazy(() => import('./pages/HireUs').then((module) => ({ default: module.HireUs })));
const Insights = lazy(() => import('./pages/Insights').then((module) => ({ default: module.Insights })));
const Testimony = lazy(() => import('./pages/Testimony'));
const ChatBot = lazy(() =>
  import('./components/Chatbot').then((module) => ({ default: module.ChatBot })),
);

function RouteFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <Preloader />
      <ClickSpark>
        <div className="relative min-h-screen bg-bg-dark selection:bg-brand-primary/30">
          {/* Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left" 
            style={{ scaleX }} 
          />

          <Navbar />
          
          <Suspense fallback={<RouteFallback />}>
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
          </Suspense>

          <Footer />
          <WhatsAppButton />
          <Suspense fallback={null}>
            <ChatBot />
          </Suspense>
        </div>
      </ClickSpark>
    </Router>
  );
}
