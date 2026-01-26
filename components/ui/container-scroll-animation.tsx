"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // -----------------------------
  // Detect mobile
  // -----------------------------
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // -----------------------------
  // Scroll control
  // -----------------------------
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // 👈 FULL CONTROL
  });

  // -----------------------------
  // Transform ranges
  // -----------------------------
  const rotateRaw = useTransform(
    scrollYProgress,
    [0.2, 0.4], // 👈 rotate only in this range
    [10, 0],
    { clamp: true }
  );

  const scaleRaw = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    isMobile ? [0.9, 1] : [1.05, 1],
    { clamp: true }
  );

  const translateRaw = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    [0, -120],
    { clamp: true }
  );

  // -----------------------------
  // Smooth springs
  // -----------------------------
  const rotate = useSpring(rotateRaw, {
    stiffness: 120,
    damping: 18,
  });

  const scale = useSpring(scaleRaw, {
    stiffness: 120,
    damping: 18,
  });

  const translate = useSpring(translateRaw, {
    stiffness: 120,
    damping: 18,
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[30rem] md:h-[60rem] flex items-center justify-center"
    >
      <div
        className="w-full py-10 md:py-0"
        style={{ perspective: "1200px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

// =====================================================
// Header
// =====================================================
const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto mb-[-13vh] text-center text-9xl md:text-9xl font-black"
    >
      {titleComponent}
    </motion.div>
  );
};

// =====================================================
// Card
// =====================================================
const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformStyle: "preserve-3d",
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mx-auto h-[30rem] md:h-[40rem] w-full
                 rounded-[30px] border-3 border-[#6C6C6C]
                 bg-[#000000] p-1 md:p-3"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-500 md:p-0"> 
        {children}
      </div>
    </motion.div>
  );
};
