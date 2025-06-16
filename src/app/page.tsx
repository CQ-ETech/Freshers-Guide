'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function LoadingText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let i = 0;
    function showNext() {
      setDisplayed(text.slice(0, i + 1));
      if (i < text.length - 1) {
        i++;
        timeout = setTimeout(showNext, 12);
      }
    }
    const start = setTimeout(showNext, delay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(start);
    };
  }, [text, delay]);
  return <span className={className}>{displayed}</span>;
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-20 text-center w-full max-w-7xl mx-auto animate-fade-in min-h-[40vh] mt-6 mb-6">
        <div className="absolute -top-32 -right-32 w-[20rem] h-[20rem] sm:w-[28rem] sm:h-[28rem] bg-gradient-to-bl from-[#FFEA00]/30 via-[#FFBB00]/20 to-[#FF9900]/10 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-32 -left-32 w-[20rem] h-[20rem] sm:w-[28rem] sm:h-[28rem] bg-gradient-to-tl from-[#FF9900]/30 via-[#FFEA00]/20 to-[#FFBB00]/10 rounded-full blur-2xl z-0" />
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-center mb-8 w-full flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFF9E3] via-[#FFEA00] to-[#FF9900] drop-shadow-lg">
            <LoadingText text="Why This" />
          </span>
          <span className="inline-block px-4 py-1 rounded-2xl bg-gradient-to-br from-[#FFEA00] to-[#FF9900] text-black font-extrabold shadow-lg mx-2">
            <LoadingText text="Summer" delay={450} />
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFEA00] via-[#FF9900] to-[#FFF9E3] drop-shadow-lg">
            <LoadingText text="Matters" delay={700} />
          </span>
        </h1>
    <Link href="/profiles" className="inline-block px-6 py-2 bg-gradient-to-r from-[#FF9900] to-[#FFEA00] text-[#181818] font-bold rounded-lg shadow-lg hover:scale-105 hover:shadow-yellow-400/60 hover:-translate-y-1 hover:bg-gradient-to-l hover:from-[#FFEA00] hover:to-[#FF9900] focus:outline-none focus:ring-4 focus:ring-[#FFEA00]/50 transition-all duration-300 text-base tracking-wide mt-4">
          <LoadingText text="Explore Profiles" delay={1000} />
        </Link>
      </section>
      {/* 3 Vertical Sections */}
      <section className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-8 text-center w-full max-w-7xl mx-auto animate-fade-in min-h-[40vh]">
        <div className="relative z-10 flex flex-col gap-20 w-full items-stretch">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
            <img src="\thought-catalog-505eectW54k-unsplash.jpg" alt="Summer Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:mr-8" style={{objectFit: 'cover'}} />
            <p className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-4xl font-semibold text-center md:text-right max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              <LoadingText text={"From next year onward, you'll be occupied with internships, placements, and other responsibilities. You won't get this much uninterrupted free time again — nearly 45 days of pure potential. Use this time to build a foundation for your future success."} delay={200} />
            </p>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-10 md:gap-20">
            <img src="\afif-ramdhasuma-jl4BQJs87Do-unsplash.jpg" alt="Alternate Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:ml-8" style={{objectFit: 'cover'}} />
            <p className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-4xl font-semibold text-center md:text-left max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              <LoadingText text={"It's hard to master a skill between semesters. These 45 days are perfect for deep-diving into a skill, exploring career paths, and gaining real clarity. Make every day count and invest in yourself."} delay={400} />
            </p>
          </div>
          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
            <img src="\towfiqu-barbhuiya-Jxi526YIQgA-unsplash.jpg" alt="Resources Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:mr-8" style={{objectFit: 'cover'}} />
            <div className="flex flex-col items-center md:items-end w-full">
              <p className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-4xl font-semibold mb-6 text-center md:text-right max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                <LoadingText text={"Later, if you're not skilled, you'll feel FOMO. But if you're skilled, you'll feel confident. So, why not use this time to boost your confidence and future? This summer isn't just a break — it's a launchpad."} delay={600} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}