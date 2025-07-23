'use client';

import { motion } from 'framer-motion';
import {
  FaUserGraduate, FaMicroscope, FaChalkboardTeacher, FaUserCog,
  FaUniversity, FaBook, FaBrain, FaBuilding, FaTools
} from 'react-icons/fa';
import {
  MdOutlineStart, MdOutlineWorkOutline,
  MdOutlineVerified, MdOutlineShare
} from 'react-icons/md';

const steps = [
  {
    stage: 'Start',
    heading: 'Know the Core Branch Scope',
    desc: 'Understand what your department offers—core domains, job roles, research areas, and relevant technologies.',
    icon: <MdOutlineStart size={24} />,
    color: 'yellow',
  },
  {
    stage: 'CGPA',
    heading: 'Focus on Academics',
    desc: 'Maintain a strong CGPA (usually >8) to be eligible for research internships and core companies.',
    icon: <FaBook size={24} />,
    color: 'cyan',
  },
  {
    stage: 'Explore',
    heading: 'Identify Research Interests',
    desc: 'Explore sub-domains by reading papers, joining technical societies, and taking relevant electives.',
    icon: <FaBrain size={24} />,
    color: 'rose',
  },
  {
    stage: 'Engage',
    heading: 'Talk to Professors & Seniors',
    desc: 'Reach out for project guidance, LORs, and help in research direction.',
    icon: <FaChalkboardTeacher size={24} />,
    color: 'green',
  },
  {
    stage: 'Internships',
    heading: 'Apply for Research Internships',
    desc: 'Apply for MITACS, DAAD, TEEP, S.N. Bose or email professors directly in India or abroad.',
    icon: <FaMicroscope size={24} />,
    color: 'blue',
  },
  {
    stage: 'Projects',
    heading: 'Start Technical Projects',
    desc: 'Work on projects with profs, contribute to lab work or solve real-world problems.',
    icon: <MdOutlineWorkOutline size={24} />,
    color: 'amber',
  },
  {
    stage: 'Certify',
    heading: 'Take Online Courses',
    desc: 'Do NPTEL, Coursera or EdX certifications in your domain to build expertise and credibility.',
    icon: <MdOutlineVerified size={24} />,
    color: 'purple',
  },
  {
    stage: 'Connect',
    heading: 'Attend Conferences & Present',
    desc: 'Present posters or attend symposiums to network and boost your research profile.',
    icon: <MdOutlineShare size={24} />,
    color: 'yellow',
  },
];

const opportunities = [
  {
    title: 'R&D (India & Abroad)',
    detail: 'Join research labs in IITs, IISc or top foreign universities. Involves deep technical work and often leads to publications.',
    icon: <FaMicroscope size={32} />,
  },
  {
    title: 'Core Companies',
    detail: 'Get placed in companies in your department’s domain—design, manufacturing, software-hardware, etc.',
    icon: <FaTools size={32} />,
  },
  {
    title: 'PSUs (via GATE)',
    detail: 'Prepare for GATE to join PSUs like ONGC, IOCL, NTPC, or BHEL. Offers good work-life balance and security.',
    icon: <FaBuilding size={32} />,
  },
  {
    title: 'Higher Studies (M.S./Ph.D.)',
    detail: 'Pursue master’s or doctoral degrees in India or abroad, leading to academia or advanced research roles.',
    icon: <FaUniversity size={32} />,
  },
  {
    title: 'Interdisciplinary Roles',
    detail: 'Use your core knowledge in adjacent domains like product, data science, or sustainability.',
    icon: <FaUserCog size={32} />,
  },
];

const tips = [
  'Use your semester breaks for short research projects or internships with professors at IITs, IISc, or NITs.',
  'Maintain a strong academic profile — CGPA matters a lot for core and research roles.',
  'Start reading IEEE or Springer papers early to understand real research trends.',
  'Create a good LinkedIn and keep a portfolio/GitHub with core projects.',
];

const colorMap: { [key: string]: string } = {
  yellow: 'text-yellow-400',
  yellow1: 'text-yellow-400',
  yellow2: 'text-yellow-400',
  yellow3: 'text-yellow-400',
  yellow4: 'text-yellow-400',
  yellow5: 'text-yellow-400',
  yellow6: 'text-yellow-400',
 
 
};

