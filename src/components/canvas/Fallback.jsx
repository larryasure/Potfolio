import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Fallback() {
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
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const colorVariants = {
    animate: {
      color: ["#915EFF", "#56ccf2", "#915EFF"],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  const text = "I bring ideas to life through code";
  const letters = text.split("");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 min-h-screen gap-6 sm:gap-8 px-4 sm:px-6 p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl my-8 font-bold text-white leading-tight sm:leading-snug md:leading-normal">
          Hi, I'm <span className="text-[#915EFF]">Lanre</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mt-6 sm:mt-6 text-gray-300 leading-relaxed">
          I build responsive websites, craft {" "}
          <br className="hidden sm:block" />
          interfaces and love learning 
        </p>
      </motion.div>

      <motion.div
        className="text-center w-full px-2"
        variants={typewriterVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 leading-snug sm:leading-normal"
          variants={colorVariants}
          animate="animate"
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setHoveredButton("work")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => scrollToSection("projects")}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#915EFF] to-[#FF6B9D] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold text-base sm:text-lg hover:shadow-lg transition-shadow flex-1 active:shadow-md"
        >
          <motion.span
            animate={{
              letterSpacing: hoveredButton === "work" ? "1px" : "0px",
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
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setHoveredButton("contact")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => scrollToSection("contact")}
          className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#915EFF] text-[#915EFF] rounded-lg sm:rounded-xl font-semibold sm:font-bold text-base sm:text-lg hover:bg-[#915EFF] hover:text-white transition-colors flex-1 active:bg-[#915EFF] active:text-white "
        >
          <motion.span
            animate={{
              letterSpacing: hoveredButton === "contact" ? "1px" : "0px",
            }}
            transition={{ duration: 0.3 }}
          >
            Contact Me
          </motion.span>
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#915EFF] rounded-full opacity-10 blur-2xl sm:blur-3xl pointer-events-none"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#FF6B9D] rounded-full opacity-10 blur-2xl sm:blur-3xl pointer-events-none"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
}