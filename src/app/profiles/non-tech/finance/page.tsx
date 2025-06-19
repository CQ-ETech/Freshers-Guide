'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartPie, FaSearchDollar, FaBullhorn, FaBalanceScale, FaBriefcase } from 'react-icons/fa';

const steps = [
  { icon: '📘', heading: 'Basics of Finance', desc: 'Start with understanding accounting, economics, and basic financial principles.' },
  { icon: '📈', heading: 'Financial Markets', desc: 'Learn about stocks, bonds, mutual funds, and how markets function.' },
  { icon: '🧮', heading: 'Tools and Software', desc: 'Get hands-on with Excel, Google Sheets, and financial calculators.' },
  { icon: '📝', heading: 'Budgeting & Planning', desc: 'Understand personal budgeting, corporate planning, and forecasting.' },
  { icon: '🎓', heading: 'Financial Courses', desc: 'Take beginner-friendly courses on platforms like Coursera, Udemy, or NPTEL.' },
  { icon: '💼', heading: 'Internships & Projects', desc: 'Apply concepts through internships or by analyzing real-world finance case studies.' },
  { icon: '📜', heading: 'Certifications', desc: 'Pursue non-technical credentials like BMC, NSE, or CFA Level 1.' },
  { icon: '📣', heading: 'Showcase Work', desc: 'Share insights, case studies, and projects on LinkedIn or personal blogs.' },
];

const opportunities = [
  { title: 'Finance Analyst Roles', detail: 'Work with startups or corporates analyzing financial data.', icon: <FaChartPie size={32} /> },
  { title: 'Investment Research', detail: 'Join equity research teams or work with financial advisors.', icon: <FaSearchDollar size={32} /> },
  { title: 'Corporate Strategy', detail: 'Contribute to financial modeling and strategic planning.', icon: <FaBalanceScale size={32} /> },
  { title: 'Financial Journalism', detail: 'Write or report on markets, policy, and business trends.', icon: <FaBullhorn size={32} /> },
  { title: 'Freelance Finance Consulting', detail: 'Offer budgeting, forecasting, and planning services.', icon: <FaBriefcase size={32} /> },
];

const tips = [
  'Start reading financial news daily to build familiarity.',
  'Practice with real-world data sets for better insight.',
  'Join finance forums and LinkedIn groups for networking.',
  'Consistently track your own expenses to develop habits.',
  'Keep refining your resume and LinkedIn with projects.'
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
            <FaChartPie size={40} />
          </div>
          <h1 className="text-6xl font-black text-yellow-200 drop-shadow-2xl tracking-tight mb-10">
            Finance
          </h1>
          <p className="text-3xl text-yellow-400 tracking-widest font-extrabold drop-shadow-md uppercase mb-4">
            Roadmap
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
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