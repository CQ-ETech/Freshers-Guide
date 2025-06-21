'use client';
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react';
import GoldParticles from '../../components/GoldParticles';
import { motion } from 'framer-motion';
import InteractiveSphere from '../../components/InteractiveSphere';

const timelineData = [
  {
    title: "Semester 1",
    months: "Aug 2024 – Nov 2024",
    note: "Orientation, foundation courses, explore campus life",
    color: "from-emerald-500 to-teal-600",
    details: [
      "Attend orientation and get to know your batchmates and campus.",
      "Focus on building a strong academic foundation.",
      "Explore clubs, societies, and hostel life.",
      "Don't hesitate to ask seniors for help and guidance.",
      "Balance academics and fun—this is your time to settle in!"
    ]
  },
  {
    title: "Winter Break",
    months: "Dec 2024",
    note: "Rest, travel, or try a short online course",
    color: "from-blue-500 to-cyan-600",
    details: [
      "Take a well-deserved break after your first semester.",
      "Visit home, travel, or explore new hobbies.",
      "Try a short online course if you're curious about something new."
    ]
  },
  {
    title: "Semester 2",
    months: "Jan 2025 – Apr 2025",
    note: "Continue basics, join clubs, start networking",
    color: "from-green-500 to-emerald-600",
    details: [
      "Get more involved in clubs and societies.",
      "Start building your network—talk to seniors and professors.",
      "Focus on time management and healthy routines.",
      "Explore different domains to find your interests."
    ]
  },
  {
    title: "Summer Break",
    months: "May 2025 – July 2025",
    note: "Perfect time to build skills, do projects, or intern",
    color: "from-orange-500 to-red-600",
    details: [
      "Work on a personal project or learn a new skill online.",
      "Consider internships, volunteering, or research if possible.",
      "Reflect on your first year and set goals for the next semester."
    ]
  },
  {
    title: "Semester 3",
    months: "Aug 2025 – Nov 2025",
    note: "Explore domains, build basics",
    color: "from-purple-500 to-indigo-600",
    details: [
      "Dive deeper into your chosen domains.",
      "Start working on more advanced projects.",
      "Seek mentorship from professors and seniors.",
      "Balance academics with extracurricular activities."
    ]
  },
  {
    title: "Winter Break",
    months: "Dec 2025",
    note: "Short break — relax or learn something new",
    color: "from-red-500 to-pink-600",
    details: [
      "Take a short break to relax and recharge.",
      "Consider learning something new or working on a small project.",
      "Spend time with family and friends."
    ]
  },
  {
    title: "Semester 4",
    months: "Jan 2026 – Apr 2026",
    note: "Start deep diving into a chosen skill",
    color: "from-yellow-500 to-orange-600",
    details: [
      "Focus on mastering a specific skill or domain.",
      "Work on projects that showcase your expertise.",
      "Network with professionals in your field of interest.",
      "Prepare for upcoming internship opportunities."
    ]
  },
  {
    title: "Summer Break",
    months: "May 2026 – July 2026",
    note: "Ideal time to be good in a particular skill",
    color: "from-indigo-500 to-purple-600",
    details: [
      "Use this time to become proficient in a particular skill.",
      "Work on personal projects or freelance work.",
      "Consider internships or research opportunities."
    ]
  },
  {
    title: "Semester 5",
    months: "Aug 2026 – Nov 2026",
    note: "CDC Internships",
    color: "from-teal-500 to-cyan-600",
    details: [
      "Apply for CDC internships and prepare for interviews.",
      "Focus on building a strong resume and portfolio.",
      "Seek guidance from career counselors and mentors.",
      "Continue working on projects and improving your skills."
    ]
  },
  {
    title: "Winter Break",
    months: "Dec 2026",
    note: "Prep for next internship season or build projects",
    color: "from-pink-500 to-rose-600",
    details: [
      "Prepare for the next internship season.",
      "Work on personal projects or freelance work.",
      "Take some time to relax and recharge."
    ]
  },
  {
    title: "Semester 6",
    months: "Jan 2027 – Apr 2027",
    note: "Master your skills in a domain / Off campus internship",
    color: "from-amber-500 to-yellow-600",
    details: [
      "Focus on mastering your skills in a specific domain.",
      "Consider off-campus internships for more experience.",
      "Work on advanced projects and research.",
      "Network with professionals and attend industry events."
    ]
  },
  {
    title: "Summer Break",
    months: "May 2027 – July 2027",
    note: "Internship",
    color: "from-violet-500 to-purple-600",
    details: [
      "Complete an internship to gain practical experience.",
      "Apply your skills in a real-world setting.",
      "Network with professionals and learn from your colleagues.",
      "Reflect on your internship experience and set future goals."
    ]
  },
  {
    title: "Semester 7",
    months: "Aug 2027 – Nov 2027",
    note: "Prep mode for placements",
    color: "from-rose-500 to-pink-600",
    details: [
      "Prepare for the final placement season.",
      "Focus on building a strong resume and portfolio.",
      "Practice interview skills and attend mock interviews.",
      "Seek guidance from career counselors and mentors."
    ]
  },
  {
    title: "Placements",
    months: "Dec 2027",
    note: "Final placement season",
    color: "from-green-500 to-emerald-600",
    details: [
      "Participate in the final placement season.",
      "Apply for jobs and attend interviews.",
      "Network with recruiters and professionals.",
      "Celebrate your achievements and plan for the future."
    ]
  },
  {
    title: "Semester 8",
    months: "Jan 2028 – Apr 2028",
    note: "Chill semester or thesis, depending on profile",
    color: "from-blue-500 to-indigo-600",
    details: [
      "Relax and enjoy your final semester.",
      "Work on your thesis or final projects.",
      "Spend time with friends and make lasting memories.",
      "Prepare for graduation and the next phase of your life."
    ]
  },
]

