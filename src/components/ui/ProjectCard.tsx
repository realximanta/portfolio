import type { Project } from '@/types';
import { ExternalLinkIcon, GithubIcon, TelegramIcon } from '@/components/icons/Icons';

interface ProjectCardProps {
  project: Project;
  delay?: 0 | 1 | 2;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <article className={`project-card reveal reveal-delay-${delay}`}>
      <div className="project-num">[ {project.number} ]</div>
      <h3>
        {project.name}
        <span
          className="project-status"
          aria-label={`Status: ${project.status}`}
          title={project.status}
        />
      </h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={12} />
            GitHub
            <ExternalLinkIcon size={11} />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo
            <ExternalLinkIcon size={11} />
          </a>
        )}
        {project.telegram && (
          <a href={project.telegram} target="_blank" rel="noopener noreferrer">
            <TelegramIcon size={12} />
            Telegram
            <ExternalLinkIcon size={11} />
          </a>
        )}
      </div>
    </article>
  );
}
