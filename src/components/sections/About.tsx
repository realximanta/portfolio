import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';

const TAGS = [
  'Self-taught',
  'Vibe Coder',
  'Builder',
  'Experimenter',
  'Problem Solver',
  'Always Learning',
];

const STATS = [
  { num: '3', lbl: 'GitHub Identities' },
  { num: '6+', lbl: 'Featured Projects' },
  { num: '2024', lbl: 'Started Building' },
  { num: '∞', lbl: 'Debugging Cycles' },
];

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionLabel>01 // whoami</SectionLabel>
        <h2 className="section-title">Not a résumé. A trajectory.</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={1} className="about-text">
          <p>
            Tuku is a <strong>self-taught developer</strong> who started by experimenting
            with code and gradually moved toward understanding architectures, debugging
            failures, working with APIs, deployment systems, bots, Android applications
            and automation.
          </p>
          <p>
            This portfolio presents an evolving engineering journey — not pretending to be
            an already-finished expert. Every project here is a step in the process of{' '}
            <strong>building, breaking, debugging, and learning.</strong>
          </p>
          <p>
            The philosophy is simple:{' '}
            <em
              style={{
                color: 'var(--cyan)',
                fontStyle: 'normal',
                fontFamily: 'var(--font-mono)',
              }}
            >
              "I don't just learn technologies. I build things with them."
            </em>
          </p>

          <div className="about-tags">
            {TAGS.map((tag) => (
              <span key={tag} className="about-tag">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2} className="about-stats">
          {STATS.map((s) => (
            <div key={s.lbl} className="about-stat">
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
