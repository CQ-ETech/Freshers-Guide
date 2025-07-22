'use client';

import Link from "next/link";
import TechLayout from "../techLayout"; // Assuming techLayout is in the parent directory

// Your 'generals' and 'steps' arrays remain the same
const generals=[
  {
    name: 'Who should target this?',
    content: [
      'Those who enjoy coding, love solving problems using technology.',
      'Curious about how websites, apps, and systems work.',
      'Passionate about building tools, games, or bots.',
      'Logical thinkers who enjoy debugging and continuous learning.',
      'Prefer structured problem-solving and tech-oriented roles.'
    ],
    id: 0
  },
  {
    name: 'What it demands?',
    content: [
      'Patience and consistency',
      'Dedication to write/debug code regularly',
      'Curiosity to keep learning new tools and frameworks',
      'Strong observation and analytical thinking',
      'A structured logical thought process',
      'Total Time: ~7-8 months of consistent prep'
    ],
    id: 1
  },
  {
    name: 'What can they do in summers?',
    content: [
      'Focus on DSA — reach at least recursion level in 45 days',
      'Build habit of solving daily',
      'Start contests from June 20 on Codeforces, Leetcode',
      'Build strong base — helps a lot later'
    ],
    id: 2
  },
  {
    name: 'Opportunities at IIT KGP',
    content: [
      'Most in-demand profile during internship & placement season',
      'Great companies visit — Google, Microsoft, Adobe, etc.',
      "If you're good at it, your future is secure and exciting"
    ],
    id: 3
  }
];

const steps=[
  {
    name: 'Step 1: DSA (Data Structures & Algorithms)',
    content: [
      'Start with basics — arrays, strings, Binary search, bit manipulation, recursion, then trees, graphs, DP, Segment Trees.',
      'Recommended: ~3-4 months (1.5-2 hrs daily)'
    ],
    id: 0
  },
  {
    name: 'Step 2: CS Fundamentals',
    content: [
      'OOPs: Concepts + implementation',
      'DBMS: Joins, normalization, indexing',
      'OS: Scheduling, memory mgmt',
      'CN: Protocols, TCP/IP basics'
    ],
    id: 1
  },
  {
    name: 'Step 3: System Design',
    content: [
      'Optional initially, learn later once intermediate'
    ],
    id: 2
  }
];


export default function SDEProfile() {
  return (
    // Added max-width, horizontal auto-margin, and responsive padding
    <div className="min-h-screen text-white py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Responsive heading: smaller text on mobile, larger on bigger screens. */}
      {/* Replaced fixed height and margin with responsive padding and margins. */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#ffd700] my-12">
        SDE (Software Development Engineer)
      </h1>
      
      <TechLayout generals={generals} steps={steps} />

      <div className="mt-12 text-center"> {/* Centered the back link for better mobile view */}
        <Link href="/profiles/tech" className="text-yellow-300 underline hover:no-underline text-lg">
          ← Back to Tech Profiles
        </Link>
      </div>
    </div>
  );
}