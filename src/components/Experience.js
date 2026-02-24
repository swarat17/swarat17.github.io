import FadeIn from './FadeIn'

const experiences = [
  {
    role: 'Research Assistant',
    org: 'UB Safe and Efficient Autonomous Systems Lab',
    sub: 'University at Buffalo',
    location: 'Buffalo, NY',
    period: 'July 2025 – Present',
    type: 'Research',
    color: 'bg-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    bullets: [
      'Architecting a Computer Vision pipeline in ROS2 with LECSFormer transformers on autonomous vehicles for bridge crack segmentation and length quantification, enabling real-time monitoring through vehicle-to-everything (V2X) technology.',
      'Engineered training pipeline with density-aware augmentation and semi-automatic annotation to extract pixel-accurate crack masks from 443 dashcam images, achieving 89% F1 improvement and 247% precision gain via dynamic cropping.',
      'Co-authored conference paper "Infrastructure-Guided Connectivity-Enhanced Road Crack Detection and Estimation" submitted to IEEE MOST 2026.',
    ],
  },
  {
    role: 'ML Engineer (Capstone Project)',
    org: 'Nissha Medical Technologies',
    sub: '',
    location: 'Buffalo, NY',
    period: 'September 2025 – December 2025',
    type: 'ML Engineering',
    color: 'bg-purple-600',
    badge: 'bg-purple-50 text-purple-700 border-purple-100',
    bullets: [
      'Pioneered AI-driven Inspection System using YOLOv8s-TensorRT achieving >99.5% defect detection with 84ms inference.',
      'Delivered real-time quality dashboard with root cause analysis for 30M+ daily casino tickets, addressing 4% defect rate with automated multi-gate inspection (count, visibility, density, alignment), enabling waste reduction and scalable deployment.',
    ],
  },
  {
    role: 'Manager, IT Network and Communication',
    org: 'Tata Steel Limited',
    sub: '',
    location: 'Jamshedpur, India',
    period: 'April 2023 – August 2024',
    type: 'Industry',
    color: 'bg-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    bullets: [
      'Engineered Python-based analytics pipeline processing 110k+ network incidents using Pandas, NumPy, and statistical modeling, developing predictive insights that reduced outages by 40% and decreased support call volumes by 25%.',
      'Designed real-time monitoring platform integrating 4 REST APIs (OPManager, HP Aruba, Cisco Meraki, ServiceNow) with Python backend and Tableau frontend, delivering executive dashboards for CIO weekly reports and achieving 100% asset coverage across 16,000+ devices with 99.5% uptime.',
      'Developed suite of automation tools using Python and Power Apps — bulk email dispatch, contract alerting, asset ID automation, and inventory management platform — streamlining workflows for 1,000+ users.',
    ],
  },
  {
    role: 'Management Trainee Systems',
    org: 'Tata Steel Limited',
    sub: '',
    location: 'Remote',
    period: 'August 2022 – April 2023',
    type: 'Industry',
    color: 'bg-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
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
    color: 'bg-amber-500',
    badge: 'bg-amber-50 text-amber-700 border-amber-100',
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
    detail: 'GPA: 3.83/4.0',
  },
  {
    degree: 'B.Tech',
    school: 'IIT Hyderabad',
    period: '2018 – 2022',
    detail: 'IIT JEE Advanced 98th Percentile (1M+ students)',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Where I&apos;ve Worked
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full" />
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={`${exp.role}-${exp.period}`} delay={i * 80}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-4 top-1.5 w-4 h-4 rounded-full ${exp.color} border-2 border-white shadow-md ring-4 ring-white`}
                  />

                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 mt-0.5">
                          {exp.org}
                          {exp.sub && (
                            <span className="text-gray-500 font-normal"> · {exp.sub}</span>
                          )}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {exp.location}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${exp.badge}`}
                        >
                          {exp.type}
                        </span>
                        <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                          <span className="text-blue-400 mt-1.5 flex-shrink-0">▸</span>
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
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">🎓</span>
              Education
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
                >
                  <p className="font-bold text-gray-900 text-sm">{edu.degree}</p>
                  <p className="text-blue-600 font-semibold text-sm mt-0.5">{edu.school}</p>
                  <p className="text-gray-400 text-xs mt-1">{edu.period}</p>
                  <p className="text-gray-600 text-xs mt-2 font-medium">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
