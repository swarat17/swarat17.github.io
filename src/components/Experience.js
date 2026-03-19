import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    role: 'Research Assistant',
    org: 'UB Safe & Efficient Autonomous Systems Lab',
    sub: 'University at Buffalo',
    location: 'Buffalo, NY',
    period: 'Jul 2025 – Present',
    type: 'Research',
    hero: true,
    dot: 'bg-blue-500',
    accentBar: 'from-blue-500 to-violet-500',
    badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20',
    orgColor: 'text-blue-600 dark:text-blue-400',
    metricColor: 'text-blue-600 dark:text-blue-400',
    metricBg: 'bg-blue-50/80 dark:bg-blue-500/15 border-blue-100 dark:border-blue-500/25',
    metrics: [
      { value: '0.29→0.55', label: 'F1 Score', sub: 'crack detection' },
      { value: '0.20→0.70', label: 'Precision', sub: 'via adaptive crop' },
      { value: 'IEEE MOST', label: '2026', sub: 'accepted paper' },
    ],
    tech: ['ROS2', 'LECSFormer', 'PyTorch', 'SLAM', 'Navigation2', 'OpenCV', 'CUDA'],
  },
  {
    role: 'ML Engineer',
    org: 'Nissha Medical Technologies',
    sub: 'Capstone Project',
    location: 'Buffalo, NY',
    period: 'Sep – Dec 2025',
    type: 'ML Engineering',
    dot: 'bg-violet-500',
    accentBar: 'from-violet-500 to-purple-500',
    badge: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20',
    orgColor: 'text-violet-600 dark:text-violet-400',
    metricColor: 'text-violet-600 dark:text-violet-400',
    metricBg: 'bg-violet-50/80 dark:bg-violet-500/15 border-violet-100 dark:border-violet-500/25',
    metrics: [
      { value: '>99.5%', label: 'Defect Detection', sub: 'accuracy' },
      { value: '84ms', label: 'Inference', sub: 'real-time' },
      { value: '30M+', label: 'Daily Tickets', sub: 'processed' },
    ],
    tech: ['YOLOv8', 'TensorRT', 'ONNX', 'Python', 'FastAPI'],
  },
  {
    role: 'Systems Software Engineer',
    org: 'Tata Steel Limited',
    sub: '',
    location: 'Jamshedpur, India',
    period: 'Apr 2023 – Aug 2024',
    type: 'Industry',
    dot: 'bg-emerald-500',
    accentBar: 'from-emerald-500 to-teal-500',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20',
    orgColor: 'text-emerald-600 dark:text-emerald-400',
    metricColor: 'text-emerald-600 dark:text-emerald-400',
    metricBg: 'bg-emerald-50/80 dark:bg-emerald-500/15 border-emerald-100 dark:border-emerald-500/25',
    metrics: [
      { value: '40%', label: 'Outage Reduction', sub: '110k+ incidents' },
      { value: '16k+', label: 'Devices', sub: '99.5% uptime' },
      { value: '1000+', label: 'Users', sub: 'automation tools' },
    ],
    tech: ['Python', 'Pandas', 'Tableau', 'REST APIs', 'Power Apps', 'ServiceNow'],
  },
  {
    role: 'Graduate Trainee Systems',
    org: 'Tata Steel Limited',
    sub: '',
    location: 'Remote',
    period: 'Aug 2022 – Apr 2023',
    type: 'Industry',
    dot: 'bg-emerald-500',
    accentBar: 'from-emerald-400 to-cyan-500',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20',
    orgColor: 'text-emerald-600 dark:text-emerald-400',
    metricColor: 'text-emerald-600 dark:text-emerald-400',
    metricBg: 'bg-emerald-50/80 dark:bg-emerald-500/15 border-emerald-100 dark:border-emerald-500/25',
    metrics: [
      { value: '25k+', label: 'Users', sub: 'bus tracking app' },
      { value: 'GCP + AWS', label: 'Cloud ML', sub: 'deployed' },
    ],
    tech: ['ReactJS', 'ExpressJS', 'Google Maps API', 'Python', 'R', 'TensorFlow', 'MongoDB'],
  },
  {
    role: 'Technical Trainee Intern',
    org: 'Tata Steel Limited',
    sub: '',
    location: 'Remote',
    period: 'Jun – Jul 2021',
    type: 'Internship',
    dot: 'bg-amber-400',
    accentBar: 'from-amber-400 to-orange-400',
    badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20',
    orgColor: 'text-amber-600 dark:text-amber-400',
    metricColor: 'text-amber-600 dark:text-amber-400',
    metricBg: 'bg-amber-50/80 dark:bg-amber-500/15 border-amber-100 dark:border-amber-500/25',
    metrics: [
      { value: '50%', label: 'Less Manual', sub: 'scheduling' },
    ],
    tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MySQL'],
  },
]

