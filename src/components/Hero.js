import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import ProfileImage from './ProfileImage'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-white pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to full-time opportunities
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5 tracking-tight">
              AI/ML Engineer
              <span className="block text-blue-600">· Turning Perception</span>
              <span className="block text-blue-600">Into Action</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
              Computer Vision researcher and ML engineer with hands-on experience building
              production AI systems — from bridge infrastructure monitoring to real-time defect
              detection. Open to SWE, ML, and AI Engineering roles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-200 transition-all hover:border-gray-300 hover:-translate-y-0.5 shadow-sm"
              >
                Download Resume <Download size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:swaratsarkar@gmail.com"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <ProfileImage />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent group-hover:from-blue-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  )
}
