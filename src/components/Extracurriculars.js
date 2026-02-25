import FadeIn from './FadeIn'

const groups = [
  {
    institution: 'University at Buffalo',
    period: '2024 – 2025',
    dot: 'bg-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    highlightColor: 'text-blue-600',
    activities: [
      {
        icon: '🚀',
        name: 'NASA Lunabotics Competition Team',
        role: 'Software Engineer',
        description:
          'Spearheading autonomous navigation for lunar rover using ROS2, SLAM Toolbox, and Navigation2. Led STEM outreach at local high schools.',
        highlight: 'Best Presentation Award — First Year Team',
      },
      {
        icon: '🤝',
        name: 'UB Future Alumni Network (UB FAN)',
        role: 'Future Alumni Leader',
        description:
          'Fostering connections between current students and UB\'s 307,000+ alumni network. Organizing True Blue Homecoming Weekend, Game Night, and Accepted Students Day.',
        highlight: '307,000+ alumni network · Events & advocacy',
      },
      {
        icon: '🎾',
        name: 'UB Aces Club Tennis Team',
        role: 'Competitive Player',
        description:
          'Competing in USTA tournaments against Syracuse, Cornell, Rochester, Binghamton, and Albany.',
        highlight: '1st Place Doubles USTA Ladder · Qualified for 2024-25 Nationals (Florida)',
      },
      {
        icon: '🌱',
        name: 'Community Service Volunteer',
        role: 'Volunteer',
        description:
          'Participated in UB South Campus neighborhood improvement initiatives including gardening and environmental cleanup.',
        highlight: 'Campus-community relations & sustainable development',
      },
    ],
  },
  {
    institution: 'IIT Hyderabad',
    period: '2018 – 2022',
    dot: 'bg-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    highlightColor: 'text-emerald-600',
    activities: [
      {
        icon: '✈️',
        name: 'Aero Club of IITH',
        role: 'Core Member',
        description:
          'Designing miniature RC models and drones, conducting educational sessions for junior members.',
        highlight: 'RC model & drone design · Junior mentorship',
      },
      {
        icon: '🔐',
        name: 'Kludge: Cyber Security Club',
        role: 'Core Member',
        description:
          'Participating in Capture the Flag competitions and leading cybersecurity awareness initiatives.',
        highlight: 'CTF competitions · Cybersecurity awareness',
      },
      {
        icon: '🔑',
        name: 'Enigma: Cryptography Contest',
        role: 'Senior Organizer',
        description:
          'Designed questions and managed end-to-end execution of a pen-and-paper cryptography contest at Elan & Nvision fest.',
        highlight: '10,000+ participants · Full event execution',
      },
      {
        icon: '🎾',
        name: 'IIT Hyderabad Lawn Tennis',
        role: 'Competitive Player',
        description:
          'Competed in inter-department and General Championship tennis tournaments.',
        highlight: 'Silver Medal · General Championship',
      },
      {
        icon: '🏆',
        name: 'Inter-IIT Tech Meet 2019',
        role: 'Contingent Member',
        description:
          "Represented IITH at the prestigious Inter-IIT Technical competition in Payatu's Infosec CTF.",
        highlight: "Payatu's Infosec CTF · National-level competition",
      },
      {
        icon: '🏎️',
        name: 'Drift King: Model IC Engine Car Race',
        role: 'Junior Organizer',
        description:
          'Managed social media marketing, registration, and track design assistance for the annual race event.',
        highlight: 'Social media · Registration · Track design',
      },
    ],
  },
  {
    institution: 'Community Service',
    period: '2018 – 2024',
    dot: 'bg-amber-500',
    badge: 'bg-amber-50 text-amber-700 border-amber-100',
    highlightColor: 'text-amber-600',
    activities: [
      {
        icon: '🏭',
        name: 'Tata Steel — Portal of Purpose',
        role: 'CSR Volunteer',
        description:
          "Contributed across education, elderly care, environmental sustainability, and community development through Tata Steel's corporate social responsibility initiative.",
        highlight: '70+ hours across 4 CSR domains',
      },
      {
        icon: '🇮🇳',
        name: 'NSS — National Service Scheme',
        role: 'Volunteer',
        description:
          "Participated in India's government-sponsored social program, addressing community needs and developing leadership skills through diverse social initiatives.",
        highlight: '120+ hours of community service',
      },
    ],
  },
]

export default function Extracurriculars() {
  return (
    <section id="activities" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Activities &amp; Societies
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Leadership &amp; Community
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full" />
          </div>
        </FadeIn>

        {/* Institution groups */}
        <div className="space-y-14">
          {groups.map((group, gi) => (
            <FadeIn key={group.institution} delay={gi * 80}>
              <div>
                {/* Institution header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${group.dot}`} />
                  <h3 className="text-base font-bold text-gray-900">{group.institution}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${group.badge}`}
                  >
                    {group.period}
                  </span>
                </div>

                {/* Activity cards */}
                <div className="grid sm:grid-cols-2 gap-4 pl-6">
                  {group.activities.map((activity, ai) => (
                    <FadeIn key={activity.name} delay={gi * 80 + ai * 50}>
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col h-full">
                        {/* Icon + Name + Role */}
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-xl flex-shrink-0 mt-0.5">{activity.icon}</span>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 leading-tight">
                              {activity.name}
                            </h4>
                            <span
                              className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1.5 inline-block border ${group.badge}`}
                            >
                              {activity.role}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-500 leading-relaxed mb-3 flex-1">
                          {activity.description}
                        </p>

                        {/* Highlight metric */}
                        <div className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
                          <p className="text-xs text-gray-700 font-medium leading-snug">
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
