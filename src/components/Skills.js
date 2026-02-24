import FadeIn from './FadeIn'

const skillGroups = [
  {
    category: 'Languages',
    icon: '💻',
    color: 'bg-blue-600',
    pills: 'bg-blue-50 text-blue-800 border-blue-100 hover:bg-blue-100',
    skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'C#', 'R', 'MATLAB', 'SQL', 'Bash'],
  },
  {
    category: 'AI/ML & Deep Learning',
    icon: '🧠',
    color: 'bg-purple-600',
    pills: 'bg-purple-50 text-purple-800 border-purple-100 hover:bg-purple-100',
    skills: [
      'PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'XGBoost', 'Hugging Face',
      'Gymnasium', 'CNNs', 'RNNs', 'Transformers (BERT · ViT · LECSFormer)',
      'VAEs', 'Diffusion Models', 'RL (PPO · DQN · A3C)',
      'Feature Engineering', 'Hyperparameter Tuning', 'A/B Testing',
    ],
  },
  {
    category: 'GenAI & LLMs',
    icon: '✨',
    color: 'bg-violet-600',
    pills: 'bg-violet-50 text-violet-800 border-violet-100 hover:bg-violet-100',
    skills: [
      'LangChain', 'LangGraph', 'RAG', 'LoRA', 'QLoRA', 'Prompt Engineering', 'MCP',
      'OpenAI API', 'Gemini API', 'Claude API',
      'Pinecone', 'Weaviate', 'Elasticsearch (Vector)',
    ],
  },
  {
    category: 'Computer Vision & Robotics',
    icon: '🤖',
    color: 'bg-emerald-600',
    pills: 'bg-emerald-50 text-emerald-800 border-emerald-100 hover:bg-emerald-100',
    skills: [
      'OpenCV', 'YOLOv8', 'TensorRT', 'ONNX', 'CUDA', 'CVAT',
      'ROS2', 'Gazebo', 'Isaac Sim', 'RViz2', 'MoveIt', 'PCL',
      'NVIDIA Jetson', 'Raspberry Pi', 'Arduino',
      'LiDAR', 'IMU', 'Stereo Vision', 'Camera Calibration', 'PID Control',
    ],
  },
  {
    category: 'Data Engineering & Analytics',
    icon: '📊',
    color: 'bg-orange-500',
    pills: 'bg-orange-50 text-orange-800 border-orange-100 hover:bg-orange-100',
    skills: [
      'PySpark', 'Spark MLlib', 'Spark SQL', 'Hadoop HDFS', 'MapReduce',
      'Kafka', 'dbt', 'ETL/ELT Pipelines', 'Parquet',
      'Pandas', 'NumPy', 'SciPy', 'statsmodels',
      'Hypothesis Testing', 'Time Series Analysis',
    ],
  },
  {
    category: 'Databases & Visualization',
    icon: '🗄️',
    color: 'bg-amber-600',
    pills: 'bg-amber-50 text-amber-800 border-amber-100 hover:bg-amber-100',
    skills: [
      'PostgreSQL', 'MySQL', 'SQL Server', 'Oracle',
      'MongoDB', 'Elasticsearch', 'Redis',
      'Snowflake', 'Databricks',
      'Tableau', 'PowerBI', 'matplotlib', 'seaborn', 'Plotly',
    ],
  },
  {
    category: 'Cloud, MLOps & DevOps',
    icon: '☁️',
    color: 'bg-cyan-600',
    pills: 'bg-cyan-50 text-cyan-800 border-cyan-100 hover:bg-cyan-100',
    skills: [
      'AWS (SageMaker · S3 · EC2)', 'GCP', 'Azure',
      'Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'GitHub Actions',
      'FastAPI', 'Flask', 'RESTful APIs', 'Model Serving',
      'nginx', 'Linux', 'Git', 'Postman', 'VS Code',
    ],
  },
  {
    category: 'Web & Full-Stack',
    icon: '🌐',
    color: 'bg-indigo-600',
    pills: 'bg-indigo-50 text-indigo-800 border-indigo-100 hover:bg-indigo-100',
    skills: [
      'ReactJS', 'Node.js', 'Express.js', '.NET',
      'HTML/CSS', 'GraphQL', 'JWT',
      'Google Maps API', 'Microsoft SQL',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              My Toolkit
            </h2>
            <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full" />
          </div>
        </FadeIn>

        <div className="space-y-0">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 60}>
              <div className="py-6 flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Category label */}
                <div className="flex-shrink-0 sm:w-56">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 ${group.color} rounded-lg flex items-center justify-center text-sm shadow-sm`}
                    >
                      {group.icon}
                    </div>
                    <span className="text-sm font-bold text-gray-900 leading-tight">
                      {group.category}
                    </span>
                  </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors cursor-default ${group.pills}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {gi < skillGroups.length - 1 && (
                <div className="border-t border-gray-100" />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
