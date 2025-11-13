// SocialsSection.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// 🛑 REMOVE the direct import: import { FaLinkedin, FaInstagram, FaBehance, FaFacebook } from "react-icons/fa";

// ➡️ Use Dynamic Import for Icons to ensure client-side rendering
import dynamic from "next/dynamic";

// Define the core data structure without the component reference
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/trionn",
    iconName: "FaLinkedin", // Store the component name as a string
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/trionn",
    iconName: "FaInstagram",
    color: "hover:text-pink-500",
  },
  {
    name: "Behance",
    href: "https://behance.net/trionn",
    iconName: "FaBehance",
    color: "hover:text-blue-800",
  },
  {
    name: "Facebook",
    iconName: "FaFacebook",
    href: "https://facebook.com/trionn",
    color: "hover:text-blue-700",
  },
];

const TR_DARK = "#17181A";

const linkVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.0, 0.1, 1.0] },
  },
};

// --- New Dynamic Icon Component ---
// This component loads the specific icon only on the client
const DynamicIcon = ({ iconName, className }) => {
  // 1. Dynamically import the icon component based on the string name
  const Icon = dynamic(
    () => import("react-icons/fa").then((mod) => mod[iconName]),
    {
      ssr: false, // 2. Critical: Disable Server-Side Rendering
      loading: () => <div className="w-8 h-8" />, // Optional loading placeholder
    }
  );

  // 3. Render the dynamically loaded icon
  return <Icon className={className} />;
};

// --- SocialLink Component (Updated to use DynamicIcon) ---
const SocialLink = (
  { name, href, iconName, color } // <- Accepts iconName (string)
) => (
  <motion.div variants={linkVariants}>
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-between py-8 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-black/50 group"
    >
      <span className="text-4xl md:text-5xl font-extrabold text-[#17181A] dark:text-white group-hover:pl-4 transition-all duration-300">
        {name}
      </span>
      {/* 4. Use the new DynamicIcon component */}
      <DynamicIcon
        iconName={iconName}
        className={`w-8 h-8 opacity-40 group-hover:opacity-100 ${color} transition-all duration-300`}
      />
    </Link>
  </motion.div>
);

// --- SocialsSection Component ---
export default function SocialsSection() {
  return (
    <motion.section
      className={`py-10 md:py-20 bg-white dark:bg-[${TR_DARK}]`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="tr__container mx-auto px-4">
        <h2 className="text-center text-6xl font-extrabold uppercase mb-16 text-[#17181A]/10 dark:text-white/10 select-none pointer-events-none">
          Join Our Jungle
        </h2>
        {socialLinks.map((link, index) => (
          // Map now spreads the new link object, including iconName
          <SocialLink key={index} {...link} />
        ))}
      </div>
    </motion.section>
  );
}
