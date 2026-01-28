"use client";

import { motion, useAnimation } from "framer-motion";

  const items = [
  { id: 1, src: "/images/tab/0.svg", x: 50, y: 150, className: "w-auto h-100 absolute cursor-grab" },
  { id: 2, src: "/images/tab/1.svg", x: 20, y: 450, className: "w-40 h-40 absolute cursor-grab" },
  { id: 3, src: "/images/tab/2.svg", x: 120, y: 385, className: "w-25 h-25 absolute cursor-grab"},
  { id: 4, src: "/images/tab/3.svg", x: 20, y: 250, className: "w-40 h-40 absolute cursor-grab"},
  { id: 5, src: "/images/tab/4.svg", x: 30, y: 80, className: "w-30 h-30 absolute cursor-grab"},
  { id: 6, src: "/images/tab/5.svg", x: 200, y: 50, className: "w-40 h-40 absolute cursor-grab"},
  { id: 7, src: "/images/tab/6.svg", x: 400, y: 90, className: "w-40 h-40 absolute cursor-grab"},
  { id: 8, src: "/images/tab/7.svg", x: 600, y: 90, className: "w-40 h-40 absolute cursor-grab"},
  { id: 9, src: "/images/tab/8.svg", x: 800, y: 90, className: "w-40 h-40 absolute cursor-grab"},
];


const Board = () => {


   const controls = useAnimation();

  return (
    
    <div className="relative overflow-hidden w-[1000px] h-[610px] bg-white">

      {/* BACKGROUND IMAGE */}
     <img
        src="/images/tab/bg.png"
        alt="background"
        draggable={false}
        className="absolute inset-0 h-155 w-250 object-cover z-0 mx-auto rounded-2xl bg-white cursor-grab-none"
      /> 

      <div className="relative ">
      {items.map((item) => (
        <motion.img
          key={item.id}
          src={item.src}
          className={item.className}
          initial={{ x: item.x, y: item.y }}
          drag
          dragConstraints={{top: -0, bottom: 400, left: -0, right: 850}}
          whileDrag={{scale: 1.2, rotate: 15}}
          whileTap={{cursor: "grabbing"}}
        />
      ))}
    </div>

      {/* Fixed Image */}
      <motion.img
      src='/images/tab/dock.png'
      className="absolute w-110 h-30 cursor-grab z-30 "
      initial={{ x: 250, y: 450 }}
      animate={controls}
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.15 }}
      onDragEnd={() => {
        controls.start({
          x: 250,
          y: 460,
          transition: {
            type: "spring",
            stiffness: 600,
            damping: 30,
          },
        });
      }}
    />

    {/* pop up fixed image */}
    <motion.img
     src="/images/tab/a1.png"
    className="absolute w-130 h-100 z-20 pointer-events-none"
    initial={{
    x: 500,
    y: 320,      // start BELOW
    opacity: 0,
    scale: 0.7,
  }}
  animate={{
    x: 500,
    y: 220,      // final position
    opacity: 1,
    scale: 1,
  }}
  transition={{
    type: "spring",
    stiffness: 450,
    damping: 100,
  }}
/>


    </div>
  )
}

export default Board
