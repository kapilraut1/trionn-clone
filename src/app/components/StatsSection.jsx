// StatsSection.jsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/src/app/hooks/useCountUp"; // Adjust path if needed

// Individual Stat Component with Animation
const StatItem = ({ count, suffix, title, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Animate the number only when the component is in view
  const animatedCount = useCountUp(0, count, 2.5, isInView);

  // Animation for text/container fade-in
  const variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: delay },
    },
  };

  // Helper function to format the number
  const displayCount = Math.round(animatedCount).toLocaleString();

  return (
    <motion.div
      ref={ref}
      className="text-center p-8 border-b border-gray-300 dark:border-gray-700 md:border-b-0 md:border-r last:md:border-r-0"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-6xl md:text-7xl font-extrabold text-[#17181A] dark:text-white mb-2">
        {displayCount}
        <span className="text-4xl align-top text-red-500 dark:text-red-400">
          {suffix}
        </span>
      </h3>
      <p className="text-lg opacity-70 text-[#17181A] dark:text-white">
        {title}
      </p>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#17181A]">
      <div className="tr__container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300 dark:divide-gray-700">
          <StatItem count={50} suffix="+" title="Trusted Brands" delay={0.1} />
          <StatItem count={900} suffix="+" title="Projects Done" delay={0.2} />
          <StatItem
            count={100}
            suffix="%"
            title="Client Satisfaction"
            delay={0.3}
          />
          <StatItem count={15} suffix="K" title="Hours Worked" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
