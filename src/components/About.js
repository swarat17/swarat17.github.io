import FadeIn from './FadeIn'
import { GraduationCap, Briefcase, FileText, Award } from 'lucide-react'

const stats = [
  {
    icon: GraduationCap,
    label: 'MS AI · GPA 3.83/4.0',
    sub: 'University at Buffalo',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Briefcase,
    label: '2+ Years Industry',
    sub: 'Tata Steel · ML Roles',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: FileText,
    label: 'IEEE MOST 2026',
    sub: 'Co-authored paper',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Award,
    label: 'IIT JEE 98th Pctile',
    sub: 'Top 2% of 1M+ students',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Who I Am
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <FadeIn delay={100}>
            <div className="space-y-5 text-gray-600 leading-relaxed text-base">
              <p>
                I&apos;m an AI Engineer and Researcher with an{' '}
                <span className="font-semibold text-gray-900">
                  MS in Artificial Intelligence from the University at Buffalo (GPA: 3.83/4.0)
                </span>{' '}
                and a B.Tech from IIT Hyderabad. I specialize in computer vision, deep learning,
                and deploying production ML systems.
              </p>
              <p>
                My work spans V2X perception systems for infrastructure monitoring, real-time
                defect detection for manufacturing, and large-scale data pipelines. Before
                graduate school, I spent{' '}
                <span className="font-semibold text-gray-900">
                  2+ years at Tata Steel as a Manager in IT Network &amp; Communications
                </span>
                , where I led a 10+ member team managing 16,000+ network assets and drove a{' '}
                <span className="font-semibold text-gray-900">40% reduction in network outages</span>.
              </p>
              <p>
                I&apos;m based in{' '}
                <span className="font-semibold text-gray-900">New York City</span> and actively
                looking for full-time roles in Software Engineering, ML Engineering, AI
                Engineering, or Robotics.
              </p>
            </div>
          </FadeIn>

          {/* Stats Grid */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, sub, color, bg }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-0.5 transition-transform"
                >
                  <div className={`${bg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                    <Icon size={20} className={color} />
                  </div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{label}</p>
                  <p className="text-gray-500 text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
