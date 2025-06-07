import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Footer from '../components/footer/page';

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
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900`}>
        <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 text-white p-4 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold text-white hover:text-yellow-300 transition duration-300">
              Summer Guide
            </Link>
            <div className="space-x-6 text-lg">
              <Link
                href="/"
                className="relative group hover:text-yellow-300 transition duration-300"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/timeline"
                className="relative group hover:text-yellow-300 transition duration-300"
              >
                Timeline
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/profiles"
                className="relative group hover:text-yellow-300 transition duration-300"
              >
                Profiles
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/resources"
                className="relative group hover:text-yellow-300 transition duration-300"
              >
                Resources
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}