import FadeIn from './FadeIn'
import { GraduationCap, Briefcase, FileText, Award } from 'lucide-react'

const stats = [
  {
    icon: GraduationCap,
    value: '3.83',
    unit: '/ 4.0',
    label: 'MS AI · GPA',
    sub: 'University at Buffalo',
    accent: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-500/15 hover:border-blue-400/40 dark:hover:border-blue-500/30',
    iconColor: 'text-blue-500 dark:text-blue-400',
  },
  {
    icon: Briefcase,
    value: '2+',
    unit: 'yrs',
    label: 'Industry Experience',
    sub: 'Tata Steel · ML Roles',
    accent: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-500/15 hover:border-emerald-400/40 dark:hover:border-emerald-500/30',
    iconColor: 'text-emerald-500 dark:text-emerald-400',
  },
  {
    icon: FileText,
    value: 'IEEE',
    unit: '',
    label: 'MOST 2026',
    sub: 'Co-authored paper',
    accent: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-200 dark:border-violet-500/15 hover:border-violet-400/40 dark:hover:border-violet-500/30',
    iconColor: 'text-violet-500 dark:text-violet-400',
  },
  {
    icon: Award,
    value: '98th',
    unit: 'pct',
    label: 'IIT JEE',
    sub: 'Top 2% of 1M+ students',
    accent: 'text-amber-600 dark:text-gold',
    border: 'border-amber-200 dark:border-gold/15 hover:border-amber-400/40 dark:hover:border-gold/30',
    iconColor: 'text-amber-500 dark:text-gold',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-navy-800 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-amber-600 dark:text-gold uppercase mb-4 cursor-blink">
              // about_me
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">
              Who I Am
            </h2>
            <div className="mt-4 line-fade w-16" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <FadeIn delay={100}>
            <div className="space-y-5 text-gray-600 dark:text-slate-400 leading-relaxed text-[0.95rem]">
              <p>
                I&apos;m an AI Engineer and Researcher with an{' '}
                <span className="font-semibold text-gray-900 dark:text-slate-200">
                  MS in Artificial Intelligence from the University at Buffalo (GPA: 3.83/4.0)
                </span>{' '}
                and a B.Tech from IIT Hyderabad. I specialize in computer vision, deep learning,
                and deploying production ML systems.
              </p>
              <p>
                My work spans V2X perception systems for infrastructure monitoring, real-time
                defect detection for manufacturing, and large-scale data pipelines. Before
                graduate school, I spent{' '}
                <span className="font-semibold text-gray-900 dark:text-slate-200">
                  2+ years at Tata Steel as a Manager in IT Network &amp; Communications
                </span>
                , where I led a 10+ member team managing 16,000+ network assets and drove a{' '}
                <span className="font-semibold text-gray-900 dark:text-slate-200">
                  40% reduction in network outages
                </span>.
              </p>
              <p>
                I&apos;m based in{' '}
                <span className="font-semibold text-gray-900 dark:text-slate-200">New York City</span> and actively
                looking for full-time roles in Software Engineering, ML Engineering, AI
                Engineering, or Robotics.
              </p>
            </div>
          </FadeIn>

          {/* Stats Grid */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ icon: Icon, value, unit, label, sub, accent, border, iconColor }) => (
                <div
                  key={label}
                  className={`bg-white dark:bg-navy-700 border rounded-xl p-5 card-glow ${border}`}
                >
                  <Icon size={18} className={`${iconColor} mb-3`} />
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`font-display text-3xl font-bold ${accent}`}>{value}</span>
                    {unit && (
                      <span className="font-mono text-[0.6rem] text-gray-400 dark:text-slate-500 tracking-wider">
                        {unit}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-gray-700 dark:text-slate-300 leading-tight">{label}</p>
                  <p className="font-mono text-[0.6rem] text-gray-400 dark:text-slate-500 mt-1 tracking-wider">{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
