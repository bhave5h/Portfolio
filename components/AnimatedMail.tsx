"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./animated-mail.css";

export default function AnimatedMail() {
  const [open, setOpen] = useState(false);

  return (
    <div className="letter-image">
      <motion.div
        className="animated-mail"
        onHoverStart={() => setOpen(true)}
        onHoverEnd={() => setOpen(false)}
        animate={{ y: open ? 0 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        <div className="back-fold" />

        <motion.div
          className="letter"
          animate={{ height: open ? 180 : 60 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        >
          <div className="letter-border" />
          <div className="letter-title" />
          <div className="letter-context" />
          <div className="letter-stamp">
            <div className="letter-stamp-inner" />
          </div>
        </motion.div>

        <motion.div
          className="top-fold"
          animate={{
            rotateX: open ? 180 : 0,
            zIndex: open ? 0 : 2,
          }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
        />

        <div className="body" />
        <div className="left-fold" />
      </motion.div>

      <motion.div
        className="shadow"
        animate={{ width: open ? 400 : 250 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </div>
  );
}
