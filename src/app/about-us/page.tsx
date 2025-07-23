'use client'
import React from 'react';
import '../globals.css';
// ✅ FIX: Added FaEnvelope and FaLinkedin for social links
import { FaUserTie, FaComments, FaClipboardCheck, FaChalkboardTeacher, FaHandshake, FaChevronDown, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const communiqueEvents = [
  // ...data remains the same
  {
    title: 'GMUN',
    icon: <FaComments className="text-yellow-400 text-3xl mb-3" />, 
    description: 'The Global Model United Nations (GMUN) is a simulation event that helps students develop diplomacy, negotiation, and public speaking skills.'
  },
  {
    title: 'CV Review Drive',
    icon: <FaClipboardCheck className="text-yellow-400 text-3xl mb-3" />, 
    description: 'A dedicated drive where experienced seniors review and provide feedback on students\' CVs to help them stand out in applications.'
  },
  {
    title: 'Mock Interview Drive',
    icon: <FaUserTie className="text-yellow-400 text-3xl mb-3" />, 
    description: 'A series of mock interviews conducted to prepare students for real placement and internship interviews.'
  },
  {
    title: 'Internship Training Week',
    icon: <FaChalkboardTeacher className="text-yellow-400 text-3xl mb-3" />, 
    description: 'A week-long event featuring sessions, panels, and workshops to guide students through the internship process.'
  },
  {
    title: 'Placement Bootcamp',
    icon: <FaHandshake className="text-yellow-400 text-3xl mb-3" />,
    description: 'A week-long event featuring panel discussions, workshops to guide students through the placement process, including resume building, interview preparation, and networking strategies.'
  }
];

// ✅ FIX: Updated executiveTeam array with email and linkedin data
const executiveTeam = [
  { name: 'Arya Dubey', role: 'INTERNAL & ALUMNI AFFAIRS HEAD', email: 'aryadubey666@gmail.com', linkedin: 'https://www.linkedin.com/in/arya-dubey-5a4181290/' },
  { name: 'Tejal Saurabhi', role: 'TECHNICAL AFFAIRS AND MUN HEAD', email: 'tejalsaurabhi1302@gmail.com', linkedin: 'https://www.linkedin.com/in/tejal-saurabhi-1a96b7291/' },
  { name: 'Sritoma Nandan', role: 'DIGITAL PUBLICITY HEAD', email:'nandansritoma1912@gmail.com', linkedin: 'https://www.linkedin.com/in/sritoma-nandan-02637a280/' },
  { name: 'Divyansh Jain', role: 'EVENTS AND OPERATIONS HEAD', email:'div0211jain@gmail.com', linkedin: 'https://www.linkedin.com/in/divyansh-jain-iitkgp/' },
  { name: 'Atharva Deshmukh', role: 'FINANCE AND SPONSORSHIP HEAD', email:'deshmukhatharva362@gmail.com', linkedin: 'https://www.linkedin.com/in/atharva-deshmukh-8a3894281/' },
  { name: 'Sourav Upadhyay', role: 'MARKETING AND PUBLIC RELATIONS HEAD', email:'sourav.upadhyay0304@gmail.com', linkedin: 'https://www.linkedin.com/in/sourav-upadhyay-585ba5232/' },
  { name: 'Pritvik Premkumar', role: 'EXTERNAL AFFAIRS AND OUTREACH HEAD', email:'pritvikps26@gmail.com', linkedin: 'https://www.linkedin.com/in/pritvik/' },
];

// Reusable Divider Component
const Divider = () => (
    <div className="flex justify-center my-8 z-10 relative">
      <span className="inline-block w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full" />
    </div>
);

// ✅ FIX: Updated TeamMemberCard to accept and display social links
const TeamMemberCard = ({ member }: { member: { name: string; role: string; email: string; linkedin: string; } }) => (
  <div className="flex h-full flex-col items-center justify-center bg-[#181818]/90 rounded-xl shadow-2xl p-8 w-full max-w-xs mx-auto border border-yellow-400/20 hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300 glassmorphism-card group transform-gpu">
    <FaUserTie className="text-yellow-400 text-4xl mb-4 group-hover:rotate-12 transition-transform duration-300" />
    <h3 className="text-xl font-semibold text-yellow-300 mb-1 font-comfortaa text-center group-hover:text-yellow-400">{member.name}</h3>
    <p className="text-sm sm:text-base font-comfortaa text-center text-yellow-100 flex-grow">{member.role}</p>
    
    {/* Social Links */}
    <div className="mt-4 flex items-center gap-6 text-2xl border-t border-yellow-400/20 pt-4">
      <a href={`mailto:${member.email}`} aria-label="Email" className="text-yellow-100/70 hover:text-yellow-300 hover:scale-110 transition-all duration-200">
        <FaEnvelope />
      </a>
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-yellow-100/70 hover:text-yellow-300 hover:scale-110 transition-all duration-200">
        <FaLinkedin />
      </a>
    </div>
  </div>
);


export default function AboutUs() {
  return (
    <div className="min-h-screen text-white pb-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 text-center z-10 animate-fade-in">
        <Image src="/LOGO.png" alt="Communiqué Logo" width={110} height={110} className="mb-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg border-4 border-yellow-400 bg-gray-800" />
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-lg font-comfortaa">
          Communiqué
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-yellow-50 max-w-3xl mx-auto font-comfortaa mb-6">
          The Official Soft Skills & Personality Development Society of IIT Kharagpur
        </p>
        <FaChevronDown className="mx-auto text-yellow-400 text-3xl animate-bounce mt-4" />
      </section>

      <Divider />

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch animate-fade-in-up">
        <div className="bg-[#232323]/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col text-center border border-yellow-400/20 glassmorphism-card">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400 font-comfortaa">Our Vision</h2>
          <p className="text-base md:text-lg text-yellow-50 font-comfortaa">
            Recognizing the importance of communication and soft skills in personal and professional life and keeping in mind the diverse background of the students, Communiqué strives towards achieving its goal to inspire, blossom confidence, and equip each KGPian with career-building soft skills.
          </p>
        </div>
        <div className="bg-[#232323]/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col text-center border border-yellow-400/20 glassmorphism-card">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400 font-comfortaa">Our Mission</h2>
          <p className="text-base md:text-lg text-yellow-50 font-comfortaa">
            Communiqué IIT Kharagpur aims to provide customized attention and support to all the students by serving as an interface between professional communication experts and individual students. We work to ensure a perceptible change in the level of communication skills in IIT Kharagpur through numerous events, sessions, competitions, and panel discussions, guiding students for various career opportunities.
          </p>
        </div>
      </section>

      <Divider />
      
      {/* Events Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-12 text-center font-comfortaa">Events We Conduct</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {communiqueEvents.map((item) => (
            <div key={item.title} className="w-full sm:w-80 lg:w-[31%] bg-[#232323]/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-yellow-400/30 transition-all duration-300 border border-yellow-400/20 glassmorphism-card transform-gpu">
              {item.icon}
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-2 font-comfortaa text-center">{item.title}</h3>
              <p className="text-yellow-100 text-sm sm:text-base font-comfortaa text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Meet Our Team Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 animate-fade-in-up">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-12">
          <h2 className="flex-1 text-5xl sm:text-6xl md:text-7xl font-extrabold text-yellow-400 text-center lg:text-left font-comfortaa leading-tight tracking-wide">
            Meet Our Team
          </h2>
          <div className="flex-shrink-0 flex justify-center">
            <TeamMemberCard member={executiveTeam[0]} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {executiveTeam.slice(1).map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-16 text-yellow-400 text-base md:text-lg font-comfortaa text-center animate-fade-in-up px-4">
        <p className="mb-6">Join us in our journey to empower every KGPian with the confidence and skills to succeed!</p>
      </div>
    </div>
  );
}