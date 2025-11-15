"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlurryCursor({ isActive }) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef();
  const smokeContainer = useRef(null);

  const size = isActive ? 400 : 30;

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    mouse.current = { x: e.clientX, y: e.clientY };
    createSmoke(e.clientX, e.clientY);
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  // Create visible white smoke
  const createSmoke = (x, y) => {
    if (!smokeContainer.current) return;

    const smoke = document.createElement("div");
    smoke.className = "smoke-puff";

    smoke.style.position = "fixed";
    smoke.style.left = x + "px";
    smoke.style.top = y + "px";
    smoke.style.width = "25px"; // slightly bigger
    smoke.style.height = "25px";
    smoke.style.borderRadius = "50%";
    smoke.style.pointerEvents = "none";

    // White smoke more visible
    smoke.style.background = "rgba(180, 180, 180, 0.6)"; // slightly darker and more visible
    smoke.style.filter = "blur(10px)";

    smokeContainer.current.appendChild(smoke);

    gsap.to(smoke, {
      duration: 0.5,
      scale: 3,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => smoke.remove(),
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  });

  return (
    <div>
      {/* Smoke Layer */}
      <div
        ref={smokeContainer}
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-1"
      ></div>

      {/* Main cursor glow */}
      <div
        style={{
          backgroundColor: "#BCE4F2",
          width: size,
          height: size,
          filter: `blur(${isActive ? 30 : 0}px)`,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none z-2"
        ref={circle}
      />
    </div>
  );
}
