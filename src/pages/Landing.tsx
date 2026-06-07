import { Nav } from '../components/tivora/Nav';
import { Hero } from '../components/tivora/Hero';
import { Segments } from '../components/tivora/Segments';
import { Problems } from '../components/tivora/Problems';
import { Solution } from '../components/tivora/Solution';
import { Modules } from '../components/tivora/Modules';
import { AISection } from '../components/tivora/AISection';
import { HowItWorks } from '../components/tivora/HowItWorks';
import { Testimonials } from '../components/tivora/Testimonials';
import { Pricing } from '../components/tivora/Pricing';
import { FAQ } from '../components/tivora/FAQ';
import { CTAFinal } from '../components/tivora/CTAFinal';
import { Footer } from '../components/tivora/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Nav />
      <Hero />
      <Segments />
      <Problems />
      <Solution />
      <Modules />
      <AISection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
}
