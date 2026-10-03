import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'cf-telegram-bot',
    number: '01',
    name: 'Cloudflare DNS Telegram Bot',
    description:
      'A Telegram-driven DNS management workflow. Control Cloudflare DNS records directly from a chat interface — add, update, and delete records without leaving Telegram.',
    tech: ['Telegram', 'Python', 'Cloudflare API', 'Render', 'Automation'],
    github: 'https://github.com/realximanta/cf-telegram-bot',
    status: 'active',
  },
  {
    id: 'auto-payment',
    number: '02',
    name: 'Auto Payment Verification API',
    description:
      'An automated payment verification system exposed as an API. Handles verification workflows, reduces manual checks, and integrates with external services for real-time validation.',
    tech: ['API', 'Automation', 'Python', 'Webhooks'],
    live: 'https://auto-payment.ximanta.xyz',
    status: 'live',
  },
  {
    id: 'codebase-store-bot',
    number: '03',
    name: 'Codebase Store Bot',
    description:
      'A Telegram bot that serves as a storefront for codebases and developer resources. Demonstrates bot-based commerce, file delivery, and user interaction flows inside Telegram.',
    tech: ['Telegram', 'Bot API', 'Python', 'Storefront'],
    telegram: 'https://t.me/codex_storebot',
    status: 'active',
  },
  {
    id: 'ai-model-apis',
    number: '04',
    name: 'AI Model APIs',
    description:
      'Experimentation with AI endpoints and developer-friendly API wrappers. Explores how different models can be unified behind a consistent interface for rapid prototyping.',
    tech: ['AI', 'API', 'Python', 'LLM'],
    github: 'https://github.com/realximanta/AI-Model-APIs',
    status: 'experimental',
  },
  {
    id: 'hostly',
    number: '05',
    name: 'Hostly',
    description:
      'A Telegram-driven project hosting concept. Deploy and manage hosted projects through a conversational interface — bringing deployment controls into the chat.',
    tech: ['Telegram', 'Hosting', 'Deployment', 'Automation'],
    github: 'https://github.com/realximanta/Hostly',
    status: 'active',
  },
  {
    id: 'mp3x',
    number: '06',
    name: 'MP3X',
    description:
      'Built for constraints — lightweight experiences targeting slow networks, low-storage devices, and keypad-phone users. A demonstration of "build for constraints" philosophy.',
    tech: ['Lightweight', 'Web', 'Mobile-first', 'Performance'],
    github: 'https://github.com/realtuku/mp3x',
    status: 'active',
  },
];
