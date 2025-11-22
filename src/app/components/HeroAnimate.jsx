"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimate() {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(videoWrapperRef.current, {
        scale: 0.65,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom+=1200 top",
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
          },
        })
        .to(videoWrapperRef.current, {
          scale: 1.5, // zooms to fill parent
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
        overflow-hidden
        flex items-center justify-center
        rounded-3xl
        w-[300px] h-[180px]
        md:w-[420px] md:h-[260px]
        lg:w-[520px] lg:h-80
      "
    >
      <div
        ref={videoWrapperRef}
        className="
          relative
          w-full h-full
          rounded-3xl
          will-change-transform
        "
      >
        <video
          src="/assets/images/video-file.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="
            w-full h-full
            object-cover
            rounded-3xl
          "
        />
      </div>
    </div>
  );
}
