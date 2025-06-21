'use client';

import Image, { StaticImageData } from 'next/image';
import { act, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type item = {
  name: string;
  description: string;
  image: StaticImageData;
  id: number;
};

type CarouselProps = {
  data: item[];
};

const Carousel = ({ data }: CarouselProps) => {

  const [topId, setTopId] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setTopId((topId + 1) % 2);
    }, 3000);
  }, [topId]);

  return ( 
    <div className="carousel text-center flex jusitfy-center m-4">
      <section className="main-carousel relative">
        <section className="top-heading absolute top-[10px] left-[10px] flex shrink-0 w-[80px] overflow-hidden">
          {/* {data.map((profile) => (
            <motion.h3 
              key={profile.id} 
              className={`text-3xl relative pr-5`}
              initial={{ x: `-${topId * 100}%` }}
              animate={{ x: `-${((topId + 1) % data.length) * 100}%` }}
            >
              {profile.name}
            </motion.h3>
          ))} */}
        </section>

        <section className='flex w-[800px] h-[400px] items-center overflow-hidden'>
          {data.map((profile) => (
            topId === profile.id &&
            <motion.section key={profile.id}
              className='w-full h-full shrink-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={profile.image} alt={`carousel image`} className='rounded-lg object-cover w-full h-full' />
            </motion.section>
            
          ))}
        </section>

        <section className={`bottom-text absolute bottom-[40px] left-[10px]`}>
          {data.map((profile) => (
            <motion.h4 
              key={profile.id} 
              className={`text-2xl`}
              initial={{ x: `-${topId * 100}%` }}
              animate={{ x: `-${((topId + 1) % data.length) * 100}%` }}
            >
              {profile.description}
            </motion.h4>
          ))}
        </section>
      </section>

      <section className="carousel-navigation">

      </section>
    </div>
   );
}
 
export default Carousel;