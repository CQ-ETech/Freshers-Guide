"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LaptopImage from "./assets/ales-nesetril-Im7lZjxeLhg-unsplash-edited.jpg";
import Simple from "./assets/ben-kolde-bs2Ba7t69mM-unsplash-edited.jpg";
import WallE from "./assets/ray-rui-SyzQ5aByJnE-unsplash.jpg";
import dynamic from "next/dynamic";
import Link from "next/link";

const Carousel = dynamic(() => import("../carousel"), { ssr: false });

const data = [
  {
    name: "SDE",
    description:
      "For individuals with a strong inclination for logical problem-solving, system design, and continuous technical advancement through structured coding practices",
    image: Simple,
    bgColor: "bg-gray-400",
    bottomGradient: "bg-gradient-to-t from-gray-500 via-gray-400 to gray-300",
    textCol: "text-white-700",
    navCol: "text-gray-400",
    strokeColor: "gray",
    href: "/profiles/tech/sde",
    id: 0,
  },
  {
    name: "Data",
    description:
      "For individuals with a deep interest in AI and data science, equipped with strong analytical skills and a drive to leverage statistical and computational methods for intelligent system development.",
    image: WallE,
    bgColor: "bg-orange-400",
    bottomGradient:
      "bg-gradient-to-t from-orange-500 via-orange-400 to orange-300",
    textCol: "text-gray-100",
    navCol: "text-gray-400",
    strokeColor: "gray",
    href: "/profiles/tech/data",
    id: 1,
  },
];

const Tech = () => {
  return (
    <div className="mb-[-20px]">
      <section className="bg-black hero mt-[-50px] pt-5 w-full flex flex-col first-break:flex-row justify-between relative min-h-[75vh] second-break:min-h-[75vh]">
        {/* Back Button */}
        <div className="mb-12 text-left absolute top-5 left-0 first-break:top-10">
          <Link href="/profiles"
            className="px-6 py-3 rounded-full text-yellow-400/60 underline font-semibold hover:no-underline transition-all italic"
          >
            ← Back to Profiles
          </Link>
        </div>
        <div
          className={`hero-text mt-12 first-break:mt-20 w-full first-break:w-[70%] second-break:w-full min-h-fit first-break:min-h-screen overflow-hidden px-8 first-break:px-24 second-break:px-12`}
        >
          <motion.h1
            className="text-4xl sm:text-6xl first-break:text-7xl font-bold bg-gradient-to-r from-[#00a5c5] via-[#c5a4aa] to-[#aa0920] bg-clip-text text-transparent pb-8 first-break:pb-[5rem] text-center first-break:text-left second-break:text-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            Tech <br className="hidden first-break:block" />
            infrastructure
            <br className="hidden first-break:block" /> to boost
            <br className="hidden first-break:block" /> your skills
          </motion.h1>

          <motion.h4
            className="text-xl sm:text-2xl font-bold text-[#c7c1b2] text-center first-break:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos
            quisquam distinctio deserunt ipsa quod, accusantium exercita
          </motion.h4>
        </div>

        <motion.div
          className="hidden first-break:flex w-full first-break:w-[40%] max-h-screen items-center justify-center mt-8 first-break:mt-0 px-4 first-break:px-0"
          initial={{ x: 50, opacity: 0, rotateX: 45 }}
          animate={{ x: 0, opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-[90%] first-break:w-full ml-auto">
            <Image
              src={LaptopImage}
              alt="hero image"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>
      </section>

      <Carousel data={data} />
    </div>
  );
};

export default Tech;
