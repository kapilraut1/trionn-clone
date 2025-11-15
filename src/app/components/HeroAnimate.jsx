"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimate() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom+=1500 top",
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(imageRef.current, {
        scale: 2.4,
        y: 120,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        flex items-center justify-center
        w-[280px] h-40
        md:w-[360px] md:h-[200px]
        lg:w-[420px] lg:h-[230px]
      "
    >
      <Image
        ref={imageRef}
        src="/assets/images/works/imusic/imusic-main-landscape.webp"
        alt="Hero Preview"
        width={200}
        height={200}
        className="
          rounded-3xl
          object-cover
          w-full h-full
          will-change-transform
        "
      />
    </div>
  );
}
