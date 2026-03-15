import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 dark:bg-navy-950 text-slate-600 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Built-with */}
          <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-slate-600">
            <span className="text-gold">Swarat Sarkar</span>
            {' · '}Next.js &amp; Tailwind CSS
            {' · '}2026
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/swarat17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/swarat17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:swaratsarkar@gmail.com"
              className="text-slate-600 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
