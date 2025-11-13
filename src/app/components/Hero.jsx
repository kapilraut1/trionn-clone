"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation Variants for staggered reveal
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.0, 0.1, 1.0],
      duration: 1.0,
    },
  },
};

// --- Reusable Animated Button Component ---
const AnimatedButton = ({
  text,
  href,
  className = "",
  variants,
  isPrimary = true,
}) => {
  // Tailwind Class for TRIONN's Light Theme Buttons
  const buttonClasses = isPrimary
    ? "border-[#17181A] text-[#17181A] hover:bg-[#17181A] hover:text-white"
    : "border-[#17181A] text-[#17181A] hover:bg-[#17181A] hover:text-white";

  return (
    <motion.a
      href={href}
      className={`relative overflow-hidden inline-block px-10 py-4 text-lg font-medium border-2 rounded-full transition-colors duration-500 ${buttonClasses} ${className}`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      variants={variants}
    >
      {text}
    </motion.a>
  );
};

export default function HeroBanner() {
  return (
    <motion.section
      className="tr__banner pt-40 pb-20 min-h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-[#17181A]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="tr__container mx-auto px-4 text-[#17181A] dark:text-white">
        <h1 className="text-center font-extrabold leading-none uppercase max-w-6xl mx-auto">
          <motion.span
            variants={item}
            className="block text-8xl md:text-[10rem] lg:text-[14rem] tracking-tight"
          >
            ROAR IN THE
          </motion.span>
          <motion.span
            variants={item}
            className="block text-8xl md:text-[10rem] lg:text-[14rem] tracking-tight"
          >
            DIGITAL WILDERNESS.
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="text-center max-w-2xl mx-auto mt-8 mb-16 text-lg opacity-80"
        >
          <span>We roar with success, delivering the TRIONN® </span>
          <span>through versatile design, branding and the latest </span>
          <span>tech development to companies.</span>
        </motion.p>

        {/* Scroll Down Arrow */}
        <motion.p variants={item} className="text-center mb-16">
          <a href="#work" aria-label="Scroll down to work section">
            <Image
              alt="Move Down Arrow"
              loading="lazy"
              width={24}
              height={24}
              className="opacity-40"
              src="/media/move-down.31fd25f2.svg"
            />
          </a>
        </motion.p>

        {/* Button Group and Center Image */}
        <div className="flex justify-center items-end gap-10 lg:gap-20">
          <AnimatedButton
            text="Explore work"
            href="/work"
            variants={item}
            className="z-10"
          />

          {/* Center Image/Video Placeholder */}
          <motion.div variants={item} className="hidden sm:block z-10 -mt-20">
            <div className="w-56 h-32 rounded-lg border-2 border-black overflow-hidden relative shadow-2xl">
              {/* Replace with laptop/video preview image */}
              <Image
                alt="Laptop Preview"
                src="/assets/images/works/imusic/imusic-main-landscape.webp"
                width={300}
                height={180}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <AnimatedButton
            text="Get in touch"
            href="/contact"
            variants={item}
            className="z-10"
          />
        </div>
      </div>
    </motion.section>
  );
}
