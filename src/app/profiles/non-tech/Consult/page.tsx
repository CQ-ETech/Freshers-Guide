'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaRegLightbulb, FaHandshake, FaTools, FaComments } from 'react-icons/fa';
import { MdOutlineStart, MdOutlineSchool, MdOutlineChecklist, MdOutlineVerified, MdOutlineWorkOutline, MdOutlineShare } from 'react-icons/md';

const steps = [
  { stage: 'Start', heading: 'Understand the Industry', desc: 'Get a clear view of different consultancy fields like management, strategy, IT, or HR.', icon: <MdOutlineStart size={24} />, color: 'cyan' },
  { stage: 'Explore', heading: 'Build Domain Knowledge', desc: 'Deep dive into specific industries such as healthcare, finance, or technology.', icon: <MdOutlineSchool size={24} />, color: 'amber' },
  { stage: 'Skills', heading: 'Develop Communication Skills', desc: 'Focus on presentations, storytelling, and client interaction techniques.', icon: <MdOutlineChecklist size={24} />, color: 'rose' },
  { stage: 'Frameworks', heading: 'Learn Frameworks & Tools', desc: 'Master consulting frameworks (like SWOT, 5 Forces) and tools (Excel, PowerPoint).', icon: <MdOutlineChecklist size={24} />, color: 'blue' },
  { stage: 'Practice', heading: 'Case Practice', desc: 'Practice business case studies and mock interviews extensively.', icon: <MdOutlineWorkOutline size={24} />, color: 'emerald' },
  { stage: 'Network', heading: 'Networking & Mentorship', desc: 'Connect with consultants, alumni, and join consulting clubs.', icon: <MdOutlineChecklist size={24} />, color: 'green' },
  { stage: 'Certify', heading: 'Certifications & Courses', desc: 'Take up courses on consulting skills and industry-specific insights.', icon: <MdOutlineVerified size={24} />, color: 'yellow' },
  { stage: 'Showcase', heading: 'Showcase Expertise', desc: 'Write articles, publish analysis, or share insights on LinkedIn or blogs.', icon: <MdOutlineShare size={24} />, color: 'purple' },
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
  useEffect(() => {
    document.body.style.fontFamily = "'Comfortaa', cursive";
  }, []);

  return (
    <main className="relative bg-black text-yellow-100 min-h-screen py-24 px-4 sm:px-12 overflow-hidden">
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-3 text-yellow-400">
            <FaUserTie size={40} />
          </div>
          <h1 className="text-6xl font-black text-yellow-50 drop-shadow-2xl tracking-tight mb-4">
            Consultancy
          </h1>
          <p className="text-3xl text-yellow-500 tracking-widest font-extrabold drop-shadow-md uppercase">
            Roadmap
          </p>
        </motion.div>
      </section>

      <section className="relative max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="absolute h-full w-1 bg-gradient-to-b from-cyan-400 via-rose-400 to-purple-500 left-1/2 transform -translate-x-1/2 z-0"></div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-cyan-500 text-white font-bold rounded-full shadow-lg">START</div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative w-full py-12 flex ${idx % 2 === 0 ? 'justify-start pl-6' : 'justify-end pr-6'}`}
            >
              <div className="relative w-full max-w-md">
                <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-left-16' : '-right-16'} w-14 h-14 rounded-full bg-black border-4 flex items-center justify-center shadow-lg`} style={{ borderColor: `var(--tw-border-${step.color}-500)` }}>
                  {step.icon}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
                  transition={{ duration: 0.3 }}
                  className={`bg-zinc-900 p-6 rounded-lg shadow-xl border-t-4 transform transition-transform duration-300 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}
                  style={{ borderColor: `var(--tw-border-${step.color}-500)` }}
                >
                  <p className={`text-${step.color}-400 font-bold text-sm mb-1`}>{step.stage}</p>
                  <h3 className="text-xl font-bold text-yellow-100 mb-2">{step.heading}</h3>
                  <p className="text-sm text-yellow-300 leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-purple-600 text-white font-bold rounded-full shadow-lg">FINISH</div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto mt-32 px-4">
        <h2 className="text-4xl text-yellow-400 font-extrabold text-center mb-16 drop-shadow-md">
          Explore Your Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {opportunities.map((opp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 221, 51, 0.6)' }}
              transition={{ duration: 0.4 }}
              className="text-white flex flex-col items-center text-center"
            >
              <div className="mb-3 text-yellow-300">{opp.icon}</div>
              <h3 className="text-lg font-extrabold text-yellow-200 mb-1">{opp.title}</h3>
              <p className="text-sm text-gray-300 max-w-xs">{opp.detail}</p>
            </motion.div>
          ))}
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
    </main>
  );
}
