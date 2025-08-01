import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import './globals.css';
import Footer from '../components/footer/page';
import GoldParticles from '../components/GoldParticles';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Navbar from '../components/navbar/page';
import ResourcesButton from '../components/ResourcesButton';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Fresher's Guide | Communiqué",
  description: 'Empowering Freshers to make the most of their life in KGP.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/Favicon/favicon.ico" sizes="any" />
        {/* You can use .png or .svg as well, e.g. /favicon.png */}
      </head>
      <body className={
        `${comfortaa.className} min-h-screen relative overflow-x-hidden animate-gradient-move bg-[#181818]`
      }>
        <GoldParticles />
        <Navbar />
        <main className="relative z-10 pt-28 border-b border-[#232323]/60">
          {children}
          <ScrollToTopButton />
        </main>
        <ResourcesButton /> 
        <Footer />
      </body>
    </html>
  );
}
