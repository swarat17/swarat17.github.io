'use client'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Work',       href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Toolkit',    href: '#toolkit' },
  { label: 'Contact',    href: '#contact' },
]

const PAPER_URL = 'https://arxiv.org/abs/2604.24616'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[rgba(10,10,10,0.10)]">
      <div className="max-w-[1280px] mx-auto px-8 sm:px-16 py-4">
        <div
          className="grid items-center"
          style={{ gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '24px' }}
        >
          {/* Logo — col 1-4 */}
          <div className="col-span-4 flex items-center gap-3">
            <div className="w-7 h-7 bg-accent text-white flex items-center justify-center font-display text-[13px] font-bold tracking-[-0.02em] flex-shrink-0">
              S
            </div>
            <span className="font-display text-[15px] font-semibold whitespace-nowrap">
              Swarat Sarkar{' '}
              <span className="text-mute font-normal">/ AI Engineer</span>
            </span>
          </div>

          {/* Nav links — col 5-10, desktop only */}
          <div className="col-span-6 hidden sm:flex gap-7 items-center">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-mono text-[11px] tracking-[0.14em] uppercase text-mute hover:text-ink transition-colors no-underline"
              >
                {label}
              </a>
            ))}
            <a
              href={PAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent hover:text-ink transition-colors no-underline"
            >
              Paper ↗
            </a>
          </div>

          {/* Status — col 11-12, desktop only */}
          <div className="col-span-2 text-right font-mono text-[10px] text-mute tracking-[0.18em] uppercase hidden sm:block">
            NYC <span className="text-green-600">●</span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="col-span-8 justify-self-end sm:hidden text-ink font-mono text-sm"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="sm:hidden pt-4 pb-2 flex flex-col gap-4 border-t border-[rgba(10,10,10,0.10)] mt-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] tracking-[0.14em] uppercase text-mute hover:text-ink no-underline"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
