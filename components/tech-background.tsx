// Fixed, site-wide backdrop: faint circuit traces, a dot matrix and a slow scan line.
// Purely decorative, so it sits behind everything and ignores pointer events.
export default function TechBackground() {
  return (
    <div aria-hidden="true" className="tech-bg fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 tech-dots" />
      <div className="absolute inset-0 tech-circuit" />
      <div className="tech-scan" />
    </div>
  );
}
