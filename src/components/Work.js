'use client'
import { useState } from 'react'
import { SWARAT } from '@/data/content'
import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

const FILTERS = ['All', 'CV', 'NLP', 'RL', 'Data', 'Full-Stack']

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered =
    activeFilter === 'All'
      ? SWARAT.projects
      : SWARAT.projects.filter((p) => p.filter === activeFilter)

  const fillerCount = filtered.length % 3 === 0 ? 0 : 3 - (filtered.length % 3)

  return (
    <section id="work" className="max-w-[1280px] mx-auto px-8 sm:px-16 pt-14">
      <SectionHeader
        num="01"
        label="Selected Work"
        right={`${SWARAT.projects.length} projects · 2024–26`}
      />

      {/* Filter chips */}
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-mono text-[10px] tracking-[0.16em] uppercase px-3.5 py-2 transition-colors ${
                activeFilter === f
                  ? 'bg-ink text-white'
                  : 'border border-[rgba(10,10,10,0.10)] text-ink hover:border-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(10,10,10,0.10)] mb-16">
        {filtered.map((p, i) => (
          <FadeIn key={p.title} delay={i * 55}>
            <div className="bg-white p-6 flex flex-col gap-3 min-h-[280px] project-card-hover h-full">
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-[10px] text-accent tracking-[0.18em] uppercase">
                  P.{String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] text-mute tracking-[0.12em] uppercase">
                  {p.kind}
                </span>
              </div>
              <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em] leading-[1.2]">
                {p.title}
              </h3>
              <p className="text-[12.5px] leading-[1.5] text-ink">{p.blurb}</p>
              <div className="mt-auto pt-3 border-t border-[rgba(10,10,10,0.10)] flex flex-col gap-2">
                <p className="font-mono text-[10.5px] text-ink leading-[1.5] tracking-[0.02em]">
                  <span className="text-accent">↗ </span>
                  {p.metric}
                </p>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-[9.5px] text-mute">
                    {p.tech.slice(0, 4).join(' · ')}
                  </span>
                  <a
                    href={`https://github.com/swarat17/${p.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-ink tracking-[0.16em] uppercase hover:text-accent transition-colors no-underline"
                  >
                    GH ↗
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}

        {/* Filler cell */}
        {fillerCount > 0 &&
          Array.from({ length: fillerCount }).map((_, i) => (
            <div key={'pad' + i} className="bg-soft p-6 flex items-end min-h-[100px]">
              <a
                href="https://github.com/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-mute tracking-[0.16em] uppercase hover:text-accent no-underline"
              >
                ↗ More on GitHub
              </a>
            </div>
          ))}
      </div>
    </section>
  )
}
