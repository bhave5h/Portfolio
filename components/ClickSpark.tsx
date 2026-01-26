"use client";

import { useEffect, useRef } from "react";

type ClickSparkProps = {
  color?: string;
  size?: number;
};

export default function ClickSpark({
  color = "#ff6b6b",
  size = 40,
}: ClickSparkProps) {
  const sparkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spark = sparkRef.current;
    if (!spark) return;

    const svg = spark.querySelector("svg")!;
    const sparks = Array.from(svg.children) as SVGLineElement[];

    const animateSpark = () => {
      const length = 30;
      const offset = length / 2 + "px";

      sparks.forEach((line, i) => {
        const deg = (360 / sparks.length) * i;

        line.animate(
          [
            {
              strokeDashoffset: length * 3,
              transform: `rotate(${deg}deg) translateY(${offset})`,
            },
            {
              strokeDashoffset: length,
              transform: `rotate(${deg}deg) translateY(0)`,
            },
          ],
          {
            duration: 660,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            fill: "forwards",
          }
        );
      });
    };

    const handleClick = (e: MouseEvent) => {
      spark.style.left = `${e.pageX - size / 2}px`;
      spark.style.top = `${e.pageY - size / 2}px`;
      animateSpark();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [size]);

  return (
    <div
      ref={sparkRef}
      style={{
        position: "absolute",
        pointerEvents: "none",
        width: size,
        height: size,
        color,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: "rotate(-20deg)" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="30"
            x2="50"
            y2="4"
            strokeDasharray="30"
            strokeDashoffset="30"
            style={{ transformOrigin: "center" }}
          />
        ))}
      </svg>
    </div>
  );
}
