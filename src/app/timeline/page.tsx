'use client';
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react';
import GoldParticles from '../../components/GoldParticles';
import { motion } from 'framer-motion';

const timelineData = [
  {
    title: "Semester 1",
    months: "Aug 2024 – Nov 2024",
    note: "Orientation, foundation courses, explore campus life",
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
    details: [
      "Use this time to become proficient in a particular skill.",
      "Work on personal projects.",
      "Make you resume and Consider internships or research opportunities."
    ]
  },
  {
    title: "Semester 5",
    months: "Aug 2026 – Nov 2026",
    note: "CDC Internships",
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
    note: "Prep for next internship phase build projects",
    details: [
      "Prepare for the next internship phase.",
      "Work on personal projects.",
      "Take some time to relax and recharge."
    ]
  },
  {
    title: "Semester 6",
    months: "Jan 2027 – Apr 2027",
    note: "Master your skills in a domain / Off campus internship",
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
  const [checkpointPositions, setCheckpointPositions] = useState<number[]>([]);
  const [barStyle, setBarStyle] = useState<{top: number, height: number}>({top: 0, height: 0});

  // Calculate which card is visible (centered)
  useEffect(() => {
    const handleScroll = () => {
      let minDist = Infinity;
      let sel = 0;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height/2 - window.innerHeight/2);
        if (dist < minDist) {
          minDist = dist;
          sel = i;
        }
      });
      setVisible(sel);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamically calculate checkpoint positions (center of each card) and bar position/height
  useEffect(() => {
    const updatePositions = () => {
      const positions: number[] = [];
      const container = barContainerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      cardRefs.current.forEach(card => {
        if (!card) return positions.push(0);
        const cardRect = card.getBoundingClientRect();
        // Position relative to container top
        const center = cardRect.top + cardRect.height/2 - containerRect.top;
        positions.push(center);
      });
      setCheckpointPositions(positions);
      // Set bar style (top and height)
      if (positions.length > 1) {
        const top = positions[0];
        const height = positions[positions.length - 1] - positions[0];
        setBarStyle({ top, height });
      }
    };
    updatePositions();
    window.addEventListener('resize', updatePositions);
    window.addEventListener('scroll', updatePositions);
    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', updatePositions);
    };
  }, []);

  // Progress bar fill calculation (relative to bar)
  useEffect(() => {
    const handleProgress = () => {
      const container = barContainerRef.current;
      if (!container || checkpointPositions.length < 2) return;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top + scrollY;
      // Get absolute positions of first and last checkpoint
      const first = checkpointPositions[0] + containerTop;
      const last = checkpointPositions[checkpointPositions.length-1] + containerTop;
      const centerY = scrollY + windowHeight/2;
      let percent = ((centerY - first) / (last - first)) * 100;
      percent = Math.max(0, Math.min(100, percent));
      const progressBar = document.getElementById('timeline-progress-bar-vert');
      if (progressBar) progressBar.style.height = percent + '%';
    };
    handleProgress();
    window.addEventListener('scroll', handleProgress);
    window.addEventListener('resize', handleProgress);
    return () => {
      window.removeEventListener('scroll', handleProgress);
      window.removeEventListener('resize', handleProgress);
    };
  }, [checkpointPositions]);

  const checkpointCount = timelineData.length;

  return (
    <div className="min-h-screen bg-[#181818] text-[#FFF8E4] py-12 px-6 relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[url('/pexels-pixabay-235992.jpg')] opacity-5 bg-cover bg-center pointer-events-none z-[1]"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-[#181818] pointer-events-none z-[2]"></div>
      <GoldParticles />

      {/* Content */}
      <div className="relative z-[4]">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-2 sm:px-4 py-24 text-center w-full max-w-4xl mx-auto animate-fade-in min-h-[40vh] mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF700] via-[#FFD600] to-[#FFB300] py-4">
            Your College Timeline
          </h1>
          <p className="text-lg md:text-2xl text-[#FFF8E4] mb-2 font-medium max-w-2xl mx-auto">
            See your journey at IIT Kharagpur, semester by semester.
          </p>
          <p className="text-base text-[#FFF8E4]/80 mb-8 max-w-2xl mx-auto">
            From orientation to placements, track your progress and plan ahead for every phase of your undergraduate life.
          </p>
        </section>

        {/* Vertical Progress Tube */}
        <div ref={barContainerRef} className="absolute left-0 top-0 h-full flex flex-col items-center justify-center z-50" style={{width:'80px'}}>
          <div
            className="relative w-3 bg-[#150000] border-2 border-[#FFBB00] rounded-full overflow-visible shadow-2xl flex items-start ml-[calc(50vw-600px)]"
            style={{
              position: 'absolute',
              top: barStyle.top,
              height: barStyle.height,
              transition: 'top 0.2s, height 0.2s',
              boxShadow: '0 0 20px rgba(255, 187, 0, 0.2)',
            }}
          >
            <div id="timeline-progress-bar-vert" className="absolute left-0 top-0 w-full rounded-full transition-all duration-300 ease-out shadow-[0_0_32px_8px_#FFBB0099]" style={{ height: '0%' }}>
              <div className="w-full h-full bg-gradient-to-b from-[#FFEA00] via-[#FFBB00] to-[#731900] relative overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 w-full h-full animate-shine bg-gradient-to-r from-transparent via-[#FFF8E4]/80 to-transparent opacity-80 mix-blend-screen" style={{backgroundSize:'200% 100%'}}></div>
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{boxShadow:'0 0 32px 8px #FFBB0099, 0 0 64px 16px #FFEA0044'}}></div>
              </div>
            </div>

            {/* Checkpoints */}
            {checkpointPositions.length === checkpointCount && checkpointPositions.map((pos, i) => (
              <div
                key={i}
                className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 z-20 flex items-center justify-center transition-all duration-500
                  ${visible >= i
                    ? 'bg-[#FFBB00] border-[#FFF8E4] shadow-[0_0_16px_6px_#FFBB0099,0_0_0_4px_#FFEA0055] scale-110'
                    : 'bg-[#150000] border-[#731900] opacity-80 hover:opacity-100 hover:border-[#FFBB00] hover:scale-105'}`}
                style={{ top: pos - barStyle.top - 12 }}
              >
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${visible >= i ? 'bg-[#FFF8E4] shadow-[0_0_8px_2px_#FFEA0099]' : 'bg-[#731900]/40'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="flex flex-col gap-16 max-w-4xl mx-auto relative z-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: visible === index ? 1 : 0.7, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`group bg-gradient-to-br from-[#150000]/95 via-[#150000]/90 to-[#731900]/20 backdrop-blur-sm border-l-8 rounded-2xl p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-10 relative transition-all duration-700 min-h-[400px] transform perspective-1000 hover:rotate-y-2 hover:-rotate-x-2 
                ${visible === index 
                  ? 'border-[#FFBB00] scale-105 ring-2 ring-[#FFEA00]/30 shadow-[0_0_50px_-12px_#FFBB00]' 
                  : 'border-[#731900] hover:border-[#FFBB00]/50 hover:scale-[1.03] hover:shadow-[0_0_30px_-5px_#FFBB00]'
                }`}
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFBB00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFBB00]/10 via-transparent to-[#FFEA00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="flex-shrink-0 flex flex-col items-center md:items-start w-56 md:w-72 relative z-10 transform transition-transform duration-500 group-hover:translate-x-2">
                <h2 className="text-4xl font-bold mb-3 text-[#FFBB00] group-hover:text-[#FFEA00] transition-colors duration-300 group-hover:scale-105 transform">{item.title}</h2>
                <p className="text-xl text-[#FFEA00] mb-3 opacity-90 group-hover:opacity-100 transition-all duration-300">{item.months}</p>
                <p className="text-lg text-[#FFF8E4] font-medium mb-3 group-hover:text-[#FFEA00]/90 transition-colors duration-300">{item.note}</p>
              </div>
              <div className="flex-1 text-left relative z-10 transform transition-all duration-500 group-hover:translate-x-3">
                <ul className="list-disc pl-8 space-y-4 text-xl text-[#FFF8E4]/90">
                  {item.details && item.details.map((d, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: visible === index ? 1 : 0.7, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group-hover:text-[#FFF8E4] transition-colors duration-300 group-hover:translate-x-1 transform"
                    >
                      {d}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .animate-shine {
            animation: shine 1.2s linear infinite;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
          .rotate-y-2 {
            transform: rotateY(2deg);
          }
          .rotate-x-2 {
            transform: rotateX(2deg);
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
        `}</style>
      </div>
    </div>
  );
}