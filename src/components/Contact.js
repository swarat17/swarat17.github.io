'use client'
import { useState } from 'react'
import { SWARAT } from '@/data/content'
import FadeIn from './FadeIn'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(SWARAT.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="max-w-[1280px] mx-auto px-8 sm:px-16 pt-14 border-t-2 border-ink pb-16">
      <FadeIn>
        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px' }}
        >
          {/* Left — col 1–7 */}
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[11px] text-accent tracking-[0.22em] uppercase mb-4">
              06 · Get in touch
            </div>
            <h2 className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[3rem] sm:text-[4rem] lg:text-[5rem]">
              Currently<br />looking for<br />
              <span className="text-accent">full-time SWE.</span>
            </h2>
            <p className="text-[14px] text-ink mt-5 max-w-[480px]">
              ML / AI / Robotics also welcome. NYC-based, fine with remote and hybrid.
            </p>
          </div>

          {/* Right — col 8–12 */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end gap-[18px] mt-10 lg:mt-0">
            <div className="bg-soft p-5 font-mono text-[12px] leading-[2] tracking-[0.04em]">
              <div className="flex justify-between">
                <span className="text-mute">EMAIL</span>
                <span>{SWARAT.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mute">GH</span>
                <span>{SWARAT.github}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mute">IN</span>
                <span>{SWARAT.linkedin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mute">LOC</span>
                <span>{SWARAT.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mute">STATUS</span>
                <span className="text-green-600">● Available</span>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="bg-ink text-white p-4 font-mono text-[12px] tracking-[0.16em] uppercase flex justify-between items-center hover:bg-accent transition-colors w-full"
            >
              <span>{copied ? 'Copied ✓' : 'Send a note'}</span>
              <span>→</span>
            </button>
          </div>

          {/* Footer row */}
          <div className="col-span-12 flex justify-between mt-16 font-mono text-[10px] text-mute tracking-[0.18em] uppercase">
            <span>© 2026 {SWARAT.name}</span>
            <span>v3.0 · Grid</span>
            <span>12-col · 24px gutter</span>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
