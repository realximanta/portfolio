import { useEffect } from 'react';

const LINKS = [
  { href: '#about', label: '01 // whoami' },
  { href: '#workflow', label: '02 // workflow' },
  { href: '#projects', label: '03 // projects' },
  { href: '#identities', label: '04 // identities' },
  { href: '#journey', label: '05 // journey' },
  { href: '#skills', label: '06 // skills' },
  { href: '#contact', label: '07 // contact' },
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
