'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import { Github, ExternalLink } from 'lucide-react'

const filters = ['All', 'CV', 'NLP & LLMs', 'RL', 'Data', 'Full-Stack']

const projects = [
  {
    title: 'Safety-Constrained Insulin Dosing RL Agent',
    subtitle: 'Reinforcement Learning · Healthcare AI',
    filter: 'RL',
    description:
      'Built a custom Gymnasium environment over an FDA-validated T1D simulator and benchmarked 5 RL agents (DQN, PPO, SAC + constrained variants) across 3 patient cohorts. Recovered a collapsed PPO policy from 47% → 73% time-in-range via Lagrangian safety constraints.',
    metric: '76.5% safe-range adherence — matching clinician baseline · 5 agents benchmarked',
    tech: ['PyTorch', 'Stable-Baselines3', 'Gymnasium', 'Simglucose', 'Streamlit', 'Hugging Face'],
    github: 'https://github.com/swarat17/insulin-rl-agent',
    accentBar: 'from-lime-500 to-green-600',
    tag: 'bg-lime-50 text-lime-700 border-lime-200 dark:bg-lime-950/30 dark:text-lime-300 dark:border-lime-500/20',
    metric_accent: 'text-lime-600 dark:text-lime-400',
  },
  {
    title: 'RL-Guided Curriculum Learning Pipeline',
    subtitle: 'Deep Learning · NLP',
    filter: 'RL',
    description:
      'Novel curriculum learning system using a PPO reinforcement learning agent to adaptively order training data for LLM-based text classification. Built a custom Gymnasium environment with BERT embedding analysis.',
    metric: '~60% faster convergence through online difficulty estimation and easy-to-hard ordering',
    tech: ['PyTorch', 'Hugging Face', 'Gymnasium', 'BERT', 'PPO'],
    github: 'https://github.com/swarat17/rl-driven-text-curriculum',
    accentBar: 'from-blue-500 to-indigo-600',
    tag: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-500/20',
    metric_accent: 'text-blue-600 dark:text-blue-400',
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
    accentBar: 'from-emerald-500 to-teal-600',
    tag: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-500/20',
    metric_accent: 'text-emerald-600 dark:text-emerald-400',
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
    accentBar: 'from-orange-500 to-red-500',
    tag: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:border-orange-500/20',
    metric_accent: 'text-orange-600 dark:text-orange-400',
  },
  {
    title: 'Business Intelligence Assistant',
    subtitle: 'RAG · NLP · LLM',
    filter: 'NLP & LLMs',
    description:
      'RAG-based competitor analysis assistant with semantic search, multi-language translation, and an RLHF feedback loop for prioritizing high-value business insights.',
    metric: '6-node LangGraph pipeline · 400+ articles indexed · semantic Q&A with cited sources',
    tech: ['Supabase pgvector', 'Sentence-BERT', 'FastAPI', 'LangChain', 'LangGraph', 'Gemini API'],
    github: 'https://github.com/swarat17/BI-Assistant',
    accentBar: 'from-purple-500 to-violet-600',
    tag: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-500/20',
    metric_accent: 'text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Research Synthesis & Hypothesis Agent',
    subtitle: 'Multi-Agent · LLM · Research AI',
    filter: 'NLP & LLMs',
    description:
      'Autonomous 7-node multi-agent pipeline that fetches papers from ArXiv, synthesizes findings, detects contradictions with severity ratings, and generates novel research hypotheses — with real-time cost tracking.',
    metric: '~$0.035/query for 10 papers · 3 scored hypotheses · serverless AWS Lambda deployment',
    tech: ['GPT-4o-mini', 'Claude Sonnet', 'LangGraph', 'Pinecone', 'FastAPI', 'AWS Lambda'],
    github: 'https://github.com/swarat17/research-synthesis-agent',
    accentBar: 'from-sky-500 to-teal-600',
    tag: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/30 dark:text-sky-300 dark:border-sky-500/20',
    metric_accent: 'text-sky-600 dark:text-sky-400',
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
    accentBar: 'from-cyan-500 to-blue-600',
    tag: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-500/20',
    metric_accent: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    title: 'FBS Design Context AI',
    subtitle: 'NLP · Fine-tuning · LLM Research',
    filter: 'NLP & LLMs',
    description:
      'Implemented the Function-Behavior-Structure ontology for AI-assisted design decomposition. Fine-tuned 3 task-specific Flan-T5-Small models, validating specialized models outperform general-purpose.',
    metric: '92% average ROUGE-L improvement across all three task-specific models',
    tech: ['PyTorch', 'Flan-T5-Small', 'Gradio', 'Fine-tuning', 'Gemini API'],
    github: 'https://github.com/swarat17/fbs-design-ai',
    accentBar: 'from-rose-500 to-pink-600',
    tag: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-500/20',
    metric_accent: 'text-rose-600 dark:text-rose-400',
  },
  {
    title: 'Smart Bus Tracking System',
    subtitle: 'Full-Stack · Production Deployment',
    filter: 'Full-Stack',
    description:
      'Enterprise-grade web application serving 25,000+ users at Tata Steel with real-time GPS bus tracking and customized route maps generated from live routes.',
    metric: 'Deployed in production · Serving 25,000+ Tata Steel employees',
    tech: ['ReactJS', 'Node.js', 'Express.js', 'Google Maps API', 'Microsoft SQL'],
    github: 'https://github.com/swarat17/bus_mngmt',
    accentBar: 'from-amber-500 to-yellow-500',
    tag: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-500/20',
    metric_accent: 'text-amber-600 dark:text-amber-400',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.filter === activeFilter)

  return (
    <section id="projects" className="bg-slate-50 dark:bg-navy-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn>
          <div className="mb-10">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-amber-600 dark:text-gold uppercase mb-4 cursor-blink">
              // selected_work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">
              What I&apos;ve Built
            </h2>
            <div className="mt-4 line-fade w-16" />
          </div>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn delay={60}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-mono text-[0.65rem] tracking-[0.12em] uppercase px-4 py-2 rounded-md border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-navy-700 text-gray-500 dark:text-slate-400 border-gray-200 dark:border-blue-500/10 hover:border-blue-400/40 dark:hover:border-blue-400/30 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <FadeIn key={project.title} delay={i * 55}>
              <div className="group bg-white dark:bg-navy-700 border border-gray-100 dark:border-blue-500/10 rounded-xl overflow-hidden flex flex-col h-full card-glow dark:hover:border-blue-500/25">
                {/* Accent bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${project.accentBar}`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Tag */}
                  <span className={`font-mono text-[0.6rem] tracking-wider px-2.5 py-1 rounded-md border self-start mb-3 ${project.tag}`}>
                    {project.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-sm font-bold text-gray-900 dark:text-slate-100 leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Metric */}
                  <div className="bg-slate-50 dark:bg-navy-900/60 border border-gray-100 dark:border-blue-500/10 rounded-lg px-3 py-2 mb-4">
                    <p className="text-[0.7rem] text-gray-700 dark:text-slate-300 leading-snug">
                      <span className={`font-bold ${project.metric_accent}`}>↗ </span>
                      {project.metric}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[0.58rem] tracking-wide bg-gray-100 dark:bg-navy-600 text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-blue-500/10 px-2 py-0.5 rounded"
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
                    className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-wider text-gray-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-auto group/link uppercase"
                  >
                    <Github size={13} />
                    View on GitHub
                    <ExternalLink size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
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
