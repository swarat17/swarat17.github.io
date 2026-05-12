import { SWARAT } from '@/data/content'
import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="max-w-[1280px] mx-auto px-8 sm:px-16 pt-14">
      <SectionHeader num="02" label="Where I've Worked" right="2021 — 2026" />

      {/* Timeline */}
      <div className="mb-16">
        {SWARAT.experience.map((e, i) => (
          <FadeIn key={i} delay={i * 60}>
            {/* Mobile layout */}
            <div className="sm:hidden py-4 border-b border-[rgba(10,10,10,0.10)]">
              <div className="flex gap-4 items-start">
                <span className="font-mono text-[11px] text-accent tracking-[0.1em] flex-shrink-0 w-7">
                  {String(SWARAT.experience.length - i).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-mono text-[10px] text-mute uppercase mb-1 tracking-[0.06em]">
                    {e.period}
                  </p>
                  <p className="font-display text-base font-semibold leading-snug">
                    {e.role}{' '}
                    <span className="text-mute font-normal">· {e.org}</span>
                  </p>
                  <p className="text-[13px] mt-1.5 leading-[1.5]">{e.blurb}</p>
                  {e.metrics && (
                    <p className="font-mono text-[9.5px] mt-1.5 tracking-[0.04em]">
                      <span className="text-accent">↗ </span>
                      <span className="text-ink">{e.metrics.join(' · ')}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div
              className="hidden sm:grid items-baseline py-[18px] border-b border-[rgba(10,10,10,0.10)]"
              style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px' }}
            >
              <div className="col-span-1 font-mono text-[11px] text-accent tracking-[0.1em]">
                {String(SWARAT.experience.length - i).padStart(2, '0')}
              </div>
              <div className="col-span-3 font-mono text-[11px] text-ink tracking-[0.06em] uppercase">
                {e.period}
                <div className="text-mute mt-0.5 normal-case">{e.loc}</div>
              </div>
              <div className="col-span-5">
                <div className="font-display text-[17px] font-semibold tracking-[-0.01em]">
                  {e.role}{' '}
                  <span className="text-mute font-normal">· {e.org}</span>
                </div>
                <div className="text-[13px] text-ink mt-1.5 leading-[1.5]">{e.blurb}</div>
                {e.metrics && (
                  <div className="font-mono text-[9.5px] mt-2 tracking-[0.04em]">
                    <span className="text-accent">↗ </span>
                    <span className="text-ink">{e.metrics.join(' · ')}</span>
                  </div>
                )}
              </div>
              <div className="col-span-3 font-mono text-[10px] text-mute leading-[1.7] text-right">
                {e.tech.join('  ·  ')}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Education */}
      <div
        className="grid mb-16 pt-2"
        style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px', rowGap: '24px' }}
      >
        {SWARAT.education.map((ed, i) => (
          <FadeIn
            key={i}
            className="col-span-12 sm:col-span-6"
            delay={i * 80}
          >
            <div className="border-t-2 border-ink pt-3.5 pr-6">
              <div className="font-mono text-[10px] text-accent tracking-[0.18em] uppercase mb-2">
                EDU.0{i + 1}
              </div>
              <div className="font-display text-[18px] font-semibold">{ed.degree}</div>
              <div className="text-[14px] mt-1">{ed.school}</div>
              <div className="font-mono text-[10px] text-mute mt-2 tracking-[0.06em]">
                {ed.period} &nbsp;·&nbsp; {ed.detail}
              </div>
              {ed.courses && (
                <div className="mt-4 space-y-3">
                  {ed.courses.map((g) => (
                    <div key={g.term}>
                      <p className="font-mono text-[9px] text-mute tracking-[0.2em] uppercase mb-1.5">
                        {g.term}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {g.items.map((c) => (
                          <span
                            key={c}
                            className="font-mono text-[9.5px] px-2 py-0.5 border border-[rgba(10,10,10,0.12)] text-ink"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
