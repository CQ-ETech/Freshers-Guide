/**
 * We can add more tailwind classes to the carousel to make it more visually appealing.
 * For example, we can add a border, shadow, and rounded corners to the carousel items.
 * 
 * For the second carousel, we need a way to make the second image appear in the background before vanishing.
*/

'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./../globals.css";
import Car1 from "./../../../public/car_1.jpg";
import Car2 from "./../../../public/car_2.jpg";
import Car3 from "./../../../public/car_3.jpg";
import Car4 from "./../../../public/car_4.jpg";
import Car5 from "./../../../public/car_5.jpg";
import Image from "next/image";
import { BsTriangleFill } from "react-icons/bs";

const images = [
  {
    src: Car1,
    alt: "hyper car 1",
    id: 0,
  },
  {
    src: Car2,
    alt: "buggati",
    id: 1,
  },
  {
    src: Car3,
    alt: "koenigsegg",
    id: 2,
  },
  {
    src: Car4,
    alt: "mclaren",
    id: 3,
  },
  {
    src: Car5,
    alt: "porsche",
    id: 4,
  },
];

const Carousel = () => {

  const [topId, setTopId] = useState(images[0].id);
  const [expandedImage, setExpandedImage] = useState(-1);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedImage = Number(e.target.id);
    console.log(expandedImage, clickedImage);
    if(expandedImage === clickedImage) {
      console.log(expandedImage);
      setExpandedImage(-1);
      return;
    }

    setExpandedImage(clickedImage);
  }


  useEffect(() => {
    setTimeout(() => {
      setTopId((topId + 1) % images.length);
    }, 3000);
  }, [topId]);

  const variants = {
    initial: {
      x: `-${topId * 100}%`,
    },
    finally: {
      x: `-${((topId + 1) % images.length) * 100}%`,
    },
  };

  return ( 
    <div>
      <div className="carousel-1 flex shrink-0 items-center overflow-hidden relative w-[400px] h-[400px] m-4">
        {images.map((image) => (
          <motion.div 
            key={image.id} 
            className="carousel-item w-full h-full shrink-0 relative"
            variants={variants}
            initial="initial"
            animate="finally"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      <div className="carousel-2 flex justify-center m-4">
        {images.map((image) => (
          image.id === topId && <motion.div
              key={image.id}
              className="carousel-item w-full h-full shrink-0 relative"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 3 }}
            >
              <Image src={image.src} alt={image.alt} className="w-[400px] h-[400px] object-cover" />
            </motion.div>
        ))}
        </div>

        <div className="carousel-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex items-center">
            {images.map((image) => (
                <motion.div 
                  key={image.id} 
                  className={`carousel-item w-[400px] h-[400px] shrink-0 relative border mb-0`}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {image.id === topId && (
                    <motion.section className="absolute bottom-[-2px]" 
                      initial={{ x: '-18px' }}
                      animate={{ x: '382px' }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    >
                      <BsTriangleFill className={`text-black text-1xl`} />
                    </motion.section>
                  )}
                  <Image src={image.src} alt={image.alt} className="w-full h-full object-cover" /> 
                </motion.div>
              ))}
          </div>
          {images.map((image) => (
            <div key={image.id}>
              {image.id === topId && (
                <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <h2 className="text-white text-2xl font-bold">{image.alt}</h2>
                </div>
              )}
            </div>))}
        </div>

        <div className="carousel-4 text-center mt-4">
          {images.map((image) => (
            <motion.div 
              key={image.id}  
              onClick={handleClick}
              initial={{ width: '80px' }}
              animate={{ width: topId === image.id ? '400px' : '80px' }}
              className="inline-block m-2 relative"
            >
              <Image src={image.src} 
                id={`${image.id}`}
                alt={image.alt} 
                className="w-full h-[400px] object-cover m-2 rounded-lg" 
              />
              
              {topId === image.id && (
                <motion.div className="absolute top-2 left-2 flex items-center justify-center bg-black bg-opacity-0 rounded-lg"
                  initial={{ width: 0, height: 0, opacity: 0}}
                  animate={{ width: '100%', height: '400px', opacity: 0.5 }}
                  id={image.id.toString()}
                >
                  <h2 className="text-white text-2xl font-bold" id={image.id.toString()}>{image.alt}</h2>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
    </div>
   );
}
 
export default Carousel;