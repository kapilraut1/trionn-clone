"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroAnimate = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);

  const imageSrc = "/assets/images/works/imusic/imusic-main-landscape.webp";

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    const bg = bgRef.current;
    const glow = glowRef.current;

    // -------- INITIAL STATE --------
    gsap.set(img, {
      scale: 0.55,
      opacity: 0.6,
      rotationX: 18,
      rotationY: -12,
      y: 180,
      z: -200,
      transformOrigin: "center center",
    });

    gsap.set(bg, {
      scale: 1.2,
      opacity: 0.3,
      y: 80,
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.5,
    });

    // -------- MAIN TIMELINE --------
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=2200",
        scrub: 1.3,
        pin: true,
      },
    });

    // CAMERA PUSH-IN + FLATTEN + ROTATION RESET
    tl.to(img, {
      scale: 1.5,
      opacity: 1,
      rotationX: 0,
      rotationY: 0,
      y: 0,
      z: 120,
      ease: "power3.out",
      duration: 2,
    });

    // PARALLAX BG (moves slower)
    tl.to(
      bg,
      {
        scale: 1,
        opacity: 0.4,
        y: 0,
        ease: "power2.out",
        duration: 2,
      },
      "<"
    );

    // GLOW UNDER LAPTOP
    tl.to(
      glow,
      {
        opacity: 0.7,
        scale: 1,
        ease: "power2.out",
        duration: 1.5,
      },
      "<0.3"
    );

    // FINAL FLOATING + CINEMATIC ORBIT
    tl.to(img, {
      rotationY: 6,
      rotationX: -4,
      y: -10,
      duration: 2.5,
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[300vh] w-full relative overflow-hidden bg-[#0c0c0c]"
      style={{ perspective: "1400px" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* PARALLAX BACKGROUND */}
        <div
          ref={bgRef}
          className="absolute w-[110%] h-[110%] rounded-3xl bg-linear-to-b from-[#1a1a1a] to-[#080808] blur-3xl opacity-50"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* GLOW UNDER THE LAPTOP */}
        <div
          ref={glowRef}
          className="absolute w-120 h-40 bg-[#5cc3ff] rounded-full blur-[80px] opacity-50"
          style={{ bottom: "10%", transform: "translateZ(-200px)" }}
        />

        {/* HERO IMAGE */}
        <div
          ref={imageRef}
          className="w-160 h-112 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={imageSrc}
            alt="Hero Animated Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroAnimate;
