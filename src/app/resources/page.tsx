import Link from 'next/link'
import GoldParticles from '../../components/GoldParticles';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SHEET_LINK = "https://docs.google.com/spreadsheets/d/1vxOF12HoiI05V52l7ZJfJchKv36rGOSNdl_zJPZ2NMo/edit?gid=0#gid=0"

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#181818] text-[#FFF8E4] py-12 px-6 relative">
          {/* Background elements */}
          <div className="fixed inset-0 bg-[url('/pexels-pixabay-235992.jpg')] opacity-5 bg-cover bg-center pointer-events-none z-[1]"></div>
          <div className="fixed inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-[#181818] pointer-events-none z-[1]"></div>
          
          {/* Gold particles background */}
          <GoldParticles />
     <div className="min-h-screen flex flex-col items-center justify-center text-[#FFF8E4] px-4 relative z-[3]">
      <h1 className="text-4xl font-bold mb-6 text-[#FFBB00]">📚 Resources</h1>
      <p className="text-lg text-center max-w-xl mb-6">
        Here you'll find a curated sheet of all useful resources across all profiles. Bookmark it and refer to it regularly.
      </p>
      <a
        href={SHEET_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#FFF8E4] hover:bg-[#FFBB00] font-semibold py-3 px-6 rounded-lg shadow transition text-[#150000]"
      >
        Open Resource Sheet
      </a>
      
      <div className="mt-8">
        <Link href="/" className="text-[#FFBB00] hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
    </div>
  )
} 