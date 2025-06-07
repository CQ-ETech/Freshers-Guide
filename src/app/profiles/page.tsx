'use client';

import Link from 'next/link';

const profiles = [
  {
    emoji: "🧑‍💻",
    title: "SDE",
    description: "For those who love building software, systems, and tools.",
    route: "/profiles/tech/sde",
  },
  {
    emoji: "📊",
    title: "Data",
    description: "Dive into analytics, machine learning, and data science.",
    route: "/profiles/tech/data",
  },
  {
    emoji: "💰",
    title: "Finance",
    description: "Explore trading, investment banking, and quant roles.",
    route: "/profiles/non-tech",
  },
  {
    emoji: "💼",
    title: "Consulting",
    description: "Strategic problem-solving for businesses & orgs.",
    route: "/profiles/non-tech",
  },
  {
    emoji: "🏭",
    title: "Core/FMCG",
    description: "Roles related to your branch and core industries.",
    route: "/profiles/non-tech",
  },
  {
    emoji: "📱",
    title: "Product",
    description: "Shape tech products from ideation to execution.",
    route: "/profiles/non-tech",
  },
];

export default function ProfilesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Explore Career Profiles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {profiles.map((profile, index) => (
          <Link
            key={index}
            href={profile.route}
            className="cursor-pointer bg-[#2a2a2a] hover:bg-[#353535] border border-gray-700 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="text-5xl mb-4">{profile.emoji}</div>
            <h2 className="text-xl font-semibold mb-2">{profile.title}</h2>
            <p className="text-gray-400">{profile.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}