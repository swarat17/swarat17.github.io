import FadeIn from './FadeIn'

/**
 * Consistent section header with:
 * - Large faded background number (editorial depth)
 * - Small icon badge + monospace label (terminal identity)
 * - Syne display heading + gradient divider line
 *
 * Props:
 *   number   {string}  e.g. "01"
 *   label    {string}  e.g. "// about_me"
 *   icon     {Component} Lucide icon component
 *   title    {string}  e.g. "Who I Am"
 *   center   {boolean} centered layout (BeyondCode)
 *   onDark   {boolean} always-gold label (Contact section)
 */
export default function SectionHeader({ number, label, icon: Icon, title, center = false, onDark = false }) {
  return (
    <FadeIn>
      <div className={`mb-14 relative ${center ? 'text-center' : ''}`}>
        {/* Large faded background number */}
        <span
          className={`absolute font-display font-black leading-none select-none pointer-events-none
            text-gray-900/[0.04] dark:text-blue-400/[0.06] -top-4
            ${center ? 'left-1/2 -translate-x-1/2' : '-left-2'}`}
          style={{ fontSize: 'clamp(4rem, 9vw, 6.5rem)' }}
          aria-hidden="true"
        >
          {number}
        </span>

        <div className="relative">
          {/* Icon badge + label row */}
          <div className={`flex items-center gap-2.5 mb-4 ${center ? 'justify-center' : ''}`}>
            {Icon && (
              <div className="w-5 h-5 rounded bg-blue-500/10 dark:bg-blue-500/15 border border-blue-400/20 dark:border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Icon size={11} className="text-blue-500 dark:text-blue-400" />
              </div>
            )}
            <p className={`font-mono text-[0.65rem] tracking-[0.25em] uppercase cursor-blink
              ${onDark ? 'text-gold' : 'text-amber-600 dark:text-gold'}`}>
              {label}
            </p>
          </div>

          {/* Heading */}
          <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight
            ${onDark ? 'text-white' : 'text-gray-900 dark:text-slate-100'}`}>
            {title}
          </h2>

          {/* Divider */}
          {center
            ? <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
            : <div className="mt-4 line-fade w-16" />
          }
        </div>
      </div>
    </FadeIn>
  )
}
