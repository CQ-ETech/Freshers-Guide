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
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const laptopRef = useRef<HTMLTableSectionElement>(null);
  const documentRef = useRef<HTMLTableSectionElement>(null);
  const coreRef = useRef<HTMLTableSectionElement>(null);
  const refs: React.MutableRefObject<HTMLTableSectionElement | null>[] = [laptopRef, documentRef, coreRef];

  const startRef = useRef<HTMLTableSectionElement>(null);
  let endRef: React.MutableRefObject<HTMLTableSectionElement | null>;
  let timeout;
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

  const handleClick = (evt) => {
    const id = Number(evt.target.id);

    if(timeoutRef.current) clearTimeout(timeoutRef.current);

    if(id === activeId) {
      setIsClicked(false);
    }

    else {
      setIsClicked(true);
      setActiveId(id);
    }
  };
  
  useEffect(() => {
    
    if(isClicked === false) {
      if(timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setActiveId((activeId + 1) % 3);
      }, 7000);
    }

    if(isClicked === true) {
      if(timeoutRef.current)
        clearTimeout(timeout);
    }

    return (() => { if(timeoutRef.current) clearTimeout(timeoutRef.current); });
  }, [activeId, isClicked]);

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
    <div className={`body mt-[-20px] ${/*bg-gradient-to-b from-[#222222] via-[#323232] to-[#222222]*/'bg-none'} text-white min-h-screen flex flex-col items-center justify-center`}>
      <div className='flex justify-around w-full'>
        {data.map((profile) => (
          activeId === profile.id && 
          <motion.section
            className='carousel w-[45%] relative' 
            key={profile.id}
            initial={{ opacity: 0 }}
            animate={ isClicked ? { opacity: 1 } : { opacity: [0, 1, 1, 1, 1, 0] } }
            transition={ isClicked ? { duration: 3 } : { duration: 7 } }
          >

            <h3 className={`text-2xl font-bold text-[${profile.iconColor}] ml-8 mt-10 mb-4`} id={`heading-${profile.id}`}>
              <section className={`inline-block text-[${profile.iconColor}] mr-2`}>
                {profile.icon}
              </section>
              {profile.name}
            </h3>

            <h1 className='text-5xl font-bold text-gray-300 ml-8 mt-4 mb-10'>
              {profile.heading}
            </h1>

            <h4 className='text-1xl font-light text-gray-300 m-8'>
              {profile.description}
            </h4>

            <section className='text-right m-8 pt-8'>
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
              strokeWidth="3"
              fill="none"
              animate={ isClicked ? { pathLength: [0, 1], stroke: ['#32bef2', '#a66cff', '#d81e5b', '#00c2d1', '#32bef2', '#a66cff', '#d81e5b', '#00c2d1'] } : { pathLength: [0, 1, 1, 0], stroke: ['#32bef2', '#a66cff', '#d81e5b', '#00c2d1', '#32bef2', '#a66cff', '#d81e5b', '#00c2d1'] } }
              transition={ isClicked ? { duration: 2 } : { duration: 7, repeat: Infinity }}
            />
          </svg>

          <section className='flex items-center justify-evenly w-full'>
            <div 
              ref={laptopRef}
              className={`${activeId === 0 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
              id="0"
              onClick={handleClick}
            >
              <FaCode size='36px' id="0" />
            </div>
            
            <div
              ref={documentRef}
              className={`${activeId === 1 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
              id="1"
              onClick={handleClick}
            > 
              <Landmark size='36px' id="1" />
            </div>

            <div
              ref={coreRef}
              className={`${activeId === 2 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
              id="2"
              onClick={handleClick}
            >
              <Factory size='36px' id="2" />
            </div>
          </section>
        </section>
      </div>
    </div>
   );
}
 
export default Profiles;