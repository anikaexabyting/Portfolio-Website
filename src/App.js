import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import WorkHistory from './components/workhistory/WorkHistory';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WorkHistory />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
