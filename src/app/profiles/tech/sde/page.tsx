'use client';

import { generals, steps } from "./data";
import Link from "next/link";
import TechLayout from "../techLayout";

export default function SDEProfile() {
  return (
    
    <div className="min-h-screen text-white py-10 px-6">
      <h1 className="text-6xl font-bold h-[200px] m-10 text-center text-[#ffd700]">SDE (Software Development Engineer)</h1>
      <TechLayout generals={generals} steps={steps} />

      <div className="mt-8">
        <Link href="/profiles/tech" className="text-yellow-300 underline hover:no-underline">
          ← Back to Tech
        </Link>
      </div>
    </div>
  );
} 