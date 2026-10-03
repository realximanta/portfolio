import { ReactNode, useRef, MouseEvent } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  external,
  variant = 'primary',
  className = '',
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isFinePointer = useMediaQuery('(pointer: fine)');

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isFinePointer || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <a
      ref={ref}
      href={href}
      className={`${baseClass} ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
