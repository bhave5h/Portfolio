"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Board = () => {
  return (
    <div className="z-50">
      <motion.div
      className="w-24 h-24 bg-amber-600 rounded-xl shadow-xl" 
      drag dragConstraints={{top: -0, bottom: 500, left: -0, right: 700}}
      whileDrag={{scale: 1.2, rotate: 15}}
      whileTap={{cursor: "grabbing"}}
      >
      </motion.div>
    </div>
  )
}

export default Board
