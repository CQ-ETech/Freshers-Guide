import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Footer from '../components/footer/page';
import Image from 'next/image';
import GoldParticles from '../components/GoldParticles';
import ScrollToTopButton from '../components/ScrollToTopButton';
import LOGO from '../../public/LOGO.png';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Communiqué | Fresher's Guide",
  description: 'Your guide to summer opportunities and career paths',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
            <head>
        <link rel="icon" href="/Favicon/favicon.ico" sizes="any" />
        {/* You can use .png or .svg as well, e.g. /favicon.png */}
      </head>
      <body className={
        `${comfortaa.className} min-h-screen relative overflow-x-hidden animate-gradient-move bg-[#181818]`
      }>
        <GoldParticles />
        <nav className="bg-[#181818]/95 text-[#FFBB00] p-4 shadow-2xl fixed top-0 left-0 right-0 z-50 w-full rounded-none border-b border-[#FFD600]/40">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-4">
              <Image src="/LOGO.png" alt="CQ Logo" width={75} height={75} className="rounded-full p-1 shadow-lg" />
              <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFEA00] via-[#FFEA00] to-[#FFBB00] drop-shadow-lg transition duration-300">
                Freshers Guide
              </span>
            </Link>
            <div className="space-x-8 text-xl">
              <Link
                href="/"
                className={`relative group font-semibold px-2 py-1 text-xl transition duration-300 ${typeof window !== 'undefined' && window.location.pathname === '/' ? 'bg-[#FFEA00] text-[#181818] rounded shadow-lg' : 'text-[#FFEA00] hover:text-[#FFBB00]'}`}
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFEA00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/timeline"
                className={`relative group font-semibold px-2 py-1 text-xl transition duration-300 ${typeof window !== 'undefined' && window.location.pathname === '/timeline' ? 'bg-[#FFEA00] text-[#181818] rounded shadow-lg' : 'text-[#FFEA00] hover:text-[#FFBB00]'}`}
              >
                Timeline
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFEA00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/profiles"
                className="relative group font-semibold px-5 py-2 text-lg transition duration-300 text-[#FFEA00] hover:text-[#FFBB00]"
              >
                Profiles
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFEA00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/resources"
                className={`relative group font-semibold px-2 py-1 text-xl transition duration-300 ${typeof window !== 'undefined' && window.location.pathname === '/resources' ? 'bg-[#FFEA00] text-[#181818] rounded shadow-lg' : 'text-[#FFEA00] hover:text-[#FFBB00]'}`}
              >
                Resources
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFEA00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about-us"
                className={`relative group font-semibold px-2 py-1 text-xl transition duration-300 ${typeof window !== 'undefined' && window.location.pathname === '/about us' ? 'bg-[#FFEA00] text-[#181818] rounded shadow-lg' : 'text-[#FFEA00] hover:text-[#FFBB00]'}`}
              >
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFEA00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen relative z-10 pt-28 border-b border-[#232323]/60">
          {children}
          <ScrollToTopButton />
          <div className="w-full flex justify-center my-8">
          <a
            href="/resources"
            className="inline-block bg-[#FFD600] text-[#181818] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#FFBB00] transition relative z-[10]"
          >
          Resources
          </a>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
