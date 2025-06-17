'use client'

import Link from 'next/link'
import { FaMoneyBillWave } from 'react-icons/fa'

export default function FinancePage() {
  const data = {
    who: [
      'Students interested in financial markets, investment banking, or corporate finance.',
      'Those with strong analytical skills and an interest in economics and accounting.',
      'People who like working with numbers and financial models.',
    ],
    nonTech: [
      'Good communication and presentation skills.',
      'Attention to detail and accuracy.',
      'Ability to work under pressure and meet deadlines.',
      'Teamwork and client handling skills.',
    ],
    career: [
      'Investment Banking Analyst',
      'Financial Analyst',
      'Corporate Finance Associate',
      'Risk Management Specialist',
    ],
    notes: [
      'Many finance roles require understanding of tools like Excel, PowerPoint and financial modeling software.',
      'Networking and internships with financial firms help a lot.',
      'Certification courses like CFA can add value.',
    ],
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600 flex items-center gap-2">
        <FaMoneyBillWave /> Finance Profile
      </h1>

      <Section title="1. Who should target this? 🤔" list={data.who} />
      <Section title="2. Non-Tech Demands 🧠" list={data.nonTech} />
      <Section title="3. Career Opportunities 🚀" list={data.career} />
      <Section title="4. Additional Notes ✨" list={data.notes} />

      <BackLink />
    </div>
  )
}

function Section({ title, list }: { title: string; list: string[] }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

function BackLink() {
  return (
    <div className="mt-8">
      <Link href="/profiles" className="text-indigo-500 hover:underline">
        ← Back to Profiles
      </Link>
    </div>
  )
}
