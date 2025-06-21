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
      <section className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-24 text-center w-full max-w-4xl mx-auto animate-fade-in min-h-[40vh] mt-6 mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF700] via-[#FFD600] to-[#FFB300] py-4">
          Welcome to <span className="inline-block">IIT Kharagpur</span>
        </h1>
        <p className="text-lg md:text-2xl text-[#FFF8E4] mb-2 font-medium max-w-2xl mx-auto">
          Your journey starts here. Explore, connect, and grow with the best opportunities and guidance for freshers.
        </p>
        <p className="text-base text-[#FFF8E4]/80 mb-8 max-w-2xl mx-auto">
          From orientation to placements, track your progress and plan ahead for every phase of your undergraduate life.
        </p>
        <Link href="/profiles" className="inline-block px-8 py-3 bg-[#FFD600] text-[#181818] font-semibold rounded-full shadow-lg hover:bg-[#FFB300] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#FFD600]/40 transition-all duration-300 text-lg tracking-wide mt-4 border border-[#FFB300]/60">
          Explore Profiles
        </Link>
      </section>
      {/* 3 Vertical Sections */}
      <section className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-8 text-center w-full max-w-7xl mx-auto animate-fade-in min-h-[40vh]">
        <div className="relative z-10 flex flex-col gap-20 w-full items-stretch">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
            <img src="/thought-catalog-505eectW54k-unsplash.jpg" alt="Freshers Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:mr-8" style={{objectFit: 'cover'}} />
            <FadeInOnScroll delay={50} className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-3xl font-semibold text-left max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {`Your first year is for exploring, making friends, and enjoying campus life. Build good habits and a strong foundation. Take time to discover your interests—there's no rush! Attend orientation, get to know your batchmates, and don't hesitate to ask for help.`}
            </FadeInOnScroll>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-10 md:gap-20">
            <img src="/afif-ramdhasuma-jl4BQJs87Do-unsplash.jpg" alt="Clubs Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:ml-8" style={{objectFit: 'cover'}} />
            <FadeInOnScroll delay={100} className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-3xl font-semibold text-center md:text-left max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {`Try out clubs, sports, and events. Participate in fests, workshops, and team activities to learn beyond academics. Start building your network and learn from seniors—they're here to guide you. Explore different domains to find what excites you.`}
            </FadeInOnScroll>
          </div>
          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
            <img src="/towfiqu-barbhuiya-Jxi526YIQgA-unsplash.jpg" alt="Growth Visual" className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover object-center mb-6 md:mb-0 md:mr-8" style={{objectFit: 'cover'}} />
            <div className="flex flex-col items-center md:items-end w-full">
              <FadeInOnScroll delay={150} className="leading-relaxed text-[#FFF9E3] text-lg sm:text-2xl md:text-3xl font-semibold mb-6 text-left max-w-2xl md:max-w-3xl md:self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                {`Focus on your well-being, enjoy hostel life, and keep learning. Use your first year to try new things, make mistakes, and grow. The confidence and skills you gain now will help you in every step ahead. Remember, IIT Kharagpur offers endless opportunities—academics, research, entrepreneurship, and more. Stay curious and make your journey count!`}
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}