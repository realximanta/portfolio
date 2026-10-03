interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="section-label" role="doc-subtitle">
      {children}
    </div>
  );
}
