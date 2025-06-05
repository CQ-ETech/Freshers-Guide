import Link from 'next/link'

const timelineData = [
  {
    title: "Semester 3",
    months: "Aug 2025 – Nov 2025",
    note: "Explore domains, build basics",
  },
  {
    title: "Winter Break",
    months: "Dec 2025",
    note: "Short break — relax or learn something new",
  },
  {
    title: "Semester 4",
    months: "Jan 2026 – Apr 2026",
    note: "Start deep diving into a chosen skill",
  },
  {
    title: "Summer Break",
    months: "May 2026 – July 2026",
    note: "Ideal time to be good in a particular skill",
  },
  {
    title: "Semester 5",
    months: "Aug 2026 – Nov 2026",
    note: "📌 CDC Internships",
  },
  {
    title: "Winter Break",
    months: "Dec 2026",
    note: "Prep for next internship season or build projects",
  },
  {
    title: "Semester 6",
    months: "Jan 2027 – Apr 2027",
    note: "Master your skills in a domain / Off campus internship",
  },
  {
    title: "Summer Break",
    months: "May 2027 – July 2027",
    note: "Internship",
  },
  {
    title: "Semester 7",
    months: "Aug 2027 – Nov 2027",
    note: "Prep mode for placements",
  },
  {
    title: "Placements",
    months: "🎯 Dec 2027",
    note: "Final placement season",
  },
  {
    title: "Semester 8",
    months: "Jan 2028 – Apr 2028",
    note: "Chill semester or thesis, depending on profile",
  },
]

export default function Timeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">Your College Timeline</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{item.months}</p>
            <p className="text-md">{item.note}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
} 