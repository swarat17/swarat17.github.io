export default function SectionHeader({ num, label, right }) {
  return (
    <div
      className="grid items-baseline pt-4 pb-4 border-t-2 border-ink mb-8"
      style={{ gridTemplateColumns: '80px 1fr auto', columnGap: '24px' }}
    >
      <span className="font-mono text-[11px] text-accent tracking-[0.18em] font-medium">{num}</span>
      <span className="font-display text-[14px] font-semibold tracking-[-0.005em] uppercase">{label}</span>
      {right && (
        <span className="font-mono text-[10px] text-mute tracking-[0.16em] uppercase">{right}</span>
      )}
    </div>
  )
}
