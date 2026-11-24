import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function Reveal({ children, className = '', as = 'div' }: RevealProps) {
  const Tag = as;

  return (
    <Tag className={className || undefined}>
      {children}
    </Tag>
  );
}
