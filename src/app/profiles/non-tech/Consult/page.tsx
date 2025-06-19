'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaRegLightbulb, FaHandshake, FaTools, FaComments } from 'react-icons/fa';

const steps = [
  { icon: '🧠', heading: 'Understand the Industry', desc: 'Get a clear view of different consultancy fields like management, strategy, IT, or HR.' },
  { icon: '📚', heading: 'Build Domain Knowledge', desc: 'Deep dive into specific industries such as healthcare, finance, or technology.' },
  { icon: '💬', heading: 'Develop Communication Skills', desc: 'Focus on presentations, storytelling, and client interaction techniques.' },
  { icon: '🛠️', heading: 'Learn Frameworks & Tools', desc: 'Master consulting frameworks (like SWOT, 5 Forces) and tools (Excel, PowerPoint).' },
  { icon: '🏛️', heading: 'Case Practice', desc: 'Practice business case studies and mock interviews extensively.' },
  { icon: '👥', heading: 'Networking & Mentorship', desc: 'Connect with consultants, alumni, and join consulting clubs.' },
  { icon: '🎓', heading: 'Certifications & Courses', desc: 'Take up courses on consulting skills and industry-specific insights.' },
  { icon: '📣', heading: 'Showcase Expertise', desc: 'Write articles, publish analysis, or share insights on LinkedIn or blogs.' },
];

const opportunities = [
  { title: 'Management Consulting', detail: 'Work on improving organizational efficiency and strategy.', icon: <FaUserTie size={32} /> },
  { title: 'IT Consulting', detail: 'Advise firms on digital transformation, software solutions, and technology upgrades.', icon: <FaTools size={32} /> },
  { title: 'Strategy Consulting', detail: 'Guide businesses in long-term planning and competitive positioning.', icon: <FaRegLightbulb size={32} /> },
  { title: 'HR Consulting', detail: 'Support companies in optimizing human resources and talent strategies.', icon: <FaHandshake size={32} /> },
  { title: 'Freelance Consulting', detail: 'Offer independent advice to startups and SMEs on various domains.', icon: <FaComments size={32} /> },
];

const tips = [
  'Follow top consulting firms and read their case studies.',
  'Practice case cracking with peers regularly.',
  'Tailor your resume with measurable consulting experiences.',
  'Develop a clear personal pitch and project stories.',
  'Stay updated on industry trends and economic news.'
];

export default function RoadmapPlanning() {
  const [activeIdx, setActiveIdx] = useState(null);

  useEffect(() => {
    document.body.style.fontFamily = "'Comfortaa', cursive";
  }, []);

  return (
    <main className="relative bg-gradient-to-tr from-[#0a0a0a] via-[#111] to-black text-white min-h-screen py-24 px-6 sm:px-12">
      <section className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-3 text-yellow-300">
            <FaUserTie size={40} />
          </div>
          <h1 className="text-6xl font-black text-yellow-200 drop-shadow-2xl tracking-tight mb-10">
            Consultancy
          </h1>
          <p className="text-3xl text-yellow-400 tracking-widest font-extrabold drop-shadow-md uppercase mb-6">
            Roadmap
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-10 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              <motion.button
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl bg-yellow-400 text-black rounded-full w-16 h-16 flex items-center justify-center shadow-md hover:shadow-yellow-300 hover:scale-110 transition"
                onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
              >
                {step.icon}
              </motion.button>
              <h2 className="mt-4 text-lg font-bold text-yellow-200 whitespace-nowrap">{step.heading}</h2>
              {activeIdx === idx && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 text-sm text-gray-300 max-w-xs"
                >
                  {step.desc}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto mt-32 px-4">
        <h2 className="text-4xl text-yellow-400 font-extrabold text-center mb-16 drop-shadow-md">
          Explore Your Opportunities
        </h2>
        <div className="flex flex-col items-center gap-16">
          <div className="flex justify-center gap-10">
            {opportunities.slice(0, 3).map((opp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 221, 51, 0.6)' }}
                transition={{ duration: 0.4 }}
                className="text-white flex flex-col items-center"
              >
                <div className="mb-3 text-yellow-300">{opp.icon}</div>
                <div className="text-center">
                  <h3 className="text-lg font-extrabold text-yellow-200 mb-1">{opp.title}</h3>
                  <p className="text-sm text-gray-300 max-w-xs">{opp.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-10">
            {opportunities.slice(3).map((opp, idx) => (
              <motion.div
                key={idx + 3}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 221, 51, 0.6)' }}
                transition={{ duration: 0.4 }}
                className="text-white flex flex-col items-center"
              >
                <div className="mb-3 text-yellow-300">{opp.icon}</div>
                <div className="text-center">
                  <h3 className="text-lg font-extrabold text-yellow-200 mb-1">{opp.title}</h3>
                  <p className="text-sm text-gray-300 max-w-xs">{opp.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto mt-32 px-4">
        <h2 className="text-4xl text-yellow-400 font-extrabold text-center mb-12 drop-shadow-md">
          Tips & Tricks
        </h2>
        <ul className="list-disc list-inside space-y-4 text-yellow-100 text-lg">
          {tips.map((tip, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {tip}
            </motion.li>
          ))}
        </ul>
      </section>

      <footer className="relative z-10 text-center mt-32">
        <a
          href="#"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-yellow-500 hover:scale-105 transition"
        >
          ← Back to Dashboard
        </a>
      </footer>
    </main>
  );
}