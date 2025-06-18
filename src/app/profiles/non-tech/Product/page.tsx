"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaLightbulb, FaUsers, FaChartLine, FaRocket } from 'react-icons/fa';

const steps = [
  { icon: '🧠', heading: 'Understand Product Domain', desc: 'Grasp fundamentals of product lifecycle, management principles, and product-market fit.' },
  { icon: '🔍', heading: 'User Research', desc: 'Learn user research techniques like surveys, interviews, and usability testing.' },
  { icon: '📝', heading: 'Documentation & PRDs', desc: 'Create product requirement documents, specs, and feature briefs.' },
  { icon: '📊', heading: 'Analytics & Metrics', desc: 'Track key performance indicators (KPIs), funnels, and user behavior.' },
  { icon: '🤝', heading: 'Cross-functional Collaboration', desc: 'Coordinate with design, tech, and marketing teams effectively.' },
  { icon: '🚀', heading: 'Go-to-Market Strategy', desc: 'Plan launches, pricing, and positioning for product releases.' },
  { icon: '🎓', heading: 'Courses & Certifications', desc: 'Enroll in product management courses and attend PM workshops.' },
  { icon: '📣', heading: 'Showcase & Portfolio', desc: 'Build a product portfolio or share product breakdowns publicly.' },
];

const opportunities = [
  { title: 'Product Manager', detail: 'Own end-to-end product development and strategy.', icon: <FaCogs size={32} /> },
  { title: 'Product Analyst', detail: 'Use data to support decision-making and improve product experience.', icon: <FaChartLine size={32} /> },
  { title: 'Growth Product Roles', detail: 'Focus on metrics like retention, activation, and conversion.', icon: <FaRocket size={32} /> },
  { title: 'UX Researcher', detail: 'Understand user behavior and translate findings into actionable insights.', icon: <FaUsers size={32} /> },
  { title: 'Product Strategist', detail: 'Work on long-term product vision, roadmapping, and competitive analysis.', icon: <FaLightbulb size={32} /> },
];

const tips = [
  'Follow top PMs on LinkedIn and Medium.',
  'Practice writing PRDs and feature breakdowns.',
  'Participate in product hackathons or build side projects.',
  'Understand basic design and development tools.',
  'Stay updated with the latest product trends and tools.'
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
            <FaCogs size={40} />
          </div>
          <h1 className="text-6xl font-black text-yellow-200 drop-shadow-2xl tracking-tight mb-10">
            Product
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
