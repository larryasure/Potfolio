import { motion } from "framer-motion";
import React, { useState } from "react";

export default function AnimatedCTAButtons() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const colorVariants = {
    animate: {
      color: ["#915EFF", "#FF6B9D", "#915EFF"],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  const text = "I bring ideas to life through code";
  const letters = text.split("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 px-4">
      {/* Typewriter Text with Color Change */}
      <motion.div
        className="text-center"
        variants={typewriterVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
          variants={colorVariants}
          animate="animate"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={letter === " " ? "mx-2" : ""}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>

      {/* Large CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {/* View My Work Button */}
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          onMouseEnter={() => setHoveredButton("work")}
          onMouseLeave={() => setHoveredButton(null)}
          className="px-8 py-4 sm:px-10 sm:py-5 bg--to-r from-[#915EFF] to-[#FF6B9D] text-white rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl transition-all flex-1"
        >
          <motion.span
            animate={{
              letterSpacing: hoveredButton === "work" ? "2px" : "0px",
            }}
            transition={{ duration: 0.3 }}
          >
            View My Work
          </motion.span>
        </motion.button>      
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          onMouseEnter={() => setHoveredButton("contact")}
          onMouseLeave={() => setHoveredButton(null)}
          className="px-8 py-4 sm:px-10 sm:py-5 border-2 border-[#915EFF] text-[#915EFF] rounded-xl font-bold text-lg sm:text-xl hover:bg-[#915EFF] hover:text-white transition-all flex-1"
        >
          <motion.span
            animate={{
              letterSpacing: hoveredButton === "contact" ? "2px" : "0px",
            }}
            transition={{ duration: 0.3 }}
          >
            Contact Me
          </motion.span>
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-[#915EFF] rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6B9D] rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
}
