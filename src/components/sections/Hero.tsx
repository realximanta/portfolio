import { useTypewriter } from '@/hooks/useTypewriter';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowRightIcon, GithubIcon } from '@/components/icons/Icons';
import type { RoleType } from '@/types';

const ROLES: readonly RoleType[] = [
  'Vibe Coder',
  'Telegram Bot Developer',
  'Android Developer',
  'Automation Builder',
  'API Explorer',
  'Digital Architect',
];

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-status">
            <span className="dot" aria-hidden="true" />
            System Online
          </div>

          <h1>
            I'm Tuku.
            <br />
            I build things <span className="accent">that work.</span>
            <span className="hero-dynamic" aria-live="polite">
              <span className="role-text">{role}</span>
            </span>
          </h1>

          <p className="hero-desc">
            Self-taught developer building bots, apps, APIs, automation systems and
            experimental software.
          </p>

          <div className="hero-ctas">
            <MagneticButton href="#projects" variant="primary">
              <span>Explore Projects</span>
              <ArrowRightIcon size={14} />
            </MagneticButton>
            <MagneticButton
              href="https://github.com/tukuexe"
              external
              variant="secondary"
              ariaLabel="Open GitHub profile"
            >
              <GithubIcon size={14} />
              GitHub
            </MagneticButton>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/tukuexe" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={12} />
              @tukuexe
            </a>
            <a href="https://github.com/realximanta" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={12} />
              @realximanta
            </a>
            <a href="https://github.com/realtuku" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={12} />
              @realtuku
            </a>
          </div>
        </div>

        <div className="hero-terminal" role="region" aria-label="Terminal status panel">
          <div className="terminal-bar">
            <div className="terminal-dots" aria-hidden="true">
              <span /><span /><span />
            </div>
            <span className="terminal-title">tuku@dev ~ status</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="t-prompt">╭─[</span>
              <span className="t-cmd">tuku@dev</span>
              <span className="t-prompt"> ~ ]</span>
            </div>
            <div className="terminal-line"><span className="t-prompt">│</span></div>
            <div className="terminal-line"><span className="t-prompt">│ $</span> <span className="t-cmd">whoami</span></div>
            <div className="terminal-line t-output">Tuku</div>
            <div className="terminal-line"><span className="t-prompt">│</span></div>
            <div className="terminal-line"><span className="t-prompt">│ $</span> <span className="t-cmd">role</span></div>
            <div className="terminal-line t-output"><span className="hl">Vibe Coder</span> / Builder</div>
            <div className="terminal-line"><span className="t-prompt">│</span></div>
            <div className="terminal-line"><span className="t-prompt">│ $</span> <span className="t-cmd">focus</span></div>
            <div className="terminal-line t-output">Bots • APIs • Android • Automation</div>
            <div className="terminal-line"><span className="t-prompt">│</span></div>
            <div className="terminal-line"><span className="t-prompt">│ $</span> <span className="t-cmd">status</span></div>
            <div className="terminal-line t-output"><span className="hl-violet">Building...</span></div>
            <div className="terminal-line"><span className="t-prompt">│</span></div>
            <div className="terminal-line">
              <span className="t-prompt">╰──➤</span> <span className="t-cursor" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
