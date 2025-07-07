"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type general = {
  name: string;
  content: string[];
  id: number;
};

type techLayout = {
  generals: general[];
  steps?: general[];
};

const TechLayout = ({ generals, steps }: techLayout) => {
  return (
    <div className="text-left">
      <section className="generals flex justify-center">
        <section className="flex justify-center w-[80vw] flex-wrap">
          {generals.map((general) => (
            <motion.section
              key={general.id}
              className="w-[45%] shrink-0 p-10 border-2 rounded-lg m-[2.5%] overflow-hidden relative bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-3xl pb-7 font-bold text-[#ffbb00]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {general.name}
              </motion.h2>

              <ul className="list-disc pl-8 text-[#ffea00]">
                {general.content.map((points, index) => (
                  <motion.li
                    className="pb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
                  >
                    {points}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          ))}
        </section>
      </section>

      {steps && (
        <section className="steps flex justify-center">
          <section className="w-[80vw]">
            <motion.section
              className="w-[95%] border-2 rounded-lg m-[2.5%] p-10 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                className="text-4xl pb-10 text-center font-bold text-[#ffbb00]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Steps to take
              </motion.h3>

              <section className="flex justify-evenly flex-wrap">
                {steps &&
                  steps.map((step) => (
                    <motion.section
                      className={`w-[${
                        steps.length % 2 !== 0 && step.id === steps.length - 1
                          ? 90
                          : 45
                      }%] shrink-0 border-2 rounded-lg mt-6 mb-6 p-6 bg-gray/30 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-xl relative`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <motion.h3
                        className="text-2xl font-bold pb-7 text-[#ffbb00]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {step.name}
                      </motion.h3>

                      <ul className="pl-4 list-disc text-[#ffea00]">
                        {step.content.map((point, index) => (
                          <motion.li
                            className="pb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: [0, 0, 1] }}
                            transition={{
                              duration: 0.5,
                              delay: 0.5 + 0.15 * (index + 1),
                            }}
                            viewport={{ once: true }}
                          >
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.section>
                  ))}
              </section>
            </motion.section>
          </section>
        </section>
      )}
    </div>
  );
};

export default TechLayout;
