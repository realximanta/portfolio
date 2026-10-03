import { GithubIcon, TelegramIcon } from '@/components/icons/Icons';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box reveal">
        <div>╭────────────────────────────────────────╮</div>
        <div>│                                        │</div>
        <div>
          │ &gt; <span className="fb-brand">TUKU.exe</span>                            │
        </div>
        <div>│                                        │</div>
        <div>
          │ <span className="fb-slogan">BUILD • BREAK • LEARN • REPEAT</span>        │
        </div>
        <div>│                                        │</div>
        <div>╰────────────────────────────────────────╯</div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Tuku</span>
        <div className="footer-bottom-links">
          <a href="https://github.com/tukuexe" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={12} />
            GitHub
          </a>
          <a href="https://t.me/codex_storebot" target="_blank" rel="noopener noreferrer">
            <TelegramIcon size={12} />
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
