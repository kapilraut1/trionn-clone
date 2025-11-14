"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Theme from "./Theme";
import { AudioLines } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-18 md:px-12 py-6 z-50 ">
      <div className="text-2xl tracking-wider font-semibold text-[#d6f9f9] select-none">
        <Image
          className="brightness-0 dark:brightness-100"
          src="assets/images/logo.svg"
          alt="Hello"
          width="100"
          height="19"
          color="black"
        />
      </div>
      <div className="flex items-center gap-4">
        {/* 1. Theme Component: Used directly. It is already a button and fully styled. */}
        <Theme />

        <button
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          aria-label="Play video preview"
        >
          <AudioLines className="dark:text-gray text-black" size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium font-[Dirtyline 36Daysoftype 2022]">
        MENU
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 w-11 h-11 flex items-center justify-center rounded-full bg-[#161819] border border-[#aefaf3]/30 text-[#aefaf3] hover:scale-105 transition-transform duration-300"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-[1.5px] bg-[#aefaf3] absolute"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-[1.5px] bg-[#aefaf3] absolute"
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[#0b0b0b]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-[#d8f9f9] text-4xl font-medium"
          >
            {["Home", "Work", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="hover:text-[#aefaf3] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
