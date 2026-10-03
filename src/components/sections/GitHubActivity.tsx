import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { ExternalLinkIcon, GithubIcon } from '@/components/icons/Icons';

interface RepoCard {
  name: string;
  url: string;
  description: string;
  language: string;
  langColor: string;
}

const REPOS: RepoCard[] = [
  {
    name: 'cf-telegram-bot',
    url: 'https://github.com/realximanta/cf-telegram-bot',
    description: 'Telegram bot for Cloudflare DNS management.',
    language: 'Python',
    langColor: '#3572A5',
  },
  {
    name: 'AI-Model-APIs',
    url: 'https://github.com/realximanta/AI-Model-APIs',
    description: 'Experiments with AI endpoints and unified API wrappers.',
    language: 'Python',
    langColor: '#3572A5',
  },
  {
    name: 'Hostly',
    url: 'https://github.com/realximanta/Hostly',
    description: 'Telegram-driven project hosting concept.',
    language: 'Python',
    langColor: '#3572A5',
  },
  {
    name: 'mp3x',
    url: 'https://github.com/realtuku/mp3x',
    description: 'Lightweight music experience for constrained devices.',
    language: 'JavaScript',
    langColor: '#F1E05A',
  },
];

export function GitHubActivity() {
  const [contributionError, setContributionError] = useState(false);
  const [langError, setLangError] = useState(false);

  return (
    <Section id="github">
      <Reveal>
        <SectionLabel>$ inspect github</SectionLabel>
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-sub">
          Real data from public GitHub profiles. Loading states and failures handled gracefully.
        </p>
      </Reveal>

      <Reveal delay={1}>
        <div className="github-activity">
          <div className="github-activity-header">
            <h3>
              <span className="live-dot" aria-hidden="true" /> Contribution Graph — @tukuexe
            </h3>
            <a
              href="https://github.com/tukuexe"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-link"
            >
              View Profile
              <ExternalLinkIcon size={11} />
            </a>
          </div>

          <div className="github-contrib-wrap">
            {!contributionError ? (
              <img
                className="github-contrib-img"
                src="https://ghchart.rshah.org/00D4FF/tukuexe"
                alt="Tuku's GitHub contribution graph"
                loading="lazy"
                onError={() => setContributionError(true)}
              />
            ) : (
              <p className="gh-fallback">Contribution graph temporarily unavailable.</p>
            )}
          </div>

          <div className="github-langs">
            {!langError ? (
              <>
                <div className="github-lang-card">
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=tukuexe&layout=compact&theme=dark&bg_color=0D0D0F&title_color=00D4FF&text_color=8B8B8B&border_color=rgba(255,255,255,0.08)&hide_border=true"
                    alt="Top languages for tukuexe"
                    loading="lazy"
                    onError={() => setLangError(true)}
                  />
                  <div className="lang-label">@tukuexe — Language Distribution</div>
                </div>
                <div className="github-lang-card">
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=realximanta&layout=compact&theme=dark&bg_color=0D0D0F&title_color=00D4FF&text_color=8B8B8B&border_color=rgba(255,255,255,0.08)&hide_border=true"
                    alt="Top languages for realximanta"
                    loading="lazy"
                    onError={() => setLangError(true)}
                  />
                  <div className="lang-label">@realximanta — Language Distribution</div>
                </div>
              </>
            ) : (
              <p className="gh-fallback">Language data temporarily unavailable.</p>
            )}
          </div>

          <div className="github-repo-cards">
            {REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-repo-card"
              >
                <div className="repo-name">
                  <GithubIcon size={14} />
                  {repo.name}
                </div>
                <p className="repo-desc">{repo.description}</p>
                <div className="repo-meta">
                  <span>
                    <span
                      className="repo-lang-dot"
                      style={{ background: repo.langColor }}
                      aria-hidden="true"
                    />
                    {repo.language}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
