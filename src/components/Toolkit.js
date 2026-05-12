import { SWARAT } from '@/data/content'
import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

export default function Toolkit() {
  return (
    <section id="toolkit" className="max-w-[1280px] mx-auto px-8 sm:px-16 pt-14">
      <SectionHeader num="03" label="Toolkit" />

      <div
        className="grid mb-16"
        style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px', rowGap: '24px' }}
      >
        {SWARAT.skills.map((g, i) => (
          <FadeIn key={i} className="col-span-12 sm:col-span-6" delay={i * 40}>
            <div className="border-t border-[rgba(10,10,10,0.10)] pt-3.5">
              <div className="flex justify-between items-baseline mb-2.5">
                <span className="font-mono text-[11px] text-accent tracking-[0.16em] uppercase font-medium">
                  {String(i + 1).padStart(2, '0')} · {g.g}
                </span>
                <span className="font-mono text-[10px] text-mute">{g.items.length}</span>
              </div>
              <div className="text-[13.5px] leading-[1.7] text-ink">{g.items.join(' · ')}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