export default function Timeline() {
  const [visible, setVisible] = useState(0);
  const cardRefs = useRef<(HTMLDivElement|null)[]>([]);
  const barContainerRef = useRef<HTMLDivElement|null>(null);
  const progressBarRef = useRef<HTMLDivElement|null>(null);

  // Use refs to store values that change frequently without causing re-renders
  const checkpointPositionsRef = useRef<number[]>([]);
  const visibleIndexRef = useRef<number>(0);
  const barStyleRef = useRef<{top: number, height: number}>({top: 0, height: 0});

  useEffect(() => {
    const cardElements = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const progressBar = progressBarRef.current;
    const barContainer = barContainerRef.current;
    if (cardElements.length === 0 || !progressBar || !barContainer) return;

    // --- 1. Calculate static positions ONCE ---
    const calculatePositions = () => {
      const containerRect = barContainer.getBoundingClientRect();
      const positions = cardElements.map(card => {
        const cardRect = card.getBoundingClientRect();
        return cardRect.top + cardRect.height / 2 - containerRect.top;
      });
      checkpointPositionsRef.current = positions;

      if (positions.length > 1) {
        const top = positions[0];
        const height = positions[positions.length - 1] - positions[0];
        barStyleRef.current = { top, height };
        // Directly update bar style to prevent re-render
        barContainer.style.setProperty('--bar-top', `${top}px`);
        barContainer.style.setProperty('--bar-height', `${height}px`);
      }
    };

    calculatePositions(); // Initial calculation

    // --- 2. Optimized scroll handler ---
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // --- Update progress bar fill ---
          const containerRect = barContainer.getBoundingClientRect();
          const scrollY = window.scrollY;
          const containerTop = containerRect.top + scrollY;
          const firstCheckpoint = checkpointPositionsRef.current[0] + containerTop;
          const lastCheckpoint = checkpointPositionsRef.current[checkpointPositionsRef.current.length-1] + containerTop;
          const centerY = scrollY + window.innerHeight / 2;
          let percent = ((centerY - firstCheckpoint) / (lastCheckpoint - firstCheckpoint)) * 100;
          percent = Math.max(0, Math.min(100, percent));
          progressBar.style.height = `${percent}%`;

          // --- Update visible card state (only if changed) ---
          let minDist = Infinity;
          let newVisibleIndex = 0;
          cardElements.forEach((card, i) => {
            const rect = card.getBoundingClientRect();
            const dist = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
            if (dist < minDist) {
              minDist = dist;
              newVisibleIndex = i;
            }
          });
          
          if (visibleIndexRef.current !== newVisibleIndex) {
            visibleIndexRef.current = newVisibleIndex;
            setVisible(newVisibleIndex);
          }

          ticking = false;
        });
        ticking = true;
      }
    };
    
    // --- 3. Attach event listeners ---
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculatePositions, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculatePositions);
    };
  }, []); // Empty dependency array means this runs only once on mount

  const checkpointCount = timelineData.length;

  return (
    <div className="min-h-screen bg-[#181818] text-[#FFF8E4] py-12 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#181818] via-[#731900]/30 to-[#181818] pointer-events-none z-[1]"></div>
      
      {/* Animated background patterns */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFBB00]/5 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FFBB00]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-[#FFEA00]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Gold particles background */}
      <GoldParticles />

      {/* Content */}
      <div className="relative z-[3]">
        {/* Enhanced Hero Section */}
        <section className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden mb-20">
          {/* Full-width heading section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="z-10 w-full text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFEA00] via-[#FFBB00] to-[#FFD700] drop-shadow-[0_4px_24px_rgba(255,187,0,0.4)]"
            >
              Your College Timeline
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-[#FFF8E4]/90 mb-4 font-light max-w-3xl mx-auto"
            >
              Navigate your journey at IIT Kharagpur, semester by semester.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg text-[#FFF8E4]/70 max-w-2xl mx-auto"
            >
              From orientation to placements, track your progress and plan ahead for every phase of your undergraduate life.
            </motion.p>
          </motion.div>

          {/* Main content grid */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: CTA and Stats */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                className="space-y-8"
              >
                {/* Call-to-Action Button */}
                <div className="space-y-4">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // Find the first timeline card
                      const firstCard = cardRefs.current[0];
                      if (firstCard) {
                        // Scroll to the first card with some offset for better visibility
                        firstCard.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'center'
                        });
                        
                        // Set the first card as visible after a short delay
                        setTimeout(() => {
                          setVisible(0);
                        }, 500);
                      }
                    }}
                    className="w-full bg-gradient-to-r from-[#FFEA00] to-[#FFBB00] text-[#181818] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Start Your Journey
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFEA00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Center Column: Interactive Sphere */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                className="flex justify-center"
              >
                <div className="w-[350px] h-[350px] z-0">
                  <InteractiveSphere />
                </div>
              </motion.div>

              {/* Right Column: Timeline Overview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Main Info Card */}
                <div className="bg-gradient-to-br from-[#181818]/95 to-[#731900]/20 backdrop-blur-md border border-[#FFBB00]/20 rounded-2xl p-6 shadow-2xl">
                  <h3 className="text-xl font-bold text-[#FFEA00] mb-6 text-center">
                    Timeline Overview
                  </h3>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FFEA00] mb-1">8</div>
                      <div className="text-sm text-[#FFF8E4]/70 font-medium">Semesters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FFEA00] mb-1">4</div>
                      <div className="text-sm text-[#FFF8E4]/70 font-medium">Years</div>
                    </div>
                  </div>

                  {/* Essential Tips */}
                  <div>
                    <h4 className="text-base font-semibold text-[#FFEA00] mb-3">Key Insights</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#FFBB00] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-[#FFF8E4]/80 leading-relaxed">Start networking from semester 1</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#FFBB00] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-[#FFF8E4]/80 leading-relaxed">Build skills during summer breaks</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#FFBB00] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-[#FFF8E4]/80 leading-relaxed">Focus on placements from semester 5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Background glow for the whole section */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-transparent to-[#181818]"></div>
            <div className="absolute bottom-0 left-0 h-full w-1/2 bg-gradient-to-t from-[#731900]/20 to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-b from-[#181818] to-transparent"></div>
          </div>
        </section>

        {/* Enhanced Vertical Progress Tube */}
        <div 
          ref={barContainerRef} 
          className="absolute left-0 top-0 h-full flex flex-col items-center justify-center z-50" 
          style={{ 
            width:'80px', 
            '--bar-top': `${barStyleRef.current.top}px`,
            '--bar-height': `${barStyleRef.current.height}px`,
          } as React.CSSProperties}
        >
          <div
            className="relative w-4 bg-gradient-to-b from-[#731900] to-[#181818] border-2 border-[#FFBB00] rounded-full overflow-visible shadow-2xl flex items-start ml-[calc(50vw-600px)]"
            style={{
              position: 'absolute',
              top: 'var(--bar-top)',
              height: 'var(--bar-height)',
              transition: 'top 0.2s, height 0.2s',
              boxShadow: '0 0 30px rgba(255, 187, 0, 0.3), inset 0 0 20px rgba(0,0,0,0.5)',
            }}
          >
            <div 
              id="timeline-progress-bar-vert" 
              ref={progressBarRef} 
              className="absolute left-0 top-0 w-full rounded-full transition-all duration-300 ease-out shadow-[0_0_32px_8px_#FFBB0099]" 
              style={{ height: '0%' }}
            >
              <div className="w-full h-full bg-gradient-to-b from-[#FFEA00] via-[#FFBB00] to-[#731900] relative overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 w-full h-full animate-shine bg-gradient-to-r from-transparent via-[#FFF8E4]/80 to-transparent opacity-80 mix-blend-screen" style={{backgroundSize:'200% 100%'}}></div>
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{boxShadow:'0 0 32px 8px #FFBB0099, 0 0 64px 16px #FFEA0044'}}></div>
              </div>
            </div>

            {/* Enhanced Checkpoints */}
            {checkpointPositionsRef.current.length === checkpointCount && checkpointPositionsRef.current.map((pos, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 z-20 flex items-center justify-center transition-all duration-500 cursor-pointer
                  ${visible >= i
                    ? 'bg-gradient-to-br from-[#FFEA00] to-[#FFBB00] border-[#FFF8E4] shadow-[0_0_16px_6px_rgba(255,187,0,0.6),0_0_0_4px_rgba(255,248,228,0.3)] scale-110'
                    : 'bg-gradient-to-br from-[#731900] to-[#181818] border-[#FFBB00]/50 opacity-80 hover:opacity-100 hover:border-[#FFBB00] hover:scale-105'}`}
                style={{ top: pos - barStyleRef.current.top - 12, transform: 'translateX(-50%)' }}
              >
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${visible >= i ? 'bg-[#FFF8E4] shadow-[0_0_8px_2px_rgba(255,248,228,0.8)]' : 'bg-[#731900]'}`}></div>
                <span className="absolute -bottom-6 text-xs font-medium text-[#FFBB00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {timelineData[i].title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Timeline Cards */}
        <div className="flex flex-col gap-20 max-w-5xl mx-auto relative z-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: visible === index ? 1 : 0.6, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`group relative bg-gradient-to-br from-[#181818]/90 via-[#181818]/80 to-[#731900]/40 backdrop-blur-md border-l-8 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-700 min-h-[450px] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)] 
                ${visible === index 
                  ? 'border-[#FFBB00] scale-105 ring-2 ring-[#FFBB00]/30 shadow-[0_0_60px_-15px_rgba(255,187,0,0.8)]' 
                  : 'border-[#731900] hover:border-[#FFBB00]/50 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,187,0,0.5)]'
                }`}
            >
              {/* Enhanced decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFBB00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFBB00]/10 via-transparent to-[#FFEA00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Floating badge for current semester */}
              {visible === index && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FFEA00] to-[#FFBB00] text-[#181818] px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
                >
                  Current
                </motion.div>
              )}
              
              {/* Icon and Header Section */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-start w-64 md:w-80 relative z-10 transform transition-transform duration-500 group-hover:translate-x-2">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FFEA00] to-[#FFBB00] transition-all duration-300 group-hover:scale-105 transform"
                >
                  {item.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-xl text-[#FFBB00] mb-3 opacity-90 group-hover:opacity-100 transition-all duration-300 font-medium"
                >
                  {item.months}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="text-lg text-[#FFF8E4]/80 font-medium mb-3 group-hover:text-[#FFF8E4] transition-colors duration-300"
                >
                  {item.note}
                </motion.p>
              </div>
              
              {/* Details Section */}
              <div className="flex-1 text-left relative z-10 transform transition-all duration-500 group-hover:translate-x-3">
                <ul className="list-none space-y-4 text-lg text-[#FFF8E4]/90">
                  {item.details && item.details.map((d, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: visible === index ? 1 : 0.7, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 + i * 0.1 }}
                      className="group-hover:text-[#FFF8E4] transition-all duration-300 group-hover:translate-x-2 transform flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#FFEA00] to-[#FFBB00] rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="leading-relaxed">{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
          {/* Scroll to Top Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#FFEA00] to-[#FFBB00] text-[#181818] p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
          
          {/* Progress Indicator */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-[#181818]/50 backdrop-blur-md text-white p-3 rounded-full shadow-lg border border-[#FFBB00]/30"
          >
            <div className="text-center">
              <div className="text-sm font-medium">{visible + 1}</div>
              <div className="text-xs opacity-70">of {timelineData.length}</div>
            </div>
          </motion.div>
        </div>

        <style>{`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .animate-shine {
            animation: shine 2s linear infinite;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}