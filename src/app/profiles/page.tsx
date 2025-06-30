'use client';

import { IoPersonOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Factory, Landmark } from 'lucide-react';
import { FaCode } from 'react-icons/fa6';
import './styles.css';
import Link from 'next/link';

const data = [
  {
    name: 'Tech',
    heading: 'SDE, Data Science, AI, ML, etc.',
    description: "Curious how to crack SDE, AI, or Data Science roles from IIT KGP? Here's your no-nonsense prep roadmap - start with DSA (think arrays to DP in 3-4 months), master core CS (OOPs, DBMS, OS, CN), and layer on system design later. This summer? Dive into DSA, hit recursion level in 45 days, and start contests by June 20. With top tech giants like Google and Microsoft hiring on campus, this is your chance to get ahead - click to see how KGPians do it!",
    icon: <FaCode />,
    iconColor: '#32bef2',
    href: '/profiles/tech',
    id: 0
  },
  {
    name: 'Non Tech',
    heading: 'Finance, Consulting, Product Roles',
    description: "Want to explore Consulting, Product, or Finance roles at IIT KGP but not sure where to start? Whether you're aiming for top consulting firms, dreaming of building innovative products, or diving into high-impact finance roles - this guide has you covered. Get structured prep strategies, CV tips, interview guidance, and roadmap insights tailored for each profile - all campus-specific and completely free. Click to discover how you can start building your journey today.",
    icon: <Landmark color="#a66cff" />,
    iconColor: '#a66cff',
    href: '/profiles/non-tech',
    id: 1
  },
  {
    name: 'Core',
    heading: 'Core/FMCG',
    description: "Curious about Core or FMCG roles at IIT KGP? Whether you're eyeing engineering giants or fast-moving consumer goods companies like Unilever or P&G, this track values strong fundamentals and practical knowledge. Think core subjects, industrial training, relevant software (like AutoCAD, ANSYS, MATLAB), and a proactive approach to problem-solving. Use summers to brush up on concepts, pursue relevant certifications, or get hands-on experience through research or internships. With consistent effort and the right prep strategy, you can unlock some of the most respected and stable career paths offered during internships and placements at KGP.",
    icon: <Factory color="#d58936" />,
    iconColor: '#d58936',
    href: '/profiles/core',
    id: 2
  },
];

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
      }, 15000);
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
            animate={ isClicked ? { opacity: 1 } : { opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0] } }
            transition={ isClicked ? { duration: 3 } : { duration: 15 } }
          >

            <h3 className={`text-2xl font-bold text-[${profile.iconColor}] ml-8 mt-10 mb-4`} id={`heading-${profile.id}`}>
              <section className={`inline-block text-[${profile.iconColor}] mr-2`}>
                {profile.icon}
              </section>
              {profile.name}
            </h3>

            <h1 className='text-5xl font-bold text-gray-300 ml-8 mt-4 mb-10 leading-[65px]'>
              {profile.heading}
            </h1>

            <h4 className='text-1xl font-light text-gray-300 m-8 leading-[28px]'>
              {profile.description}
            </h4>

            <section className='text-right m-8 pt-8'>
              <Link href={`${profile.href}`} className={`text-[${profile.iconColor}] underline hover:no-underline`} id={`link-${profile.id}`}>
                Explore More<ArrowRight color={`${profile.iconColor}`} className='inline-block' />
              </Link>
            </section>
          </motion.section>
        ))}

        <section className='animation w-[45%] text-center p-8 border-dashed border-x border-y-0 border-[#2c2c2c]'>
          <section ref={startRef} className='inline-block scale-110 border-none bg-[#ffea00] shadow-[0px_1px_25px_-5px_#fff176] text-[#292929] transform transition-[transform,box-shadow] duration-250 ease active:scale-90 active:shadow-[0px_1px_20px_-4px_#fff176] transform transition p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 text-white'>
            <IoPersonOutline size='36px' />
          </section>

          <svg width='100%' height='40vh'>

            <motion.path 
              d={pathD}
              strokeWidth="3"
              fill="none"
              animate={ isClicked ? { pathLength: [0, 1], stroke: ['#32bef2', '#a66cff', '#d81e5b', '#00c2d1', '#32bef2', '#a66cff', '#d81e5b', '#00c2d1'] } : { pathLength: [0, 1, 1, 1, 1, 1, 1, 0], stroke: ['#32bef2', '#a66cff', '#d81e5b', '#00c2d1', '#32bef2', '#a66cff', '#d81e5b', '#00c2d1'] } }
              transition={ isClicked ? { duration: 2 } : { duration: 15, repeat: Infinity }}
            />
          </svg>

          <section className='flex items-center justify-evenly w-full'>
            <div 
              ref={laptopRef}
              className={`${activeId === 0 ? 'scale-110 border-none bg-[#ffea00] shadow-[0px_1px_25px_-5px_#fff176] text-[#292929] transform transition-[transform,box-shadow] duration-250 ease active:scale-90 active:shadow-[0px_1px_20px_-4px_#fff176] transform transition' : 
                'border border-solid border-[#e2f8fa] transform transition-[transform,border,box-shadow] duration-[250ms,100ms,250ms] ease-[ease,ease,ease] scale-100 hover:scale-110 hover:border-none hover:bg-[#ffea00] hover:shadow-[0px_1px_25px_-5px_#fff176] hover:text-[#292929] transform transition active:scale-90 active:shadow-[0px_1px_20px_-4px_#fff176] transform transition'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 cursor-pointer text-white`}
              id="0"
              onClick={handleClick}
            >
              <FaCode size='36px' id="0" />
            </div>
            
            <div
              ref={documentRef}
              className={`${activeId === 1 ? 'scale-110 border-none bg-[#ffea00] shadow-[0px_1px_25px_-5px_#fff176] text-[#292929] transform transition-[transform,box-shadow] duration-250 ease active:scale-90 active:shadow-[0px_1px_20px_-4px_#fff176] transform transition' : 
                'border border-solid border-[#e2f8fa] transform transition-[transform,border,box-shadow] duration-[250ms,100ms,250ms] ease-[ease,ease,ease] scale-100 hover:scale-110 hover:border-none hover:bg-[#ffea00] hover:shadow-[0px_1px_25px_-5px_#fff176] hover:text-[#292929] transform transition active:scale-90 active:shadow-[0px_1px_20px_-4px_#fff176] transform transition'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 cursor-pointer text-white`}
              id="1"
              onClick={handleClick}
            > 
              <Landmark size='36px' id="1" />
            </div>

            <div
              ref={coreRef}
              className={`${activeId === 2 ? 'scale-110 border-none bg-[#ffea00] shadow-[0px_1px_25px_-5px_#fff176] text-[#292929] transform transition-[transform,box-shadow] duration-250 ease active:scale-90 active:shadow-[0px_1px_20px_-4px_#fff176] transform transition' : 
                'border border-solid border-[#e2f8fa] transform transition-[transform,border,box-shadow] duration-[250ms,100ms,250ms] ease-[ease,ease,ease] scale-100 hover:scale-110 hover:border-none hover:bg-[#ffea00] hover:shadow-[0px_1px_25px_-5px_#fff176] hover:text-[#292929] transform transition active:scale-90 active:shadow-[0px_1px_20px_-4px_#fff176] transform transition'} p-10 rounded-xl hover:from-orange-400 hover:to-orange-600 cursor-pointer text-white`}
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