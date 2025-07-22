"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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

  // Effect to handle side-effects when menu is opened/closed
  useEffect(() => {
    // 1. Lock body scroll
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // 2. Add keyboard listener for 'Escape' key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);

    // Cleanup function to remove event listener and restore scroll
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);


  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-[#FFBB00] p-2 sm:p-4 shadow-2xl fixed top-0 left-0 right-0 z-50 w-full border-b border-yellow-400/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo and Site Title */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-4 shrink-0">
          <Image 
            src="/LOGO.png" 
            alt="CQ Logo" 
            width={48} 
            height={48} 
            className="rounded-full p-1 w-10 h-10 sm:w-12 sm:h-12" 
          />
          <span className="truncate text-xl sm:text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 transition duration-300">
            Freshers Guide
          </span>
        </Link>
        
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            className="text-3xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-x-4 lg:gap-x-6">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`relative group font-semibold px-3 py-2 text-base lg:text-lg transition duration-300 rounded-md
                ${pathname === link.href 
                  ? 'bg-yellow-400 text-gray-900 shadow-lg' 
                  : 'text-yellow-100 hover:text-white'
                }`
              }
            >
              {link.label}
              {pathname !== link.href && (
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Dropdown with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden flex flex-col items-center bg-gray-900/95 backdrop-blur-md border-t border-yellow-400/30 shadow-2xl absolute top-full left-0 w-full h-screen"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="py-6 space-y-4 w-full">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`block w-full text-center py-3 font-semibold text-lg transition-colors duration-300 
                    ${pathname === link.href
                      ? 'text-yellow-400' 
                      : 'text-gray-200 hover:bg-yellow-400/10 hover:text-yellow-400'
                    }`
                  }
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}