import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionLabel>02 // projects</SectionLabel>
        <h2 className="section-title">Selected Builds</h2>
        <p className="section-sub">
          Projects chosen for technical significance — not repository count.
        </p>
      </Reveal>

      <Reveal delay={1}>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={(i % 2 === 0 ? 1 : 2) as 1 | 2} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
