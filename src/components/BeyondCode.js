import FadeIn from './FadeIn'

const interests = [
  {
    icon: '🎬',
    title: 'Animated Films',
    desc: 'Studio Ghibli, Pixar, anime films. Spirited Away is a personal favorite — storytelling that feels alive.',
    border: 'border-pink-200 dark:border-pink-500/15 dark:hover:border-pink-500/30',
    iconBg: 'bg-pink-50 dark:bg-pink-500/10',
    labelColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: '🎮',
    title: 'Video Games',
    desc: 'Valorant, CS2, FIFA. Competitive games, quick decision-making, and the thrill of ranked play.',
    border: 'border-violet-200 dark:border-violet-500/15 dark:hover:border-violet-500/30',
    iconBg: 'bg-violet-50 dark:bg-violet-500/10',
    labelColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: '⚽',
    title: 'Football & Tennis',
    desc: "Passionate sports fan. VARLite was born from this love of the beautiful game — engineering meets passion.",
    border: 'border-emerald-200 dark:border-emerald-500/15 dark:hover:border-emerald-500/30',
    iconBg: 'bg-emerald-50 dark:bg-emerald-500/10',
    labelColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: '🤖',
    title: 'Robotics & Sci-Fi',
    desc: 'Fascinated by autonomous systems and the future of human-machine interaction. Sci-fi keeps the dreams big.',
    border: 'border-blue-200 dark:border-blue-500/15 dark:hover:border-blue-500/30',
    iconBg: 'bg-blue-50 dark:bg-blue-500/10',
    labelColor: 'text-blue-600 dark:text-blue-400',
  },
]

export default function BeyondCode() {
  return (
    <section
      id="beyond"
      className="bg-slate-50 dark:bg-navy-900 py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-amber-600 dark:text-gold uppercase mb-4 cursor-blink">
              // when_not_training_models
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">
              Beyond the Code
            </h2>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
            <p className="mt-6 text-sm text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              When I&apos;m not building AI systems, you&apos;ll find me lost in a Studio Ghibli film,
              grinding ranked in Valorant, or watching football. Great craft — in anime, competitive
              games, or sports — shares something with great engineering: precision, teamwork, and
              experiences that feel alive.
            </p>
          </div>
        </FadeIn>

        {/* Interest cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <FadeIn key={item.title} delay={i * 75}>
              <div className={`bg-white dark:bg-navy-700 border rounded-xl p-5 card-glow flex flex-col ${item.border}`}>
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4 ${item.iconBg}`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className={`font-display text-sm font-bold mb-2 ${item.labelColor}`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
