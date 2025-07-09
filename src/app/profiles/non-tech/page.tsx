'use client';

import { useRouter } from "next/navigation";
import { FaMoneyBillWave, FaHandshake, FaBoxOpen } from "react-icons/fa";

import Consult from './assets/consult.jpg';
import Finance from './assets/finance.jpg';
import Product from './assets/product.jpg';
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import('../carousel'), { ssr: false });

const data = [
  {
    name: 'Consult',
    description: 'Dive into structured problem-solving, data-backed decisions, and strategic thinking to tackle complex business challenges across industries.',
    image: Consult,
    bgColor: 'bg-[#736146]',
    bottomGradient: 'bg-gradient-to-b from-[#736146]/30 via-[#635437] to-[#53472d]',
    textCol: 'text-gray-200',
    navCol: 'text-gray-400',
    strokeColor: 'gray',
    href: '/profiles/non-tech/consult',
    id: 0
  },
  {
    name: 'Finance',
    description: 'A deep dive into financial systems, market dynamics, and analytical decision-making — ideal for those curious about how capital drives business.',
    image: Finance,
    bgColor: 'bg-[#3e413c]',
    bottomGradient: 'bg-gradient-to-b from-gray-300/30 via-gray-400 to-gray-500',
    textCol: 'text-gray-200',
    navCol: 'text-gray-400',
    strokeColor: 'gray',
    href: '/profiles/non-tech/finance',
    id: 1
  },
  {
    name: 'Product',
    description: 'Explore how data, design, and user insights come together to build products that solve real-world problems and scale with impact.',
    image: Product,
    bgColor: 'bg-[#e5cdb1]',
    bottomGradient: 'bg-gradient-to-t from-brown-500 via-brown-400 to-brown-300',
    textCol: 'text-gray-200',
    navCol: 'text-gray-400',
    strokeColor: 'gray',
    href: '/profiles/non-tech/product',
    id: 2
  },
];

const categories = [
  {
    key: "finance",
    name: "Finance",
    icon: <FaMoneyBillWave size={40} />,
    description: "Investment banking, corporate finance, and markets.",
  },
  {
    key: "consult",
    name: "Consulting",
    icon: <FaHandshake size={40} />,
    description: "Strategic business problem-solving roles.",
  },
  {
    key: "product",
    name: "Product",
    icon: <FaBoxOpen size={40} />,
    description: "End-to-end product management and development.",
  },
];

export default function NonTechProfiles() {
  const router = useRouter();

  return (
    <div className="min-h-screen text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
        Explore Non-Tech Profiles
      </h1>

      <Carousel data={data} />
    </div>

      
    //   <div className="mb-10 text-center">
    //     <button
    //       onClick={() => router.push("/profiles")}
    //       className="px-5 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all"
    //     >
    //       ← Back to Categories
    //     </button>
    //   </div>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    //     {categories.map((cat) => (
    //       <div
    //         key={cat.key}
    //         onClick={() => router.push(`/profiles/non-tech/${cat.key}`)}
    //         className="cursor-pointer bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-yellow-500 rounded-xl p-6 shadow-lg hover:scale-105 transition-all"
    //       >
    //         <div className="mb-4 text-yellow-400">{cat.icon}</div>
    //         <h2 className="text-2xl font-semibold text-yellow-300 mb-2">{cat.name}</h2>
    //         <p className="text-gray-300">{cat.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
