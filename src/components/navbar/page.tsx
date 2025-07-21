"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/profiles', label: 'Profiles' },
    { href: '/resources', label: 'Resources' },
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <nav className="bg-[#181818]/95 text-[#FFBB00] p-4 shadow-2xl fixed top-0 left-0 right-0 z-50 w-full rounded-none border-b border-[#FFD600]/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4">
          <Image src="/LOGO.png" alt="CQ Logo" width={75} height={75} className="rounded-full p-1 shadow-lg" />
          <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFEA00] via-[#FFEA00] to-[#FFBB00] drop-shadow-lg transition duration-300">
            Freshers Guide
          </span>
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-3xl p-2 focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-xl">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={`relative group font-semibold px-2 py-1 text-xl transition duration-300 ${pathname === link.href ? 'bg-[#FFEA00] text-[#181818] rounded shadow-lg' : 'text-[#FFEA00] hover:text-[#FFBB00]'}`}>
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFEA00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#181818] border-t border-[#FFD600]/40 shadow-2xl py-6 space-y-4 text-xl animate-fade-in">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="w-full text-center py-2 font-semibold hover:bg-[#FFD600] hover:text-[#181818] rounded transition" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
} 