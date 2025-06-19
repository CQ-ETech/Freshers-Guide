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

    let pathD: string;
    if(activeId === 0) {
      pathD = `
        M ${startX} ${svgStartY - 100}
        L ${startX} ${(svgStartY + svgEndY - 10) / 2}
        Q ${startX} ${(svgStartY + svgEndY) / 2}, ${startX - 5} ${(svgStartY + svgEndY) / 2}
        L ${endX + 5} ${(svgStartY + svgEndY) / 2}
        Q ${endX} ${(svgStartY + svgEndY) / 2}, ${endX} ${(svgStartY + svgEndY + 10) / 2}
        L ${endX} ${svgEndY}
      `;
    } 

    if(activeId === 1) {
      pathD = `
        M ${startX} ${svgStartY - 100}
        L ${endX} ${svgEndY}
      `;
    }

    if(activeId === 2) {
      pathD = `
        M ${startX} ${svgStartY - 100}
        L ${startX} ${(svgStartY + svgEndY - 10) / 2}
        Q ${startX} ${(svgStartY + svgEndY) / 2}, ${startX + 5} ${(svgStartY + svgEndY) / 2}
        L ${endX - 5} ${(svgStartY + svgEndY) / 2}
        Q ${endX} ${(svgStartY + svgEndY) / 2}, ${endX} ${(svgStartY + svgEndY + 10) / 2}
        L ${endX} ${svgEndY}
      `;
    }

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

    setTimeout(() => {
      setActiveId((activeId + 1) % 3);
    }, 3000);

    controls.set({ strokeDashoffset: pathLength });
    controls.start({
      strokeDashoffset: -pathLength - 200,
      transition: { duration: 3, ease: "easeInOut" },
    });
  }, [activeId]);

  useEffect(() => {
    updatePath();
  }, [activeId]);

  useEffect(() => {
    controls.start({
      strokeDashoffset: -pathLength - 200,
      transition: { duration: 3, ease: "easeInOut" }
    });
  }, [pathLength]);

  useEffect(() => {
    setActiveId(0);
    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);

  

  return ( 
    <div className='body bg-gradient-to-b from-#ff9900 via-#ffea00 to-#ffbb00 text-white min-h-screen flex flex-col items-center justify-center'>
      <section ref={startRef} className='icon-hover p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white'>
        <IoPersonOutline size='72px' />
      </section>

      <svg width='[100vw]' height='200'>
        <defs>
          {/* <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="50%" stopColor="#32fbe2" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient> */}
        </defs>

        <motion.path 
          d={pathD}
          stroke="#32fbe2" 
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
          className={`${activeId === 0 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
          id="0"
        >
          <Laptop2Icon size='72px' id="0" />
        </section>

        <section
          ref={documentRef}
          className={`${activeId === 1 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
          id="1"
        >
          <TiDocumentText size='72px' id="1" />
        </section>

        <section
          ref={coreRef}
          className={`${activeId === 2 ? 'icon-hover' : 'icon'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white`}
          id="2"
        >
          <FaGears size='72px' id="2" />
        </section>
      </section>
    </div>
   );
}
 
export default Profiles;