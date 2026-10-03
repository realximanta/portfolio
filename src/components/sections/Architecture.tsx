import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';

export function Architecture() {
  return (
    <Section id="architecture">
      <Reveal>
        <SectionLabel>$ map architecture</SectionLabel>
        <h2 className="section-title">System Architecture</h2>
        <p className="section-sub">
          How the pieces connect — from bot interfaces to deployment infrastructure.
        </p>
      </Reveal>

      <Reveal delay={1}>
        <div className="arch-diagram">
          <svg
            className="arch-svg"
            viewBox="0 0 800 520"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Architecture diagram showing Tuku connecting Telegram, Web, Android, Automation, Cloudflare, Render, and GitHub"
          >
            {/* Root */}
            <g className="arch-node">
              <rect className="arch-node-box" x="340" y="20" width="120" height="40" rx="8" />
              <text x="400" y="45" textAnchor="middle" className="arch-root-text">
                TUKU
              </text>
            </g>

            {/* Lines from root */}
            <path className="arch-line" d="M400 60 L400 90" />
            <path className="arch-line" d="M400 90 L180 90 L180 130" />
            <path className="arch-line" d="M400 90 L400 130" />
            <path className="arch-line" d="M400 90 L620 90 L620 130" />

            {/* Three pillars */}
            <g className="arch-node">
              <rect className="arch-node-box" x="110" y="130" width="140" height="40" rx="8" />
              <text x="180" y="155" textAnchor="middle">TELEGRAM</text>
            </g>
            <g className="arch-node">
              <rect className="arch-node-box" x="330" y="130" width="140" height="40" rx="8" />
              <text x="400" y="155" textAnchor="middle">WEB</text>
            </g>
            <g className="arch-node">
              <rect className="arch-node-box" x="550" y="130" width="140" height="40" rx="8" />
              <text x="620" y="155" textAnchor="middle">ANDROID</text>
            </g>

            {/* Sub-labels */}
            <path className="arch-line" d="M180 170 L180 210" />
            <path className="arch-line" d="M400 170 L400 210" />
            <path className="arch-line" d="M620 170 L620 210" />

            <g className="arch-node">
              <rect className="arch-node-box" x="120" y="210" width="120" height="36" rx="6" />
              <text x="180" y="233" textAnchor="middle">BOTS</text>
            </g>
            <g className="arch-node">
              <rect className="arch-node-box" x="340" y="210" width="120" height="36" rx="6" />
              <text x="400" y="233" textAnchor="middle">APIs</text>
            </g>
            <g className="arch-node">
              <rect className="arch-node-box" x="540" y="210" width="160" height="36" rx="6" />
              <text x="620" y="233" textAnchor="middle">KOTLIN / JAVA</text>
            </g>

            {/* Converge to automation */}
            <path className="arch-line" d="M180 246 L180 280 L400 280" />
            <path className="arch-line" d="M400 246 L400 280" />
            <path className="arch-line" d="M620 246 L620 280 L400 280" />
            <path className="arch-line arch-line-accent" d="M400 280 L400 310" />

            <g className="arch-node">
              <rect
                className="arch-node-box"
                x="320"
                y="310"
                width="160"
                height="40"
                rx="8"
              />
              <text
                x="400"
                y="335"
                textAnchor="middle"
                style={{ fill: 'var(--cyan)', fontSize: 12 }}
              >
                AUTOMATION
              </text>
            </g>

            {/* Split to Cloudflare and Render */}
            <path className="arch-line" d="M400 350 L400 380" />
            <path className="arch-line" d="M400 380 L260 380 L260 410" />
            <path className="arch-line" d="M400 380 L540 380 L540 410" />

            <g className="arch-node">
              <rect
                className="arch-node-box"
                x="190"
                y="410"
                width="140"
                height="40"
                rx="8"
              />
              <text x="260" y="435" textAnchor="middle">CLOUDFLARE</text>
            </g>
            <g className="arch-node">
              <rect
                className="arch-node-box"
                x="470"
                y="410"
                width="140"
                height="40"
                rx="8"
              />
              <text x="540" y="435" textAnchor="middle">RENDER</text>
            </g>

            {/* Converge to GitHub */}
            <path className="arch-line" d="M260 450 L260 480 L400 480" />
            <path className="arch-line" d="M540 450 L540 480 L400 480" />
            <path className="arch-line arch-line-accent" d="M400 480 L400 495" />

            <g className="arch-node">
              <rect
                className="arch-node-box"
                x="330"
                y="495"
                width="140"
                height="36"
                rx="8"
              />
              <text
                x="400"
                y="518"
                textAnchor="middle"
                style={{ fill: 'var(--violet)', fontSize: 12 }}
              >
                GITHUB
              </text>
            </g>
          </svg>
        </div>
      </Reveal>
    </Section>
  );
}
