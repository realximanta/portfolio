import type { SkillSystem } from '@/types';

export const skillSystems: SkillSystem[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 82 },
      { name: 'TypeScript', level: 70 },
      { name: 'Kotlin', level: 65 },
      { name: 'Java', level: 60 },
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 85 },
    ],
  },
  {
    title: 'Platforms',
    skills: [
      { name: 'GitHub', level: 90 },
      { name: 'Telegram', level: 92 },
      { name: 'Cloudflare', level: 78 },
      { name: 'Render', level: 75 },
      { name: 'Android', level: 62 },
      { name: 'Termux', level: 80 },
    ],
  },
  {
    title: 'Engineering',
    skills: [
      { name: 'APIs', level: 88 },
      { name: 'Automation', level: 90 },
      { name: 'Bots', level: 92 },
      { name: 'Serverless', level: 70 },
      { name: 'Deployment', level: 75 },
      { name: 'Debugging', level: 85 },
      { name: 'CLI Tools', level: 78 },
    ],
  },
];
