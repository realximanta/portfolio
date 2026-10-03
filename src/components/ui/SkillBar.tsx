import { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-row" ref={ref}>
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
          role="progressbar"
          aria-label={`${name} familiarity`}
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
