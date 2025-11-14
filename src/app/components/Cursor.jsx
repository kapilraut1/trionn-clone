"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const xMove = gsap.quickTo(cursor, "x", { duration: 0.25, ease: "power3" });
    const yMove = gsap.quickTo(cursor, "y", { duration: 0.25, ease: "power3" });

    const mouseMove = (e) => {
      xMove(e.clientX);
      yMove(e.clientY);
      console.log(e);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="
          cursor-none
          fixed top-0 left-0
          h-6 w-6
          bg-black
          rounded-full
          z-index:9999
          pointer-events-none
          mix-blend-difference
        "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
};

export default Cursor;
