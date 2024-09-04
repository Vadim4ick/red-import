"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <button
      onClick={toggleMenu}
      className="flex h-[15px] w-[30px] cursor-pointer flex-col justify-between"
    >
      <motion.div
        className="skew-burger h-[3px] w-[22px] bg-defaultTextColor"
        animate={
          isOpen
            ? { rotate: 45, y: 6, skew: "0deg" }
            : { rotate: 0, y: 0, skew: "30deg" }
        }
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.div
        className="skew-burger h-[3px] w-[22px] bg-defaultTextColor"
        animate={
          isOpen
            ? { opacity: 0, marginLeft: "0px" }
            : { opacity: 1, marginLeft: "3px" }
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.div
        className="skew-burger h-[3px] w-[22px] bg-defaultTextColor"
        animate={
          isOpen
            ? { rotate: -45, y: -6, skew: "0deg", marginLeft: "0px" }
            : { rotate: 0, y: 0, skew: "30deg", marginLeft: "7px" }
        }
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </button>
  );
};

export { Burger };
