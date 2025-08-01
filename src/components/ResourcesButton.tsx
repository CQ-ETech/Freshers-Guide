"use client";
import { usePathname } from "next/navigation";

export default function ResourcesButton() {
  const pathname = usePathname();
  if (!pathname.startsWith("/profiles")) return null;

  return (
    <div className="w-full flex justify-center pb-8">
      <a
        href="/resources"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FFD600] text-[#181818] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#FFBB00] transition"
      >
        Resources
      </a>
    </div>
  );
}