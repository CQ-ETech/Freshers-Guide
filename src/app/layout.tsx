import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Footer from '../components/footer/page';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Summer Guide',
  description: 'Your guide to summer opportunities and career paths',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-[#1c1c1c] via-[#292929] to-[#0f0f0f] dark:bg-gray-900 relative`}>
        {/* Custom background image outside the main content box */}
        <div className="fixed inset-0 -z-10">
          <img src="/pexels-fwstudio-33348-129733.jpg" alt="Background" className="w-full h-full min-h-screen min-w-full object-cover object-center" loading="eager" decoding="async" style={{filter: 'blur(2px) brightness(0.7)'}} />
        </div>
        {/* Animated background gradient circles */}
        <div className="pointer-events-none select-none">
          <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FFEA00]/30 via-[#FFBB00]/20 to-[#FF9900]/10 rounded-full blur-3xl animate-pulse z-0" />
          <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF9900]/30 via-[#FFEA00]/20 to-[#FFBB00]/10 rounded-full blur-3xl animate-pulse z-0" />
        </div>
        <nav className="bg-gradient-to-r from-[#232323]/70 via-[#292929]/70 to-[#181818]/70 text-[#FFBB00] p-4 shadow-lg fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-60 w-full rounded-none">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-4">
              <Image src="/android-chrome-192x192.png" alt="CQ Logo" width={50} height={50} />
              <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFEA00] via-[#FFEA00] to-[#FFBB00] drop-shadow-lg transition duration-300">
                Summer Guide
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
                className="relative group font-semibold px-5 py-2 text-lg transition duration-300 bg-gradient-to-r from-[#FFEA00] to-[#FFBB00] text-[#181818] hover:bg-gradient-to-l hover:from-[#FFBB00] hover:to-[#FFEA00]"
              >
                Profiles
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#181818] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/resources"
                className={`relative group font-semibold px-2 py-1 text-xl transition duration-300 ${typeof window !== 'undefined' && window.location.pathname === '/resources' ? 'bg-[#FFEA00] text-[#181818] rounded shadow-lg' : 'text-[#FFEA00] hover:text-[#FFBB00]'}`}
              >
                Resources
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFEA00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen relative z-10 pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}