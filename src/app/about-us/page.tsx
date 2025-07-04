import React from 'react';
import '../globals.css';

const coreCompetencies = [
  {
    title: 'Communication',
    description: 'Permeating almost every aspect of a job, this skill is often ranked first among employers. It includes your ability to speak, write and present.'
  },
  {
    title: 'Enthusiasm & Attitude',
    description: 'Employers get frustrated with employees who are resistant to change or unable to adapt to new directions. Having an open and upbeat attitude will help your group generate good energy and move forward on projects.'
  },
  {
    title: 'Teamwork',
    description: 'There will be aspects of teamwork within every job. Leaders and project managers often lament that most of their jobs are spent trying to get colleagues to work effectively together.'
  },
  {
    title: 'Problem Solving & Critical Thinking',
    description: 'There is no shortage of challenges and issues that can arise on the job. Employers want employees who will be able to face these problems critically and creatively by gathering enough information in order to develop a solution.'
  },
  {
    title: 'Networking',
    description: 'Like teamwork, networking is about building relationships. It also involves critical elements of communication and the ability to represent yourself effectively to others.'
  },
  {
    title: 'Professionalism',
    description: 'No matter the job or the industry, professionalism is a critical key to your success. Professionalism isn\'t one trait - it is a combination of characteristics. It often means conducting yourself with a high level of responsibility, integrity and accountability.'
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
    <section className="max-w-5xl mx-auto px-4 py-20 text-center animate-fade-in">
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF700] via-[#FFD600] to-[#FFB300] font-comfortaa">
        About Communiqué
      </h1>
      <p className="text-xl text-[#FFF8E4] mb-8 max-w-2xl mx-auto font-comfortaa">
        <b>Communiqué</b> is the Official Soft Skills & Personality Development Society of IIT Kharagpur. We strive to inspire, blossom confidence, and equip each KGPian with career-building soft skills through events, sessions, competitions, and panel discussions.
      </p>
      <div className="bg-[#232323]/60 rounded-2xl shadow-xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[#FFD600] font-comfortaa">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {coreCompetencies.map((item) => (
            <div key={item.title} className="bg-[#181818] rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#FFEA00] mb-2 font-comfortaa">{item.title}</h3>
              <p className="text-[#FFF8E4] text-base font-comfortaa">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#232323]/60 rounded-2xl shadow-xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[#FFD600] font-comfortaa">Our Vision</h2>
        <p className="text-lg text-[#FFF9E3] font-comfortaa mb-4">
          Recognizing the importance of communication and soft skills in personal and professional life and keeping in mind the diverse background of the students, Communiqué strives towards achieving its goal to inspire, blossom confidence, and equip each KGPian with career-building soft skills.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-[#FFD600] font-comfortaa">Our Mission</h2>
        <p className="text-lg text-[#FFF9E3] font-comfortaa">
          Communiqué IIT Kharagpur aims to provide customized attention and support to all the students by serving as an interface between professional communication experts and individual students. We work to ensure a perceptible change in the level of communication skills in IIT Kharagpur through numerous events, sessions, competitions, and panel discussions, guiding students for various career opportunities.
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-[#FFD600] font-comfortaa">Executive Team</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {executiveTeam.map((member) => (
          <div key={member.name} className="flex flex-col items-center bg-[#181818] rounded-xl shadow-lg p-6 w-64">
            <h3 className="text-xl font-semibold text-[#FFEA00] mb-1 font-comfortaa">{member.name}</h3>
            <p className="text-[#FFF8E4] text-base font-comfortaa">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-[#FFD600] text-lg font-comfortaa">
        <p>Join us in our journey to empower every KGPian with the confidence and skills to succeed!</p>
      </div>
    </section>
  );
} 