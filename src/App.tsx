import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Terminal } from '@/components/sections/Terminal';
import { About } from '@/components/sections/About';
import { Workflow } from '@/components/sections/Workflow';
import { Projects } from '@/components/sections/Projects';
import { Identities } from '@/components/sections/Identities';
import { Journey } from '@/components/sections/Journey';
import { Skills } from '@/components/sections/Skills';
import { GitHubActivity } from '@/components/sections/GitHubActivity';
import { Architecture } from '@/components/sections/Architecture';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollProgress />

      <div className="bg-layers" aria-hidden="true">
        <div className="bg-radial" />
        <div className="bg-grid" />
        <div className="bg-beam" />
        <div className="bg-noise" />
      </div>

      <Navbar onToggleMenu={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <Terminal />
        <About />
        <Workflow />
        <Projects />
        <Identities />
        <Journey />
        <Skills />
        <GitHubActivity />
        <Architecture />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
