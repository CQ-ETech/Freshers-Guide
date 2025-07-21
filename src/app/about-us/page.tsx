'use client'
import React from 'react';
import '../globals.css';
import { FaUserTie, FaComments, FaClipboardCheck, FaChalkboardTeacher, FaHandshake, FaChevronDown, FaUserGraduate } from 'react-icons/fa';
import Image from 'next/image';

const communiqueEvents = [
  {
    title: 'GMUN',
    icon: <FaComments className="text-[#FFD600] text-3xl mb-2" />, 
    description: 'The Group Model United Nations (GMUN) is a simulation event that helps students develop diplomacy, negotiation, and public speaking skills.'
  },
  {
    title: 'CV Review Drive',
    icon: <FaClipboardCheck className="text-[#FFD600] text-3xl mb-2" />, 
    description: 'A dedicated drive where experienced seniors review and provide feedback on students\' CVs to help them stand out in applications.'
  },
  {
    title: 'Mock Interview Drive',
    icon: <FaUserTie className="text-[#FFD600] text-3xl mb-2" />, 
    description: 'A series of mock interviews conducted to prepare students for real placement and internship interviews.'
  },
  {
    title: 'Internship Training Week',
    icon: <FaChalkboardTeacher className="text-[#FFD600] text-3xl mb-2" />, 
    description: 'A week-long event featuring sessions, panels, and workshops to guide students through the internship process.'
  },
  {
    title: 'AIPAT',
    icon: <FaUserGraduate className="text-[#FFD600] text-3xl mb-2" />, 
    description: 'All India Placement and Aptitude Test (AIPAT) is designed to help students assess and improve their placement readiness and aptitude skills.'
  },
];

const executiveTeam = [
  { name: 'Arya Dubey', role: 'INTERNAL & ALUMNI AFFAIRS HEAD' },
  { name: 'Tejal Saurabhi', role: 'TECHNICAL AFFAIRS AND MUN HEAD' },
  { name: 'Sritoma Nandan', role: 'DIGITAL PUBLICITY HEAD' },
  { name: 'Divyansh Jain', role: 'EVENTS AND OPERATIONS HEAD' },
  { name: 'Atharva Deshmukh', role: 'FINANCE AND SPONSORSHIP HEAD' },
  { name: 'Sourav Upadhyay', role: 'MARKETING AND PUBLIC RELATIONS HEAD' },
  { name: 'Pritvik Premkumar', role: 'EXTERNAL AFFAIRS AND OUTREACH HEAD' },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen pb-20 overflow-hidden">
      {/* Hero Section with Logo */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 text-center z-10 animate-fade-in">
        <Image src="/LOGO.png" alt="Communiqué Logo" width={110} height={110} className="mb-6 rounded-full shadow-lg border-4 border-[#FFD600] bg-[#181818]" />
        <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF700] via-[#FFD600] to-[#FFB300] drop-shadow-lg font-comfortaa">
          About Communiqué
        </h1>
        <p className="text-2xl text-[#FFF8E4] max-w-3xl mx-auto font-comfortaa mb-6">
          The Official Soft Skills & Personality Development Society of IIT Kharagpur
        </p>
        <FaChevronDown className="mx-auto text-[#FFD600] text-3xl animate-bounce mt-4" />
      </section>

      {/* Divider */}
      <div className="flex justify-center my-8 z-10 relative">
        <span className="inline-block w-24 h-1 bg-gradient-to-r from-[#FFD600] via-[#FFEA00] to-[#FFB300] rounded-full" />
      </div>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch animate-fade-in-up">
        <div className="bg-[#232323]/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center border border-[#FFD600]/20 glassmorphism-card min-h-[320px] min-w-0 w-full">
          <h2 className="text-3xl font-bold mb-4 text-[#FFD600] font-comfortaa">Our Vision</h2>
          <p className="text-lg text-[#FFF9E3] font-comfortaa">
            Recognizing the importance of communication and soft skills in personal and professional life and keeping in mind the diverse background of the students, Communiqué strives towards achieving its goal to inspire, blossom confidence, and equip each KGPian with career-building soft skills.
          </p>
        </div>
        <div className="bg-[#232323]/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center border border-[#FFD600]/20 glassmorphism-card min-h-[320px] min-w-0 w-full">
          <h2 className="text-3xl font-bold mb-4 text-[#FFD600] font-comfortaa">Our Mission</h2>
          <p className="text-lg text-[#FFF9E3] font-comfortaa">
            Communiqué IIT Kharagpur aims to provide customized attention and support to all the students by serving as an interface between professional communication experts and individual students. We work to ensure a perceptible change in the level of communication skills in IIT Kharagpur through numerous events, sessions, competitions, and panel discussions, guiding students for various career opportunities.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center my-8 z-10 relative">
        <span className="inline-block w-24 h-1 bg-gradient-to-r from-[#FFD600] via-[#FFEA00] to-[#FFB300] rounded-full" />
      </div>

      {/* Events Conducted by Communiqué */}
      <section className="max-w-6xl mx-auto px-4 py-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-[#FFD600] mb-10 text-center font-comfortaa">Events Conducted by Communiqué</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {communiqueEvents.map((item) => (
            <div key={item.title} className="bg-[#232323]/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-yellow-400/30 transition-transform duration-300 border border-[#FFD600]/20 glassmorphism-card">
              {item.icon}
              <h3 className="text-2xl font-semibold text-[#FFEA00] mb-2 font-comfortaa text-center">{item.title}</h3>
              <p className="text-[#FFF8E4] text-base font-comfortaa text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center my-8 z-10 relative">
        <span className="inline-block w-24 h-1 bg-gradient-to-r from-[#FFD600] via-[#FFEA00] to-[#FFB300] rounded-full" />
      </div>

      {/* Meet Our Team */}
      <section className="max-w-6xl mx-auto px-4 py-12 animate-fade-in-up">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-8 md:gap-0">
          <h2 className="flex-1 text-5xl md:text-7xl font-extrabold text-[#FFD600] text-left font-comfortaa mb-6 md:mb-0 leading-tight md:leading-[1.1] pl-16 tracking-wider">
            Meet Our Team
          </h2>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <div className="flex flex-col items-center bg-[#181818]/90 rounded-xl shadow-2xl p-8 max-w-xs border border-[#FFD600]/20 hover:scale-110 hover:shadow-yellow-400/40 transition-transform duration-300 glassmorphism-card group">
              <FaUserTie className="text-[#FFD600] text-4xl mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-[#FFEA00] mb-1 font-comfortaa text-center group-hover:text-[#FFD600]">{executiveTeam[0].name}</h3>
              <p className="text-[#FFF8E4] text-base font-comfortaa text-center group-hover:text-[#FFEA00]">{executiveTeam[0].role}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {executiveTeam.slice(1).map((member) => (
            <div key={member.name} className="flex flex-col items-center bg-[#181818]/90 rounded-xl shadow-2xl p-8 w-full max-w-xs border border-[#FFD600]/20 hover:scale-110 hover:shadow-yellow-400/40 transition-transform duration-300 glassmorphism-card group">
              <FaUserTie className="text-[#FFD600] text-4xl mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-[#FFEA00] mb-1 font-comfortaa text-center group-hover:text-[#FFD600]">{member.name}</h3>
              <p className="text-[#FFF8E4] text-base font-comfortaa text-center group-hover:text-[#FFEA00]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-16 text-[#FFD600] text-lg font-comfortaa text-center animate-fade-in-up">
        <p className="mb-6">Join us in our journey to empower every KGPian with the confidence and skills to succeed!</p>
      </div>
    </div>
  );
} 