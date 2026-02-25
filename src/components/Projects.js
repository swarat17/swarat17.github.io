'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import { Github, ExternalLink } from 'lucide-react'

const filters = ['All', 'CV', 'NLP & LLMs', 'Data', 'Full-Stack']

const projects = [
  {
    title: 'RL-Guided Curriculum Learning Pipeline',
    subtitle: 'Deep Learning · NLP',
    filter: 'NLP & LLMs',
    description:
      'Novel curriculum learning system using a PPO reinforcement learning agent to adaptively order training data for LLM-based text classification. Built a custom Gymnasium environment with BERT embedding analysis.',
    metric: '~60% faster convergence through online difficulty estimation and easy-to-hard ordering',
    tech: ['PyTorch', 'Hugging Face', 'Gymnasium', 'BERT', 'PPO'],
    github: 'https://github.com/swarat17/rl-driven-text-curriculum',
    accent: 'from-blue-500 to-indigo-600',
    accentLight: 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300',
  },
  {
    title: 'VARLite — Real-Time Soccer Offside Detection',
    subtitle: 'Computer Vision · Sports Analytics',
    filter: 'CV',
    description:
      'Real-time offside detection system for single-camera football broadcasts. Features a custom SVD-based vanishing point solver, HSV team classification, and interactive visualization UI.',
    metric: '>20 FPS · 95% accuracy on consumer GPUs · 87.1% mAP50 on SoccerNet-v3',
    tech: ['YOLOv8', 'OpenCV', 'Python', 'SVD', 'Computer Vision'],
    github: 'https://github.com/swarat17/VARLite',
    accent: 'from-emerald-500 to-teal-600',
    accentLight: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300',
  },
  {
    title: 'Yelp Review Analytics Pipeline',
    subtitle: 'Big Data · Distributed ML',
    filter: 'Data',
    description:
      'End-to-end distributed ML pipeline for large-scale Yelp dataset analysis. Includes RandomForest business forecasting, TF-IDF star prediction, and KMeans user segmentation.',
    metric: 'RandomForest RMSE ~1.34 · Scalable Parquet-based storage with full MLlib integration',
    tech: ['PySpark', 'Hadoop HDFS', 'Spark MLlib', 'NLP', 'Parquet'],
    github: 'https://github.com/swarat17/yelp_reviews_analysis',
    accent: 'from-orange-500 to-red-500',
    accentLight: 'bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300',
  },
  {
    title: 'Business Intelligence Assistant',
    subtitle: 'RAG · NLP · LLM',
    filter: 'NLP & LLMs',
    description:
      'RAG-based competitor analysis assistant with semantic search, multi-language translation, and an RLHF feedback loop for prioritizing high-value business insights.',
    metric: '6-node LangGraph pipeline · 400+ articles indexed with 30-day lookback · semantic Q&A with cited sources',
    tech: ['Supabase pgvector', 'Sentence-BERT', 'FastAPI', 'LangChain', 'LangGraph', 'Gemini API', 'Streamlit'],
    github: 'https://github.com/swarat17/BI-Assistant',
    accent: 'from-purple-500 to-violet-600',
    accentLight: 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300',
  },
  {
    title: 'AI-Powered Policy Simulator',
    subtitle: 'Simulation · Generative AI · Full-Stack',
    filter: 'Full-Stack',
    description:
      'Monte Carlo policy simulation platform modeling outcomes across 50,000+ simulated individuals with 500 parallel runs. Integrates Gemini AI for automated equity analysis and real-time visualization.',
    metric: 'Built end-to-end in 24 hours · Real-time AI-generated equity reports',
    tech: ['React', 'Gemini API', 'Monte Carlo', 'Statistical Analysis', 'CI/CD'],
    github: 'https://github.com/swarat17/Ripple',
    accent: 'from-cyan-500 to-blue-600',
    accentLight: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300',
  },
  {
    title: 'FBS Design Context AI',
    subtitle: 'NLP · Fine-tuning · LLM Research',
    filter: 'NLP & LLMs',
    description:
      'Implemented the Function-Behavior-Structure ontology framework from ASME research for AI-assisted design decomposition. Fine-tuned 3 task-specific Flan-T5-Small models, validating specialized models outperform general-purpose.',
    metric: '92% average ROUGE-L improvement across all three task-specific models',
    tech: ['PyTorch', 'Flan-T5-Small', 'Gradio', 'Fine-tuning', 'Gemini API'],
    github: 'https://github.com/swarat17/fbs-design-ai',
    accent: 'from-rose-500 to-pink-600',
    accentLight: 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300',
  },
  {
    title: 'Smart Bus Tracking System',
    subtitle: 'Full-Stack · Production Deployment',
    filter: 'Full-Stack',
    description:
      'Enterprise-grade web application serving 25,000+ users at Tata Steel with real-time GPS bus tracking and customized route maps generated from live routes, improving commute management.',
    metric: 'Deployed in production · Serving 25,000+ Tata Steel employees',
    tech: ['ReactJS', 'Node.js', 'Express.js', 'Google Maps API', 'Microsoft SQL'],
    github: 'https://github.com/swarat17/bus_mngmt',
    accent: 'from-amber-500 to-yellow-500',
    accentLight: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.filter === activeFilter)

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-10">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              What I&apos;ve Built
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full" />
          </div>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn delay={60}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <FadeIn key={project.title} delay={i * 60}>
              <div className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
                {/* Card accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Subtitle */}
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full self-start mb-3 ${project.accentLight}`}>
                    {project.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Key metric */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl px-3 py-2 mb-4 border border-gray-100 dark:border-gray-600">
                    <p className="text-xs text-gray-700 dark:text-gray-200 font-medium leading-snug">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">↗ </span>
                      {project.metric}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-auto group/link"
                  >
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
