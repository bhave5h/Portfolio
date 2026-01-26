"use client";

import { motion, useAnimation } from "framer-motion";

  const items = [
  { id: 1, src: "/side-icons/1.png", x: 0, y: 0 },
  { id: 2, src: "/side-icons/2.png", x: 120, y: 40 },
  { id: 3, src: "/side-icons/3.png", x: 260, y: 80 },
];


const Board = () => {


   const controls = useAnimation();

  return (
    
    <div className="relative w-full h-screen overflow-hidden">

            {/* BACKGROUND IMAGE */}
      <img
        src="/images/w.png"
        alt="background"
        className="absolute inset-0 h-160 w-fit object-cover z-0 mx-auto rounded-2xl"
      />

      <div className="relative w-full h-[400px]">
      {items.map((item) => (
        <motion.img
          key={item.id}
          src={item.src}
          className="absolute w-24 h-24 cursor-grab"
          initial={{ x: item.x, y: item.y }}
          drag
          dragConstraints={{top: -0, bottom: 400, left: -0, right: 850}}
          whileDrag={{scale: 1.2, rotate: 15}}
          whileTap={{cursor: "grabbing"}}
          whileDrag={{ scale: 1.2 }}
        />
      ))}
    </div>


      <motion.img
      src="/icons/me.png"
      className="w-30 h-30 cursor-grab"
      drag
      dragElastic={0.3}
      animate={controls}
      whileDrag={{ scale: 1.2, rotate: 15 }}
      onDragEnd={() => {
        controls.start({
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 25,
          },
        });
      }}
    />



      {/* <motion.img
        src="/icons/p.svg"
        alt="icon"
        className="w-30 h-30  cursor-grab"
        drag
        dragConstraints={{ top: 0, bottom: 200, left: 0, right: 850 }}
        whileDrag={{ scale: 1.2, rotate: 15 }}
        whileTap={{ cursor: "grabbing" }}
      /> */}

      {/* <motion.div
      className="w-30 h-24 m-1 bg-blue-400 rounded-3xl shadow-xl" 
      drag dragConstraints={{top: -0, bottom: 200, left: -0, right: 850}}
      whileDrag={{scale: 1.2, rotate: 15}}
      whileTap={{cursor: "grabbing"}}
      >
        <img src="/icons/s.svg" alt="icon" className="w-full h-full object-contain" />
      </motion.div> */}

    </div>
  )
}

export default Board
