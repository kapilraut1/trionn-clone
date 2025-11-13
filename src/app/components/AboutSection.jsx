// AboutSection.jsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="tr__section tr__home__about py-32 bg-gray-50 dark:bg-[#17181A]"
    >
      <div className="tr__container mx-auto px-4 text-[#17171A] dark:text-white">
        {/* Section Title */}
        <div className="tr__section__title mb-20">
          <div className="overflow-hidden">
            <motion.h3
              className="text-3xl lg:text-5xl font-extrabold uppercase"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              who <br />
              we are
            </motion.h3>
          </div>
        </div>

        {/* Main Heading/Mission */}
        <div className="overflow-hidden">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-20 max-w-5xl"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2, duration: 1.0 }}
          >
            As an award-winning agency within the digital jungle, TRIONN
            transcends aesthetics, crafting your vision into a legacy that
            endures.
          </motion.h2>
        </div>

        {/* Body Text and Button */}
        <div className="w-full sm:max-w-sm ml-auto">
          <motion.p
            className="mb-10 opacity-80"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            We roar with creativity, staying updated with the latest tech to
            make your brand a formidable force in the digital wilderness and
            deliver exceptional website and app experiences.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <a
              href="/about"
              className="inline-block px-8 py-3 text-lg font-medium border-2 border-[#17181A] dark:border-white rounded-full transition-colors duration-300 hover:bg-[#17181A] hover:text-white dark:hover:bg-white dark:hover:text-[#17181A]"
            >
              About us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
