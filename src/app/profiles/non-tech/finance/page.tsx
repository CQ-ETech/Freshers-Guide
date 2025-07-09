'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaChartPie, FaSearchDollar, FaBullhorn,
  FaBalanceScale, FaBriefcase
} from 'react-icons/fa';
import {
  MdOutlineStart, MdOutlineTrendingUp, MdOutlineCalculate, MdOutlineChecklist,
  MdOutlineSchool, MdOutlineWorkOutline, MdOutlineVerified, MdOutlineShare
} from 'react-icons/md';

const steps = [
  { stage: 'Start', heading: 'Basics of Finance', desc: 'Begin your finance journey by building a strong foundation in key areas like accounting principles, economic fundamentals, and basic finance concepts that govern business decisions.', icon: <MdOutlineStart size={24} />, color: 'cyan' },
  { stage: 'Explore', heading: 'Financial Markets', desc: 'Delve into the structure and functioning of stock exchanges, bond markets, mutual funds, and discover how global markets influence investment strategies.', icon: <MdOutlineTrendingUp size={24} />, color: 'amber' },
  { stage: 'Tools', heading: 'Financial Tools', desc: 'Master the use of essential financial tools such as Excel, Google Sheets, and popular platforms like QuickBooks or Tally for budgeting, modeling, and forecasting.', icon: <MdOutlineCalculate size={24} />, color: 'rose' },
  { stage: 'Planning', heading: 'Budget & Forecast', desc: 'Learn how to plan personal finances and corporate budgets effectively. Understand forecasting techniques to anticipate financial outcomes and align strategies.', icon: <MdOutlineChecklist size={24} />, color: 'blue' },
  { stage: 'Learn', heading: 'Courses & MOOCs', desc: 'Boost your knowledge with structured courses from platforms like Coursera, NPTEL, or Udemy, focusing on niche areas such as investment banking, corporate finance, or valuation.', icon: <MdOutlineSchool size={24} />, color: 'emerald' },
  { stage: 'Apply', heading: 'Projects & Internships', desc: 'Put theory into practice through internships, student-led consulting projects, or simulations that reflect real-world finance problems and sharpen decision-making.', icon: <MdOutlineWorkOutline size={24} />, color: 'green' },
  { stage: 'Certify', heading: 'Finance Certifications', desc: 'Elevate your profile with credentials such as CFA, FRM, NSE, or BMC. These industry-recognized certifications validate your expertise and open global career paths.', icon: <MdOutlineVerified size={24} />, color: 'yellow' },
  { stage: 'Showcase', heading: 'Portfolio Building', desc: 'Create a professional portfolio that demonstrates your capabilities through detailed project reports, investment analysis, and blog posts on platforms like LinkedIn.', icon: <MdOutlineShare size={24} />, color: 'purple' },
];

const opportunities = [
  { title: 'Finance Analyst Roles', detail: 'Work with startups or corporates analyzing financial data.', icon: <FaChartPie size={32} /> },
  { title: 'Investment Research', detail: 'Join equity research teams or work with financial advisors.', icon: <FaSearchDollar size={32} /> },
  { title: 'Corporate Strategy', detail: 'Contribute to financial modeling and strategic planning.', icon: <FaBalanceScale size={32} /> },
  { title: 'Financial Journalism', detail: 'Write or report on markets, policy, and business trends.', icon: <FaBullhorn size={32} /> },
  { title: 'Freelance Finance Consulting', detail: 'Offer budgeting, forecasting, and planning services.', icon: <FaBriefcase size={32} /> },
];

const tips = [
  'Stay updated with financial news through platforms like Bloomberg or Mint, and set daily reading habits to build market awareness.',
  'Practice analyzing real company financial statements using annual reports; focus on revenue streams, liabilities, and ratios.',
  'Build your LinkedIn presence—share insights, follow finance professionals, and engage in finance-related conversations to grow your network.',
  'Create a habit of tracking your own expenses or mock investments using tools like Google Sheets or apps like Zerodha Coin.',
  'Maintain a dynamic resume or personal website that highlights your certifications, finance projects, and learning milestones.',
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
            <FaChartPie size={40} />
          </div>
          <h1 className="text-6xl font-black text-yellow-50 drop-shadow-2xl tracking-tight mb-4">
            Finance
          </h1>
          <p className="text-3xl text-yellow-500 tracking-widest font-extrabold drop-shadow-md uppercase">
            Roadmap
          </p>
        </motion.div>
      </section>

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
                  style={{ borderColor: '#bfa600' }}
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
