import FadeIn from './FadeIn'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            {/* Tag */}
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Contact
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              {"Let's Connect"}
            </h2>

            {/* Subtext */}
            <p className="text-gray-400 leading-relaxed mb-10 text-base">
              {"I'm actively looking for full-time opportunities in ML Engineering, AI Engineering, Software Engineering, and Robotics. Feel free to reach out!"}
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:swaratsarkar@gmail.com"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/30"
              >
                <Mail size={18} />
                swaratsarkar@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
              >
                <Linkedin size={18} />
                LinkedIn
                <ArrowRight size={15} className="opacity-60" />
              </a>
              <a
                href="https://github.com/swarat17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
              >
                <Github size={18} />
                GitHub
                <ArrowRight size={15} className="opacity-60" />
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-10">
              <p className="text-gray-500 text-sm">
                Based in{' '}
                <span className="text-gray-300 font-medium">New York City</span>
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
