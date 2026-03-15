'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import { Mail, Linkedin, Github, ArrowRight, Copy, Check } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('swaratsarkar@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="bg-navy-950 dark:bg-navy-950 py-24 relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            {/* Label */}
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gold uppercase mb-5 cursor-blink">
              // get_in_touch
            </p>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Let&apos;s{' '}
              <span className="text-gradient-blue">Connect.</span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-400 leading-relaxed mb-12 text-sm max-w-lg mx-auto">
              I&apos;m actively looking for full-time opportunities in ML Engineering, AI Engineering,
              Software Engineering, and Robotics. Feel free to reach out!
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              {/* Email button */}
              <div className="inline-flex rounded-lg overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/10">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 transition-all duration-200 text-sm"
                >
                  <Mail size={16} />
                  swaratsarkar@gmail.com
                  {copied ? (
                    <Check size={14} className="text-green-300" />
                  ) : (
                    <Copy size={13} className="opacity-60" />
                  )}
                </button>
                <a
                  href="mailto:swaratsarkar@gmail.com"
                  className="flex items-center px-3 bg-blue-700 hover:bg-blue-600 text-white border-l border-blue-500/40 transition-colors"
                  title="Open in mail client"
                >
                  <ArrowRight size={14} />
                </a>
              </div>

              <a
                href="https://www.linkedin.com/in/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold px-6 py-3 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-200 text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowRight size={13} className="opacity-50" />
              </a>

              <a
                href="https://github.com/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold px-6 py-3 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-200 text-sm"
              >
                <Github size={16} />
                GitHub
                <ArrowRight size={13} className="opacity-50" />
              </a>
            </div>

            {/* Footer info */}
            <div className="border-t border-white/8 pt-8">
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-slate-500 uppercase">
                Based in{' '}
                <span className="text-gold">New York City</span>
                {' · '}
                Open to remote and hybrid roles
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
