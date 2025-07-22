"use client";

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
    <div className="w-full space-y-16">
      {/* --- Generals Section --- */}
      {/* A responsive grid: 1 column on mobile, 2 on medium screens and up. */}
      {/* 'gap' provides consistent spacing, replacing percentage-based margins. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {generals.map((general) => (
          <motion.section
            key={general.id}
            className="bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-xl p-6 md:p-8" // Responsive padding
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl pb-6 font-bold text-[#ffbb00]" // Responsive font size
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {general.name}
            </motion.h2>

            <ul className="list-disc pl-5 space-y-3 text-yellow-50">
              {general.content.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      {/* --- Steps Section (if it exists) --- */}
      {steps && (
        <motion.section
          className="w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-6 md:p-10" // Responsive padding
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl pb-8 text-center font-bold text-[#ffbb00]" // Responsive font size
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Steps to take 🗺️
          </motion.h3>

          {/* A responsive grid for the steps: 1 col on mobile, up to 3 on large screens. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.section
                key={step.id}
                // NOTE: Removed all complex width logic. The grid handles this automatically.
                className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <motion.h3
                  className="text-xl md:text-2xl font-bold pb-6 text-[#ffbb00]" // Responsive font size
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {step.name}
                </motion.h3>

                <ul className="list-disc pl-5 space-y-3 text-yellow-50">
                  {step.content.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + 0.15 * i,
                      }}
                      viewport={{ once: true }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default TechLayout;