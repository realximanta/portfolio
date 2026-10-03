import type { Identity } from '@/types';
import { GithubIcon } from '@/components/icons/Icons';

interface IdentityCardProps {
  identity: Identity;
  delay?: 0 | 1 | 2;
}

export function IdentityCard({ identity, delay = 0 }: IdentityCardProps) {
  return (
    <a
      href={identity.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`identity-card reveal reveal-delay-${delay}`}
    >
      <div className="identity-handle">
        <GithubIcon size={18} />
        {identity.handle}
      </div>
      <div className="identity-label">{identity.label}</div>
      <p className="identity-desc">{identity.description}</p>
      <div className="identity-stage">{identity.stage}</div>
    </a>
  );
}
