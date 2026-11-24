import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';

interface TermBlock {
  id: number;
  command?: string;
  output?: string;
  isCommand: boolean;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  <span class="hl">whoami</span>      — who is Tuku
  <span class="hl">skills</span>      — technical skills
  <span class="hl">projects</span>    — featured projects
  <span class="hl">github</span>      — GitHub identities
  <span class="hl">journey</span>     — developer timeline
  <span class="hl">contact</span>     — get in touch
  <span class="hl">clear</span>       — clear terminal`,
  whoami: `Tuku
Self-taught developer
Vibe Coder
Builder of bots, APIs and automation systems`,
  skills: `Languages:   Python, Go, JavaScript, TypeScript, Kotlin
Platforms:   GitHub, Telegram, Cloudflare, Render, Android, Termux
Engineering: APIs, Automation, Bots, Serverless, Deployment, Debugging, CLI tools`,
  projects: projects.map(p => '[' + p.number + '] ' + p.name + ' — ' + p.github + (p.id === 'daymark' ? ' (backend: github.com/realximanta/daymark-app)' : '')).join('\n'),
  github: `Three identities, one developer:
  <span class="hlv">@realtuku</span>    — The Beginning (experimental archive)
  <span class="hlv">@realximanta</span> — The Builder (systems, APIs, automation)
  <span class="hlv">@tukuexe</span>    — The Current (shipping & learning)`,
  journey: `2024 — Experimentation, GitHub, Termux, early projects
2025 — Telegram Bots, Python, Web Projects, APIs, Automation
2026 — Cloudflare, Deployment, Android, Kotlin, Java, AI, Serverless
NOW  — Building systems, understanding architecture, shipping`,
  contact: `GitHub:   github.com/realximanta
Instagram: instagram.com/iximanta
X:        x.com/realximanta
Telegram: t.me/codex_storebot
Website:  www.ximanta.xyz`,
};

const escapeHtml = (str: string): string => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

let blockId = 0;

export function Terminal() {
  const [blocks, setBlocks] = useState<TermBlock[]>([
    {
      id: blockId++,
      output: `Welcome to Tuku's interactive shell.\nType <span class="hl">help</span> to see available commands.`,
      isCommand: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [blocks]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const nextBlocks: TermBlock[] = [{ id: blockId++, command: cmd, isCommand: true }];

    if (cmd === 'clear') {
      setBlocks([]);
      return;
    }

    if (Object.prototype.hasOwnProperty.call(COMMANDS, cmd)) {
      nextBlocks.push({ id: blockId++, output: COMMANDS[cmd], isCommand: false });
    } else {
      nextBlocks.push({
        id: blockId++,
        output: `command not found: <span style="color:var(--text3);">${escapeHtml(cmd)}</span>. Type <span class="hl">help</span> for available commands.`,
        isCommand: false,
      });
    }

    setBlocks((prev) => [...prev, ...nextBlocks]);
    setHistory((prev) => [...prev, cmd]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      if (history[idx] !== undefined) {
        setHistoryIndex(idx);
        setInput(history[idx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const idx = historyIndex + 1;
      if (idx >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(idx);
        setInput(history[idx]);
      }
    }
  };

  return (
    <Section id="terminal">
      <Reveal>
        <SectionLabel>$ init terminal</SectionLabel>
        <h2 className="section-title">Interactive Shell</h2>
        <p className="section-sub">
          Type a command to explore. Available:{' '}
          <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}>
            help, whoami, skills, projects, github, journey, contact, clear
          </code>
        </p>
      </Reveal>

      <Reveal delay={1}>
        <div className="interactive-terminal" role="region" aria-label="Interactive terminal">
          <div className="terminal-bar">
            <div className="terminal-dots" aria-hidden="true">
              <span /><span /><span />
            </div>
            <span className="terminal-title">tuku@dev ~ interactive</span>
          </div>

          <div className="terminal-output" ref={outputRef} aria-live="polite">
            {blocks.map((block) => (
              <div key={block.id} className="term-block">
                {block.isCommand ? (
                  <div>
                    <span style={{ color: 'var(--cyan)' }}>$</span>{' '}
                    <span className="cmd">{block.command}</span>
                  </div>
                ) : (
                  <div
                    className="res"
                    dangerouslySetInnerHTML={{ __html: block.output ?? '' }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="terminal-input-line">
            <span className="t-prompt">$</span>
            <input
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="type a command..."
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command input"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
