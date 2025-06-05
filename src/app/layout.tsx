import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Summer Guide',
  description: 'Your guide to summer opportunities and career paths',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900`}>
        <nav className="bg-[#1f1f1f] text-white p-4 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">Summer Guide</Link>
            <div className="space-x-6 text-lg">
              <Link href="/" className="hover:text-purple-400 transition">Home</Link>
              <Link href="/timeline" className="hover:text-purple-400 transition">Timeline</Link>
              <Link href="/profiles" className="hover:text-purple-400 transition">6 Profiles</Link>
              <Link href="/resources" className="hover:text-purple-400 transition">Resources</Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 