import type { CSSProperties } from 'react';
import type { Project } from '@/types';
import { ExternalLinkIcon, GithubIcon } from '@/components/icons/Icons';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" style={{ '--project-accent': project.accent } as CSSProperties}>
      <div className="project-card-top">
        <span className="project-mark" aria-hidden="true">{project.mark}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
      <div className="project-links">
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={15} /> Code</a>}
        {project.links?.map(link => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ExternalLinkIcon size={13} /></a>)}
      </div>
    </article>
  );
}
