import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import ProfileImage from './ProfileImage'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-50 dark:bg-navy-900 pt-16 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50 dark:opacity-100" />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-slate-50/70 to-blue-50/20 dark:from-navy-900/98 dark:via-navy-900/85 dark:to-blue-950/30" />

      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 right-1/3 w-[480px] h-[480px] bg-blue-400/4 dark:bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-indigo-400/4 dark:bg-indigo-500/4 rounded-full blur-3xl pointer-events-none" />

      {/* Version marker */}
      <div className="absolute bottom-8 right-6 font-mono text-[0.55rem] tracking-[0.25em] text-gray-200 dark:text-slate-700 select-none" aria-hidden="true">
        v2.0 · 2026
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full border border-gold/30 dark:border-gold/20 bg-amber-50/70 dark:bg-gold/[0.04] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-[0.6rem] tracking-[0.22em] text-amber-700 dark:text-gold uppercase">
                Open to Full-Time Opportunities
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold tracking-tight leading-[1.02] mb-5">
              <span className="block text-5xl sm:text-6xl lg:text-[4.5rem] text-gray-900 dark:text-slate-100">
                AI/ML
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-[4.5rem] text-gradient-blue">
                Engineer.
              </span>
            </h1>

            {/* Monospace identity line */}
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gray-500 dark:text-slate-400 uppercase mb-7">
              Swarat Sarkar &nbsp;·&nbsp; New York City &nbsp;·&nbsp; MS AI @ UB
            </p>

            {/* Description */}
            <p className="text-[0.95rem] text-gray-500 dark:text-slate-400 leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
              Computer Vision researcher and ML engineer with hands-on experience building
              production AI systems — from bridge infrastructure monitoring to real-time defect
              detection. Open to SWE, ML, and AI Engineering roles.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 text-sm"
              >
                View My Work <ArrowRight size={15} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 dark:border-blue-500/20 hover:border-gold/40 dark:hover:border-gold/30 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-gold font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 bg-white/60 dark:bg-navy-700/50 backdrop-blur-sm text-sm"
              >
                Download Resume <Download size={15} />
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 dark:text-slate-500 hover:text-gray-900 dark:hover:text-slate-200 transition-all duration-200 group"
              >
                <Github size={17} className="group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[0.62rem] tracking-wider">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
              >
                <Linkedin size={17} className="group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[0.62rem] tracking-wider">LinkedIn</span>
              </a>
              <a
                href="mailto:swaratsarkar@gmail.com"
                className="flex items-center gap-2 text-gray-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
              >
                <Mail size={17} className="group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[0.62rem] tracking-wider">Email</span>
              </a>
            </div>
          </div>

          {/* Profile Photo + decorative bracket geometry */}
          <div className="flex-shrink-0 relative">
            {/* Corner bracket — top left */}
            <div className="absolute -top-5 -left-5 w-8 h-8 border-t border-l border-gold/30 dark:border-gold/25" />
            {/* Corner bracket — bottom right */}
            <div className="absolute -bottom-5 -right-5 w-8 h-8 border-b border-r border-gold/30 dark:border-gold/25" />
            {/* Outer ring pulse */}
            <div className="absolute inset-0 rounded-full border border-blue-400/10 dark:border-blue-500/10 scale-[1.18] animate-[glow_4s_ease-in-out_infinite]" />
            <ProfileImage />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-300 dark:text-slate-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
          >
            <span className="font-mono text-[0.55rem] tracking-[0.38em] uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-gray-300 dark:from-slate-700 to-transparent group-hover:from-blue-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  )
}
