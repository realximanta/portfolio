import type { WorkflowStep } from '@/types';

export const workflowSteps: WorkflowStep[] = [
  { id: 'idea', label: 'IDEA', fullName: 'IDEA' },
  { id: 'exp', label: 'EXP', fullName: 'EXPERIMENT' },
  { id: 'brk', label: 'BRK', fullName: 'BREAK' },
  { id: 'dbg', label: 'DBG', fullName: 'DEBUG' },
  { id: 'und', label: 'UND', fullName: 'UNDERSTAND' },
  { id: 'arc', label: 'ARC', fullName: 'ARCHITECT' },
  { id: 'bld', label: 'BLD', fullName: 'BUILD' },
  { id: 'dep', label: 'DEP', fullName: 'DEPLOY' },
];
