import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Name & built-with */}
          <p className="text-sm text-gray-600">
            <span className="text-gray-400 font-semibold">Swarat Sarkar</span>
            {' · '}Built with Next.js &amp; Tailwind CSS
            {' · '}
            <span className="text-gray-600">2026</span>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/swarat17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/swarat17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:swaratsarkar@gmail.com"
              className="text-gray-600 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
