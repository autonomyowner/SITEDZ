import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Featured from './components/Featured';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Featured />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
