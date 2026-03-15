import FadeIn from './FadeIn'

const skillGroups = [
  {
    category: 'Languages',
    label: '01',
    color: 'text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    pills: 'border-blue-200 text-blue-800 bg-blue-50 dark:border-blue-500/20 dark:text-blue-300 dark:bg-blue-950/50',
    skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'C#', 'R', 'MATLAB', 'SQL', 'Bash'],
  },
  {
    category: 'AI/ML & Deep Learning',
    label: '02',
    color: 'text-violet-600 dark:text-violet-400',
    dot: 'bg-violet-500',
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
    pills: 'border-cyan-200 text-cyan-800 bg-cyan-50 dark:border-cyan-500/20 dark:text-cyan-300 dark:bg-cyan-950/50',
    skills: [
      'AWS (SageMaker · S3 · EC2 · Lambda)', 'GCP', 'Azure',
      'Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'GitHub Actions',
      'FastAPI', 'Flask', 'RESTful APIs', 'Model Serving',
      'nginx', 'Linux', 'Git', 'Postman', 'VS Code',
    ],
  },
  {
    category: 'Web & Full-Stack',
    label: '08',
    color: 'text-indigo-600 dark:text-indigo-400',
    dot: 'bg-indigo-500',
    pills: 'border-indigo-200 text-indigo-800 bg-indigo-50 dark:border-indigo-500/20 dark:text-indigo-300 dark:bg-indigo-950/50',
    skills: [
      'ReactJS', 'Node.js', 'Express.js', '.NET',
      'HTML/CSS', 'GraphQL', 'JWT',
      'Google Maps API', 'Microsoft SQL',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-navy-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-amber-600 dark:text-gold uppercase mb-4 cursor-blink">
              // tech_stack
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">
              My Toolkit
            </h2>
            <div className="mt-4 line-fade w-16" />
          </div>
        </FadeIn>

        <div className="space-y-0">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 50}>
              <div className="py-5 flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Category */}
                <div className="flex-shrink-0 sm:w-52">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${group.dot}`} />
                    <span className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-gray-500 dark:text-slate-400">
                      {group.label}
                    </span>
                    <span className="text-xs font-semibold text-gray-800 dark:text-slate-200 leading-tight">
                      {group.category}
                    </span>
                  </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[0.68rem] font-medium px-2.5 py-1 rounded-md border transition-colors cursor-default ${group.pills}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {gi < skillGroups.length - 1 && (
                <div className="border-t border-gray-100 dark:border-blue-500/8" />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
