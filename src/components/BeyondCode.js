import FadeIn from './FadeIn'

const interests = [
  {
    icon: '🎬',
    title: 'Animated Films',
    desc: 'Studio Ghibli, Pixar, anime films. Spirited Away is a personal favorite — storytelling that feels alive.',
    bg: 'bg-pink-50 dark:bg-pink-950/20',
    border: 'border-pink-100 dark:border-pink-900/30',
    iconBg: 'bg-pink-100 dark:bg-pink-900/40',
  },
  {
    icon: '🎮',
    title: 'Video Games',
    desc: 'Valorant, CS2, FIFA. Competitive games, quick decision-making, and the thrill of ranked play.',
    bg: 'bg-violet-50 dark:bg-violet-950/20',
    border: 'border-violet-100 dark:border-violet-900/30',
    iconBg: 'bg-violet-100 dark:bg-violet-900/40',
  },
  {
    icon: '⚽',
    title: 'Football & Tennis',
    desc: "Passionate sports fan. VARLite was born from this love of the beautiful game — engineering meets passion.",
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
    border: 'border-emerald-100 dark:border-emerald-900/30',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
  },
  {
    icon: '🤖',
    title: 'Robotics & Sci-Fi',
    desc: 'Fascinated by autonomous systems and the future of human-machine interaction. Sci-fi keeps the dreams big.',
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    border: 'border-blue-100 dark:border-blue-900/30',
    iconBg: 'bg-blue-100 dark:bg-blue-900/40',
  },
]

export default function BeyondCode() {
  return (
    <section id="beyond" className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-950/10 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
              When I&apos;m Not Training Models
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Beyond the Code
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full mx-auto" />
            <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              When I&apos;m not building AI systems, you&apos;ll find me lost in a Studio Ghibli film,
              grinding ranked in Valorant, or watching football. I believe great craft —
              whether in anime, competitive games, or sports — shares something with great engineering:
              it&apos;s all about precision, teamwork, and experiences that feel alive.
            </p>
          </div>
        </FadeIn>

        {/* Interest cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interests.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div
                className={`${item.bg} ${item.border} border rounded-2xl p-5 hover:shadow-md dark:hover:shadow-gray-900/40 transition-all duration-300 hover:-translate-y-1 cursor-default`}
              >
                {/* Icon */}
                <div
                  className={`${item.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
