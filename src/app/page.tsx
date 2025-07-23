"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "../app/globals.css";

function FadeInOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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
        " transition-all duration-1000 ease-out" +
        (isVisible ? " opacity-100 translate-y-0" : " opacity-0 translate-y-8")
      }
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 text-center w-full max-w-4xl mx-auto animate-fade-in min-h-[40vh] mt-4 mb-10 sm:mb-16">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF700] via-[#FFD600] to-[#FFB300] py-4 font-comfortaa">
          Welcome to <span className="inline-block">IIT Kharagpur</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-[#FFF8E4] mb-2 font-medium max-w-2xl mx-auto font-comfortaa">
          Your journey starts here. Explore, connect, and grow with the best
          opportunities and guidance for freshers.
        </p>
        <p className="text-sm sm:text-base text-[#FFF8E4]/80 mb-8 max-w-2xl mx-auto font-comfortaa">
          From orientation to placements, track your progress and plan ahead for
          every phase of your undergraduate life.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/profiles"
            className="inline-block px-6 sm:px-8 py-3 bg-[#FFD600] text-[#181818] font-semibold rounded-lg shadow-lg hover:bg-[#FFB300] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#FFD600]/40 transition-all duration-300 text-base sm:text-lg tracking-wide mt-4 border border-[#FFB300]/60 font-comfortaa"
          >
            Explore Profiles
          </Link>

          <a
            href="#extras"
            className="inline-block px-6 sm:px-8 py-3 bg-[#FFD600] text-[#181818] font-semibold rounded-lg shadow-lg hover:bg-[#FFB300] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#FFD600]/40 transition-all duration-300 text-base sm:text-lg tracking-wide mt-4 border border-[#FFB300]/60 font-comfortaa"
          >
            Explore Extras
          </a>
        </div>
      </section>
      {/* 3 Vertical Sections */}
      <section
        className="relative flex flex-col items-center justify-center px-2 sm:px-4 py-8 sm:py-12 text-center w-full max-w-7xl mx-auto animate-fade-in min-h-[40vh]"
        id="extras"
      >
        <div className="relative z-10 flex flex-col gap-12 sm:gap-16 md:gap-20 w-full items-stretch">
          {/* Section 1 */}
          <div className="p-8 bg-gradient-to-br from-[#1a1f2e] via-[#2a2f3e] to-[#161B22] rounded-2xl shadow-2xl shadow-yellow-500/10 border border-[#FFD700]/20 hover:shadow-yellow-400/20 transition-all duration-300">
            <h2 className="text-3xl text-center font-bold bg-gradient-to-r from-[#FFD700] via-[#FFEA70] to-[#FFC700] bg-clip-text text-transparent">
              Technology Students' Gymkhana (TSG)
            </h2>

            <h3 className="mt-8 text-xl text-left font-light text-[#D1D5DB]">
              Technology Students' Gymkhana is the hub of the numerous
              extra-curricular and co-curricular activities in IIT Kharagpur
              ranging from sports to socio-cultural. The Gymkhana is managed by
              the students, for the students, under the guidance and active
              participation of the faculty and staff members. The moto of
              Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in
              English means "Excellence in action is Yoga". Our goal is to bring
              overall development in IITians through cultivating and nurturing
              their extra-curricular talents.
            </h3>

            <p className="text-left mt-6 text-xl font-light text-[#D1D5DB]">
              TSG has four committees -
              <span className="font-semibold italic">
                {" "}
                Sports, Cultural, Technical, and Welfare
              </span>
              . Each committee has its own set of activities and events that
              cater to the diverse interests of the students.
              <br />
              <br />
              TSG also has a variety of clubs and societies that students can
              join to explore their interests and hobbies. These clubs range
              from technical societies to cultural groups, providing a platform
              for students to showcase their talents and collaborate with
              like-minded individuals. Such as:
              <span className="font-semibold italic">
                {" "}
                Coding Club, Robotics Club, Dance Club, Music Club, etc.
              </span>
              <br />
              <br />
              There are also a few societies that are not a part of TSG, such as
              <span className="font-semibold italic"> SHARE, etc.</span>
              <br />
              <br />
              To learn more about the TSG and its committees{" "}
              <a
                href="https://gymkhana.iitkgp.ac.in/"
                className="italic text-[#F472B6] text-xl underline hover:no-underline"
              >
                Click here
              </a>
            </p>
          </div>
          {/* Section 2 */}
          <div className="p-8 bg-gradient-to-br from-[#221827] via-[#2c1d34] to-[#161B22] rounded-2xl shadow-2xl shadow-pink-400/10 border border-pink-500/20 hover:shadow-pink-400/20 transition-all duration-300">
            <h2 className="text-3xl text-center font-bold bg-gradient-to-r from-[#F472B6] via-[#FFB6C1] to-[#F472B6] bg-clip-text text-transparent">
              General Championship (GC)
            </h2>

            <h3 className="mt-8 text-xl text-left font-light text-gray-300">
              The General Championship (GC) is an annual competition held at IIT
              Kharagpur that encourages students to participate in various
              events and activities across different domains. It is a platform
              for students to showcase their skills, talents, and creativity in
              a competitive environment.
            </h3>

            <br />
            <br />

            <h3 className="text-xl text-left font-light text-gray-300">
              There are three main categories in the GC:
              <ul className="list-disc ml-8 mt-2">
                <li>
                  <span className="font-semibold">Sports GC:</span> This
                  category includes various sports events and competitions,
                  ranging from athletics to team sports.
                </li>
                <br />
                <li>
                  <span className="font-semibold">Cultural GC:</span> This
                  category encompasses cultural events, performances, and
                  artistic expressions, allowing students to showcase their
                  talents in music, dance, drama, and more.
                </li>
                <br />
                <li>
                  <span className="font-semibold">Technical GC:</span> This
                  category focuses on technical skills and knowledge, with
                  events such as coding competitions, hackathons, and technical
                  quizzes.
                </li>
              </ul>
              <br />
              <br />
              To know about last year's winners{" "}
              <a
                href="#"
                className="text-[#F472B6] italic text-xl underline hover:no-underline"
              >
                Click here
              </a>
            </h3>
          </div>
          {/* Section 3 */}
          <div className="p-8 bg-gradient-to-br from-[#152336] via-[#1e2f47] to-[#161B22] rounded-2xl shadow-2xl shadow-blue-400/10 border border-blue-500/20 hover:shadow-blue-400/20 transition-all duration-300">
            <h2 className="text-3xl text-center font-bold bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
              Inter IIT
            </h2>

            <h3 className="mt-8 text-xl text-left font-light text-[#D1D5DB]">
              Inter IIT is an annual sports competition that brings together
              students from all the IITs across India. It is a prestigious event
              that showcases the sporting talent and spirit of the IIT
              community.
              <br />
              <br />
              The competition features a wide range of sports, including
              athletics, football, basketball, cricket, badminton, and more.
              There are also social and cultural and technical events that take
              place during the Inter IIT, providing a platform for students to
              connect and collaborate with their peers from other IITs.
              <br />
              <br />
              To learn more about the past winners of inter IIT and the events{" "}
              <a
                href="#"
                className="text-[#F472B6] italic underline hover:no-underline"
              >
                Click here
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
