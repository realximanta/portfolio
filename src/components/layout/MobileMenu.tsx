import { useEffect } from 'react';

const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#github', label: 'Activity' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={`mobile-menu ${open ? 'open' : ''}`}
      role="dialog"
      aria-label="Mobile navigation"
      aria-hidden={!open}
    >
      {LINKS.map((l) => (
        <a key={l.href} href={l.href} onClick={onClose}>
          {l.label}
        </a>
      ))}
    </div>
  );
}
