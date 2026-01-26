"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Instagram, Github, Linkedin, Mail} from "lucide-react"; // Using lucide for clean icons, or we can use custom SVGs for sketchy look

// --- 1. The Sketchy Graphics Components ---



const SketchyCircle = () => (
  <svg className="absolute -inset-4 w-[140%] h-[150%] pointer-events-none text-white opacity-80" viewBox="0 0 100 60" preserveAspectRatio="none">
    <motion.path
      d="M10,30 Q20,10 50,10 T90,30 T50,50 T10,30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </svg>
)

const HomeGraphic = () => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.8 }}
    animate={{ opacity: 1, y: -50, scale: 2.3 }}
    exit={{ opacity: 0, y: 10, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
  > 
    {/* Ensure you have this SVG or Image in public/icons/ */}
    <img src="/images/e.svg" alt="me" width="80" height="80"></img>

    
  </motion.div>
  
);


const AboutGraphic = () => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.8 }}
    animate={{ opacity: 1, y: -120, scale: 5 }}
    exit={{ opacity: 0, y: 10, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
  > 
    {/* Ensure you have this SVG or Image in public/icons/ */}
    <img src="/images/p.svg" alt="me" width="80" height="80"></img>
  </motion.div>
);

const WorkGraphic = () => (
  <motion.div
    initial={{ opacity: 0, y: 10, rotate: 10 }}
    animate={{ opacity: 1, y: -110, rotate: 4, scale: 1.5 }}
    exit={{ opacity: 0, y: 10, rotate: -5 }}
    transition={{ type: "spring", stiffness: 180, damping: 12 }}
    className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none flex flex-col items-center"
  >
    <div className="w-1 h-12 bg-gray-500 absolute -top-12"></div>
    <div className="w-20 h-24 bg-red-500 rounded-lg border-2 border-white shadow-lg flex flex-col items-center p-2 relative overflow-hidden">
        <div className="w-8 h-1 bg-black/20 rounded-full mb-2"></div>
        <div className="w-12 h-12 bg-black/10 rounded-full mb-2 flex items-center justify-center">
            {/* Ensure you have this PNG in public/icons/ */}
            <span className="text-xl text-black"><img src="/icons/me.svg" alt="Face" className="w-10 h-10 object-cover" /></span>
        </div>
        <div className="w-14 h-2 bg-black/10 rounded mb-1"></div>
        <div className="w-10 h-2 bg-black/10 rounded"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none text-xs p-1 text-white/80">working</div>
    </div>
  </motion.div>
);

// --- UPDATED CONNECT GRAPHIC ---

const ConnectGraphic = () => (
  <motion.div
    className="absolute left-1/2 -translate-x-1/2 -top-24 w-64 h-48 pointer-events-auto z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ type: "spring", stiffness: 180, damping: 12 }}
    style={{ willChange: "opacity" }}
  >
    <div className="relative w-full h-full">

      <motion.a
        href="https://linkedin.com"
        target="_blank"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: -110, x: -80, rotate: -10, opacity: 1 }}
        exit={{ y: 0, x: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        whileHover={{ scale: 1.15 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute bottom-0 left-1/2"
      >
        <Instagram className="w-10 h-10" ></Instagram>
    
      </motion.a>

      <motion.a
        href="https://twitter.com"
        target="_blank"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: -140, x: -35, rotate: -8, opacity: 1 }}
        exit={{ y: 0, x: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        whileHover={{ scale: 1.15 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute bottom-0 left-1/2"
      >
        <Linkedin className="w-10 h-10" ></Linkedin>
      </motion.a>

      <motion.a
        href="https://github.com"
        target="_blank"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: -140, x: 20, rotate: 8, opacity: 1 }}
        exit={{ y: 0, x: -20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        whileHover={{ scale: 1.15 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute bottom-0 left-1/2"
      >
        <Github className="w-10 h-10" ></Github>
      </motion.a>

      <motion.a
        href="https://dribbble.com"
        target="_blank"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: -110, x: 60, rotate: 8, opacity: 1 }}
        exit={{ y: 0, x: -30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        whileHover={{ scale: 1.15 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute bottom-0 left-1/2"
      >
        <Mail className="w-10 h-10" ></Mail>
      </motion.a>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: -190, x: -50, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute bottom-0 left-1/2 pointer-events-none"
      >
        <div className="text-white font-bold text-xxl -rotate-12">
          I'm Everywhere
        </div>
      </motion.div>

    </div>
  </motion.div>
);


// --- 2. The Main Component ---

export default function HandDrawnNav() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navItems = [
   { id: "home", label: "home", graphic: <HomeGraphic/> },
    { id: "about", label: "about", graphic: <AboutGraphic /> },
    { id: "work", label: "work", graphic: <WorkGraphic /> },
    { id: "connect", label: "connect", graphic: <ConnectGraphic /> },
  ];

  return (
    <div className="min-h-[120px] flex items-start justify-center pt-50 relative gochi-hand-regular">

      <nav className="relative z-10 flex gap-12 sm:gap-20 text-[#ffeebb] text-2xl sm:text-3xl tracking-wide select-none">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredNav(item.id)}
            onMouseLeave={() => setHoveredNav(null)}
                  
          >
            {/* The Graphic Popup */}
            <AnimatePresence>
              {hoveredNav === item.id && (
                <>
                  {item.graphic}
                  {(item.id === 'work' || item.id === 'connect' || item.id === 'home' || item.id === 'about') && <SketchyCircle />}
                </>
              )}
            </AnimatePresence>

            {/* The Text Label */}
            <motion.span
              className="relative block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.span>
          </div>
        ))}
      </nav>
    </div>
  );
}