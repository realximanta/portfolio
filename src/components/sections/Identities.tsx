import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { IdentityCard } from '@/components/ui/IdentityCard';
import { identities } from '@/data/identities';

export function Identities() {
  return (
    <Section id="identities">
      <Reveal>
        <SectionLabel>03 // three identities</SectionLabel>
        <h2 className="section-title">Three accounts. One developer.</h2>
        <p className="section-sub">
          Different stages of the same journey — from experimental archive to current focus.
        </p>
      </Reveal>

      <Reveal delay={1}>
        <div className="identities-timeline">
          {identities.map((identity, i) => (
            <IdentityCard
              key={identity.handle}
              identity={identity}
              delay={(i as 0 | 1 | 2)}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
