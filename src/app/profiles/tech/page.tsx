'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import LaptopImage from "./assets/ales-nesetril-Im7lZjxeLhg-unsplash-edited.jpg";
import Carousel from '../carousel';
import Simple from './assets/ben-kolde-bs2Ba7t69mM-unsplash-edited.jpg';
import WallE from './assets/ray-rui-SyzQ5aByJnE-unsplash.jpg';

const data = [
  {
    name: 'SDE',
    description: 'For individuals with a strong inclination for logical problem-solving, system design, and continuous technical advancement through structured coding practices',
    image: Simple,
    bgColor: 'bg-gray-400',
    bottomGradient: 'bg-gradient-to-t from-gray-500 via-gray-400 to gray-300',
    textCol: 'text-white-700',
    navCol: 'text-gray-400',
    strokeColor: 'gray',
    href: '/profiles/tech/sde',
    id: 0
  },
  {
    name: 'Data',
    description: 'For individuals with a deep interest in AI and data science, equipped with strong analytical skills and a drive to leverage statistical and computational methods for intelligent system development.',
    image: WallE,
    bgColor: 'bg-orange-400',
    bottomGradient: 'bg-gradient-to-t from-orange-500 via-orange-400 to orange-300',
    textCol: 'text-gray-100',
    navCol: 'text-gray-400',
    strokeColor: 'gray',
    href: '/profiles/tech/data',
    id: 1
  },
];

const Tech = () => {
  return ( 
    <div className='mb-[-20px]'>
      <section className="bg-black hero mt-[-10px] pt-5 min-h-screen w-full flex justify-between relative bg-[#000000]">
        <div className={`hero-text mt-20 w-[60%] min-h-screen overflow-hidden pl-[12vw]`}>
          <motion.h1 
            className="text-7xl font-bold bg-gradient-to-r from-[#00a5c5] via-[#c5a4aa] to-[#aa0920] bg-clip-text text-transparent pb-[5rem]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            Tech<br /> infrastructure<br /> to boost<br /> your skills
          </motion.h1>

          <motion.h4 
            className="text-2xl font-bold text-[#c7c1b2]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos quisquam distinctio deserunt ipsa quod, accusantium exercita
          </motion.h4>
        </div>
        
        <motion.div 
          className={`w-[40%] h-screen`}
          initial={{ x: 50, opacity: 0, rotateX: 45 }}
          animate={{ x: 0, opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Image src={LaptopImage} alt={`hero image`} className="w-full min-h-screen" />
        </motion.div>
      </section>

      <Carousel data={data} />
    </div>
   );
}
 
export default Tech;