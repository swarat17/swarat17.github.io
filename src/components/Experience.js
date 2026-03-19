import FadeIn from './FadeIn'

const experiences = [
  {
    role: 'Research Assistant',
    org: 'UB Safe and Efficient Autonomous Systems Lab',
    sub: 'University at Buffalo',
    location: 'Buffalo, NY',
    period: 'July 2025 – Present',
    type: 'Research',
    dot: 'bg-blue-500 shadow-blue-500/50',
    badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20',
    orgColor: 'text-blue-600 dark:text-blue-400',
    bullets: [
      'Architecting a Computer Vision pipeline in ROS2 with LECSFormer transformers on autonomous vehicles for bridge crack segmentation and length quantification, enabling real-time monitoring through vehicle-to-everything (V2X) technology.',
      'Engineered training pipeline with density-aware augmentation and semi-automatic annotation to extract pixel-accurate crack masks from 443 dashcam images, achieving 89% F1 improvement and 247% precision gain via dynamic cropping.',
      'Co-authored conference paper "Infrastructure-Guided Connectivity-Enhanced Road Crack Detection and Estimation" accepted for publication at IEEE MOST 2026.',
    ],
  },
  {
    role: 'ML Engineer (Capstone Project)',
    org: 'Nissha Medical Technologies',
    sub: '',
    location: 'Buffalo, NY',
    period: 'September 2025 – December 2025',
    type: 'ML Engineering',
    dot: 'bg-violet-500 shadow-violet-500/50',
    badge: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20',
    orgColor: 'text-violet-600 dark:text-violet-400',
    bullets: [
      'Pioneered AI-driven Inspection System using YOLOv8s-TensorRT achieving >99.5% defect detection with 84ms inference.',
      'Delivered real-time quality dashboard with root cause analysis for 30M+ daily casino tickets, addressing 4% defect rate with automated multi-gate inspection (count, visibility, density, alignment), enabling waste reduction and scalable deployment.',
    ],
  },
  {
    role: 'Systems Software Engineer',
    org: 'Tata Steel Limited',
    sub: '',
    location: 'Jamshedpur, India',
    period: 'April 2023 – August 2024',
    type: 'Industry',
    dot: 'bg-emerald-500 shadow-emerald-500/50',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20',
    orgColor: 'text-emerald-600 dark:text-emerald-400',
    bullets: [
      'Engineered Python-based analytics pipeline processing 110k+ network incidents using Pandas, NumPy, and statistical modeling, developing predictive insights that reduced outages by 40% and decreased support call volumes by 25%.',
      'Designed real-time monitoring platform integrating 4 REST APIs (OPManager, HP Aruba, Cisco Meraki, ServiceNow) with Python backend and Tableau frontend, delivering executive dashboards for CIO weekly reports and achieving 100% asset coverage across 16,000+ devices with 99.5% uptime.',
      'Developed suite of automation tools using Python and Power Apps — bulk email dispatch, contract alerting, asset ID automation, and inventory management platform — streamlining workflows for 1,000+ users.',
    ],
  },
  {
    role: 'Graduate Trainee Systems',
    org: 'Tata Steel Limited',
    sub: '',
    location: 'Remote',
    period: 'August 2022 – April 2023',
    type: 'Industry',
    dot: 'bg-emerald-500 shadow-emerald-500/50',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20',
    orgColor: 'text-emerald-600 dark:text-emerald-400',
    bullets: [
      'Built a responsive web app using ReactJS, ExpressJS, Google Maps API, and Microsoft SQL to assist 25k+ users with real-time bus tracking and customized maps generated from routes, improving commute in the steel plant.',
      'Initiated analytics pipelines using Python and R, deployed cloud ML workflows on GCP and AWS with scikit-learn and TensorFlow, and created full-stack apps using C#, Java, JavaScript, ReactJS, .NET, and databases (SQL Server, Oracle, MongoDB).',
    ],
  },
  {
    role: 'Technical Trainee Intern',
    org: 'Tata Steel Limited',
    sub: '',
    location: 'Remote',
    period: 'June 2021 – July 2021',
    type: 'Internship',
    dot: 'bg-amber-400 shadow-amber-400/50',
    badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20',
    orgColor: 'text-amber-600 dark:text-amber-400',
    bullets: [
      'Crafted UI for the Shop Floor Scheduler using ReactJS, NodeJS, ExpressJS, MySQL, incorporating Gantt charts and CRUD operations, reducing manual scheduling interventions by 50%.',
    ],
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

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-navy-800 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-amber-600 dark:text-gold uppercase mb-4 cursor-blink">
              // work_history
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">
              Where I&apos;ve Worked
            </h2>
            <div className="mt-4 line-fade w-16" />
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-[1.375rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <FadeIn key={`${exp.role}-${exp.period}`} delay={i * 75}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[0.625rem] md:left-[0.875rem] top-5 w-3 h-3 rounded-full ${exp.dot} shadow-lg ring-2 ring-white dark:ring-navy-800`}
                  />

                  <div className="bg-slate-50 dark:bg-navy-700 border border-gray-100 dark:border-blue-500/10 rounded-xl p-5 card-glow dark:hover:border-blue-500/20">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display text-sm font-bold text-gray-900 dark:text-slate-100 leading-tight">
                          {exp.role}
                        </h3>
                        <p className={`text-sm font-semibold mt-0.5 ${exp.orgColor}`}>
                          {exp.org}
                          {exp.sub && (
                            <span className="text-gray-400 dark:text-slate-500 font-normal"> · {exp.sub}</span>
                          )}
                        </p>
                        <p className="font-mono text-[0.6rem] tracking-wider text-gray-400 dark:text-slate-500 mt-0.5 uppercase">
                          {exp.location}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className={`font-mono text-[0.6rem] tracking-wider px-2.5 py-1 rounded-md border ${exp.badge}`}>
                          {exp.type}
                        </span>
                        <span className="font-mono text-[0.6rem] tracking-wider text-gray-400 dark:text-slate-500 bg-gray-100 dark:bg-navy-600 px-2.5 py-1 rounded-md border border-gray-200 dark:border-blue-500/10">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                          <span className="text-blue-400 dark:text-blue-500 mt-1 flex-shrink-0 font-mono">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeIn delay={200}>
          <div className="mt-16">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-amber-600 dark:text-gold uppercase mb-5 cursor-blink">
              // education
            </p>
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
