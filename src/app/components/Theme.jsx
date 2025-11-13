// Theme.jsx (Accomplished for TRIONN style)
"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { SunMedium, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Theme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Define TRIONN's colors for consistency
  const TR_DARK = "#17181A";
  const TR_ACCENT = "#FF4900"; // Used if you want an accent flash

  useEffect(() => {
    // Ensures the component is only rendered on the client after initial mount
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      // TRIONN Style Classes:
      // 1. Transparent background and minimal border (white on dark, dark on light).
      // 2. High contrast icons.
      className={`relative flex items-center justify-center w-10 h-10 rounded-full border 
        border-black/20 dark:border-white/20 
        hover:border-[${TR_ACCENT}] dark:hover:border-[${TR_ACCENT}]
        transition-all duration-300 hover:scale-105`}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {/* White icon for Dark Mode */}
            <SunMedium className="text-white" size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dark icon for Light Mode */}
            <Moon className={`text-[${TR_DARK}]`} size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
