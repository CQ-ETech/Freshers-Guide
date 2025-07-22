'use client';

import { useRouter } from 'next/navigation';
import { FaMoneyBillWave, FaHandshake, FaBoxOpen } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import Consult from './assets/consult.jpg';
import Finance from './assets/finance.jpg';
import Product from './assets/product.jpg';

// Dynamically import the carousel to disable SSR
const Carousel = dynamic(() => import('../carousel'), { ssr: false });

// Carousel data (image sections)
const data = [
  {
    name: 'Consult',
    description:
      'Dive into structured problem-solving, data-backed decisions, and strategic thinking to tackle complex business challenges across industries.',
    image: Consult,
    bgColor: 'bg-[#736146]',
    bottomGradient: 'bg-gradient-to-b from-[#736146]/30 via-[#635437] to-[#53472d]',
    textCol: 'text-gray-200',
    navCol: 'text-gray-400',
    strokeColor: 'gray',
    href: '/profiles/non-tech/consult',
    id: 0,
  },
  {
    name: 'Finance',
    description:
      'A deep dive into financial systems, market dynamics, and analytical decision-making — ideal for those curious about how capital drives business.',
    image: Finance,
    bgColor: 'bg-[#3e413c]',
    bottomGradient: 'bg-gradient-to-b from-gray-300/30 via-gray-400 to-gray-500',
    textCol: 'text-gray-200',
    navCol: 'text-gray-400',
    strokeColor: 'gray',
    href: '/profiles/non-tech/finance',
    id: 1,
  },
  {
    name: 'Product',
    description:
      'Explore how data, design, and user insights come together to build products that solve real-world problems and scale with impact.',
    image: Product,
    bgColor: 'bg-[#e5cdb1]',
    bottomGradient: 'bg-gradient-to-t from-brown-500 via-brown-400 to-brown-300',
    textCol: 'text-gray-200',
    navCol: 'text-gray-400',
    strokeColor: 'gray',
    href: '/profiles/non-tech/product',
    id: 2,
  },
];

// Category grid data
const categories = [
  {
    key: 'finance',
    name: 'Finance',
    icon: <FaMoneyBillWave size={40} />,
    description: 'Investment banking, corporate finance, and markets.',
  },
  {
    key: 'consult',
    name: 'Consulting',
    icon: <FaHandshake size={40} />,
    description: 'Strategic business problem-solving roles.',
  },
  {
    key: 'product',
    name: 'Product',
    icon: <FaBoxOpen size={40} />,
    description: 'End-to-end product management and development.',
  },
];

export default function NonTechProfiles() {
  const router = useRouter();

  return (
    <div className="min-h-screen text-white py-12 px-6 sm:px-8 md:px-12">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-yellow-400">
        Explore Non-Tech Profiles
      </h1>

      {/* Carousel Section */}
      <Carousel data={data} />

      {/* Back Button */}
      <div className="my-12 text-center">
        <button
          onClick={() => router.push('/profiles')}
          className="px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all"
        >
          ← Back to Categories
        </button>
      </div>

      

      {/* ✔ Resources Link */}
      
    </div>
  );
}
