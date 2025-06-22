/**
 * To use this component, just create a new file named data.tsx containing array of objects in the illustrated way with the given properties
 * This component takes that data array as a prop, so import the data array in your main file and pass it in as a prop
 * export const data = [
 *  {
 *    name: //name of the profile 
 *    description: //a one liner containing who should target this (not necessary)
 *    image: //a link of the imaage to be put into the background of each item
 *    bgColor: //a background color for each element
 *    textCol: //a text color for each element
 *    navCol: //a color for the navigator
 *    href: //link to the respective page
 *    id: //the index of the object in the said array
 *  }
 * ];
 * 
 * navigator is not clickable yet, but will be soon
 */


'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type item = {
  name: string;
  description: string;
  image: StaticImageData;
  bgColor: string;
  bottomGradient: string;
  textCol: string;
  navCol: string;
  href: string;
  id: number;
};

type CarouselProps = {
  data: item[];
};

const Carousel = ({ data }: CarouselProps) => {

  const [topId, setTopId] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (evt) => {
    const id = Number(evt.target.id);
    if(timeoutRef.current) clearTimeout(timeoutRef.current);

    if(topId === id && isClicked) {
      setIsClicked(false);
    }

    else {
      setIsClicked(true);
      setTopId(id);
    }
  }

  useEffect(() => {

    if(isClicked && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    else {
      if(timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setTopId((topId + 1) % data.length);
      }, 7000);
    }

    return (() => { if(timeoutRef.current) clearTimeout(timeoutRef.current); });
  }, [topId, isClicked]);

  return ( 
    <div className="carousel text-center jusitfy-center pt-10 pb-[100px]">
      <div className="main-carousel flex justify-center">
        <section className='flex w-[70vw] h-[600px] items-center overflow-hidden relative'>
          {data.map((profile) => (
            topId === profile.id &&
            <Image
              src={profile.image} 
              alt={`carousel image`} 
              className={`shrink-0 rounded-lg object-cover w-full h-full`}
            />
          ))}

          {data.map((profile) => (
            topId === profile.id &&
            <motion.section className={`h-full w-full rounded-lg ${profile.bgColor} absolute`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
            >
            </motion.section>
          ))}

          {data.map((profile) => (
            !isClicked ? topId === profile.id &&
            <section key={profile.id}
              className={`w-full h-full shrink-0 absolute rounded-lg`}
            >
              <motion.h3 
                className={`top-heading text-3xl overflow-hidden absolute top-[0px] left-[0px] p-4 font-bold ${profile.textCol}`}
                animate={{ x: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, `-100%`], opacity: [0, 1, 1, 1, 1, 1, 1] }}
                transition={{ duration: 7 }}
              >
                {profile.name}
              </motion.h3>

              <section className={`body-text absolute bottom-[0px] left-[0px] overflow-hidden ${profile.bottomGradient} text-left p-4 ${profile.textCol} font-semibold`}>
                <motion.h3 className='text-1xl overflow-hidden pb-4'
                  animate={{ x: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, `-150%`], opacity: [0, 1, 1, 1, 1, 1, 1] }}
                  transition={{ duration: 7, delay: 0.2 }}
                >
                  {profile.description}
                </motion.h3>

                <Link href={profile.href} className='underline text-1xl hover:no-underline'>
                  Read More
                </Link>
              </section>
            </section>
            : topId === profile.id && <section key={profile.id}
              className={`w-full h-full shrink-0 absolute rounded-lg`}
            >
              <motion.h3 
                className={`top-heading text-3xl overflow-hidden absolute top-[0px] left-[0px] p-4 font-bold ${profile.textCol}`}
              >
                {profile.name}
              </motion.h3>

              <section className={`body-text absolute bottom-[0px] left-[0px] overflow-hidden ${profile.bottomGradient} text-left p-4 ${profile.textCol} font-semibold`}>
                <motion.h3 className='text-1xl overflow-hidden pb-4'
                >
                  {profile.description}
                </motion.h3>

                <Link href={profile.href} className='underline text-1xl hover:no-underline'>
                  Read More
                </Link>
              </section>
            </section>
          ))}
        </section>
      </div>

      <div className={`carousel-navigation cursor-pointer flex flex-wrap justify-center`}>
        <div className='w-[70vw] flex justify-center'>
          {data.map((profile) => (
            <motion.div 
              className={`navigator h-[150px] w-[50%] flex flex-col justify-center ${profile.navCol} text-2xl font-extrabold active:underline`}
              onClick={handleClick}
              key={profile.id}
              id={`${profile.id}`}
              initial={{ backgroundColor: 'none' }}
              whileHover={{ backgroundColor: 'rgb(59, 59, 59)' }}
              transition={{ duration: 0.2 }}
            >
              {profile.name}
            </motion.div>
          ))}
        </div>
        <svg height='2px' width='70vw'>
          <motion.path 
            d={`M ${window.innerWidth * 0.7 * topId / data.length} 2 L ${window.innerWidth * 0.7 * (topId + 1) / data.length} 2`}
            strokeWidth='8'
            fill='none'
            stroke={ topId === 0 ? 'gray' : 'orange'}
            initial={{ pathLength: 0 }}
            animate={ isClicked ? { pathLength: 1 } : { pathLength: [0, 1] }}
            transition={ isClicked ? { duration: 1 } : { duration: 7, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>
    </div>
   );
}
 
export default Carousel;