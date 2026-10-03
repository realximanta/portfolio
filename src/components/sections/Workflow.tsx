import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { workflowSteps } from '@/data/workflow';

export function Workflow() {
  return (
    <Section id="workflow">
      <Reveal>
        <SectionLabel>$ load workflow</SectionLabel>
        <h2 className="section-title">How I Build</h2>
        <p className="section-sub">
          Every project follows the same cycle — from raw idea to deployed reality.
        </p>
      </Reveal>

      <Reveal delay={1}>
        <div className="workflow-track" role="list" aria-label="Development workflow">
          {workflowSteps.map((step) => (
            <div key={step.id} className="workflow-step" role="listitem">
              <div className="step-icon" aria-hidden="true">
                {step.label}
              </div>
              <div className="step-name">{step.fullName}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
