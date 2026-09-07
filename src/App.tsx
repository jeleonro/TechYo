import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import About from './components/sections/About';
import Trust from './components/sections/Trust';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Trust />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;