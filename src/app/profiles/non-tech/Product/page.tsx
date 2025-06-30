'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaCogs, FaChartLine, FaRocket,
  FaUsers, FaLightbulb
} from 'react-icons/fa';
import {
  MdOutlineStart, MdOutlineSearch, MdOutlineDescription, MdOutlineInsights,
  MdOutlineGroups, MdOutlineRocketLaunch, MdOutlineSchool, MdOutlineDisplaySettings
} from 'react-icons/md';

const steps = [
  { stage: 'Start', heading: 'Understand Product Domain', desc: 'Gain a solid understanding of the entire product lifecycle — from ideation to launch. Study the foundations of product management, how to define product-market fit, and the role of PMs in various orgs.', icon: <MdOutlineStart size={24} />, color: 'cyan' },
  { stage: 'Research', heading: 'User Research', desc: 'Master different user research techniques including surveys, interviews, and usability testing. Learn to extract pain points and build user personas that influence product strategy.', icon: <MdOutlineSearch size={24} />, color: 'amber' },
  { stage: 'Document', heading: 'PRDs & Specs', desc: 'Learn to write clear Product Requirement Documents (PRDs), feature specs, and user stories that align the entire team on goals and scope.', icon: <MdOutlineDescription size={24} />, color: 'rose' },
  { stage: 'Measure', heading: 'Analytics & Metrics', desc: 'Understand key metrics like DAUs, retention rates, funnels, NPS, and conversion. Learn how to use tools like Mixpanel, GA, or Amplitude to track them.', icon: <MdOutlineInsights size={24} />, color: 'blue' },
  { stage: 'Collaborate', heading: 'Cross-functional Work', desc: 'Learn how PMs interface with design, engineering, QA, and marketing. Understand how to facilitate sprint planning, retros, and feedback loops.', icon: <MdOutlineGroups size={24} />, color: 'emerald' },
  { stage: 'Launch', heading: 'Go-to-Market Strategy', desc: 'Understand launch planning, pricing models, product positioning, and GTM channels. Coordinate messaging, rollout plans, and customer feedback post-launch.', icon: <MdOutlineRocketLaunch size={24} />, color: 'green' },
  { stage: 'Learn', heading: 'Courses & Certifications', desc: 'Explore structured PM learning paths via platforms like Reforge, Coursera, Product School, or NPTEL. Attend bootcamps or workshops to upskill.', icon: <MdOutlineSchool size={24} />, color: 'yellow' },
  { stage: 'Showcase', heading: 'Portfolio & Breakdown', desc: 'Build a public portfolio of your product work, write teardown articles on popular products, or share your design thinking on Medium or LinkedIn.', icon: <MdOutlineDisplaySettings size={24} />, color: 'purple' },
];

const opportunities = [
  { title: 'Product Manager', detail: 'Own end-to-end product development, roadmap prioritization, and cross-functional coordination.', icon: <FaCogs size={32} /> },
  { title: 'Product Analyst', detail: 'Use data to assess product usage and performance. Generate insights that influence product decisions.', icon: <FaChartLine size={32} /> },
  { title: 'Growth Product Roles', detail: 'Focus on improving metrics like user activation, engagement, and retention through experiments.', icon: <FaRocket size={32} /> },
  { title: 'UX Researcher', detail: 'Conduct usability tests, interviews, and contextual inquiry to uncover user needs.', icon: <FaUsers size={32} /> },
  { title: 'Product Strategist', detail: 'Work on long-term product vision, competitive analysis, and innovation opportunities.', icon: <FaLightbulb size={32} /> },
];

const tips = [
  'Follow leading product managers on LinkedIn, Medium, or Twitter to learn from real industry experiences and strategies.',
  'Practice writing PRDs or user stories weekly. Use mock scenarios or real products you love to build documentation muscles.',
  'Contribute to or build side projects — even simple web apps — to demonstrate end-to-end product thinking.',
  'Learn basic design (Figma, wireframing) and development concepts (APIs, databases) to communicate effectively with teams.',
  'Stay updated on product trends, tools (like Notion, Jira, Miro), and frameworks like OKRs, JTBD, and Agile.',
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
            <FaCogs size={40} />
          </div>
          <h1 className="text-6xl font-black text-yellow-50 drop-shadow-2xl tracking-tight mb-4">
            Product
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
        <div className="flex flex-wrap justify-center gap-10">
          {opportunities.map((opp, idx) => (
            <div key={idx} className="w-72 transform-gpu">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(255, 193, 7, 0.6)',
                }}
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

      <section className="relative z-10 max-w-5xl mx-auto mt-32 px-4">
        <h2 className="text-4xl text-yellow-400 font-extrabold text-center mb-12 drop-shadow-md">
          Tips & Tricks
        </h2>
        <ul className="list-disc list-inside space-y-4 text-yellow-300 text-lg">
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
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-yellow-600 hover:scale-105 transition"
        >
          ← Back to Dashboard
        </a>
      </footer>
    </main>
  );
}
