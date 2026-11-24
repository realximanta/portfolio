import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';
import { ExternalLinkIcon } from '@/components/icons/Icons';

const categories = ['All', 'Android', 'Full stack', 'Developer tools'] as const;

export function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const shown = projects.filter(project => category === 'All' || project.category === category);
  return (
    <Section id="projects">
      <SectionLabel>Selected work</SectionLabel>
      <div className="project-section-heading">
        <div><h2 className="section-title">Things I’ve built.</h2>
          <p className="section-sub">Nine projects across mobile apps, full-stack systems and developer tools. Explore the source, releases and companion services.</p></div>
        <a className="text-link" href="https://github.com/realximanta?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories <ExternalLinkIcon size={13}/></a>
      </div>
      <div className="project-filters" aria-label="Filter projects">
        {categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        <span className="project-count" aria-live="polite">{shown.length} projects</span>
      </div>
      <div className="projects-grid">{shown.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    </Section>
  );
}
