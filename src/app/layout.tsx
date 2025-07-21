import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import './globals.css';
import Footer from '../components/footer/page';
import GoldParticles from '../components/GoldParticles';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Navbar from '../components/navbar/page';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Fresher's Guide | Communiqué",
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
        <Navbar />
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
