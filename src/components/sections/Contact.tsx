import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { GithubIcon, GlobeIcon, TelegramIcon } from '@/components/icons/Icons';
import { identities } from '@/data/identities';

const CONTACT_LINKS = [
  {
    label: 'GitHub',
    value: '@tukuexe',
    url: 'https://github.com/tukuexe',
    icon: 'github' as const,
  },
  {
    label: 'Telegram',
    value: '@codex_storebot',
    url: 'https://t.me/codex_storebot',
    icon: 'telegram' as const,
  },
  {
    label: 'Website',
    value: 'about.ximanta.xyz',
    url: 'https://about.ximanta.xyz',
    icon: 'web' as const,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="contact-section">
      <Reveal>
        <SectionLabel>04 // establish connection</SectionLabel>
        <h2 className="contact-heading">
          Have an idea?
          <br />
          <span className="accent">Let's build it.</span>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Reach out through any of these channels.
        </p>
      </Reveal>

      <Reveal delay={1}>
        <div className="contact-links">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              {link.icon === 'github' && <GithubIcon size={20} />}
              {link.icon === 'telegram' && <TelegramIcon size={20} />}
              {link.icon === 'web' && <GlobeIcon size={20} />}
              <div>
                <div className="cl-label">{link.label}</div>
                <div className="cl-value">{link.value}</div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={2}>
        <div className="contact-identities">
          {identities.map((identity) => (
            <a
              key={identity.handle}
              href={identity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-identity-pill"
            >
              <span className="pill-dot" aria-hidden="true" />
              {identity.handle}
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
