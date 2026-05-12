import { SWARAT } from '@/data/content'
import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

export default function Beyond() {
  return (
    <section id="beyond" className="max-w-[1280px] mx-auto px-8 sm:px-16 pt-14">
      <SectionHeader num="04" label="Beyond the Code" />

      <div
        className="grid mb-16"
        style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px', rowGap: '24px' }}
      >
        {SWARAT.beyond.map((b, i) => (
          <FadeIn key={i} className="col-span-12 sm:col-span-6 lg:col-span-3" delay={i * 55}>
            <div className="border-t-2 border-ink pt-3.5">
              <h3 className="font-display text-[15px] font-semibold mb-2.5">{b.t}</h3>
              <p className="text-[13px] leading-[1.5] italic">&ldquo;{b.q}&rdquo;</p>
              <p className="font-mono text-[10px] text-mute mt-2.5 tracking-[0.06em]">
                {b.tags.join(' · ')}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
