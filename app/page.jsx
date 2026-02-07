import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Featured from '@/components/Featured';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Featured />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