const education = [
  {
    degree: 'MS in Artificial Intelligence',
    school: 'University at Buffalo',
    period: '2024 – 2025',
    detail: 'GPA: 3.83 / 4.0',
    color: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-500/15 hover:border-blue-400/40 dark:hover:border-blue-500/30',
  },
  {
    degree: 'B.Tech',
    school: 'IIT Hyderabad',
    period: '2018 – 2022',
    detail: 'IIT JEE Advanced · 98th Percentile (1M+ students)',
    color: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-500/15 hover:border-emerald-400/40 dark:hover:border-emerald-500/30',
  },
]

function ExperienceCard({ exp, full = false }) {
  return (
    <div className={`relative bg-slate-50 dark:bg-navy-700 border border-gray-100 dark:border-blue-500/10 rounded-xl overflow-hidden card-glow dark:hover:border-blue-500/20 flex flex-col h-full ${full ? '' : ''}`}>
      {/* Accent bar */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${exp.accentBar}`} />

      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-sm font-bold text-gray-900 dark:text-slate-100 leading-tight">
              {exp.role}
            </h3>
            <p className={`text-sm font-semibold mt-0.5 ${exp.orgColor} truncate`}>
              {exp.org}
              {exp.sub && (
                <span className="text-gray-400 dark:text-slate-500 font-normal text-xs"> · {exp.sub}</span>
              )}
            </p>
            <p className="font-mono text-[0.58rem] tracking-wider text-gray-400 dark:text-slate-400 mt-0.5 uppercase">
              {exp.location} · {exp.period}
            </p>
          </div>
          <span className={`font-mono text-[0.58rem] tracking-wider px-2 py-1 rounded border flex-shrink-0 ${exp.badge}`}>
            {exp.type}
          </span>
        </div>

        {/* Metrics */}
        <div className={`grid gap-2 mb-4 ${exp.metrics.length >= 3 ? 'grid-cols-3' : exp.metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {exp.metrics.map((m) => (
            <div key={m.label} className={`rounded-lg border px-3 py-2.5 text-center ${exp.metricBg}`}>
              <div className={`font-display text-base font-bold leading-none mb-0.5 ${exp.metricColor}`}>
                {m.value}
              </div>
              <div className="font-mono text-[0.58rem] tracking-wide text-gray-700 dark:text-slate-300 uppercase font-semibold leading-tight">
                {m.label}
              </div>
              <div className="text-[0.6rem] text-gray-400 dark:text-slate-300 mt-0.5 leading-tight">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {exp.tech.map((t) => (
            <span key={t} className="font-mono text-[0.6rem] px-2 py-0.5 rounded border border-gray-200 dark:border-blue-500/20 text-gray-500 dark:text-slate-300 bg-white dark:bg-navy-600">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [hero, ...rest] = experiences
  // Group rest into rows of 2
  const rows = []
  for (let i = 0; i < rest.length; i += 2) {
    rows.push(rest.slice(i, i + 2))
  }

  return (
    <section id="experience" className="bg-white dark:bg-navy-800 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader number="03" label="// work_history" icon={Briefcase} title="Where I've Worked" />

        <div className="space-y-4">
          {/* Hero card — full width */}
          <FadeIn>
            <ExperienceCard exp={hero} full />
          </FadeIn>

          {/* Remaining cards — 2 per row */}
          {rows.map((row, ri) => (
            <div key={ri} className="grid sm:grid-cols-2 gap-4">
              {row.map((exp, ei) => (
                <FadeIn key={`${exp.role}-${exp.period}`} delay={(ri + 1) * 60 + ei * 40}>
                  <ExperienceCard exp={exp} />
                </FadeIn>
              ))}
            </div>
          ))}
        </div>

        {/* Education */}
        <FadeIn delay={200}>
          <div className="mt-16">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-5 h-5 rounded bg-blue-500/10 dark:bg-blue-500/15 border border-blue-400/20 dark:border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={11} className="text-blue-500 dark:text-blue-400" />
              </div>
              <p className="font-mono text-[0.65rem] tracking-[0.25em] text-amber-600 dark:text-gold uppercase cursor-blink">
                // education
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className={`bg-slate-50 dark:bg-navy-700 border rounded-xl p-5 card-glow ${edu.border}`}
                >
                  <p className="font-display text-sm font-bold text-gray-900 dark:text-slate-100">{edu.degree}</p>
                  <p className={`font-semibold text-sm mt-1 ${edu.color}`}>{edu.school}</p>
                  <p className="font-mono text-[0.6rem] tracking-wider text-gray-400 dark:text-slate-500 mt-1.5 uppercase">{edu.period}</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
