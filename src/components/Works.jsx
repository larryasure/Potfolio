import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { projectss } from "../constants";
import { styles } from "../styles";

export default function Works() {
  return (
    <>
      <section className={styles.paddingY}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <div className="flex w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-7.5"
          >A collection of projects that showcase my journey as a full-stack developer. From concept to deployment, these real-world applications demonstrate my expertise in React, modern JavaScript, and building solutions that matter.</motion.p>
        </div>
      </section>
    </>
  );
}
