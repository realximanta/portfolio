import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { SkillBar } from '@/components/ui/SkillBar';
import { skillSystems } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionLabel>$ inspect skills</SectionLabel>
        <h2 className="section-title">Systems & Tools</h2>
        <p className="section-sub">Familiarity indicators — not precise proficiency percentages.</p>
      </Reveal>

      <Reveal delay={1}>
        <div className="skills-systems">
          {skillSystems.map((system, i) => (
            <div
              key={system.title}
              className={`skill-system reveal reveal-delay-${i + 1}`}
            >
              <h3>{system.title}</h3>
              {system.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