export default function CoreProfileRoadmap() {
  return (
    <main className="font-comfortaa relative bg-transparent text-yellow-100 min-h-screen py-16 sm:py-24 px-4 sm:px-6 overflow-x-hidden">

      {/* Header */}
      <section className="text-center mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-3 text-yellow-400">
            <FaUserGraduate size={40} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-50 drop-shadow-2xl tracking-tight mb-4">
            Core Profile
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-yellow-500 tracking-widest font-extrabold drop-shadow-md uppercase">
            Roadmap
          </p>
        </motion.div>
      </section>

      {/* Roadmap Timeline */}
      <section className="relative max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center sm:items-stretch">
          <div className="absolute h-full w-1 bg-gradient-to-b from-yellow-600 via-yellow-700 to-yellow-800 left-6 sm:left-1/2 sm:-translate-x-1/2 z-0"></div>
          <div className="absolute -top-8 left-6 sm:left-1/2 transform -translate-x-1/2 px-6 py-2 bg-yellow-500 text-black font-bold rounded-full shadow-lg text-sm">START</div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative w-full py-8 flex ${idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} pl-16 sm:pl-0`}
            >
              <div className="relative w-full sm:max-w-md">
                <div className={`absolute top-1/2 -translate-y-1/2 -left-16 ${idx % 2 === 0 ? 'sm:left-auto sm:-right-16' : 'sm:-left-16'} w-14 h-14 rounded-full bg-gray-900 border-4 border-yellow-500 flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 234, 0, 0.4)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-900 p-6 rounded-lg shadow-xl border-2 border-yellow-600/80 transform transition-transform duration-300 text-left"
                >
                  <p className={`${colorMap[step.color] || 'text-yellow-400'} font-bold text-sm mb-1`}>{step.stage}</p>
                  <h3 className="text-xl font-bold text-yellow-100 mb-2">{step.heading}</h3>
                  <p className="text-sm text-yellow-300 leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}

          <div className="absolute -bottom-8 left-6 sm:left-1/2 transform -translate-x-1/2 px-6 py-2 bg-yellow-500 text-black font-bold rounded-full shadow-lg text-sm">FINISH</div>
        </div>
      </section>

{/* Opportunities Section */}
<section className="relative z-10 max-w-7xl mx-auto mt-24 sm:mt-32 px-4">
  <h2 className="text-3xl sm:text-4xl text-yellow-400 font-extrabold text-center mb-12 sm:mb-16 drop-shadow-md">
    Explore Your Opportunities
  </h2>

  {/* First Row: 3 Opportunities */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center mb-8">
    {opportunities.slice(0, 3).map((opp, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 30px rgba(255, 193, 7, 0.4)' }}
        transition={{ duration: 0.3 }}
        className="text-yellow-100 w-full flex flex-col bg-zinc-900 p-6 rounded-xl shadow-lg h-full items-start text-left transform-gpu"
      >
        <div className="mb-4 text-yellow-500">{opp.icon}</div>
        <h3 className="text-lg font-extrabold text-yellow-50 mb-2">{opp.title}</h3>
        <p className="text-sm text-yellow-300">{opp.detail}</p>
      </motion.div>
    ))}
  </div>

  {/* ✅ FIX: Second Row gap changed from gap-4 to gap-2 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center max-w-2xl mx-auto">
    {opportunities.slice(3).map((opp, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 30px rgba(255, 193, 7, 0.4)' }}
        transition={{ duration: 0.3 }}
        className="text-yellow-100 w-full flex flex-col bg-zinc-900 p-6 rounded-xl shadow-lg h-full items-start text-left transform-gpu"
      >
        <div className="mb-4 text-yellow-500">{opp.icon}</div>
        <h3 className="text-lg font-extrabold text-yellow-50 mb-2">{opp.title}</h3>
        <p className="text-sm text-yellow-300">{opp.detail}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* Tips & Tricks */}
      <section className="relative z-10 max-w-5xl mx-auto mt-24 sm:mt-32 px-4">
        <h2 className="text-3xl sm:text-4xl text-yellow-400 font-extrabold text-center mb-12 drop-shadow-md">
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
              className="rounded-xl bg-zinc-900/80 border border-yellow-600/70 p-5 text-yellow-200 shadow-md hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all"
            >
              <p className="text-base leading-relaxed">{tip}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
