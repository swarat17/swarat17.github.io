import { SWARAT } from '@/data/content'
import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

export default function Activities() {
  return (
    <section id="activities" className="max-w-[1280px] mx-auto px-8 sm:px-16 pt-14">
      <SectionHeader num="05" label="Leadership & Community" />

      <div
        className="grid mb-20"
        style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px', rowGap: '18px' }}
      >
        {SWARAT.activities.map((a, i) => (
          <FadeIn key={i} className="col-span-12 sm:col-span-6 lg:col-span-3" delay={i * 40}>
            <div className="border-t border-[rgba(10,10,10,0.10)] pt-3">
              <div className="font-display text-[13px] font-semibold">{a.org}</div>
              <div className="font-mono text-[9.5px] text-accent tracking-[0.1em] uppercase mt-1">
                {a.role}
              </div>
              <div className="text-[12px] text-ink mt-1.5 leading-[1.45]">{a.note}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
