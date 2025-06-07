import Link from 'next/link'

export default function DataProfile() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-900 to-green-700 rounded-xl shadow-lg text-white font-sans">
      <h1 className="text-4xl font-bold mb-6 text-green-300">📊 Data Profile</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Who should target this? 🤔</h2>
        <p>
          - Passionate about data, AI, and machine learning.<br />
          - Curious about extracting insights from data and building intelligent systems.<br />
          - Interested in statistics, probability, and coding.<br />
          - Enjoy working with datasets, models, and experimenting with algorithms.<br />
          - Have strong analytical thinking and problem-solving skills.<br />
          - Keen to be part of the AI revolution shaping the future.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. What it demands? 🧠</h2>
        <p>
          - Solid foundation in math, especially linear algebra, calculus, and statistics.<br />
          - Programming skills in Python or R, knowledge of libraries like pandas, NumPy, scikit-learn, TensorFlow, or PyTorch.<br />
          - Understanding of ML algorithms, data wrangling, and visualization.<br />
          - Curiosity and perseverance to tune models and analyze results.<br />
          - Ability to work on noisy and unstructured data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Prep Strategy 🎯</h2>
        <p>
          - Learn basics of Python programming and data handling.<br />
          - Study probability, statistics, and linear algebra fundamentals.<br />
          - Take online courses on ML and AI (Coursera, fast.ai, etc.).<br />
          - Practice building projects with datasets (Kaggle competitions, mini projects).<br />
          - Focus on understanding algorithms conceptually, not just coding.<br />
          - Prepare to explain projects and concepts clearly in interviews.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. What can you do in summers? ☀️</h2>
        <p>
          - Start with Python and libraries like pandas and matplotlib.<br />
          - Learn and practice basic ML algorithms (regression, classification).<br />
          - Work on small projects or Kaggle challenges to build portfolio.<br />
          - Follow recent AI/ML trends, research papers, blogs.<br />
          - Build a Github repo with your data projects.<br />
          - Join AI/ML communities and participate in discussions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Opportunities at IIT KGP 🎓</h2>
        <p>
          - Data Scientist, Data Analyst, ML Engineer roles.<br />
          - Growing demand in placements for AI-ML profiles due to AI boom.<br />
          - Internships less frequent but valuable if secured.<br />
          - Many companies look for candidates with AI/ML skills on CV.<br />
          - Campus clubs and research groups offer projects and mentorship.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Additional Points ✨</h2>
        <p>
          - Emphasize the importance of communication skills to explain data-driven insights.<br />
          - Keep updated with ethical AI practices and data privacy concerns.<br />
          - Learning how to deploy ML models and basic cloud knowledge is a plus.<br />
          - Be patient — real-world data problems can be messy and challenging.
        </p>
      </section>

      <div className="mt-8">
        <Link href="/profiles" className="text-green-300 hover:text-green-200 hover:underline">
          ← Back to Profiles
        </Link>
      </div>
    </div>
  )
} 