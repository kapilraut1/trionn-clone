"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Cursor from "./Cursor";
import HeroAnimate from "./HeroAnimate";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.6, 0, 0.1, 1] },
  },
};

export default function HeroBanner() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="
        min-h-[90vh]
        pt-36 pb-20
        flex flex-col items-center justify-center
        bg-[#eef2f3]
        dark:bg-[#17181A]
        overflow-hidden
      "
    >
      {/* HEADLINE */}
      <h1
        className="
          text-center
          font-dirtyline
          font-normal
          tracking-[-0.04em]
          leading-[0.85]
        "
      >
        <motion.span
          variants={item}
          className="
            block
            text-[3.8rem]
            sm:text-[5rem]
            md:text-[5.2rem]
            lg:text-[6rem]
            xl:text-[7rem]
            2xl:text-[8.125rem]
          "
        >
          ROAR IN THE
        </motion.span>

        <motion.span
          variants={item}
          className="
            block
            text-[3.8rem]
            sm:text-[5rem]
            md:text-[5.2rem]
            lg:text-[6rem]
            xl:text-[7rem]
            2xl:text-[8.125rem]
          "
        >
          DIGITAL WILDERNESS.
        </motion.span>
      </h1>

      {/* SUBTEXT */}
      <motion.p
        variants={item}
        className="
          max-w-2xl
          mx-auto
          mt-8
          text-center
          font-inter
          opacity-70
          text-[1rem]
          sm:text-lg
        "
      >
        We roar with success, delivering the TRIONN® through versatile design,
        branding and modern tech development.
      </motion.p>

      {/* ARROW */}
      <motion.div variants={item} className="mt-8">
        <Image
          src="/media/move-down.31fd25f2.svg"
          width={32}
          height={32}
          alt="Scroll down"
          className="opacity-40 mx-auto"
        />
      </motion.div>

      {/* BUTTONS + CENTER IMAGE */}
      <motion.div
        variants={item}
        className="
    mt-24
    w-full
    flex items-center justify-between
    relative
    px-6 sm:px-12 lg:px-20
  "
      >
        {/* LEFT BUTTON */}
        <div
          className="
      border border-black dark:border-white
      px-8 py-4
      rounded-full
      text-lg font-inter
      hover:bg-black hover:text-white
      dark:hover:bg-white dark:hover:text-black
      transition-all
    "
        >
          Explore work
        </div>

        {/* ONLY ONE IMAGE — THE ANIMATED ONE */}

        {/* RIGHT BUTTON */}
        <div
          className="
      border border-black dark:border-white
      px-8 py-4 
      rounded-full
      text-lg font-inter
      hover:bg-black hover:text-white
      dark:hover:bg-white dark:hover:text-black
      transition-all
    "
        >
          Get in touch
        </div>
      </motion.div>

      <div className="-mt-[110px] relative z-1">
        <HeroAnimate />
      </div>
    </motion.section>
  );
}
