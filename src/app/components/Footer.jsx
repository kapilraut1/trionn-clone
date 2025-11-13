// Footer.jsx
"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const TR_DARK = "#17181A";
const TR_LIGHT_TEXT = "text-white";

const FooterItem = ({ children }) => (
  <motion.div
    className="text-lg font-medium text-[#17181A] dark:text-white z-20 relative" // Added z-20 to ensure text is above background
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function Footer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 1000, damping: 50 });
  const smoothY = useSpring(y, { stiffness: 1000, damping: 50 });

  const torchX = useTransform(smoothX, (latestX) => latestX - 25);
  const torchY = useTransform(smoothY, (latestY) => latestY - 25);

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left); // X position relative to the footer
    y.set(event.clientY - rect.top); // Y position relative to the footer
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative py-12 md:py-16 bg-white dark:bg-[${TR_DARK}] border-t border-gray-300 dark:border-gray-700 overflow-hidden`}
      onMouseMove={handleMouseMove} // Attach mouse listener to the footer
    >
      {/* --- Dynamic Background Logo and Torchlight Animation --- */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none">
        {/* 4. Large Faded TRIONN Background Logo (Replace with your actual image/SVG if needed) */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5 flex items-center justify-center text-[18rem] md:text-[30rem] lg:text-[40rem] font-extrabold text-[#17181A] dark:text-white select-none pointer-events-none"
          style={{ lineHeight: 0.8 }}
        >
          {/* Placeholder for the large TRIONN background logo/text */}
          TRIONN
        </div>

        {/* 5. Animated Torchlight (Follows the cursor) */}
        <motion.div
          style={{ x: torchX, y: torchY }}
          className="absolute w-[50px] h-[50px] pointer-events-none" // Match the size used in offset calculation
        >
          <Image
            src="/assets/images/torch.svg"
            alt="Torchlight effect"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* --- Static Content (Needs z-20 to sit above the animation) --- */}
      <div className="tr__container mx-auto px-4 relative z-20">
        {/* Contact Rows */}
        <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <FooterItem>
              <span className="block text-xs uppercase text-gray-500 mb-1">
                Email
              </span>
              <a
                href="mailto:hello@trionn.com"
                className="hover:text-red-500 transition-colors"
              >
                hello@trionn.com
              </a>
            </FooterItem>
            <FooterItem>
              <span className="block text-xs uppercase text-gray-500 mb-1">
                Call
              </span>
              <a
                href="tel:+919824182099"
                className="hover:text-red-500 transition-colors"
              >
                +91 98241 82099
              </a>
            </FooterItem>
          </div>

          <div className="flex items-center gap-8">
            <FooterItem>
              <span className="block text-xs uppercase text-gray-500 mb-1">
                Teams
              </span>
              <Link
                href="/contact"
                className="hover:text-red-500 transition-colors"
              >
                Talk to Trionn
              </Link>
            </FooterItem>

            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-lg transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
              aria-label="Scroll to top"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaArrowUp className="w-4 h-4 text-[#17181A] dark:text-white" />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <motion.p
          className="mt-12 text-sm opacity-50 text-[#17181A] dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          ©2025 TRIONN®
        </motion.p>
      </div>
    </footer>
  );
}
