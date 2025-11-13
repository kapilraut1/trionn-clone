// ProjectsGrid.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Quantum Launch",
    tags: ["Branding", "Web Dev"],
    src: "/assets/images/project1.webp",
    size: "col-span-1",
  },
  {
    title: "Urban Living",
    tags: ["UI/UX", "Mobile App"],
    src: "/assets/images/project2.webp",
    size: "col-span-1",
  },
  {
    title: "Aura Streaming",
    tags: ["Motion", "Branding"],
    src: "/assets/images/project3.webp",
    size: "md:col-span-2",
  },
  {
    title: "FinTech Dashboard",
    tags: ["Web Dev", "UI/UX"],
    src: "/assets/images/project4.webp",
    size: "md:col-span-2",
  },
  {
    title: "Future Retail",
    tags: ["Branding", "Strategy"],
    src: "/assets/images/project5.webp",
    size: "col-span-1",
  },
];

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const TR_DARK = "#17181A";

const ProjectCard = ({ project }) => (
  <motion.div
    className={`${project.size} relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer`}
    variants={itemVariants}
    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
  >
    <Image
      src={project.src}
      alt={project.title}
      width={700}
      height={400}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-white border border-white/50 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsGrid() {
  return (
    <motion.section
      className={`py-20 md:py-32 bg-gray-50 dark:bg-[${TR_DARK}]`}
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="tr__container mx-auto px-4">
        <h2 className="text-center text-5xl font-extrabold mb-16 text-[#17181A] dark:text-white">
          Our Latest Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
