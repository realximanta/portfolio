import { GithubIcon, TelegramIcon, InstagramIcon, XIcon } from '@/components/icons/Icons';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <span>© 2026 Tuku</span>
        <div className="footer-bottom-links">
          <a href="https://github.com/realximanta" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={12} />
            GitHub
          </a>
          <a href="https://www.instagram.com/iximanta/" target="_blank" rel="noopener noreferrer"><InstagramIcon size={14}/> Instagram</a>
          <a href="https://x.com/realximanta" target="_blank" rel="noopener noreferrer"><XIcon size={14}/> X</a>
          <a href="https://t.me/codex_storebot" target="_blank" rel="noopener noreferrer">
            <TelegramIcon size={12} />
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
