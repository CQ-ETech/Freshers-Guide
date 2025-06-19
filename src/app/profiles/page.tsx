'use client';

import { IoPersonOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowBigRight, ArrowRight, Code, Factory, Landmark, Laptop2Icon } from 'lucide-react';
import { TiDocumentText } from 'react-icons/ti';
import { FaCode, FaGears } from 'react-icons/fa6';
import './styles.css';
import { data } from './data';
import Link from 'next/link';

const Profiles = () => {

  const [activeId, setActiveId] = useState<number>(-1);
  const laptopRef = useRef<HTMLTableSectionElement>(null);
  const documentRef = useRef<HTMLTableSectionElement>(null);
  const coreRef = useRef<HTMLTableSectionElement>(null);
  const refs: React.MutableRefObject<HTMLTableSectionElement | null>[] = [laptopRef, documentRef, coreRef];

  const startRef = useRef<HTMLTableSectionElement>(null);
  let endRef: React.MutableRefObject<HTMLTableSectionElement | null>;
  const [pathD, sethPathD] = useState<string>("");

  const updatePath = () => {
    if(activeId !== -1) {
      endRef = refs[activeId];
    }
    const startPosition = startRef.current?.getBoundingClientRect();
    const endPosition = endRef ? endRef.current?.getBoundingClientRect() : 0;

    const startX = startPosition?.left + startPosition?.width / 2;
    const startY = startPosition?.top + startPosition?.height / 2;

    const endX = endPosition ? endPosition.left + endPosition.width / 2 : 0;
    const endY = endPosition ? endPosition.top : 0;

    const svg = document.querySelector('svg');
    const svgRect = svg?.getBoundingClientRect();

    const svgStartX = startX - (svgRect?.left || 0) - window.innerWidth * 0.495;
    const svgEndX = endX - (svgRect?.left || 0) - window.innerWidth * 0.495;

    const svgStartY = startY - (svgRect?.top || 0);
    const svgEndY = endY - (svgRect?.top || 0);

    console.log(startX, endX, svgRect.left, svgStartX, svgEndX, window.innerWidth, window.outerWidth)

    let pathD: string;
    if(activeId === 0) {
      pathD = `
        M ${svgStartX} ${svgStartY - 100}
        L ${svgStartX} ${svgEndY / 2 - 20}
        Q ${svgStartX} ${svgEndY / 2}, ${svgStartX - 20} ${svgEndY / 2}
        L ${svgEndX + 20} ${svgEndY / 2}
        Q ${svgEndX} ${svgEndY / 2}, ${svgEndX} ${svgEndY / 2 + 20}
        L ${svgEndX} ${svgEndY}
      `;
    } 

    if(activeId === 1) {
      pathD = `
        M ${svgStartX} ${svgStartY - 100}
        L ${svgEndX} ${svgEndY}
      `;
    }

    if(activeId === 2) {
      pathD = `
        M ${svgStartX} ${svgStartY - 100}
        L ${svgStartX} ${svgEndY / 2 - 20}
        Q ${svgStartX} ${svgEndY / 2}, ${svgStartX + 20} ${svgEndY / 2}
        L ${svgEndX - 20} ${svgEndY / 2}
        Q ${svgEndX} ${svgEndY / 2}, ${svgEndX} ${svgEndY / 2 + 20}
        L ${svgEndX} ${svgEndY}
      `;
    }
    sethPathD(pathD);
  };
  
  useEffect(() => {
    setTimeout(() => {
      setActiveId((activeId + 1) % 3);
    }, 12000);
  }, [activeId]);

  useEffect(() => {
    updatePath();
  }, [activeId]);

  useEffect(() => {
    setActiveId(0);
    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);

  

  return ( 
    <div className='body mt-[-20px] bg-gradient-to-b from-[#222222] via-[#323232] to-[#222222] text-white min-h-screen flex flex-col items-center justify-center'>
      <div className='flex justify-around w-full mt-5'>
        {data.map((profile) => (
          activeId === profile.id && 
          <motion.section
            className='carousel w-[45%] relative' 
            key={profile.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.5, 1, 1, 1, 1, 0] }}
            transition={{ duration: 12 }}
          >

            <h3 className={`text-2xl font-bold text-[${profile.iconColor}] ml-8 mt-10 mb-8`} id={`heading-${profile.id}`}>
              <section className={`inline-block text-[${profile.iconColor}] mr-2`}>
                {profile.icon}
              </section>
              {profile.name}
            </h3>

            <h1 className='text-5xl font-bold text-gray-300 ml-8 mt-8 mb-10'>
              {profile.heading}
            </h1>

            <h4 className='text-1xl font-light text-gray-300 m-8'>
              {profile.description}
            </h4>

            <section className='text-right m-8'>
              <Link href={`${profile.href}`} className={`text-[${profile.iconColor}] underline hover:no-underline`} id={`link-${profile.id}`}>
                Explore More<ArrowRight color={`${profile.iconColor}`} className='inline-block' />
              </Link>
            </section>
          </motion.section>
        ))}

        <section className='animation w-[45%] text-center p-8'>
          <section ref={startRef} className='inline-block icon-hover p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white'>
            <IoPersonOutline size='36px' />
          </section>

          <svg width='100%' height='40vh'>

            <motion.path 
              d={pathD}
              stroke={`${activeId === 0 ? '#32bef2' : 
                activeId === 1 ? '#a66cff' : 
                activeId === 2 && '#b58936'
              }`}
              strokeWidth="2"
              fill="none"
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </svg>

          <section className='flex items-center justify-evenly w-full'>
            <section 
              ref={laptopRef}
              className={`${activeId === 0 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
              id="0"
            >
              <FaCode size='36px' id="0" />
            </section>

            <section
              ref={documentRef}
              className={`${activeId === 1 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
              id="1"
            > 
              <Landmark size='36px' id="1" />
            </section>

            <section
              ref={coreRef}
              className={`${activeId === 2 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
              id="2"
            >
              <Factory size='36px' id="2" />
            </section>
          </section>
        </section>
      </div>
    </div>
   );
}
 
export default Profiles;