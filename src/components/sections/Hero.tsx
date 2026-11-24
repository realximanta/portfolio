import { GithubIcon, InstagramIcon, XIcon } from '@/components/icons/Icons';

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-status"><span className="dot" aria-hidden="true"/> Independent developer · India</div>
          <h1>Hey, I’m Tuku.<br/><span className="accent">I build useful things.</span></h1>
          <p className="hero-desc">Self-taught developer turning everyday problems into Android apps, backend systems and practical developer tools.</p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">Explore my work</a>
            <a href="https://github.com/realximanta" target="_blank" rel="noopener noreferrer" className="btn-secondary"><GithubIcon size={16}/> GitHub</a>
          </div>
          <div className="hero-socials">
            <a href="https://www.instagram.com/iximanta/" target="_blank" rel="noopener noreferrer"><InstagramIcon size={16}/> @iximanta</a>
            <a href="https://x.com/realximanta" target="_blank" rel="noopener noreferrer"><XIcon size={15}/> @realximanta</a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Developer profile">
          <div className="profile-top">
            <a className="profile-avatar" href="https://github.com/realximanta" target="_blank" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/288851433?v=4" alt="GitHub avatar of realximanta" width="64" height="64" /></a>
            <div><div className="profile-name">Tuku / Ximanta</div><a className="text-link" href="https://github.com/realximanta" target="_blank" rel="noopener noreferrer">@realximanta</a></div>
          </div>
          <div className="profile-metrics"><div><strong>09</strong><span>Featured projects</span></div><div><strong>10</strong><span>Selected repositories</span></div></div>
          <div className="profile-focus"><span>Building across</span><div><b>Android</b><b>Backend</b><b>Developer tools</b></div></div>
          <div className="profile-quote">Build. Learn. Ship. Repeat.</div>
        </aside>
      </div>
    </section>
  );
}
