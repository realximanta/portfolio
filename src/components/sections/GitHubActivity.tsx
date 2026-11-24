import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ExternalLinkIcon, GithubIcon } from '@/components/icons/Icons';

export function GitHubActivity() {
  const [contributionError, setContributionError] = useState(false);
  return (
    <Section id="github">
      <SectionLabel>Open source activity</SectionLabel>
      <h2 className="section-title">Building in public.</h2>
      <p className="section-sub">A view of my public GitHub contributions under @realximanta.</p>
      <div className="github-activity">
        <div className="github-activity-header">
          <h3><GithubIcon size={20}/> @realximanta · Contributions</h3>
          <a className="text-link" href="https://github.com/realximanta" target="_blank" rel="noopener noreferrer">GitHub profile <ExternalLinkIcon size={13}/></a>
        </div>
        {!contributionError ? <div className="github-contrib-wrap">
          <img className="github-contrib-img" src="https://ghchart.rshah.org/75d6ac/realximanta" alt="GitHub contribution calendar for realximanta" loading="lazy" onError={() => setContributionError(true)}/>
        </div> : <p className="gh-fallback">Contribution chart temporarily unavailable. <a className="text-link" href="https://github.com/realximanta" target="_blank" rel="noopener noreferrer">View the calendar on GitHub.</a></p>}
        <div className="github-summary"><span>10 selected repositories</span><span>9 featured projects</span><span>3 project categories</span></div>
      </div>
    </Section>
  );
}
