import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { journey } from '@/data/journey';

export function Journey() {
  return (
    <Section id="journey">
      <Reveal>
        <SectionLabel>$ trace journey</SectionLabel>
        <h2 className="section-title">Builder's Journey</h2>
        <p className="section-sub">Not a formal résumé — a timeline of learning by doing.</p>
      </Reveal>

      <div className="journey-timeline">
        {journey.map((item, i) => (
          <Reveal key={item.year} delay={Math.min(i, 3) as 0 | 1 | 2 | 3} className="journey-item">
            <div className="journey-year">{item.year}</div>
            <div className="journey-title">{item.title}</div>
            <p className="journey-desc">{item.description}</p>
            <div className="journey-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
