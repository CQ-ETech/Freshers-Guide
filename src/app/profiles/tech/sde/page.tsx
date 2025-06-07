import Link from 'next/link'

export default function SDEProfile() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">🧑‍💻 SDE (Software Development Engineer)</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Who should target this?</h2>
        <p className="text-lg text-gray-300">
          • Those who enjoy coding, love solving problems using technology.<br />
          • Curious about how websites, apps, and systems work.<br />
          • Passionate about building tools, games, or bots.<br />
          • Logical thinkers who enjoy debugging and continuous learning.<br />
          • Prefer structured problem-solving and tech-oriented roles.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What it demands?</h2>
        <p className="text-lg text-gray-300">
          • Patience and consistency<br />
          • Dedication to write/debug code regularly<br />
          • Curiosity to keep learning new tools and frameworks<br />
          • Strong observation and analytical thinking<br />
          • A structured logical thought process
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Prep Strategy</h2>
        <p className="text-lg text-gray-300">
          <strong>Step 1: DSA (Data Structures & Algorithms)</strong><br />
          Start with basics — arrays, strings, Binary search, bit manipulation, recursion, then trees, graphs, DP, Segment Trees.<br />
          Recommended: ~3–4 months (1.5–2 hrs daily)<br /><br />

          <strong>Step 2: CS Fundamentals</strong><br />
          - OOPs: Concepts + implementation<br />
          - DBMS: Joins, normalization, indexing<br />
          - OS: Scheduling, memory mgmt<br />
          - CN: Protocols, TCP/IP basics<br /><br />

          <strong>Step 3: System Design</strong><br />
          - Optional initially, learn later once intermediate<br /><br />

          <strong>Total Time:</strong> ~7-8 months of consistent prep
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What can they do in summers?</h2>
        <p className="text-lg text-gray-300">
          • Focus on DSA — reach at least recursion level in 45 days<br />
          • Build habit of solving daily<br />
          • Start contests from June 20 on Codeforces, Leetcode<br />
          • Build strong base — helps a lot later
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Opportunities at IIT KGP</h2>
        <p className="text-lg text-gray-300">
          • Most in-demand profile during internship & placement season<br />
          • Great companies visit — Google, Microsoft, Adobe, etc.<br />
          • If you're good at it, your future is secure and exciting 🚀
        </p>
      </section>

      <div className="mt-8">
        <Link href="/profiles" className="text-blue-600 hover:underline">
          ← Back to Profiles
        </Link>
      </div>
    </div>
  )
} 