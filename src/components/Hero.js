import { SWARAT } from '@/data/content'
import HeroPhoto from './HeroPhoto'

const heroMetrics = [
  { k: 'Users',    v: '25k+',    d: 'Tata Steel app' },
  { k: 'Latency',  v: '84ms',    d: 'CV inference' },
  { k: 'Accuracy', v: '>99.8%',  d: 'Defect detection' },
  { k: 'Outages',  v: '-40%',    d: '16k+ assets' },
  { k: 'Recsys',   v: '102ms',   d: 'P95 · live' },
  { k: 'Paper',    v: 'IEEE',    d: 'MOST 2026' },
]

export default function Hero() {
  return (
    <section id="hero">
      <div className="max-w-[1280px] mx-auto px-8 sm:px-16">

        {/* Main hero grid */}
        <div
          className="grid pt-14 pb-16 border-b border-[rgba(10,10,10,0.10)]"
          style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px' }}
        >
          {/* Left — col 1–7 */}
          <div className="col-span-12 lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7 font-mono text-[11px] text-accent tracking-[0.22em] uppercase">
              <span className="inline-block w-6 h-px bg-accent flex-shrink-0" />
              AI / ML engineer · NYC · open to full-time
            </div>

            {/* H1 */}
            <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.92] text-[3.5rem] sm:text-[5rem] lg:text-[6rem] mb-7">
              I build <span className="text-accent">ML systems</span>,<br />
              not just <span className="text-accent">notebooks</span>.
            </h1>

            {/* Body */}
            <p className="text-[17px] leading-[1.55] text-ink max-w-[540px] mb-7">
              Real-time CV, reinforcement learning, and the unglamorous plumbing in between —
              CUDA kernels to React forms, LangGraph pipelines to PySpark jobs.{' '}
              <span className="text-mute">
                MS in AI from Buffalo, B.Tech from IIT Hyderabad. Two-plus years shipping
                production software at Tata Steel before grad school.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#work"
                className="font-mono text-[11px] tracking-[0.16em] uppercase bg-ink text-white px-[18px] py-3 hover:bg-accent transition-colors no-underline"
              >
                See work ↓
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.16em] uppercase border border-ink text-ink px-[18px] py-3 hover:bg-ink hover:text-white transition-colors no-underline"
              >
                Download CV ↗
              </a>
              <a
                href={SWARAT.paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.16em] uppercase border border-ink text-ink px-[18px] py-3 hover:bg-ink hover:text-white transition-colors no-underline"
              >
                Read Paper ↗
              </a>
              <span className="font-mono text-[10px] text-mute tracking-[0.14em]">
                {SWARAT.projects.length} projects · {SWARAT.experience.length} roles · 1 paper
              </span>
            </div>
          </div>

          {/* Right — col 8–12 */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 mt-10 lg:mt-0">
            {/* Profile photo + name */}
            <div className="flex items-center gap-3">
              <HeroPhoto />
              <div>
                <p className="font-display text-sm font-semibold">{SWARAT.name}</p>
                <p className="font-mono text-[10px] text-accent tracking-widest uppercase mt-1">
                  {SWARAT.title}
                </p>
              </div>
            </div>

            {/* "In production" card */}
            <div className="bg-soft p-7 flex flex-col gap-5 flex-1">
              <div className="flex justify-between items-baseline border-b border-[rgba(10,10,10,0.10)] pb-3.5">
                <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
                  In production / 00
                </span>
                <span className="font-mono text-[10px] text-mute tracking-[0.16em]">
                  2021 — present
                </span>
              </div>

              <p className="font-display text-[20px] font-semibold leading-[1.3] tracking-[-0.01em]">
                Things I&rsquo;ve actually shipped — to real users, on real hardware, with real latency budgets.
              </p>

              {/* 3×2 metric grid */}
              <div className="grid grid-cols-3 gap-px bg-[rgba(10,10,10,0.10)] mt-1">
                {heroMetrics.map((m) => (
                  <div key={m.k} className="bg-soft p-4">
                    <div className="font-mono text-[9.5px] text-mute tracking-[0.14em] uppercase">
                      {m.k}
                    </div>
                    <div className="font-display text-2xl font-bold tracking-[-0.02em] text-ink mt-1 leading-[1.05]">
                      {m.v}
                    </div>
                    <div className="font-mono text-[10px] text-accent mt-0.5">{m.d}</div>
                  </div>
                ))}
              </div>

              <p className="font-mono text-[10px] text-mute tracking-[0.06em] mt-auto">
                STACK&nbsp;&nbsp; PyTorch · ROS2 · Kafka · React · CUDA · TensorRT · LangGraph
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="grid py-8 border-b border-[rgba(10,10,10,0.10)]"
          style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px' }}
        >
          {SWARAT.stats.map((st, i) => {
            const cls = `col-span-6 sm:col-span-3 ${i > 0 ? 'sm:border-l sm:border-[rgba(10,10,10,0.10)] sm:pl-6' : ''}`
            const inner = (
              <>
                <div className="font-mono text-[10px] text-mute tracking-[0.18em] uppercase">
                  {String(i + 1).padStart(2, '0')} · {st.k}
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-display text-[44px] font-bold tracking-[-0.025em] leading-none">
                    {st.v}
                  </span>
                  {st.u && (
                    <span className="font-mono text-[11px] text-mute">{st.u}</span>
                  )}
                </div>
                <div className="font-mono text-[10px] text-mute mt-2 tracking-[0.04em]">{st.s}</div>
              </>
            )
            return st.url ? (
              <a
                key={i}
                href={st.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cls} no-underline hover:opacity-60 transition-opacity`}
              >
                {inner}
              </a>
            ) : (
              <div key={i} className={cls}>{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
