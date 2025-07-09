'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaRegLightbulb, FaHandshake, FaTools, FaComments } from 'react-icons/fa';
import { MdOutlineStart, MdOutlineSchool, MdOutlineChecklist, MdOutlineVerified, MdOutlineWorkOutline, MdOutlineShare } from 'react-icons/md';

const steps = [
  { stage: 'Start', heading: 'Understand the Industry Landscape', desc: 'Begin by exploring various consulting branches like management, strategy, IT, and HR. Read reports by top consulting firms and learn about real-world consulting engagements.', icon: <MdOutlineStart size={24} />, color: 'cyan' },
  { stage: 'Explore', heading: 'Build Domain Expertise', desc: 'Identify industries of interest—like healthcare, tech, or energy—and deep dive into business models, market trends, and major players to gain a consultant’s perspective.', icon: <MdOutlineSchool size={24} />, color: 'amber' },
  { stage: 'Skills', heading: 'Develop Soft & Communication Skills', desc: 'Consultants must communicate ideas clearly. Practice public speaking, storytelling, slide-making, and structured problem-solving to convey strategic recommendations effectively.', icon: <MdOutlineChecklist size={24} />, color: 'rose' },
  { stage: 'Frameworks', heading: 'Master Frameworks & Tools', desc: 'Learn structured frameworks like SWOT, 5 Forces, BCG Matrix, and tools like Excel, PowerPoint, Notion, and Miro to structure and visualize your analysis.', icon: <MdOutlineChecklist size={24} />, color: 'blue' },
  { stage: 'Practice', heading: 'Crack Consulting Cases', desc: 'Engage in mock case interviews with peers. Use resources like Case in Point, Victor Cheng, and PrepLounge to simulate real consulting problems.', icon: <MdOutlineWorkOutline size={24} />, color: 'emerald' },
  { stage: 'Network', heading: 'Find Mentors & Connect', desc: 'Reach out to alumni in consulting, join LinkedIn communities, and attend virtual events or consulting club meets to understand recruitment and culture.', icon: <MdOutlineChecklist size={24} />, color: 'green' },
  { stage: 'Certify', heading: 'Certifications & Learning', desc: 'Pursue consulting-oriented courses like Coursera’s "Business Strategy", or certifications in project management, analytics, or digital transformation.', icon: <MdOutlineVerified size={24} />, color: 'yellow' },
  { stage: 'Showcase', heading: 'Build Your Consulting Persona', desc: 'Write blog posts, build a portfolio of solved cases, publish frameworks on LinkedIn, or run a mock consulting project with friends or local businesses.', icon: <MdOutlineShare size={24} />, color: 'purple' },
];

const opportunities = [
  { title: 'Management Consulting', detail: 'Engage with companies to redesign workflows, enter new markets, or improve profitability. Often involves travel and client interaction.', icon: <FaUserTie size={32} /> },
  { title: 'IT Consulting', detail: 'Focus on implementing and advising on tech systems—cloud, cybersecurity, ERP—working closely with tech and operations teams.', icon: <FaTools size={32} /> },
  { title: 'Strategy Consulting', detail: 'Offer long-term advisory on mergers, market entry, or corporate strategy. Requires deep research, quantitative skills, and industry knowledge.', icon: <FaRegLightbulb size={32} /> },
  { title: 'HR Consulting', detail: 'Help firms with workforce planning, change management, performance evaluations, or learning and development programs.', icon: <FaHandshake size={32} /> },
  { title: 'Freelance Consulting', detail: 'As a freelancer, assist startups or NGOs in solving specific business problems or building their strategic roadmap with independence and flexibility.', icon: <FaComments size={32} /> },
];

const tips = [
  'Read consulting blogs by Bain, McKinsey, and BCG regularly. Understanding how consultants structure thoughts is as important as frameworks.',
  'Form a case group with peers and practice at least 2–3 cases per week. Record and review for structured thinking and time management.',
  'Build a resume tailored for consulting—quantify your achievements, highlight leadership and analytical experiences, and use action verbs.',
  'Prepare for fit interviews by crafting stories using the STAR method. Showcase leadership, failure recovery, and teamwork scenarios.',
  'Stay informed on global economics, major business moves, and sector news to reference real examples in interviews and case structures.'
];

export default function RoadmapPlanning() {
  useEffect(() => {
    document.body.style.fontFamily = "'Comfortaa', cursive";
  }, []);

  return (
<main className="relative bg-transparent text-yellow-100 min-h-screen py-24 px-4 sm:px-12 overflow-hidden">

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

      {/* Roadmap section */}
      <section className="relative max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center">
<div className="absolute h-full w-1 bg-gradient-to-b from-[#bfa600] via-[#a98f00] to-[#8f7700] left-1/2 transform -translate-x-1/2 z-0"></div>

<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-yellow-500 text-black font-bold rounded-full shadow-lg">START</div>

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
  style={{ borderColor: '#bfa600' }}  // dark yellow border
>

                
                  <p className={`text-${step.color}-400 font-bold text-sm mb-1`}>{step.stage}</p>
                  <h3 className="text-xl font-bold text-yellow-100 mb-2">{step.heading}</h3>
                  <p className="text-sm text-yellow-300 leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-yellow-500 text-black font-bold rounded-full shadow-lg">FINISH</div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="relative z-10 max-w-7xl mx-auto mt-32 px-4">
        <h2 className="text-4xl text-yellow-400 font-extrabold text-center mb-16 drop-shadow-md">
          Explore Your Opportunities
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {opportunities.map((opp, idx) => (
            <div key={idx} className="w-72 transform-gpu">
              <motion.div
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255, 193, 7, 0.6)' }}
                transition={{ duration: 0.4 }}
                className="text-yellow-100 flex flex-col items-center text-center bg-zinc-900 p-6 rounded-xl shadow-lg will-change-transform"
              >
                <div className="mb-3 text-yellow-500">{opp.icon}</div>
                <h3 className="text-lg font-extrabold text-yellow-50 mb-1">{opp.title}</h3>
                <p className="text-sm text-yellow-300">{opp.detail}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="relative z-10 max-w-5xl mx-auto mt-32 px-4">
        <h2 className="text-4xl text-yellow-400 font-extrabold text-center mb-12 drop-shadow-md">
          Tips & Tricks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
  {tips.map((tip, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="rounded-xl bg-zinc-900/80 border border-[#bfa600] p-5 text-yellow-300 shadow-md hover:shadow-yellow-500/40 transition-all"
    >
      <p className="text-base leading-relaxed">{tip}</p>
    </motion.div>
  ))}
</div>

      </section>

      <footer className="relative z-10 text-center mt-32">
        <a
          href="#"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-yellow-600 hover:scale-105 transition"
        >
          ← Back to Dashboard
        </a>
      </footer>
    </main>
  );
}
