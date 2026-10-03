import { ReactNode } from 'react';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function TerminalWindow({
  title,
  children,
  className = '',
  ariaLabel,
}: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`.trim()} role="region" aria-label={ariaLabel}>
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
        <span className="terminal-title">{title}</span>
      </div>
      {children}
    </div>
  );
}
