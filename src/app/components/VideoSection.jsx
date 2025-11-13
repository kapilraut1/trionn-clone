// VideoSection.jsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const videoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#17181A]" id="video-section">
      <div ref={ref} className="tr__container tr__video__wrapper mx-auto px-4">
        <motion.video
          width="100%"
          height="100%"
          loop
          playsInline
          autoPlay
          muted
          className="rounded-xl shadow-2xl"
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* NOTE: You need to place your video file here */}
          <source src="/assets/images/home/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </section>
  );
}
