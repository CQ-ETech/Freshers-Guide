'use client';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import '../app/globals.css';

function LoadingText({ text, className, delay = 0, alwaysAnimate = false }: { text: string; className?: string; delay?: number; alwaysAnimate?: boolean }) {
  const [isVisible, setIsVisible] = useState(alwaysAnimate);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (alwaysAnimate) {
      setIsVisible(true);
      return;
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [alwaysAnimate]);

  return (
    <span
      ref={ref}
      className={
        (className || '') +
        ' inline-block transition-all duration-700 ease-out' +
        (isVisible ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8')
      }
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
}

function TypingText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let i = 0;
    function type() {
      setDisplayed(text.slice(0, i));
      if (i <= text.length) {
        timeout = setTimeout(type, i === 0 ? delay : 30);
        i++;
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, [text, delay]);
  return <span className={className}>{displayed}</span>;
}

function FadeInOnScroll({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <p
      ref={ref}
      className={
        className +
        ' transition-all duration-1000 ease-out' +
        (isVisible ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8')
      }
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-20 text-center w-full max-w-7xl mx-auto animate-fade-in min-h-[40vh] mt-6 mb-6">
        {/* Removed yellow animated background circles from hero section */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-center mb-8 w-full flex flex-wrap items-center justify-center gap-x-2 gap-y-2 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFF700] via-[#FFD600] to-[#FFB300] drop-shadow-lg">
            <TypingText text="Why This" />
          </span>
          <span className="inline-block px-4 py-1 rounded-2xl text-[#FFB300] font-extrabold shadow-lg mx-2 bg-transparent animate-fall absolute left-1/2 -translate-x-1/2 -top-16 sm:static sm:translate-x-0 sm:top-0" style={{animation: 'fall 1s cubic-bezier(0.23, 1, 0.32, 1)'}}>
            <TypingText text="Summer" delay={450} />
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD600] via-[#FFF700] to-[#FFF9E3] drop-shadow-lg">
            <TypingText text="Matters" delay={900} />
          </span>
          <span className="text-[#FFB300] text-4xl sm:text-6xl font-extrabold ml-2">?</span>
        </h1>
        <Link href="/profiles" className="inline-block px-8 py-3 bg-[#FFD600] text-[#181818] font-semibold rounded-full shadow-lg hover:bg-[#FFB300] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#FFD600]/40 transition-all duration-300 text-lg tracking-wide mt-4 border border-[#FFB300]/60">
          <LoadingText text="Explore Profiles" delay={1000} />
        </Link>
      </section>
      {/* 3 Vertical Sections */}
      <section className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-8 text-center w-full max-w-7xl mx-auto animate-fade-in min-h-[40vh]">
        <div className="relative z-10 flex flex-col gap-20 w-full items-stretch">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
            <img src="\thought-catalog-505eectW54k-unsplash.jpg" alt="Summer Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:mr-8" style={{objectFit: 'cover'}} />
            <FadeInOnScroll delay={50} className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-4xl font-semibold text-center md:text-right max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {"From next year onward, you'll be occupied with internships, placements, and other responsibilities. You won't get this much uninterrupted free time again — nearly 45 days of pure potential. Use this time to build a foundation for your future success."}
            </FadeInOnScroll>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-10 md:gap-20">
            <img src="\afif-ramdhasuma-jl4BQJs87Do-unsplash.jpg" alt="Alternate Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:ml-8" style={{objectFit: 'cover'}} />
            <FadeInOnScroll delay={100} className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-4xl font-semibold text-center md:text-left max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {"It's hard to master a skill between semesters. These 45 days are perfect for deep-diving into a skill, exploring career paths, and gaining real clarity. Make every day count and invest in yourself."}
            </FadeInOnScroll>
          </div>
          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
            <img src="\towfiqu-barbhuiya-Jxi526YIQgA-unsplash.jpg" alt="Resources Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:mr-8" style={{objectFit: 'cover'}} />
            <div className="flex flex-col items-center md:items-end w-full">
              <FadeInOnScroll delay={150} className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-4xl font-semibold mb-6 text-center md:text-right max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                {"Later, if you're not skilled, you'll feel FOMO. But if you're skilled, you'll feel confident. So, why not use this time to boost your confidence and future? This summer isn't just a break — it's a launchpad."}
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Add this to your global CSS (e.g., globals.css):
@keyframes fall {
  0% { transform: translateY(-120px) scale(0.7); opacity: 0; }
  70% { transform: translateY(10px) scale(1.05); opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}

@keyframes fadein {
  to { opacity: 1; }
}
.animate-fadein {
  animation: fadein 1.2s ease-out forwards;
}
*/