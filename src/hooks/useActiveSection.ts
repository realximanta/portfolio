import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      let current = '';
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) current = id;
      });
      setActive(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
}
