export interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  telegram?: string;
  status: 'active' | 'live' | 'experimental';
}

export interface Identity {
  handle: string;
  url: string;
  label: string;
  description: string;
  stage: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100 (familiarity indicator only)
}

export interface SkillSystem {
  title: string;
  skills: Skill[];
}

export interface WorkflowStep {
  id: string;
  label: string;
  fullName: string;
}

export interface ContactLink {
  label: string;
  value: string;
  url: string;
  icon: 'github' | 'telegram' | 'web';
}

export type RoleType =
  | 'Vibe Coder'
  | 'Telegram Bot Developer'
  | 'Android Developer'
  | 'Automation Builder'
  | 'API Explorer'
  | 'Digital Architect';
