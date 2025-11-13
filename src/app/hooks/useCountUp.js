// src/hooks/useCountUp.js
import { useEffect, useState } from "react";
import { animate } from "framer-motion";

/**
 * Custom hook to animate a number count up using Framer Motion.
 * @param {number} start - The starting number.
 * @param {number} end - The target number.
 * @param {number} duration - The animation duration in seconds.
 * @returns {number} The current animated value.
 */
export const useCountUp = (start, end, duration = 2) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    // Only run on the client side
    if (typeof window === "undefined") return;

    const controls = animate(start, end, {
      duration: duration,
      onUpdate: (latest) => {
        // Update the state with the latest animated value
        setValue(latest);
      },
      onComplete: () => {
        setValue(end); // Ensure the final value is exactly the end number
      },
      ease: [0.6, 0.0, 0.1, 1.0], // Use your fixed cubic-bezier
    });

    return () => controls.stop();
  }, [start, end, duration]);

  return value;
};
