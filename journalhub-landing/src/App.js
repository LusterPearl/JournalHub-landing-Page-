// src/App.js
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
