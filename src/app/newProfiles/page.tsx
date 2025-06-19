'use client';

import { IoPersonOutline } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Laptop2Icon } from 'lucide-react';
import { TiDocumentText } from 'react-icons/ti';
import { FaGears } from 'react-icons/fa6';
import './styles.css';

const Profiles = () => {

  const [activeId, setActiveId] = useState<number>(-1);
  const laptopRef = useRef<HTMLTableSectionElement>(null);
  const documentRef = useRef<HTMLTableSectionElement>(null);
  const coreRef = useRef<HTMLTableSectionElement>(null);
  const refs: React.MutableRefObject<HTMLTableSectionElement | null>[] = [laptopRef, documentRef, coreRef];

  const startRef = useRef<HTMLTableSectionElement>(null);
  let endRef: React.MutableRefObject<HTMLTableSectionElement | null>;

  const [pathD, sethPathD] = useState<string>("");
  const [pathLength, setPathLength] = useState<number>(0);

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

    const svgStartY = startY - (svgRect?.top || 0);
    const svgEndY = endY - (svgRect?.top || 0);

    const pathD = `M ${startX} ${svgStartY} ${startX} ${(svgEndY - svgStartY) / 2} L ${endX} ${(svgEndY - svgStartY) / 2} L ${endX} ${svgEndY}`;

    sethPathD(pathD);

    requestAnimationFrame(() => {
      const pathEl = document.querySelector('path');
      if (pathEl && pathEl instanceof SVGPathElement) {
        const length = pathEl.getTotalLength();
        setPathLength(length);
      }
    });
  };

  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      strokeDashoffset: -pathLength - 200,
      transition: { duration: 3, ease: "easeInOut" }
    });
  }, [pathLength]);
  
  const handleEnter = (evt) => {
    setActiveId(Number(evt.target.id));

    //start animation on hover
    controls.set({ strokeDashoffset: 100 });
    controls.start({
      strokeDashoffset: -pathLength - 200,
      transition: { duration: 3, ease: "easeInOut" }
    })
  };

  const handleLeave = () => {
    setActiveId(-1);
    controls.set({ strokeDashoffset: 100 });
  };

  useEffect(() => {
    updatePath();
  }, [activeId]);

  useEffect(() => {
    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);

  

  return ( 
    <div className='bg-black text-white min-h-screen flex flex-col items-center justify-center'>
      <section ref={startRef}>
        <IoPersonOutline size='48px' />
      </section>

      <svg width='[100vw]' height='400'>
        <motion.path 
          d={pathD}
          stroke="gray" 
          strokeWidth="2"
          fill="none"
          strokeDasharray={`${activeId !== -1 ? pathLength : '0'} ${pathLength + 200}`}
          strokeDashoffset="100"
          animate={controls}
        />
      </svg>

      <section className='flex items-center justify-evenly w-full'>
        <section 
          ref={laptopRef}
          className='icon p-4 shadow-md rounded-lg bg-gray-600 hover:bg-orange-400 scale-120 transition-bg duration-500'
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          id="0"
        >
          <Laptop2Icon size='48px' id="0" />
        </section>

        <section
          ref={documentRef}
          className='icon p-4 shadow-md rounded-lg bg-gray-600 hover:bg-orange-400 scale-120 transition-bg duration-500 delay-3000'
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          id="1"
        >
          <TiDocumentText size='48px' id="1" />
        </section>

        <section
          ref={coreRef}
          className='icon p-4 shadow-md rounded-lg bg-gray-600 hover:bg-orange-400 scale-120 transition-bg duration-500 delay-3000'
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          id="2"
        >
          <FaGears size='48px' id="2" />
        </section>
      </section>
    </div>
   );
}
 
export default Profiles;