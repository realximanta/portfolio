import { useEffect, useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { GithubIcon } from '@/components/icons/Icons';

const SECTION_IDS = ['projects', 'about', 'skills', 'github', 'journey', 'contact'];
const NAV_LINKS = [
  { id: 'projects', label: 'projects' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'github', label: 'activity' },
  { id: 'journey', label: 'journey' },
  { id: 'contact', label: 'contact' },
] as const;

interface NavbarProps {
  onToggleMenu: () => void;
  menuOpen: boolean;
}

export function Navbar({ onToggleMenu, menuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection([...SECTION_IDS]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Tuku home">
          <span className="prompt">~/</span>tuku
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${active === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/realximanta"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          <GithubIcon size={14} />
          GitHub
        </a>

        <button
          className={`mobile-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
