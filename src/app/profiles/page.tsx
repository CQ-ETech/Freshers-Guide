'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const profiles = [
  {
    emoji: "🧑‍💻",
    title: "SDE",
    description: "For those who love building software, systems, and tools.",
    route: "/profiles/tech/sde",
    category: "Tech",
  },
  {
    emoji: "📊",
    title: "Data",
    description: "Dive into analytics, machine learning, and data science.",
    route: "/profiles/tech/data",
    category: "Tech",
  },
  {
    emoji: "💰",
    title: "Finance",
    description: "Explore trading, investment banking, and quant roles.",
    route: "/profiles/non-tech/finance",
    category: "Non-Tech",
  },
  {
    emoji: "💼",
    title: "Consulting",
    description: "Strategic problem-solving for businesses & orgs.",
    route: "/profiles/non-tech/consult",
    category: "Non-Tech",
  },
  {
    emoji: "🏭",
    title: "Core/FMCG",
    description: "Roles related to your branch and core industries.",
    route: "/profiles/core/fmcg",
    category: "Core",
  },
  {
    emoji: "📱",
    title: "Product",
    description: "Shape tech products from ideation to execution.",
    route: "/profiles/non-tech/product",
    category: "Non-Tech",
  },
];

const categories = [
  {
    name: "Tech",
    emoji: "💻",
    description: "Profiles like SDE, Data Science, AI, etc.",
  },
  {
    name: "Non-Tech",
    emoji: "📈",
    description: "Includes Finance, Consulting, Product roles.",
  },
  {
    name: "Core",
    emoji: "🏭",
    description: "Core branch-related profiles like FMCG, manufacturing.",
  },
];

export default function ProfilesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    if (category === "Non-Tech") {
      router.push("/profiles/non-tech");
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredProfiles = profiles.filter(
    (profile) => profile.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#150000] to-[#220700] text-[#E2F8FA] py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FF9900] to-[#FFEA00]">
        Explore Career Profiles
      </h1>

      {selectedCategory ? (
        <>
          <div className="mb-6 text-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-5 py-2 rounded-full bg-[#FFBB00] text-black font-semibold hover:bg-[#e0a800] transition-all"
            >
              ← Back to Categories
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {filteredProfiles.map((profile, index) => (
              <Link
                key={index}
                href={profile.route}
                className="cursor-pointer bg-[#2a2a2a] hover:bg-[#353535] border border-[#4B1000] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="text-5xl mb-4 text-[#FFEA00]">{profile.emoji}</div>
                <h2 className="text-xl font-semibold mb-2 text-[#FFBB00]">{profile.title}</h2>
                <p className="text-[#E2F8FA]">{profile.description}</p>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="cursor-pointer bg-[#2a2a2a] hover:bg-[#353535] border border-[#4B1000] rounded-2xl p-8 text-center shadow-xl transition-all duration-300 hover:scale-[1.05]"
            >
              <div className="text-6xl mb-4 text-[#FFEA00]">{cat.emoji}</div>
              <h2 className="text-2xl font-bold mb-2 text-[#FFBB00]">{cat.name}</h2>
              <p className="text-[#E2F8FA]">{cat.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
