'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { Cpu } from 'lucide-react'

const skillGroups = [
  {
    category: 'Languages',
    label: '01',
    color: 'text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    activeBg: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/25',
    pills: 'border-blue-200 text-blue-800 bg-blue-50 dark:border-blue-500/20 dark:text-blue-300 dark:bg-blue-950/50',
    skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'C#', 'R', 'MATLAB', 'SQL', 'Bash'],
  },
  {
    category: 'AI/ML & Deep Learning',
    label: '02',
    color: 'text-violet-600 dark:text-violet-400',
    dot: 'bg-violet-500',
    activeBg: 'bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/25',
    pills: 'border-violet-200 text-violet-800 bg-violet-50 dark:border-violet-500/20 dark:text-violet-300 dark:bg-violet-950/50',
    skills: [
      'PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'XGBoost', 'Hugging Face',
      'Gymnasium', 'Stable-Baselines3', 'CNNs', 'RNNs', 'Transformers (BERT · ViT · LECSFormer)',
      'VAEs', 'Diffusion Models', 'RL (PPO · DQN · SAC · A3C)', 'Safe RL / Lagrangian Constraints',
      'Feature Engineering', 'Hyperparameter Tuning', 'A/B Testing',
    ],
  },
  {
    category: 'GenAI & LLMs',
    label: '03',
    color: 'text-purple-600 dark:text-purple-400',
    dot: 'bg-purple-500',
    activeBg: 'bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/25',
    pills: 'border-purple-200 text-purple-800 bg-purple-50 dark:border-purple-500/20 dark:text-purple-300 dark:bg-purple-950/50',
    skills: [
      'LangChain', 'LangGraph', 'RAG', 'LoRA', 'QLoRA', 'Prompt Engineering', 'MCP',
      'OpenAI API', 'Gemini API', 'Claude API',
      'Pinecone', 'Weaviate', 'Elasticsearch (Vector)',
    ],
  },
  {
    category: 'Computer Vision & Robotics',
    label: '04',
    color: 'text-emerald-600 dark:text-emerald-400',
    dot: 'bg-emerald-500',
    activeBg: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25',
    pills: 'border-emerald-200 text-emerald-800 bg-emerald-50 dark:border-emerald-500/20 dark:text-emerald-300 dark:bg-emerald-950/50',
    skills: [
      'OpenCV', 'YOLOv8', 'TensorRT', 'ONNX', 'CUDA', 'CVAT',
      'ROS2', 'Gazebo', 'Isaac Sim', 'RViz2', 'MoveIt', 'PCL',
      'NVIDIA Jetson', 'Raspberry Pi', 'Arduino',
      'LiDAR', 'IMU', 'Stereo Vision', 'Camera Calibration', 'PID Control',
    ],
  },
  {
    category: 'Data Engineering & Analytics',
    label: '05',
    color: 'text-orange-600 dark:text-orange-400',
    dot: 'bg-orange-500',
    activeBg: 'bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/25',
    pills: 'border-orange-200 text-orange-800 bg-orange-50 dark:border-orange-500/20 dark:text-orange-300 dark:bg-orange-950/50',
    skills: [
      'PySpark', 'Spark MLlib', 'Spark SQL', 'Hadoop HDFS', 'MapReduce',
      'Kafka', 'dbt', 'ETL/ELT Pipelines', 'Parquet',
      'Pandas', 'NumPy', 'SciPy', 'statsmodels',
      'Hypothesis Testing', 'Time Series Analysis',
    ],
  },
  {
    category: 'Databases & Visualization',
    label: '06',
    color: 'text-amber-600 dark:text-gold',
    dot: 'bg-amber-500',
    activeBg: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/25',
    pills: 'border-amber-200 text-amber-800 bg-amber-50 dark:border-gold/25 dark:text-gold dark:bg-amber-950/50',
    skills: [
      'PostgreSQL', 'MySQL', 'SQL Server', 'Oracle',
      'MongoDB', 'Elasticsearch', 'Redis', 'Supabase',
      'Snowflake', 'Databricks',
      'Tableau', 'PowerBI', 'Looker Studio', 'matplotlib', 'seaborn', 'Plotly', 'Streamlit', 'Gradio',
    ],
  },
  {
    category: 'Cloud, MLOps & DevOps',
    label: '07',
    color: 'text-cyan-600 dark:text-cyan-400',
    dot: 'bg-cyan-500',
    activeBg: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/25',
    pills: 'border-cyan-200 text-cyan-800 bg-cyan-50 dark:border-cyan-500/20 dark:text-cyan-300 dark:bg-cyan-950/50',
    skills: [
      'AWS (SageMaker · S3 · EC2 · Lambda)', 'GCP', 'Azure',
      'Docker', 'Kubernetes', 'MLflow', 'Prometheus', 'Grafana', 'CI/CD', 'GitHub Actions',
      'FastAPI', 'Flask', 'RESTful APIs', 'Model Serving',
      'nginx', 'Linux', 'Git', 'Postman', 'VS Code',
    ],
  },
  {
    category: 'Web & Full-Stack',
    label: '08',
    color: 'text-indigo-600 dark:text-indigo-400',
    dot: 'bg-indigo-500',
    activeBg: 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/25',
    pills: 'border-indigo-200 text-indigo-800 bg-indigo-50 dark:border-indigo-500/20 dark:text-indigo-300 dark:bg-indigo-950/50',
    skills: [
      'ReactJS', 'Node.js', 'Express.js', '.NET',
      'HTML/CSS', 'GraphQL', 'JWT',
      'Google Maps API', 'Microsoft SQL',
    ],
  },
]

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = skillGroups[activeIdx]

  return (
    <section id="skills" className="bg-slate-50 dark:bg-navy-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader number="04" label="// tech_stack" icon={Cpu} title="My Toolkit" />

        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-0 bg-white dark:bg-navy-700 border border-gray-100 dark:border-blue-500/10 rounded-2xl overflow-hidden shadow-sm">

            {/* Left panel — category list */}
            <div className="sm:w-56 flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-blue-500/10 overflow-x-auto sm:overflow-x-visible">
              <div className="flex sm:flex-col">
                {skillGroups.map((g, i) => (
                  <button
                    key={g.category}
                    onClick={() => setActiveIdx(i)}
                    className={`group relative flex items-center gap-2.5 px-4 py-3 text-left transition-all duration-150 flex-shrink-0 sm:flex-shrink border-r sm:border-r-0 sm:border-b border-gray-100 dark:border-blue-500/8 last:border-0
                      ${activeIdx === i
                        ? g.activeBg
                        : 'hover:bg-gray-50 dark:hover:bg-navy-600/50'
                      }`}
                  >
                    {/* Active indicator bar */}
                    {activeIdx === i && (
                      <span className={`absolute left-0 top-0 bottom-0 w-0.5 hidden sm:block ${g.dot}`} />
                    )}
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${g.dot} ${activeIdx === i ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`} />
                    <div className="min-w-0">
                      <div className={`font-mono text-[0.55rem] tracking-widest ${activeIdx === i ? g.color : 'text-gray-400 dark:text-slate-400'}`}>
                        {g.label}
                      </div>
                      <div className={`text-[0.7rem] font-semibold leading-tight truncate ${activeIdx === i ? 'text-gray-900 dark:text-slate-100' : 'text-gray-600 dark:text-slate-300 group-hover:text-gray-800 dark:group-hover:text-slate-200'}`}>
                        {g.category}
                      </div>
                    </div>
                    <div className={`ml-auto flex-shrink-0 font-mono text-[0.55rem] px-1.5 py-0.5 rounded ${activeIdx === i ? g.color : 'text-gray-400 dark:text-slate-500'}`}>
                      {g.skills.length}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right panel — pills */}
            <div className="flex-1 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-2 rounded-full ${active.dot}`} />
                <h3 className={`font-display text-sm font-bold ${active.color}`}>{active.category}</h3>
                <span className={`font-mono text-[0.58rem] px-2 py-0.5 rounded border ${active.pills} ml-auto`}>
                  {active.skills.length} skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {active.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-[0.68rem] font-medium px-2.5 py-1 rounded-md border transition-colors cursor-default ${active.pills}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
