import Link from 'next/link'
import TechLayout from '../techLayout'

const generals = [
  {
    name: 'Who should target this?',
    content: [
      'Passionate about data, AI, and machine learning.',
      'Curious about extracting insights from data and building intelligent systems.',
      'Interested in statistics, probability, and coding.',
      'Enjoy working with datasets, models, and experimenting with algorithms.',
      'Have strong analytical thinking and problem-solving skills.',
      'Keen to be part of the AI revolution shaping the future.'
    ],
    id: 0
  },
  {
    name: 'What it demands?',
    content: [
      'Solid foundation in math, especially linear algebra, calculus, and statistics.',
      'Programming skills in Python or R, knowledge of libraries like pandas, NumPy, scikit-learn, TensorFlow, or PyTorch.',
      'Understanding of ML algorithms, data wrangling, and visualization.',
      'Curiosity and perseverance to tune models and analyze results.',
      'Ability to work on noisy and unstructured data.'
    ],
    id: 1
  },
  {
    name: 'Prep Strategy',
    content: [
      'Learn basics of Python programming and data handling.',
      'Study probability, statistics, and linear algebra fundamentals.',
      'Take online courses on ML and AI (Coursera, fast.ai, etc.).',
      'Practice building projects with datasets (Kaggle competitions, mini projects).',
      'Focus on understanding algorithms conceptually, not just coding.',
      'Prepare to explain projects and concepts clearly in interviews.'
    ],
    id: 2
  },
  {
    name: 'What can you do in summers?',
    content: [
      'Start with Python and libraries like pandas and matplotlib.',
      'Learn and practice basic ML algorithms (regression, classification).',
      'Work on small projects or Kaggle challenges to build portfolio.',
      'Follow recent AI/ML trends, research papers, blogs.',
      'Build a Github repo with your data projects.',
      'Join AI/ML communities and participate in discussions.'
    ],
    id: 3
  },
  {
    name: 'Opportunities at IIT KGP',
    content: [
      'Data Scientist, Data Analyst, ML Engineer roles.',
      'Growing demand in placements for AI-ML profiles due to AI boom.',
      'Internships less frequent but valuable if secured.',
      'Many companies look for candidates with AI/ML skills on CV.',
      'Campus clubs and research groups offer projects and mentorship.'
    ],
    id: 4
  },
  {
    name: 'Additional Points',
    content: [
      'Emphasize the importance of communication skills to explain data-driven insights.',
      'Keep updated with ethical AI practices and data privacy concerns.',
      'Learning how to deploy ML models and basic cloud knowledge is a plus.',
      'Be patient — real-world data problems can be messy and challenging.'
    ],
    id: 5
  },
];

const steps = [
  {
    name: "Step 1: Learn python fundamentals",
    content: [
      "Variables, data types (int, float, str, bool)",
      "Lists, tuples, dictionaries, sets",
      "Conditionals (if, else, elif)",
      "Loops (for, while)",
      "Functions",
      "Exception handling",
      "Basic I/O (file reading, writing)"
    ],
    id: 0
  },
  {
    name: "Step 2: Intermediate python + key libraries",
    content: [
      "List comprehensions",
      "Lambda functions",
      "Object-Oriented Programming (OOP)",
      "Working with CSVs, JSON, Excel",
      "Data cleaning and preprocessing",
      "Key libraries - numPy, Pandas, Matplotlib/Seaborn, Scikit-learn",
      "Do small data analysis projects"
    ],
    id: 1
  },
  {
    name: "Step 3: Statistics, math and data science foundation",
    content: [
      "Descriptive stats: mean, median, mode, variance, std dev",
      "Probability: basics, distributions",
      "Linear algebra: vectors, matrices, dot product",
      "Calculus: gradients (just basics!)",
      "Data distributions, skewness, kurtosis",
      "Correlation vs causation"
    ],
    id: 2
  },
  {
    name: "Step 4: Maching learning with python",
    content: [
      "Supervised learning: Regression (Linear, Lasso, Ridge), Classification (KNN, SVM, Logistic Regression, Decision Trees)",
      "Unsupervised learning: Clustering (KMeans, DBSCAN), Dimensionality reduction (PCA, t-SNE)",
      "Model Evaluation (accuracy, precision, recall, F1, ROC)",
      "Key Libraries - Scikit-learn, XGBoost, joblib",
      "Do projects - predict housing prices, classify handwritten digits, sentiment analysis"
    ],
    id: 3
  },
  {
    name: "Step 5: Deep learning and AI",
    content: [
      "TensorFlow or PyTorch (choose one, PyTorch is more beginner friendly",
      "Neural network basics (activation functions, forward pass, backpropagation)",
      "CNNs (for images)",
      "RNNs / LSTMs (for sequences like time series or text)",
      "Transformers & Attention (basics only — use high-level libs)",
      "Afterwards, do projects - movie recommendation system, object detection system, etc."
    ],
    id: 4
  }
]

export default function DataProfile() {
  return (
    <div className='text-center min-h-screen text-white py-10 px-6'>
      <h1 className="text-6xl font-bold h-[200px] m-10 text-center text-[#ffd700]">Data Profile</h1>
      <TechLayout generals={generals} steps={steps} />
      <div className="mt-8 text-left">
        <Link href="/profiles/tech" className="text-yellow-300 underline hover:no-underline">
          ← Back to Tech
        </Link>
      </div>
    </div>
  )
} 