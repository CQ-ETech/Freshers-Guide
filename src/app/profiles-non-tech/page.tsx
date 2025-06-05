'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FaMoneyBillWave,
  FaHandshake,
  FaIndustry,
  FaBoxOpen,
  FaClipboardList,
} from 'react-icons/fa'

type ProfileKey = 'finance' | 'consult' | 'core' | 'product' | 'checklist'

const profilesData = {
  finance: {
    name: "Finance",
    icon: <FaMoneyBillWave size={22} />,
    who: [
      "Students interested in financial markets, investment banking, or corporate finance.",
      "Those with strong analytical skills and an interest in economics and accounting.",
      "People who like working with numbers and financial models.",
    ],
    nonTech: [
      "Good communication and presentation skills.",
      "Attention to detail and accuracy.",
      "Ability to work under pressure and meet deadlines.",
      "Teamwork and client handling skills.",
    ],
    career: [
      "Investment Banking Analyst",
      "Financial Analyst",
      "Corporate Finance Associate",
      "Risk Management Specialist",
    ],
    notes: [
      "Many finance roles require understanding of tools like Excel, PowerPoint and financial modeling software.",
      "Networking and internships with financial firms help a lot.",
      "Certification courses like CFA can add value.",
    ],
  },
  consult: {
    name: "Consult",
    icon: <FaHandshake size={22} />,
    who: [
      "Those who enjoy problem solving and strategic thinking.",
      "People comfortable with client interactions and presentations.",
      "Individuals who can analyze business problems and recommend solutions.",
    ],
    nonTech: [
      "Strong communication and interpersonal skills.",
      "Ability to work in teams and manage time effectively.",
      "Flexibility and adaptability to different industries and problems.",
      "Leadership qualities and confidence.",
    ],
    career: [
      "Management Consultant",
      "Strategy Analyst",
      "Business Analyst",
      "Operations Consultant",
    ],
    notes: [
      "Case study preparation is key for interviews.",
      "Networking with seniors who cracked consulting is very helpful.",
      "Keep updated on current business trends and global markets.",
    ],
  },
  core: {
    name: "Core/FMCG",
    icon: <FaIndustry size={22} />,
    who: [
      "Students passionate about engineering and manufacturing processes.",
      "Those interested in product design, supply chain, and operations.",
      "People who want to work in industries like automotive, FMCG, manufacturing.",
    ],
    nonTech: [
      "Practical problem solving and project management skills.",
      "Ability to work on shop floors and with cross-functional teams.",
      "Good documentation and reporting skills.",
      "Safety awareness and quality control knowledge.",
    ],
    career: [
      "Design Engineer",
      "Production Engineer",
      "Supply Chain Analyst",
      "Quality Control Specialist",
    ],
    notes: [
      "Internships often involve hands-on work.",
      "Building projects or certifications related to industry 4.0 can help.",
      "Learning software like CAD, ERP systems is beneficial.",
    ],
  },
  product: {
    name: "Product",
    icon: <FaBoxOpen size={22} />,
    who: [
      "Those who enjoy building products end-to-end and understanding user needs.",
      "People with a blend of technical and business interest.",
      "Individuals who like prioritization, design, and roadmapping.",
    ],
    nonTech: [
      "Strong communication and stakeholder management.",
      "Ability to work cross-functionally with engineers, designers, marketers.",
      "Good analytical skills to interpret user data and metrics.",
      "Creativity and user empathy.",
    ],
    career: [
      "Product Manager",
      "Product Owner",
      "Business Analyst (Product focus)",
      "User Experience Specialist",
    ],
    notes: [
      "Understanding agile methodologies is useful.",
      "Building mini-projects or apps as side projects helps.",
      "Internships in startups or product companies provide good exposure.",
    ],
  },
}

const checklistSteps = [
  "Find seniors who have excelled in this profile.",
  "Talk and connect with as many of them as possible. Gain insights and plan your journey.",
  "Make a proper plan of how you would approach the preparation.",
  "Set short goals and keep achieving them.",
  "Stay in touch with a go-to senior who reviews your progress monthly.",
  "Be creative and curious in your approach.",
  "Think of ways to integrate AI in your work.",
]

export default function ProfilesNonTechPage() {
  const [selectedTab, setSelectedTab] = useState<ProfileKey>('checklist')

  const renderProfileContent = (key: ProfileKey) => {
    if (key === 'checklist') {
      return (
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Non-Tech Preparation Checklist</h2>
          <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
            {checklistSteps.map((step, i) => (
              <li key={i} className="hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-md p-2 transition">
                {step}
              </li>
            ))}
          </ol>
        </div>
      )
    }

    const profile = profilesData[key]
    return (
      <div className="p-6 space-y-6">
        <h2 className="text-3xl font-semibold text-indigo-600">{profile.name} Profile Overview</h2>

        <section>
          <h3 className="text-xl font-semibold mb-2">Who should target this?</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {profile.who.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Non-Tech Demands</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {profile.nonTech.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Career Opportunities</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {profile.career.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Additional Notes</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {profile.notes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-indigo-50 dark:bg-indigo-900 border-r border-indigo-200 dark:border-indigo-800 flex flex-col">
        <h1 className="text-2xl font-bold p-6 text-indigo-700 dark:text-indigo-300 border-b border-indigo-200 dark:border-indigo-800">
          Non-Tech Profiles
        </h1>
        <nav className="flex-1">
          {(['finance', 'consult', 'core', 'product', 'checklist'] as ProfileKey[]).map((key) => {
            const profile = key === 'checklist'
              ? {
                  name: 'Checklist',
                  icon: <FaClipboardList size={22} />,
                }
              : profilesData[key]

            const selected = selectedTab === key
            return (
              <button
                key={key}
                onClick={() => setSelectedTab(key)}
                className={`w-full flex items-center gap-3 px-6 py-4 text-left font-semibold rounded-r-lg transition
                  ${
                    selected
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'hover:bg-indigo-200 dark:hover:bg-indigo-700 text-indigo-700 dark:text-indigo-300'
                  }`}
              >
                <span>{profile.icon}</span>
                <span>{profile.name}</span>
              </button>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-indigo-200 dark:border-indigo-800">
          <Link href="/" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderProfileContent(selectedTab)}
      </div>
    </main>
  )
} 