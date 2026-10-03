import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  const Tag = as;

  return (
    <Tag ref={ref as never} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
