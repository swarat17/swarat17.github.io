import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Sparkles } from 'lucide-react'

const interests = [
  {
    icon: '🎬',
    title: 'Animated Films',
    quip: "Spirited Away lives rent-free in my head.",
    tags: ['Studio Ghibli', 'Pixar', 'Anime'],
    border: 'border-pink-200 dark:border-pink-500/15 dark:hover:border-pink-500/30',
    iconBg: 'bg-pink-50 dark:bg-pink-500/10',
    labelColor: 'text-pink-600 dark:text-pink-400',
    tagStyle: 'bg-pink-50 border-pink-200 text-pink-700 dark:bg-pink-500/10 dark:border-pink-500/20 dark:text-pink-300',
  },
  {
    icon: '🎮',
    title: 'Video Games',
    quip: "Radiant or bust. Currently stuck in Diamond.",
    tags: ['Valorant', 'CS2', 'FIFA'],
    border: 'border-violet-200 dark:border-violet-500/15 dark:hover:border-violet-500/30',
    iconBg: 'bg-violet-50 dark:bg-violet-500/10',
    labelColor: 'text-violet-600 dark:text-violet-400',
    tagStyle: 'bg-violet-50 border-violet-200 text-violet-700 dark:bg-violet-500/10 dark:border-violet-500/20 dark:text-violet-300',
  },
  {
    icon: '⚽',
    title: 'Sports Fanatic',
    quip: "Built a VAR system because I had opinions about offsides.",
    tags: ['Football', 'Tennis', 'F1'],
    border: 'border-emerald-200 dark:border-emerald-500/15 dark:hover:border-emerald-500/30',
    iconBg: 'bg-emerald-50 dark:bg-emerald-500/10',
    labelColor: 'text-emerald-600 dark:text-emerald-400',
    tagStyle: 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-300',
  },
  {
    icon: '🤖',
    title: 'Robotics & Sci-Fi',
    quip: "HAL 9000 was just poorly prompted.",
    tags: ['Love, Death & Robots', 'Dune', 'Westworld'],
    border: 'border-blue-200 dark:border-blue-500/15 dark:hover:border-blue-500/30',
    iconBg: 'bg-blue-50 dark:bg-blue-500/10',
    labelColor: 'text-blue-600 dark:text-blue-400',
    tagStyle: 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-300',
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
        <SectionHeader number="06" label="// when_not_training_models" icon={Sparkles} title="Beyond the Code" center />
        <FadeIn>
          <p className="-mt-8 mb-10 text-sm text-gray-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed text-center">
            When I&apos;m not building AI systems — Studio Ghibli, ranked Valorant, or football.
          </p>
        </FadeIn>

        {/* Interest cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {interests.map((item, i) => (
            <FadeIn key={item.title} delay={i * 60}>
              <div className={`bg-white dark:bg-navy-700 border rounded-xl p-4 card-glow flex flex-col ${item.border}`}>
                {/* Icon + Title row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xl flex-shrink-0 ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className={`font-display text-sm font-bold leading-tight ${item.labelColor}`}>
                    {item.title}
                  </h3>
                </div>

                {/* Quip */}
                <p className="text-[0.7rem] text-gray-500 dark:text-slate-400 italic leading-snug mb-3">
                  {item.quip}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`font-mono text-[0.6rem] px-2 py-0.5 rounded border ${item.tagStyle}`}>
                      {tag}
                    </span>
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
