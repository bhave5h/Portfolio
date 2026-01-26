"use client";

const icons = [
  { src: "/side-icons/1.png", text: "Home" },
  { src: "/side-icons/2.png", text: "Projects" },
  { src: "/side-icons/3.png", text: "Skills" },
  { src: "/side-icons/4.png", text: "Experience" },
  { src: "/side-icons/5.png", text: "About Me" },
  { src: "/side-icons/6.png", text: "Contact" },
  { src: "/side-icons/7.png", text: "Resume" },
];

// repeat icons
const repeatedIcons = Array(4).fill(icons).flat();


import { motion } from "framer-motion";

export default function SideRail({
  position = "left",
}: {
  position?: "left" | "right";
}) {
  const isLeft = position === "left";

  return (
    <div
      className={`
        absolute top-0
        ${isLeft ? "left-4" : "right-4"}
        h-screen
        z-10
        gochi-hand-regular
        pointer-events-none
      `}
    >
      <div className="flex flex-col items-center gap-1 py-2">
        {repeatedIcons.map((item, i) => (
          <motion.div
            key={i}
            className="relative pointer-events-auto"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* ICON */}
            <motion.img
              src={item.src}
              alt=""
              className="w-14 h-14 z-50"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* HOVER TEXT */}
            <motion.div
              className={`
                absolute top-1/2 -translate-y-1/2
                ${isLeft ? "left-full ml-3" : "right-full mr-3"}
                whitespace-nowrap
               text-xl
                px-3 py-1 rounded-md
                pointer-events-none
              `}
              variants={{
                rest: {
                  opacity: 0,
                  x: isLeft ? -10 : 10,
                },
                hover: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {item.text}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
