import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';

const groups = [
  { name: 'Mobile development', detail: 'Native apps and local storage', tools: ['Kotlin', 'Android', 'Jetpack Compose', 'Material 3', 'Room', 'SQLite', 'DataStore'] },
  { name: 'Backend & infrastructure', detail: 'APIs, services and deployments', tools: ['Go', 'Node.js', 'Express', 'Python', 'Docker', 'Cloudflare Workers', 'KV / R2', 'Render'] },
  { name: 'Developer tooling', detail: 'Automation and publishing', tools: ['TypeScript', 'React', 'GitHub Actions', 'Telegram Bot API', 'PyPI', 'REST APIs', 'Git'] },
];

export function Skills() {
  return <Section id="skills">
    <SectionLabel>Technical toolkit</SectionLabel>
    <h2 className="section-title">Systems & tools.</h2>
    <p className="section-sub">Technologies I use in the featured projects and this portfolio.</p>
    <div className="skills-systems">{groups.map(group => <article className="skill-system" key={group.name}>
      <h3>{group.name}</h3><p>{group.detail}</p><div className="project-tech">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
    </article>)}</div>
  </Section>;
}
