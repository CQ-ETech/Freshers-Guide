'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import LaptopImage from "./assets/ales-nesetril-Im7lZjxeLhg-unsplash-edited.jpg";
import Carousel from './carousel';
import { data } from './data';
import "./styles.css";

const Tech = () => {
  return ( 
    <div>
      <section className="hero mt-[-10px] pt-5 min-h-screen w-full flex justify-between relative bg-[#000000]">
        <div className={`hero-text mt-20 w-[60%] min-h-screen overflow-hidden`}>
          <motion.h1 
            className="text-7xl font-bold bg-gradient-to-r from-[#00a5c5] via-[#c5a4aa] to-[#aa0920] bg-clip-text text-transparent"
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
          transition={{ duration: 0.75 }}
        >
          <Image src={LaptopImage} alt={`hero image`} className="w-full min-h-screen" />
        </motion.div>
      </section>

      <Carousel data={data} />
    </div>
   );
}
 
export default Tech;