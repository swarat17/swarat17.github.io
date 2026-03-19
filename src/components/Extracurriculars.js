import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Users } from 'lucide-react'

const groups = [
  {
    institution: 'University at Buffalo',
    period: '2024 – 2025',
    dot: 'bg-blue-500',
    badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20',
    highlightColor: 'text-blue-500 dark:text-blue-400',
    cardBorder: 'border-gray-100 dark:border-blue-500/10 dark:hover:border-blue-500/25',
    metricBg: 'bg-blue-50/60 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20',
    activities: [
      { icon: '🚀', name: 'NASA Lunabotics Competition Team', role: 'Software Engineer', highlight: 'Best Presentation Award — First Year Team' },
      { icon: '🤝', name: 'UB Future Alumni Network (UB FAN)', role: 'Future Alumni Leader', highlight: '307,000+ alumni network · Events & advocacy' },
      { icon: '🎾', name: 'UB Aces Club Tennis Team', role: 'Competitive Player', highlight: '1st Place Doubles USTA Ladder · Nationals 2024–25' },
      { icon: '🌱', name: 'Community Service Volunteer', role: 'Volunteer', highlight: 'Campus-community & sustainability initiatives' },
    ],
  },
  {
    institution: 'IIT Hyderabad',
    period: '2018 – 2022',
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20',
    highlightColor: 'text-emerald-500 dark:text-emerald-400',
    cardBorder: 'border-gray-100 dark:border-emerald-500/10 dark:hover:border-emerald-500/25',
    metricBg: 'bg-emerald-50/60 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20',
    activities: [
      { icon: '✈️', name: 'Aero Club of IITH', role: 'Core Member', highlight: 'RC model & drone design · Junior mentorship' },
      { icon: '🔐', name: 'Kludge: Cyber Security Club', role: 'Core Member', highlight: 'CTF competitions · Cybersecurity awareness' },
      { icon: '🔑', name: 'Enigma: Cryptography Contest', role: 'Senior Organizer', highlight: '10,000+ participants · Full event execution' },
      { icon: '🎾', name: 'IIT Hyderabad Lawn Tennis', role: 'Competitive Player', highlight: 'Silver Medal · General Championship' },
      { icon: '🏆', name: 'Inter-IIT Tech Meet 2019', role: 'Contingent Member', highlight: "Payatu's Infosec CTF · National-level competition" },
      { icon: '🏎️', name: 'Drift King: IC Engine Car Race', role: 'Junior Organizer', highlight: 'Social media · Registration · Track design' },
    ],
  },
  {
    institution: 'Community Service',
    period: '2018 – 2024',
    dot: 'bg-amber-400',
    badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20',
    highlightColor: 'text-amber-500 dark:text-gold',
    cardBorder: 'border-gray-100 dark:border-amber-500/10 dark:hover:border-amber-500/20',
    metricBg: 'bg-amber-50/60 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20',
    activities: [
      { icon: '🏭', name: 'Tata Steel — Portal of Purpose', role: 'CSR Volunteer', highlight: '70+ hours across 4 CSR domains' },
      { icon: '🇮🇳', name: 'NSS — National Service Scheme', role: 'Volunteer', highlight: '120+ hours of community service' },
    ],
  },
]

export default function Extracurriculars() {
  return (
    <section id="activities" className="bg-white dark:bg-navy-800 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader number="05" label="// beyond_the_work" icon={Users} title="Leadership & Community" />

        <div className="space-y-10">
          {groups.map((group, gi) => (
            <FadeIn key={group.institution} delay={gi * 60}>
              <div>
                {/* Institution header */}
                <div className="flex items-center gap-3 mb-4 pl-1">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${group.dot}`} />
                  <h3 className="font-display text-sm font-bold text-gray-900 dark:text-slate-100">
                    {group.institution}
                  </h3>
                  <span className={`font-mono text-[0.58rem] tracking-wider px-2 py-0.5 rounded border ${group.badge}`}>
                    {group.period}
                  </span>
                </div>

                {/* Activity cards — 3 col */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-5">
                  {group.activities.map((activity, ai) => (
                    <FadeIn key={activity.name} delay={gi * 60 + ai * 35}>
                      <div className={`bg-slate-50 dark:bg-navy-700 border rounded-xl p-3.5 card-glow flex flex-col h-full ${group.cardBorder}`}>
                        {/* Icon + Name + Role */}
                        <div className="flex items-start gap-2.5 mb-3">
                          <span className="text-lg flex-shrink-0 mt-0.5">{activity.icon}</span>
                          <div className="min-w-0">
                            <h4 className="text-[0.72rem] font-bold text-gray-900 dark:text-slate-100 leading-snug">
                              {activity.name}
                            </h4>
                            <span className={`font-mono text-[0.55rem] tracking-wider px-1.5 py-0.5 rounded mt-1.5 inline-block border ${group.badge}`}>
                              {activity.role}
                            </span>
                          </div>
                        </div>

                        {/* Highlight */}
                        <div className={`mt-auto rounded-lg px-2.5 py-2 border ${group.metricBg}`}>
                          <p className="text-[0.65rem] text-gray-700 dark:text-slate-300 font-medium leading-snug">
                            <span className={`font-bold ${group.highlightColor}`}>↗ </span>
                            {activity.highlight}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
