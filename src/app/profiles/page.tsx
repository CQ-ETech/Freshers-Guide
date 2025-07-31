"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Factory, Landmark } from "lucide-react";
import { FaCode } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";

const data = [
  {
    name: "Tech",
    heading: "SDE, Data Science, AI, ML, etc.",
    description:
      "Curious how to crack SDE, AI, or Data Science roles from IIT KGP? Here's your no-nonsense prep roadmap - start with DSA (think arrays to DP in 3-4 months), master core CS (OOPs, DBMS, OS, CN), and layer on system design later. This summer? Dive into DSA, hit recursion level in 45 days, and start contests by June 20. With top tech giants like Google and Microsoft hiring on campus, this is your chance to get ahead - click to see how KGPians do it!",
    icon: <FaCode size="36px" />,
    iconColor: "#32bef2",
    href: "/profiles/tech",
    id: 0,
  },
  {
    name: "Non Tech",
    heading: "Finance, Consulting, Product Roles",
    description:
      "Want to explore Consulting, Product, or Finance roles at IIT KGP but not sure where to start? Whether you're aiming for top consulting firms, dreaming of building innovative products, or diving into high-impact finance roles - this guide has you covered. Get structured prep strategies, CV tips, interview guidance, and roadmap insights tailored for each profile - all campus-specific and completely free. Click to discover how you can start building your journey today.",
    icon: <Landmark size="36px" />,
    iconColor: "#a66cff",
    href: "/profiles/non-tech",
    id: 1,
  },
  {
    name: "Core",
    heading: "Core/FMCG",
    description:
      "Curious about Core or FMCG roles at IIT KGP? Whether you're eyeing engineering giants or fast-moving consumer goods companies like Unilever or P&G, this track values strong fundamentals and practical knowledge. Think core subjects, industrial training, relevant software (like AutoCAD, ANSYS, MATLAB), and a proactive approach to problem-solving. Use summers to brush up on concepts, pursue relevant certifications, or get hands-on experience through research or internships. With consistent effort and the right prep strategy, you can unlock some of the most respected and stable career paths offered during internships and placements at KGP.",
    icon: <Factory size="36px" />,
    iconColor: "#d58936",
    href: "/profiles/core",
    id: 2,
  },
];

const Profiles = () => {
  const [activeId, setActiveId] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [paths, setPaths] = useState<string[]>(["", "", ""]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const iconRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const calculatePaths = () => {
    if (
      !startRef.current ||
      !svgRef.current ||
      iconRefs.some((ref) => !ref.current)
    )
      return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const startPos = startRef.current.getBoundingClientRect();
    const newPaths = iconRefs.map((endRef, index) => {
      if (!endRef.current) return "";
      const endPos = endRef.current.getBoundingClientRect();
      const startX = startPos.left + startPos.width / 2 - svgRect.left;
      const startY = startPos.top + startPos.height / 2 - svgRect.top;
      const endX = endPos.left + endPos.width / 2 - svgRect.left;
      const endY = endPos.top - svgRect.top;
      if (index === 0 || index === 2) {
        const midY = startY + (endY - startY) * 0.75;
        return `M ${startX},${startY} L ${startX},${midY} L ${endX},${midY} L ${endX},${endY}`;
      } else {
        return `M ${startX},${startY} L ${endX},${endY}`;
      }
    });
    setPaths(newPaths);
  };

  const handleClick = (id: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsClicked(true);
    setActiveId(id);
  };

  useEffect(() => {
    if (isClicked) return;
    timeoutRef.current = setTimeout(() => {
      setActiveId((currentId) => (currentId + 1) % data.length);
    }, 12000); // Total cycle time is 12 seconds
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeId, isClicked]);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    const debouncedCalculatePaths = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculatePaths, 150);
    };
    setTimeout(calculatePaths, 100);
    window.addEventListener("resize", debouncedCalculatePaths);
    return () => window.removeEventListener("resize", debouncedCalculatePaths);
  }, []);

  const activeProfile = data.find((p) => p.id === activeId);

  return (
    <>
      <div className="text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-8 gap-y-16 md:gap-x-12 lg:gap-x-20 w-full">
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeProfile && (
              <motion.section
                key={activeProfile.id}
                animate={{
                  opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
                  y: [20, 0, 0, 0, 0, 0, 0, -20],
                }}
                transition={{ duration: 12, ease: "easeInOut" }}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold mb-5 text-center md:text-left flex items-center justify-center md:justify-start"
                  style={{ color: activeProfile.iconColor }}
                >
                  <span className="inline-block mr-3">
                    {activeProfile.icon}
                  </span>
                  {activeProfile.name}
                </h3>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6 leading-tight text-center md:text-left">
                  {activeProfile.heading}
                </h1>
                <p className="text-base sm:text-lg font-light text-gray-300 leading-relaxed text-center md:text-left">
                  {activeProfile.description}
                </p>
                <div className="flex justify-center md:justify-start mt-8">
                  <Link
                    href={activeProfile.href}
                    className="flex items-center gap-2 text-base sm:text-lg font-semibold transition-all hover:underline"
                    style={{ color: activeProfile.iconColor }}
                  >
                    Explore More <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center justify-between text-center">
          <div
            ref={startRef}
            className="inline-block scale-100 sm:scale-110 border-none bg-yellow-400 shadow-[0px_1px_25px_-5px_#fff176] text-gray-800 p-6 sm:p-8 rounded-xl"
          >
            <IoPersonOutline size="36px" />
          </div>
          <svg
            ref={svgRef}
            width="100%"
            className="my-6 h-[250px] md:h-[200px]"
            style={{ overflow: "visible" }}
          >
            {paths.map((path, index) => (
              <motion.path
                key={index}
                d={path}
                strokeWidth="2.5"
                fill="none"
                stroke={data[index].iconColor}
                initial={{ pathLength: 0 }}
                animate={{
                  // ✅ CHANGED: Path animation now includes a "hold" state
                  pathLength:
                    activeId === index
                      ? isClicked
                        ? 1
                        : [0, 1, 1, 1, 1, 0]
                      : 0,
                }}
                transition={{
                  duration: isClicked ? 0.5 : 12,
                  ease: "easeInOut",
                  // ✅ CHANGED: Times array creates a "draw, hold, erase" effect
                  times: isClicked ? undefined : [0, 0.15, 0.85, 1],
                }}
                style={{
                  filter: `drop-shadow(0 0 8px ${
                    activeId === index ? data[index].iconColor : "transparent"
                  })`,
                }}
              />
            ))}
          </svg>
          <div className="flex items-center justify-around w-full max-w-sm md:max-w-md mx-auto">
            {data.map((profile, index) => (
              <div
                key={profile.id}
                ref={iconRefs[index]}
                onClick={() => handleClick(profile.id)}
                className={`p-5 sm:p-8 rounded-xl cursor-pointer transition-all duration-300 transform-gpu ${
                  activeId === profile.id
                    ? "scale-110 sm:scale-115 border-none bg-yellow-400 shadow-[0px_1px_25px_-5px_#fff176] text-gray-800"
                    : "border border-solid border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 scale-95 sm:scale-100"
                }`}
              >
                {profile.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiles;
